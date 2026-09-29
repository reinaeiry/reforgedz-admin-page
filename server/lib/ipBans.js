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

// Every player the game servers' logs have seen (the controller's player index, since 2026-03-13): the most
// complete name search there is. Names, in-game IDs and last seen only - never an address.
export async function findPlayers(q, { limit = 25 } = {}) {
  const out = await get(`/api/players/find?q=${encodeURIComponent(q)}&limit=${limit}&wide=1`);
  return Array.isArray(out?.candidates) ? out.candidates : [];
}

export async function lookupPlayer(uid) {
  if (!uid) return null;
  return get(`/api/players/lookup/${encodeURIComponent(uid)}`);
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

// Who lifted it and why travel in the query string - a DELETE has no body - and the controller
// keeps both in ban_history. Without them every lift from this site was recorded as
// "admin API", with no reason.
export async function removeBan(ip, { by, reason } = {}) {
  const q = [];
  if (by) q.push(`by=${encodeURIComponent(by)}`);
  if (reason) q.push(`reason=${encodeURIComponent(reason)}`);
  return send('DELETE', `/api/admin/ipbans/${encodeURIComponent(ip)}${q.length ? `?${q.join('&')}` : ''}`);
}

// ─── Account (identity) bans ──────────────────────────────────────────────
// These are what actually keep a player out of the game. A BattleMetrics ban
// only reaches a Reforger server over RCON, which we have not had since 1.8,
// so BM is a record and the controller is the enforcement.

export async function accountBan({ uid, name, reason, banned_by, origin_server }) {
  return send('POST', '/api/admin/account-bans', {
    uid, name, reason, banned_by, origin_server
  });
}

// Deliberately NOT a DELETE on /account-bans. That endpoint only stops the ban
// being re-synced; the entry already written into every server's ban file stays
// and the player is still locked out. This one records an unban the listeners
// act on, which is the half that actually frees them. The reason is kept in the
// ban's history, next to who lifted it.
export async function accountUnban({ uid, name, by, reason }) {
  return send('POST', '/api/admin/account-unbans', { uid, name, by, reason });
}

// An in-game mute or unmute changed on this site (built by muteKeeper.js): the controller's listeners keep it in
// the chosen servers' mute files until each one has loaded it.
export async function muteOp(op) {
  return send('POST', '/api/admin/mutes', op);
}

export async function listAccountBans() {
  return get('/api/admin/account-bans');
}

// Every lifted ban aimed at this account (account and IP), newest first.
export async function banHistory(uid) {
  if (!uid) return null;
  return get(`/api/admin/ban-history?uid=${encodeURIComponent(uid)}`);
}
