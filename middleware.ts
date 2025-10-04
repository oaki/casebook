import { NextRequest, NextResponse } from "next/server";
import {updateSession} from "@/lib/session";

const locales = ['sk', 'cz'];
const defaultLocale = 'sk';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/404') {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const isValidLocale = locales.includes(first);

  if (!isValidLocale) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  const response = await updateSession(request) as NextResponse | undefined;
  return response || NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
