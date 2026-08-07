import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Exclude the login page itself
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for the admin token cookie
    const token = request.cookies.get('tpn_admin_token');

    if (!token) {
      // No token found, redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
