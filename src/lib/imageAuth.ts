import jwt from 'jsonwebtoken';

const secret = process.env.IMAGE_TOKEN_SECRET as string;

if (!secret) {
  throw new Error('IMAGE_TOKEN_SECRET environment variable is not set');
}

/**
 * Generates a short-lived signed token for an image path.
 * @param filePath The path of the file to be accessed.
 * @returns A signed JWT.
 */
export function generateImageToken(filePath: string): string {
  return jwt.sign({ filePath }, secret, { expiresIn: '5m' }); // Token is valid for 5 minutes
}

/**
 * Verifies a signed image token.
 * @param token The JWT to verify.
 * @param expectedFilePath The file path we expect the token to be for.
 * @returns True if the token is valid and for the correct file, false otherwise.
 */
export function verifyImageToken(token: string, expectedFilePath: string): boolean {
  try {
    const decoded = jwt.verify(token, secret) as { filePath: string };
    // Ensure the token is for the specific file being requested
    return decoded.filePath === expectedFilePath;
  } catch (error) {
    console.error('Error verifying image token:', error);
    return false;
  }
}

