'use server';

import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { encode } from 'next-auth/jwt';

const prisma = new PrismaClient();

export async function verifyMagicLinkAction(token: string) {
    try {
        // Verify JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

        // Check if token purpose is login
        if (payload.purpose !== 'login') {
            return {
                success: false,
                error: 'Neplatný typ tokenu'
            };
        }

        const { email } = payload;

        // Check if user exists in database
        let user = await prisma.users.findUnique({
            where: { email }
        });

        // If user doesn't exist, create new user
        if (!user) {
            user = await prisma.users.create({
                data: {
                    email,
                    name: email.split('@')[0], // Use email prefix as default name
                    created_at: new Date(),
                    updated_at: new Date()
                }
            });
        } else {
            if (user.deleted_at) {
                return {
                    success: false,
                    error: 'Váš účet je neaktívny. Kontaktujte administrátora.'
                };
            }
        }

        // Create NextAuth session token
        const sessionToken = await encode({
            token: {
                sub: user.id.toString(),
                name: user.name,
                email: user.email,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + (365 * 24 * 60 * 60) // 1 year
            },
            secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET!,
            maxAge: 365 * 24 * 60 * 60 // 1 year in seconds
        });

        // Set NextAuth session cookie
        const cookie = await cookies();
        cookie.set('next-auth.session-token', sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
            path: '/'
        });

        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        };

    } catch (error) {
        console.error('Token verification error:', error);

        if (error instanceof jwt.JsonWebTokenError) {
            return {
                success: false,
                error: 'Neplatný token'
            };
        }

        if (error instanceof jwt.TokenExpiredError) {
            return {
                success: false,
                error: 'Token vypršal. Prosím požiadajte o nový prihlasovacie odkaz.'
            };
        }

        return {
            success: false,
            error: 'Chyba pri overovaní tokenu'
        };
    }
}

// Types
type TokenPayload = {
    email: string;
    purpose: string;
    exp: number;
    iat: number;
};
