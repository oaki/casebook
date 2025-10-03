import jwt, { SignOptions } from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET || 'default_secret_key';

export async function encrypt(payload: TokenPayload, options?: SignOptions): Promise<string> {
    return jwt.sign(payload, SECRET_KEY, options);
}

export async function decrypt<T extends TokenPayload = SessionPayload>(token: string): Promise<T> {
    return jwt.verify(token, SECRET_KEY) as T;
}

// Types at the end of file as per guidelines
export type SessionPayload = {
    type: 'session';
    user?: {
        email: string;
        roles?: string[];
    };
    expires?: number;
}

export type MagicLinkPayload = {
    type: 'magic-link';
    email: string;
    purpose: string;
    exp: number;
}

export type TokenPayload = SessionPayload | MagicLinkPayload;
