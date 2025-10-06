# File Upload and Image Management System

## Overview

This system provides secure file uploads for case attachments with automatic image resizing, WebP conversion, and caching capabilities.

## Features

- ✅ Secure file uploads stored outside public directory
- ✅ Case-based file organization (organized by case ID)
- ✅ Automatic image resizing with query parameters
- ✅ WebP format conversion for better compression
- ✅ Disk-based caching for resized and converted images
- ✅ Access control - users can only access files from their own cases
- ✅ Support for multiple file types (images, PDFs)
- ✅ SOLID principles with functional programming

## File Storage Structure

```
/uploads
  /cases
    /[case_id]
      /[unique_filename].jpg
      /[unique_filename].png
  /cache
    /[filename]_w600.jpg
    /[filename]_w1200.jpg
    /[filename]_w600.webp
    /[filename].webp
```

## Architecture (SOLID Principles)

### File API Route (`/api/files/route.ts`)
Organized into single-responsibility service modules:

- **`authService`** - Session validation and authentication
- **`requestParser`** - Extract and validate request parameters (path, width, format)
- **`authorizationService`** - Verify user access to files via database
- **`fileService`** - File system operations (read, exists, MIME types)
- **`imageProcessor`** - Image resizing, WebP conversion, and cache management
- **`responseBuilder`** - HTTP response construction

### Case Actions (`caseActions.ts`)
Organized into single-responsibility modules:

- **`fileOperations`** - File system operations (create directories, save files)
- **`caseRepository`** - Case database operations
- **`userRepository`** - User database operations
- **`dataMapper`** - Data transformations

## Usage

### Uploading Files

Files are uploaded via the AddCaseModal component when submitting a case. The system:
1. Validates user authentication
2. Creates the case record first
3. Creates unique filenames using nanoid
4. Stores files in `/uploads/cases/[case_id]/`
5. Creates database records in `case_attachments` table

### Accessing Files

Files are served through the secure API endpoint:

```
/api/files?path=cases/123/filename.png
```

### Image Resizing

Add the `w` parameter to resize images to a specific width (height is calculated automatically):

```
/api/files?path=cases/123/filename.png&w=600
/api/files?path=cases/123/filename.png&w=1200
```

- Minimum width: 1px
- Maximum width: 2000px
- Aspect ratio is preserved
- Images are not enlarged beyond original size

### WebP Conversion

Add the `format=webp` parameter to convert images to WebP format for better compression:

```
/api/files?path=cases/123/filename.png&format=webp
```

### Combined: Resize + WebP

You can combine both parameters for optimal performance:

```
/api/files?path=cases/123/filename.jpg&w=600&format=webp
/api/files?path=cases/123/filename.png&w=1200&format=webp
```

**Benefits of WebP:**
- 25-35% smaller file size compared to JPEG/PNG
- Faster page load times
- Quality: 85 (configurable in imageProcessor)
- Automatic browser fallback support

### Caching

Resized and converted images are automatically cached to disk:
- First request: Image is processed and saved to `/uploads/cache/`
- Subsequent requests: Cached version is served instantly
- Cache filenames include transformations: `image_w600.webp`, `image_w1200.jpg`
- Cache headers: `max-age=31536000, immutable` for processed images
- Original files: `max-age=86400`

## Security

1. **Authentication Required**: All file access requires a valid session
2. **Case-based Access Control**: Users can only access files from cases they own
3. **Database Verification**: System checks case ownership via `case_attachments` table
4. **Path Validation**: File paths are validated to prevent directory traversal

## Supported File Types

- Images: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- Documents: `.pdf`
- Others served as `application/octet-stream`

**Note:** GIF files are not processed (no resizing or conversion) to preserve animations.

## Database Schema

### cases table
- Stores case information with JSON fields for arrays
- Links to users table via `user_id`
- `is_active` flag for soft deletion

### case_attachments table
- Links files to cases via `case_id`
- Stores relative file paths (e.g., `cases/123/abc123.jpg`)
- Cascade delete when case is removed

## Example Component Usage

```tsx
// Display image with resizing
<img 
  src={`/api/files?path=${attachment.file_path}&w=600`}
  alt="Case attachment"
/>

// Display as WebP for better performance
<img 
  src={`/api/files?path=${attachment.file_path}&w=600&format=webp`}
  alt="Case attachment"
/>

// Display original size
<img 
  src={`/api/files?path=${attachment.file_path}`}
  alt="Case attachment"
/>

// Modern responsive images with WebP
<picture>
  <source 
    srcSet={`
      /api/files?path=${path}&w=600&format=webp 600w,
      /api/files?path=${path}&w=1200&format=webp 1200w
    `}
    type="image/webp"
  />
  <img 
    src={`/api/files?path=${path}&w=1200`}
    srcSet={`
      /api/files?path=${path}&w=600 600w,
      /api/files?path=${path}&w=1200 1200w
    `}
    alt="Case attachment"
  />
</picture>
```

## SOLID Principles Implementation

### Single Responsibility Principle
Each service module has one clear purpose:
- Authentication only handles session validation
- File operations only handle file system tasks
- Image processor only handles resizing, conversion, and caching
- Request parser only extracts and validates parameters

### Open/Closed Principle
Services can be extended without modifying core logic:
- Add new MIME types to `fileService.getMimeType()`
- Add new response types to `responseBuilder`
- Add new image formats to `requestParser.parseFormat()`

### Dependency Inversion
Main functions depend on abstractions (service objects) rather than concrete implementations.

## Performance Considerations

- Processed images are cached permanently on disk
- Sharp library provides fast, high-quality image processing
- WebP conversion reduces file sizes by 25-35%
- Immutable cache headers allow browser caching
- File system storage is fast and scalable
- Files processed in parallel for batch uploads

## Maintenance

### Clearing Cache

To clear the image cache:
```bash
rm -rf uploads/cache/*
```

### Disk Space

Monitor the uploads directory size regularly. Consider implementing:
- Maximum file size limits (recommended: 5-10MB per file)
- Periodic cleanup of old cases
- Cloud storage integration for production
- Automated cache cleanup for files older than X days

### WebP Quality Adjustment

To adjust WebP quality, modify the `imageProcessor.getOrCreateProcessedImage()` method:

```typescript
sharpInstance = sharpInstance.webp({ quality: 85 }); // Change quality here (1-100)
```

## Future Enhancements

- [ ] Cloud storage integration (S3, Cloudinary)
- [ ] Additional format support (AVIF)
- [ ] Thumbnail generation
- [ ] Batch upload optimization
- [ ] Progress indicators for large files
- [ ] Image compression before upload
- [ ] Automatic format detection (serve WebP to supporting browsers)
- [ ] Image metadata stripping for privacy
