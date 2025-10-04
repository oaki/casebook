import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function requireAuth() {
    const session = await getSession();

    if (!session || !session.user) {
        redirect('/');
    }

    return session;
}

export async function requireAdmin(lang: string) {
    const session = await requireAuth();

    if (!session.user?.roles?.includes('admin')) {
        redirect(`/${lang}/dashboard`);
    }

    return session;
}

export async function hasRole(role: string) {
    const session = await getSession();
    return session?.user?.roles?.includes(role) ?? false;
}
