import { NextRequest, NextResponse } from 'next/server'

/**
 * Simple password protection for the /admin route.
 * Set ADMIN_PASSWORD in your .env.local to enable.
 * Uses HTTP Basic Auth for maximum compatibility with no extra dependencies.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const adminPassword = process.env.ADMIN_PASSWORD

    // If no password set, allow access (dev mode)
    if (!adminPassword) {
      return NextResponse.next()
    }

    const authHeader = request.headers.get('authorization')
    if (authHeader) {
      const encoded = authHeader.split(' ')[1]
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
      const [, password] = decoded.split(':')
      if (password === adminPassword) {
        return NextResponse.next()
      }
    }

    // Prompt for credentials
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Ezokhetho Admin", charset="UTF-8"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
