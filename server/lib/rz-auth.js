// rz-auth (ESM) — JWT verifier for the reforgedz.net SSO cookie.
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const HEADER_B64 = Buffer.from(JSON.stringify({ alg: 'EdDSA', typ: 'JWT' })).toString('base64url');

function decodeB64UrlJSON(s) {
  return JSON.parse(Buffer.from(s, 'base64url').toString('utf8'));
}
function getByPath(obj, dottedPath) {
  return dottedPath.split('.').reduce((a, k) => (a && a[k] !== undefined ? a[k] : undefined), obj);
}

export function createRzAuth({
  publicKeyPem,
  publicKeyPath,
  publicKeyUrl,
  authBase,
  cookieName = 'rz_session',
  loginUrl,
  revocationCacheMs = 60000,
  revocationCheck = true,
  // Hardening, opt-in so they can't lock admins out before the SSO issuer is
  // confirmed to set `exp`. requireExp: reject tokens with no numeric exp.
  // revocationFailClosed: treat a failed/unreachable revocation check as
  // "revoked" instead of "valid".
  requireExp = false,
  revocationFailClosed = false
} = {}) {
  let publicKey = null;
  let pubPem = publicKeyPem || null;

  async function ready() {
    if (publicKey) return;
    if (!pubPem && publicKeyPath) {
      const p = path.resolve(publicKeyPath);
      try { pubPem = await fs.readFile(p, 'utf8'); } catch { /* fallthrough */ }
    }
    if (!pubPem && publicKeyUrl) {
      const res = await fetch(publicKeyUrl);
      if (!res.ok) throw new Error(`rz-auth: public-key fetch failed (${res.status})`);
      pubPem = await res.text();
    }
    if (!pubPem) throw new Error('rz-auth: no public key configured');
    publicKey = crypto.createPublicKey(pubPem);
    if (publicKey.asymmetricKeyType !== 'ed25519') throw new Error('rz-auth: public key must be Ed25519');
  }

  function verifyToken(token) {
    if (!publicKey || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [h, p, s] = parts;
    if (h !== HEADER_B64) return null;
    let payload;
    try { payload = decodeB64UrlJSON(p); } catch { return null; }
    let sig;
    try { sig = Buffer.from(s, 'base64url'); } catch { return null; }
    const ok = crypto.verify(null, Buffer.from(h + '.' + p), publicKey, sig);
    if (!ok) return null;
    if (typeof payload.exp === 'number') {
      if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    } else if (requireExp) {
      return null; // no expiry claim and we've been told to require one
    }
    return payload;
  }

  const revCache = new Map();
  async function checkNotRevoked(payload) {
    if (!revocationCheck || !authBase) return true;
    const key = `${payload.sub}:${payload.rev}`;
    const hit = revCache.get(key);
    const now = Date.now();
    if (hit && hit.expiresAt > now) return hit.valid;
    try {
      const url = `${authBase.replace(/\/+$/, '')}/api/auth/sessions/check?sub=${encodeURIComponent(payload.sub)}&rev=${encodeURIComponent(payload.rev)}`;
      const res = await fetch(url);
      if (!res.ok) return !revocationFailClosed;
      const data = await res.json();
      revCache.set(key, { valid: !!data.valid, expiresAt: now + revocationCacheMs });
      return !!data.valid;
    } catch {
      return !revocationFailClosed;
    }
  }

  function readCookie(req) {
    if (req.cookies && req.cookies[cookieName]) return req.cookies[cookieName];
    const header = req.headers && req.headers.cookie;
    if (!header) return null;
    for (const part of header.split(/;\s*/)) {
      const eq = part.indexOf('=');
      if (eq < 0) continue;
      if (part.slice(0, eq) === cookieName) return decodeURIComponent(part.slice(eq + 1));
    }
    return null;
  }

  async function attachSession(req, _res, next) {
    const raw = readCookie(req);
    if (!raw) return next();
    const payload = verifyToken(raw);
    if (!payload) return next();
    const ok = await checkNotRevoked(payload);
    if (!ok) return next();
    req.rzUser = {
      id: payload.sub,
      username: payload.usr,
      perms: payload.perms || { admin: {}, transcripts: {}, restricted: {}, manager: false },
      jti: payload.jti,
      rev: payload.rev
    };
    next();
  }

  function buildLoginRedirect(req) {
    if (!loginUrl) return null;
    const proto = req.headers['x-forwarded-proto'] || req.protocol || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const ret = `${proto}://${host}${req.originalUrl || req.url}`;
    return `${loginUrl}?return=${encodeURIComponent(ret)}`;
  }

  function requireAuth(req, res, next) {
    if (req.rzUser) return next();
    if (req.accepts && req.accepts(['html', 'json']) === 'html') {
      const dest = buildLoginRedirect(req);
      if (dest) return res.redirect(dest);
    }
    return res.status(401).json({ error: 'unauthorized' });
  }

  function requirePerm(permPath) {
    return function (req, res, next) {
      if (!req.rzUser) return res.status(401).json({ error: 'unauthorized' });
      if (getByPath(req.rzUser.perms, permPath) === true) return next();
      return res.status(403).json({ error: 'forbidden', required: permPath });
    };
  }

  function requireManager(req, res, next) {
    if (!req.rzUser) return res.status(401).json({ error: 'unauthorized' });
    if (req.rzUser.perms && req.rzUser.perms.manager) return next();
    return res.status(403).json({ error: 'manager_required' });
  }

  return { ready, verifyToken, attachSession, requireAuth, requirePerm, requireManager };
}
