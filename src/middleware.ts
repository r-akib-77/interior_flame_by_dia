import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const getSecret = () => {
  const secretStr = process.env.JWT_SECRET || "fallback_default_jwt_secret_key_interior_flame";
  return new TextEncoder().encode(secretStr);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedAdminPage = pathname.startsWith("/admin");
  const isProtectedApi = 
    pathname.startsWith("/api/upload") || 
    (pathname.startsWith("/api/collections") && request.method !== "GET");

  if (isProtectedAdminPage || isProtectedApi) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized - Please login first" }, { status: 401 });
      }
      return NextResponse.next();
    }

    try {
      await jwtVerify(token, getSecret());
      return NextResponse.next();
    } catch {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized - Invalid token" }, { status: 401 });
      }
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/collections", "/api/upload"],
};
