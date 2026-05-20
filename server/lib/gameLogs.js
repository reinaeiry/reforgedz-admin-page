// Thin proxy for the ticket-bot's /api/internal/logs endpoints. Lazy env
// reads to dodge the cold-boot bug we hit in linkages.js (imports resolve
// before dotenv.config()).

function botBase() { return (process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, ''); }
function botKey() { return process.env.TICKET_BOT_INTERNAL_KEY || ''; }

function isEnabled() { return !!(botBase() && botKey()); }

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
  if (opts.q) params.set('q', opts.q);
  if (opts.sinceMs) params.set('sinceMs', String(opts.sinceMs));
  if (opts.untilMs) params.set('untilMs', String(opts.untilMs));
  if (opts.limit) params.set('limit', String(opts.limit));
  if (opts.offset) params.set('offset', String(opts.offset));
  const out = await botGet(`/api/internal/logs?${params}`);
  return (out && out.logs) || [];
}

export async function rememberLink(name, guid, atMs) {
  if (!name || !guid) return;
  await botPost('/api/internal/logs/remember-link', { name, guid, atMs });
}

export { isEnabled };
