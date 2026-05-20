// Discord↔GUID linkage + Discord transcript lookups, sourced from the
// Ticket-Bot's /api/internal endpoints. Small in-memory TTL cache so we
// don't hammer the bot.

// Env reads are LAZY so imports don't fire before dotenv.config() runs in
// server/index.js. Reading process.env at module top-level would silently
// return empty strings on a cold boot and isEnabled() would stay false.
function botBase() { return (process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, ''); }
function botKey() { return process.env.TICKET_BOT_INTERNAL_KEY || ''; }

const TTL_MS = 5 * 60 * 1000;
const cache = new Map();

function cacheKey(prefix, id) { return `${prefix}:${id}`; }
function getC(k) {
  const hit = cache.get(k);
  if (!hit) return null;
  if (hit.expiresAt < Date.now()) { cache.delete(k); return null; }
  return hit.value;
}
function setC(k, value) {
  cache.set(k, { value, expiresAt: Date.now() + TTL_MS });
}

export function isEnabled() {
  return !!(botBase() && botKey());
}

async function botGet(path) {
  if (!isEnabled()) return null;
  try {
    const res = await fetch(`${botBase()}${path}`, {
      headers: { 'Authorization': `Bearer ${botKey()}` }
    });
    if (res.status === 404) return null;
    if (!res.ok) {
      console.warn(`[linkages] bot ${res.status} for ${path}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn('[linkages] bot fetch failed:', err.message);
    return null;
  }
}

export async function getLinkageByGuid(guid) {
  if (!guid) return null;
  const g = String(guid).trim().toLowerCase();
  const k = cacheKey('lg', g);
  const hit = getC(k);
  if (hit !== null) return hit;
  const out = await botGet(`/api/internal/linkages/by-guid/${encodeURIComponent(g)}`);
  setC(k, out || null);
  return out;
}

export async function getLinkageByDiscordId(discordId) {
  if (!discordId) return null;
  const k = cacheKey('ld', discordId);
  const hit = getC(k);
  if (hit !== null) return hit;
  const out = await botGet(`/api/internal/linkages/by-discord-id/${encodeURIComponent(discordId)}`);
  setC(k, out || null);
  return out;
}

export async function getTranscriptsByGuid(guid, limit = 50) {
  if (!guid) return [];
  const g = String(guid).trim().toLowerCase();
  const k = cacheKey('tg', `${g}:${limit}`);
  const hit = getC(k);
  if (hit !== null) return hit;
  const out = await botGet(`/api/internal/transcripts/by-guid/${encodeURIComponent(g)}?limit=${limit}`);
  const list = (out && out.transcripts) || [];
  setC(k, list);
  return list;
}

export async function getTranscriptsByDiscordId(discordId, limit = 50) {
  if (!discordId) return [];
  const k = cacheKey('td', `${discordId}:${limit}`);
  const hit = getC(k);
  if (hit !== null) return hit;
  const out = await botGet(`/api/internal/transcripts/by-discord-id/${encodeURIComponent(discordId)}?limit=${limit}`);
  const list = (out && out.transcripts) || [];
  setC(k, list);
  return list;
}

// Resolve a Discord avatar URL from a Discord ID via the Discord CDN.
// We don't have user auth — best-effort, returns null if we can't derive one.
// The Ticket-Bot already stores the avatar URL in its linkage rows when
// available; for v1 we just expose what the bot returns (it includes
// discordUsername, not avatar). We leave avatar URL resolution to the bot
// to extend later. For now, callers fallback to initials.
