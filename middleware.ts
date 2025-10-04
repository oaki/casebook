import { NextRequest, NextResponse } from "next/server";
import {updateSession} from "@/lib/session";

const locales = ['sk', 'cz'];
const defaultLocale = 'sk';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/404') {
    return NextResponse.next();
  }

  // Ignore root ("/") – redirect to default locale root
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Split pathname into segments (filter out empty strings)
  const segments = pathname.split('/').filter(Boolean);

  // If there are segments, check the first as potential locale
  const first = segments[0];

  const isValidLocale = locales.includes(first);

  if (!isValidLocale) {
    // Invalid locale -> return 404 page
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // Pathname now definitely starts with a valid locale.
  // Allow locale-only path (/sk) to pass through as-is, or deeper paths (/sk/anything...)
  // Update session only when locale present & valid (per earlier requirement).
  const response = await updateSession(request) as NextResponse | undefined;
  return response || NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
