'use server';

import { decrypt, MagicLinkPayload } from '@/lib/jwt';

export async function verifyMagicLinkToken(token: string): Promise<{ success: boolean; email?: string; error?: string }> {
    if (!token) {
        return { success: false, error: 'Missing verification token.' };
    }

    try {
        const payload = await decrypt<MagicLinkPayload>(token);

        if (payload.purpose !== 'login') {
            return { success: false, error: 'Invalid token type.' };
        }

        return { success: true, email: payload.email };

    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'TokenExpiredError') {
                return { success: false, error: 'The token has expired. Please request a new login link.' };
            }
            if (error.name === 'JsonWebTokenError') {
                return { success: false, error: 'Invalid token.' };
            }
        }
        console.error('Token verification error:', error);
        return { success: false, error: 'An error occurred during token verification.' };
    }
}
