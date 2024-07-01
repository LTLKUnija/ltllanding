import { NextResponse } from "next/server";

const defaultLocale = "lt";
const locales = ["en", "lt"];

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies["NEXT_LOCALE"];

  if (cookieLocale && locales.includes(cookieLocale)) {
    url.pathname = `/${cookieLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}
