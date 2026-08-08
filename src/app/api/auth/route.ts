import { NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = body.username || process.env.ADMIN_USERNAME || 'admin';
    const password = body.password;

    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      const token = await createToken({ username });
      const response = NextResponse.json({ success: true, username });
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 12,
      });
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: 'Server error: ' + message }, { status: 500 });
  }
}
