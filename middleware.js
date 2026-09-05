import { next } from '@vercel/edge';

export const config = {
  matcher: '/admin/:path*',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');
  const expectedUser = process.env.ADMIN_USER || 'alicia';
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (auth && auth.startsWith('Basic ')) {
    const decoded = atob(auth.slice(6));
    const sepIndex = decoded.indexOf(':');
    const user = decoded.slice(0, sepIndex);
    const pass = decoded.slice(sepIndex + 1);
    if (expectedPass && user === expectedUser && pass === expectedPass) {
      return next();
    }
  }

  return new Response('Authentification requise', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Cocoonurse Admin", charset="UTF-8"',
    },
  });
}
