"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { encrypt, decrypt, SessionPayload } from "./jwt";
import { prisma } from "@/app/libs/services/databaseConnection";

const SESSION_COOKIE_NAME = "auth_session";
const SESSION_DURATION_MS = 365 * 24 * 60 * 60 * 1000; // 1 year

export async function login(email: string) {
    let user = await prisma.users.findUnique({
        where: { email },
        include: {
            user_roles: {
                include: {
                    roles: true
                }
            }
        }
    });

    // If user doesn't exist, create a new one
    if (!user) {
        user = await prisma.users.create({
            data: {
                email,
                name: email.split('@')[0], // Use email prefix as default name
            },
            include: {
                user_roles: {
                    include: {
                        roles: true
                    }
                }
            }
        });
    }

    // Extract role codes from user_roles
    const roles = user.user_roles.map(ur => ur.roles.code);

    const expires = Date.now() + SESSION_DURATION_MS;
    const payload: SessionPayload = {
        type: 'session',
        user: {
            email: user.email,
            roles
        },
        expires
    };
    const session = await encrypt(payload, { expiresIn: `${SESSION_DURATION_MS / 1000}s` });
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, session, {
        expires: new Date(expires),
        httpOnly: true,
    });
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, "", { expires: new Date(0) });
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!session) return null;
    try {
        return await decrypt<SessionPayload>(session);
    } catch {
        return null;
    }
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!session) {
        return;
    }
    try {
        const parsed = await decrypt<SessionPayload>(session);
        const expires = Date.now() + SESSION_DURATION_MS;
        parsed.expires = expires;
        const res = NextResponse.next();
        res.cookies.set({
            name: SESSION_COOKIE_NAME,
            value: await encrypt(parsed, { expiresIn: `${SESSION_DURATION_MS / 1000}s` }),
            httpOnly: true,
            expires: new Date(expires),
        });
        return res;
    } catch {
        return;
    }
}
