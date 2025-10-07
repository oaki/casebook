import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { prisma } from '@/app/libs/services/databaseConnection';
import { verifyImageToken } from '@/lib/imageAuth';

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');

// Main route handler - orchestrates the flow
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filePath = searchParams.get('path');
    const token = searchParams.get('token');

    if (!filePath || !token) {
      return NextResponse.json({ error: 'File path and token are required' }, { status: 400 });
    }

    // 1. Verify token
    if (!verifyImageToken(token, filePath)) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // 2. Authorize (check case is published)
    const attachment = await prisma.case_attachments.findFirst({
      where: {
        file_path: filePath,
        case: { deleted_at: null },
      },
    });

    if (!attachment) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // 3. Serve raw file
    const fullPath = path.join(UPLOADS_DIR, filePath);
    const fileBuffer = await fs.readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();

    const mimeTypes: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.gif': 'image/gif',
    };

    const headers = new Headers();
    headers.set('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    return new NextResponse(fileBuffer as unknown as ReadableStream, { status: 200, headers });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    console.error('File error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
