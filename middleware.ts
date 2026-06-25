import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "stomatologiya-implant.vercel.app";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

export function middleware(request: NextRequest) {
  const { hostname, protocol, pathname, search } = request.nextUrl;

  if (LOCAL_HOSTS.has(hostname) || hostname === CANONICAL_HOST) {
    return NextResponse.next();
  }

  const destination = new URL(`${protocol}//${CANONICAL_HOST}${pathname}${search}`);
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/:path*"],
};
