// Thin HTTP client for the IpBan controller's admin lookup endpoints.
// Used by /api/bm/players/by-guid/:guid/ip-alts to surface alt accounts
// (other GUIDs that have shared an IP with the target player) on the
// admin SPA player profile.

const TIMEOUT_MS = 5_000;

function base() { return (process.env.IPBAN_CONTROLLER_BASE || '').replace(/\/+$/, ''); }
function key() { return process.env.IPBAN_CONTROLLER_KEY || ''; }

export function isEnabled() {
  return !!(base() && key());
}

async function get(path) {
  if (!isEnabled()) return null;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${base()}${path}`, {
      headers: { Authorization: `Bearer ${key()}` },
      signal: ctrl.signal
    });
    if (res.status === 404) return null;
    if (!res.ok) {
      console.warn('[ipBans] HTTP', res.status, 'for', path);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn('[ipBans] fetch failed:', err.message);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getPlayerByGuid(guid) {
  if (!guid) return null;
  return get(`/api/admin/player/${encodeURIComponent(guid)}`);
}

export async function getPlayersByIp(ip) {
  if (!ip) return null;
  return get(`/api/admin/ip/${encodeURIComponent(ip)}`);
}

export async function listBans() {
  return get('/api/admin/ipbans');
}

async function send(method, path, body) {
  if (!isEnabled()) return null;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${base()}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${key()}`,
        'Content-Type': 'application/json'
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: ctrl.signal
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`ipban ${res.status}: ${text.slice(0, 200)}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export async function addBan({ ip, username, be_guid, reason, banned_by }) {
  return send('POST', '/api/admin/ipbans', { ip, username, be_guid, reason, banned_by });
}

export async function removeBan(ip) {
  return send('DELETE', `/api/admin/ipbans/${encodeURIComponent(ip)}`);
}
