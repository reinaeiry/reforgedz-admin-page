// Thin proxy for the ticket-bot's /api/internal/logs endpoints. Lazy env
// reads to dodge the cold-boot bug we hit in linkages.js (imports resolve
// before dotenv.config()).

function botBase() { return (process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, ''); }
function botKey() { return process.env.TICKET_BOT_INTERNAL_KEY || ''; }

function isEnabled() { return !!(botBase() && botKey()); }

// TTL cache so repeated identical queries (filter-toggling, page refresh,
// multiple admins viewing the same profile) don't hammer the ticket-bot's
// SQLite reader. 30s is a sweet spot — short enough that live ingest
// surfaces within half a minute, long enough to absorb typical bursts.
const CACHE_TTL_MS = 30_000;
const CACHE_MAX = 200;
const cache = new Map();

function cacheGet(key) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (hit.expiresAt < Date.now()) { cache.delete(key); return null; }
  // LRU bump.
  cache.delete(key);
  cache.set(key, hit);
  return hit.value;
}

function cacheSet(key, value) {
  cache.set(key, { value, expiresAt: Date.now() + CACHE_TTL_MS });
  while (cache.size > CACHE_MAX) {
    const oldest = cache.keys().next().value;
    cache.delete(oldest);
  }
}

async function botGet(path) {
  if (!isEnabled()) return null;
  try {
    const res = await fetch(`${botBase()}${path}`, {
      headers: { 'Authorization': `Bearer ${botKey()}` }
    });
    if (!res.ok) {
      console.warn(`[gameLogs] bot ${res.status} for ${path}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn('[gameLogs] bot fetch failed:', err.message);
    return null;
  }
}

async function botPost(path, body) {
  if (!isEnabled()) return null;
  try {
    const res = await fetch(`${botBase()}${path}`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${botKey()}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {})
    });
    if (!res.ok) {
      console.warn(`[gameLogs] bot POST ${res.status} for ${path}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn('[gameLogs] bot POST failed:', err.message);
    return null;
  }
}

export async function listLogs(opts = {}) {
  const params = new URLSearchParams();
  if (opts.guid) params.set('guid', opts.guid);
  if (opts.name) params.set('name', opts.name);
  if (opts.types && opts.types.length) params.set('types', opts.types.join(','));
  if (opts.servers && opts.servers.length) params.set('servers', opts.servers.join(','));
  if (opts.scopes && opts.scopes.length) params.set('scopes', opts.scopes.join(','));
  if (opts.scopePairs && opts.scopePairs.length) {
    params.set('scopePairs', opts.scopePairs.map((p) => `${p.scope}:${p.type}`).join(','));
  }
  // Extra names (e.g. all of a BM player's historical name identifiers).
  // Bot ORs them with the GUID-resolved name set so chat rows without UIDs
  // still match.
  if (opts.names && opts.names.length) params.set('names', opts.names.join(','));
  if (opts.q) params.set('q', opts.q);
  if (opts.sinceMs) params.set('sinceMs', String(opts.sinceMs));
  if (opts.untilMs) params.set('untilMs', String(opts.untilMs));
  if (opts.limit) params.set('limit', String(opts.limit));
  if (opts.offset) params.set('offset', String(opts.offset));
  const qs = params.toString();
  const cacheKey = `logs:${qs}`;
  const hit = cacheGet(cacheKey);
  if (hit) return hit;
  const out = await botGet(`/api/internal/logs?${qs}`);
  const rows = (out && out.logs) || [];
  cacheSet(cacheKey, rows);
  return rows;
}

export async function playerStats(guid, names) {
  if (!guid) return null;
  const params = new URLSearchParams();
  if (names && names.length) params.set('names', names.join(','));
  const qs = params.toString();
  const key = `stats:${guid}:${qs}`;
  const hit = cacheGet(key);
  if (hit) return hit;
  const out = await botGet(`/api/internal/logs/stats/${encodeURIComponent(guid)}${qs ? `?${qs}` : ''}`);
  if (out) cacheSet(key, out);
  return out;
}

export async function rememberLink(name, guid, atMs) {
  if (!name || !guid) return;
  await botPost('/api/internal/logs/remember-link', { name, guid, atMs });
}

export { isEnabled };
