import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "de", "bs"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, etc) and static files
    "/((?!api|_next/static|_next/image|favicon.ico|banner.png|mwp.png|carpeomniacover.png|globe.svg|file.svg|window.svg|next.svg|vercel.svg).*)",
  ],
};

