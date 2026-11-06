import { next } from '@vercel/edge';

// Protège /admin ET les trois appels API que le dashboard fait depuis le
// navigateur (base de données, calendrier, envoi de facture Telegram). Les
// autres routes /api/* (webhooks Telegram, cron) ne passent pas par ici :
// elles restent appelées directement sur cocoonurse-planning.vercel.app,
// avec leur propre secret existant.
export const config = {
  matcher: ['/admin/:path*', '/api/db', '/api/calendar-feed', '/api/send-invoice-telegram'],
};

const COOKIE_NAME = 'cocoonurse_session';
const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 jours, comme avant

const SUPABASE_URL = 'https://dermcjwpwdqxknwnfxaw.supabase.co';
const REST = SUPABASE_URL + '/rest/v1';
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const LOCK_MS = 15 * 60 * 1000;

function serviceHeaders(extra) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return Object.assign(
    { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    extra || {}
  );
}

function clientIp(request) {
  const fwd = request.headers.get('x-forwarded-for') || '';
  return fwd.split(',')[0].trim() || 'unknown';
}

async function getAttempts(ip) {
  const r = await fetch(REST + '/login_attempts?ip=eq.' + encodeURIComponent(ip) + '&select=*', {
    headers: serviceHeaders(),
  });
  if (!r.ok) return null;
  const rows = await r.json();
  return rows[0] || null;
}

async function clearAttempts(ip) {
  await fetch(REST + '/login_attempts?ip=eq.' + encodeURIComponent(ip), {
    method: 'DELETE',
    headers: serviceHeaders(),
  }).catch(() => {});
}

// Verrou anti brute-force : au-delà de 5 échecs sur 15 min pour une même IP,
// bloque les nouvelles tentatives 15 min — sans même relire le mot de passe.
async function registerFailure(ip) {
  const now = Date.now();
  const existing = await getAttempts(ip);
  let count = 1;
  let firstAttempt = now;
  if (existing && now - new Date(existing.updated_at).getTime() < WINDOW_MS) {
    count = existing.count + 1;
    firstAttempt = new Date(existing.first_attempt).getTime();
  }
  const lockedUntil = count >= MAX_ATTEMPTS ? new Date(now + LOCK_MS).toISOString() : null;
  await fetch(REST + '/login_attempts?on_conflict=ip', {
    method: 'POST',
    headers: serviceHeaders({ Prefer: 'resolution=merge-duplicates' }),
    body: JSON.stringify({
      ip,
      count,
      first_attempt: new Date(firstAttempt).toISOString(),
      locked_until: lockedUntil,
      updated_at: new Date(now).toISOString(),
    }),
  }).catch(() => {});
}

async function isLocked(ip) {
  const existing = await getAttempts(ip);
  if (!existing || !existing.locked_until) return false;
  return new Date(existing.locked_until).getTime() > Date.now();
}

async function hmac(message, secret) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Jeton de session = expiration + signature HMAC(expiration, SESSION_SECRET).
// Jamais le mot de passe admin lui-même : SESSION_SECRET est un secret
// dédié, différent, pour qu'un cookie volé ne donne aucune prise pour
// retrouver le mot de passe hors-ligne.
async function makeSession(secret) {
  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const sig = await hmac(String(expiresAt), secret);
  return expiresAt + '.' + sig;
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifySession(token, secret) {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [expiresAtStr, sig] = parts;
  const expiresAt = Number(expiresAtStr);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  const expectedSig = await hmac(expiresAtStr, secret);
  return timingSafeEqual(sig, expectedSig);
}

function getCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const found = header.split(';').map((c) => c.trim()).find((c) => c.startsWith(name + '='));
  return found ? found.slice(name.length + 1) : null;
}

function loginPage(message) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Cocoonurse | Accès privé</title>
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
    <h1>Cocoonurse | Accès privé</h1>
    ${message ? '<p class="err">' + message + '</p>' : ''}
    <input type="password" name="password" placeholder="Mot de passe" autofocus required>
    <button type="submit">Entrer</button>
  </form>
</body>
</html>`;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.SESSION_SECRET;
  const relaySecret = process.env.INTERNAL_RELAY_SECRET;
  const isAdminPath = url.pathname === '/admin' || url.pathname.startsWith('/admin/');

  if (isAdminPath && request.method === 'POST') {
    const ip = clientIp(request);
    if (await isLocked(ip)) {
      return new Response(loginPage('Trop de tentatives. Réessaie dans 15 minutes.'), {
        status: 429,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    const formData = await request.formData();
    const submitted = formData.get('password');
    if (adminPassword && submitted === adminPassword) {
      await clearAttempts(ip);
      const token = await makeSession(sessionSecret);
      const res = new Response(null, { status: 303, headers: { Location: request.url } });
      res.headers.append(
        'Set-Cookie',
        `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`
      );
      return res;
    }
    await registerFailure(ip);
    return new Response(loginPage('Mot de passe incorrect.'), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  const sessionToken = getCookie(request, COOKIE_NAME);
  const valid = sessionSecret && (await verifySession(sessionToken, sessionSecret));

  if (!valid) {
    if (isAdminPath) {
      return new Response(loginPage(null), {
        status: 401,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Session valide : on relaie vers cocoonurse-planning avec un en-tête
  // interne que seul ce serveur connaît — jamais vu par le navigateur.
  const headers = new Headers(request.headers);
  headers.set('x-cocoonurse-relay', relaySecret || '');
  return next({ request: { headers } });
}
