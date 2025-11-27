import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname, searchParams } = req.nextUrl;

  // Protect ONLY admin routes
  const isAdmin =
    pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdmin) {
    const key = searchParams.get("key");

    if (key !== "VENASTRO2025") {
      return NextResponse.redirect(new URL("/not-authorized", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
