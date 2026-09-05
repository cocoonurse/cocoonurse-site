import { next } from '@vercel/edge';

export const config = {
  matcher: '/admin/:path*',
};

const COOKIE_NAME = 'cocoonurse_admin';

function loginPage(error) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Cocoonurse — Accès privé</title>
<style>
  body{font-family:system-ui,-apple-system,sans-serif;background:#FBF6F4;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}
  form{background:#fff;padding:32px;border-radius:16px;box-shadow:0 10px 28px rgba(55,43,40,0.10);width:100%;max-width:320px;box-sizing:border-box;}
  h1{font-size:19px;margin:0 0 18px;color:#372B28;}
  input{width:100%;padding:11px 12px;border:1px solid #E9DBD7;border-radius:9px;font-size:15px;box-sizing:border-box;margin-bottom:14px;}
  button{width:100%;padding:11px;border:none;border-radius:9px;background:#AD5872;color:#fff;font-weight:600;font-size:14px;cursor:pointer;}
  .err{color:#B23B4E;font-size:13px;margin:-8px 0 14px;}
</style>
</head>
<body>
  <form method="POST">
    <h1>Cocoonurse — Accès privé</h1>
    ${error ? '<p class="err">Mot de passe incorrect.</p>' : ''}
    <input type="password" name="password" placeholder="Mot de passe" autofocus required>
    <button type="submit">Entrer</button>
  </form>
</body>
</html>`;
}

export default async function middleware(request) {
  const expectedPass = process.env.ADMIN_PASSWORD;
  const cookieHeader = request.headers.get('cookie') || '';
  const hasValidCookie = cookieHeader
    .split(';')
    .some((c) => c.trim() === `${COOKIE_NAME}=${expectedPass}`);

  if (hasValidCookie) {
    return next();
  }

  if (request.method === 'POST') {
    const formData = await request.formData();
    const submitted = formData.get('password');
    if (expectedPass && submitted === expectedPass) {
      const res = new Response(null, {
        status: 303,
        headers: { Location: request.url },
      });
      res.headers.append(
        'Set-Cookie',
        `${COOKIE_NAME}=${expectedPass}; Path=/admin; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`
      );
      return res;
    }
    return new Response(loginPage(true), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return new Response(loginPage(false), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
