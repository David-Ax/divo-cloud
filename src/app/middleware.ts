import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get('payload-token') // oder dein Token-Name

  const isAuthPage = req.nextUrl.pathname.startsWith('/')
  const isProtected = req.nextUrl.pathname.startsWith('/album') // oder andere geschützte Pfade

  if (isProtected && !sessionCookie) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (isAuthPage && sessionCookie) {
    return NextResponse.redirect(new URL('/album', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/album', '/admin/:path*'],
}
