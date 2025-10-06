import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { getSession } from '@/lib/session';
import sharp from 'sharp';
import {prisma} from "@/app/libs/services/databaseConnection";

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');
const CACHE_DIR = path.join(process.cwd(), 'uploads', 'cache');

// Types
type MimeTypeMap = Record<string, string>;

// Single Responsibility: Authentication
const authService = {
  async validateSession() {
    const session = await getSession();
    if (!session?.user?.id) {
      return { isValid: false, userId: null };
    }
    return { isValid: true, userId: session.user.id };
  }
};

// Single Responsibility: Request parameter extraction
const requestParser = {
  extractParams(request: NextRequest) {
    const filePath = request.nextUrl.searchParams.get('path');
    const widthParam = request.nextUrl.searchParams.get('w');
    const formatParam = request.nextUrl.searchParams.get('format');

    return { filePath, widthParam, formatParam };
  },

  parseWidth(widthParam: string | null): number | null {
    if (!widthParam) return null;

    const width = parseInt(widthParam, 10);
    if (isNaN(width) || width < 1 || width > 2000) {
      return null;
    }

    return width;
  },

  parseFormat(formatParam: string | null): 'webp' | null {
    if (!formatParam) return null;
    if (formatParam.toLowerCase() === 'webp') return 'webp';
    return null;
  }
};

// Single Responsibility: File access authorization
const authorizationService = {
  async canAccessFile(filePath: string, userId: number): Promise<boolean> {
    // Check if file belongs to a case owned by the user
    const attachment = await prisma.case_attachments.findFirst({
      where: {
        file_path: filePath,
        case: {
          user_id: userId,
        },
      },
    });

    return !!attachment;
  }
};

// Single Responsibility: File operations
const fileService = {
  async exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  },

  async readFile(filePath: string): Promise<Buffer> {
    return fs.readFile(filePath);
  },

  getMimeType(filePath: string): string {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: MimeTypeMap = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.pdf': 'application/pdf',
    };

    return mimeTypes[ext] || 'application/octet-stream';
  },

  isResizableImage(mimeType: string, ext: string): boolean {
    return mimeType.startsWith('image/') && ext !== '.gif';
  }
};

// Single Responsibility: Image processing and caching
const imageProcessor = {
  async ensureCacheDirectory(): Promise<void> {
    await fs.mkdir(CACHE_DIR, { recursive: true });
  },

  generateCacheFilename(originalPath: string, width: number | null, format: 'webp' | null): string {
    const filename = path.basename(originalPath);
    const parsed = path.parse(filename);

    let cacheFilename = parsed.name;

    if (width) {
      cacheFilename += `_w${width}`;
    }

    if (format === 'webp') {
      cacheFilename += '.webp';
    } else {
      cacheFilename += parsed.ext;
    }

    return cacheFilename;
  },

  async getOrCreateProcessedImage(
    fullPath: string,
    width: number | null,
    format: 'webp' | null
  ): Promise<{ buffer: Buffer; mimeType: string; isFromCache: boolean }> {
    await this.ensureCacheDirectory();

    const cacheFilename = this.generateCacheFilename(fullPath, width, format);
    const cachePath = path.join(CACHE_DIR, cacheFilename);

    // Try to serve from cache
    if (await fileService.exists(cachePath)) {
      const buffer = await fileService.readFile(cachePath);
      const mimeType = format === 'webp' ? 'image/webp' : fileService.getMimeType(fullPath);
      return { buffer, mimeType, isFromCache: true };
    }

    // Create processed image
    const imageBuffer = await fileService.readFile(fullPath);
    let sharpInstance = sharp(imageBuffer);

    // Apply resizing if width is specified
    if (width) {
      sharpInstance = sharpInstance.resize(width, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP if requested
    if (format === 'webp') {
      sharpInstance = sharpInstance.webp({ quality: 85 });
    }

    const processedBuffer = await sharpInstance.toBuffer();

    // Save to cache
    await fs.writeFile(cachePath, processedBuffer);

    const mimeType = format === 'webp' ? 'image/webp' : fileService.getMimeType(fullPath);
    return { buffer: processedBuffer, mimeType, isFromCache: false };
  }
};

// Single Responsibility: Response building
const responseBuilder = {
  unauthorized() {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  },

  badRequest(message: string) {
    return NextResponse.json({ error: message }, { status: 400 });
  },

  forbidden() {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  },

  notFound() {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  },

  internalError() {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  },

  file(buffer: Buffer, mimeType: string, isResized: boolean = false) {
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': isResized
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=86400',
      },
    });
  }
};

// Main route handler - orchestrates the flow
export async function GET(request: NextRequest) {
  try {
    // 1. Authenticate
    const authResult = await authService.validateSession();
    if (!authResult.isValid || !authResult.userId) {
      return responseBuilder.unauthorized();
    }

    // 2. Parse request parameters
    const { filePath, widthParam, formatParam } = requestParser.extractParams(request);

    if (!filePath) {
      return responseBuilder.badRequest('File path is required');
    }

    // 3. Authorize access
    const canAccess = await authorizationService.canAccessFile(filePath, authResult.userId);
    if (!canAccess) {
      return responseBuilder.forbidden();
    }

    // 4. Check file exists
    const fullPath = path.join(UPLOADS_DIR, filePath);
    if (!await fileService.exists(fullPath)) {
      return responseBuilder.notFound();
    }

    // 5. Get MIME type and check if image
    const mimeType = fileService.getMimeType(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const isImage = fileService.isResizableImage(mimeType, ext);

    // 6. Handle image processing (resize and/or format conversion)
    if (isImage && (widthParam || formatParam)) {
      const width = requestParser.parseWidth(widthParam);
      const format = requestParser.parseFormat(formatParam);

      if (widthParam && width === null) {
        return responseBuilder.badRequest('Invalid width parameter');
      }

      const { buffer, mimeType: processedMimeType } = await imageProcessor.getOrCreateProcessedImage(
        fullPath,
        width,
        format
      );

      return responseBuilder.file(buffer, processedMimeType, true);
    }

    // 7. Serve original file
    const fileBuffer = await fileService.readFile(fullPath);
    return responseBuilder.file(fileBuffer, mimeType, false);

  } catch (error) {
    console.error('Error serving file:', error);
    return responseBuilder.internalError();
  }
}
