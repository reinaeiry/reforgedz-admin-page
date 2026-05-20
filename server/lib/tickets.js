// Proxy module for the ticket-bot's /api/internal/tickets/* endpoints.
// Lazy env reads dodge the cold-boot pattern (imports resolve before
// dotenv.config()). 5s TTL cache for list + detail; per-message GET is
// uncached because the SPA polls / receives SSE for freshness.

function botBase() { return (process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, ''); }
function botKey() { return process.env.TICKET_BOT_INTERNAL_KEY || ''; }

function isEnabled() { return !!(botBase() && botKey()); }

const CACHE_TTL_MS = 5_000;
const cache = new Map();
function cacheGet(k) {
  const hit = cache.get(k);
  if (!hit) return null;
  if (hit.expiresAt < Date.now()) { cache.delete(k); return null; }
  return hit.value;
}
function cacheSet(k, v) {
  cache.set(k, { value: v, expiresAt: Date.now() + CACHE_TTL_MS });
}
export function invalidate(channelId) {
  if (!channelId) { cache.clear(); return; }
  for (const k of cache.keys()) {
    if (k.includes(channelId)) cache.delete(k);
  }
}

async function botFetch(path, init = {}) {
  if (!isEnabled()) return null;
  try {
    const headers = { ...(init.headers || {}), Authorization: `Bearer ${botKey()}` };
    const res = await fetch(`${botBase()}${path}`, { ...init, headers });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      const err = new Error(`bot ${res.status}: ${text.slice(0, 200)}`);
      err.status = res.status;
      throw err;
    }
    return res;
  } catch (err) {
    if (!err.status) console.warn('[tickets] bot fetch failed:', err.message);
    throw err;
  }
}

async function botGet(path) {
  const res = await botFetch(path);
  return res ? await res.json() : null;
}

export async function listTickets({ status = 'open', categories = null } = {}) {
  if (!isEnabled()) return [];
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (categories && categories.length) params.set('categories', categories.join(','));
  const key = `list:${params.toString()}`;
  const hit = cacheGet(key);
  if (hit) return hit;
  const out = await botGet(`/api/internal/tickets?${params}`);
  const list = (out && out.tickets) || [];
  cacheSet(key, list);
  return list;
}

export async function getTicket(channelId) {
  if (!isEnabled()) return null;
  const key = `detail:${channelId}`;
  const hit = cacheGet(key);
  if (hit) return hit;
  const out = await botGet(`/api/internal/tickets/${encodeURIComponent(channelId)}`);
  const t = out && out.ticket;
  if (t) cacheSet(key, t);
  return t || null;
}

export async function getMessages(channelId, { before, limit = 50 } = {}) {
  if (!isEnabled()) return [];
  const params = new URLSearchParams();
  if (before) params.set('before', before);
  if (limit) params.set('limit', String(limit));
  const out = await botGet(`/api/internal/tickets/${encodeURIComponent(channelId)}/messages?${params}`);
  return (out && out.messages) || [];
}

// Stream the incoming multipart body straight through to the bot — keeps
// memory low for image uploads. Caller has already validated the user's
// per-category perm before this is reached.
export async function relayMessage(channelId, req) {
  if (!isEnabled()) throw new Error('ticket-bot not configured');
  const contentType = req.headers['content-type'] || '';
  const res = await fetch(`${botBase()}/api/internal/tickets/${encodeURIComponent(channelId)}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${botKey()}`,
      'Content-Type': contentType,
      'Content-Length': req.headers['content-length'] || ''
    },
    body: req,
    duplex: 'half'
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`bot ${res.status}: ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  invalidate(channelId);
  try { return JSON.parse(text); } catch { return {}; }
}

export async function closeTicket(channelId, { closedByUsername, closedByName, reason }) {
  if (!isEnabled()) throw new Error('ticket-bot not configured');
  const res = await botFetch(`/api/internal/tickets/${encodeURIComponent(channelId)}/close`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ closedByUsername, closedByName, reason })
  });
  invalidate(channelId);
  return await res.json();
}

export { isEnabled };
