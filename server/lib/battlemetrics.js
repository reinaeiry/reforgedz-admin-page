// BattleMetrics API client.
// - Single-flight queue + exponential backoff on 429.
// - Per-endpoint TTL caches (kept simple: keyed by full URL+method+body).
// - Helpers for everything we currently call (servers, players, bans, notes,
//   activity, chat, RCON kick, webhook signature verify).
//
// Used by server/index.js (legacy GUID->name) and server/routes/bm.js (new
// dashboard). Exports a singleton `bm` plus helpers.

import crypto from 'node:crypto';

const BM_BASE = 'https://api.battlemetrics.com';

function envToken() {
  return process.env.BATTLEMETRICS_API_KEY || '';
}

// ─── Per-endpoint TTLs (ms) ─────────────────────────────────────────────────
// Picked from the plan. Webhook deliveries invalidate the relevant keys.
const TTL = {
  servers_list: 60_000,
  server_single: 30_000,
  server_players: 10_000,    // who's online
  player_single: 60_000,
  player_search: 30_000,
  bans_list: 30_000,
  notes_list: 60_000,
  activity: 15_000
};

// ─── Tiny cache ─────────────────────────────────────────────────────────────
const cache = new Map(); // key -> { value, expiresAt }

function cacheGet(key) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (hit.expiresAt < Date.now()) {
    cache.delete(key);
    return null;
  }
  return hit.value;
}

function cacheSet(key, value, ttlMs) {
  cache.set(key, { value, expiresAt: Date.now() + ttlMs });
}

export function invalidatePrefix(prefix) {
  for (const k of cache.keys()) {
    if (k.startsWith(prefix)) cache.delete(k);
  }
}

// ─── Queue with backoff ─────────────────────────────────────────────────────
// One serial worker. Most requests are read-side and don't need full
// parallelism; this trades a little latency for safe rate-limit behaviour.
const queue = [];
let workerRunning = false;
let nextAvailableAt = 0; // ms timestamp — set when we hit 429

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function worker() {
  if (workerRunning) return;
  workerRunning = true;
  try {
    while (queue.length > 0) {
      const job = queue.shift();
      const wait = nextAvailableAt - Date.now();
      if (wait > 0) await delay(wait);
      try {
        const out = await job.run();
        job.resolve(out);
      } catch (err) {
        job.reject(err);
      }
    }
  } finally {
    workerRunning = false;
  }
}

function enqueue(run) {
  return new Promise((resolve, reject) => {
    queue.push({ run, resolve, reject });
    worker();
  });
}

// ─── Core fetch ─────────────────────────────────────────────────────────────
async function bmFetch(path, init = {}, { cacheKey, ttl } = {}) {
  if (cacheKey) {
    const hit = cacheGet(cacheKey);
    if (hit !== null) return hit;
  }
  const token = envToken();
  if (!token) throw new Error('bm: BATTLEMETRICS_API_KEY not set');

  return enqueue(async () => {
    const url = path.startsWith('http') ? path : `${BM_BASE}${path}`;
    let attempt = 0;
    let backoff = 1000;
    while (true) {
      const res = await fetch(url, {
        ...init,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(init.headers || {})
        }
      });
      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get('retry-after') || '0', 10);
        const wait = retryAfter > 0 ? retryAfter * 1000 : backoff;
        nextAvailableAt = Date.now() + wait;
        attempt++;
        if (attempt > 5) {
          const txt = await res.text().catch(() => '');
          throw new Error(`bm: rate limited after ${attempt} attempts: ${txt}`);
        }
        await delay(wait);
        backoff = Math.min(backoff * 2, 30_000);
        continue;
      }
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`bm ${res.status}: ${txt.slice(0, 300)}`);
      }
      const data = await res.json();
      if (cacheKey && ttl) cacheSet(cacheKey, data, ttl);
      return data;
    }
  });
}

// ─── Public helpers ─────────────────────────────────────────────────────────

export function isEnabled() {
  return !!envToken();
}

export async function listOrgServers(orgId) {
  const path = `/servers?filter[organizations]=${encodeURIComponent(orgId)}&page[size]=50`;
  const key = `org-servers:${orgId}`;
  const data = await bmFetch(path, {}, { cacheKey: key, ttl: TTL.servers_list });
  return data.data || [];
}

export async function getServer(serverId) {
  const key = `server:${serverId}`;
  const data = await bmFetch(`/servers/${encodeURIComponent(serverId)}`, {}, { cacheKey: key, ttl: TTL.server_single });
  return data.data || null;
}

export async function getServerPlayers(serverId) {
  const key = `server-players:${serverId}`;
  // /servers/:id?include=player gives the currently-online players in the
  // included array. We also include identifier so the dashboard can attribute
  // GUIDs without an extra round-trip.
  const data = await bmFetch(
    `/servers/${encodeURIComponent(serverId)}?include=player,identifier`,
    {},
    { cacheKey: key, ttl: TTL.server_players }
  );
  // Group identifiers by player (BM back-references player from the
  // identifier side, not the other way around).
  const idsByPlayer = {};
  for (const inc of data.included || []) {
    if (inc.type !== 'identifier') continue;
    const pid = inc.relationships?.player?.data?.id;
    if (!pid) continue;
    const t = inc.attributes?.type;
    const v = inc.attributes?.identifier;
    if (!t || !v) continue;
    (idsByPlayer[pid] = idsByPlayer[pid] || []).push({ type: t, identifier: v, lastSeen: inc.attributes?.lastSeen });
  }
  const players = (data.included || [])
    .filter((x) => x.type === 'player')
    .map((p) => ({
      id: p.id,
      name: p.attributes?.name || '',
      identifiers: idsByPlayer[p.id] || [],
      guid: (idsByPlayer[p.id] || []).find((i) => i.type === 'reforgerUUID')?.identifier || null
    }));
  return players;
}

export async function searchPlayers({ q, serverIds, limit = 25 }) {
  const params = [`page[size]=${Math.min(limit, 100)}`];
  if (q) params.push(`filter[search]=${encodeURIComponent(q)}`);
  if (serverIds && serverIds.length) params.push(`filter[servers]=${serverIds.join(',')}`);
  const path = `/players?${params.join('&')}&include=identifier`;
  const key = `players-search:${q || ''}:${(serverIds || []).join(',')}:${limit}`;
  const data = await bmFetch(path, {}, { cacheKey: key, ttl: TTL.player_search });
  return data;
}

export async function getPlayer(playerId, { include = 'identifier,session,server' } = {}) {
  const path = `/players/${encodeURIComponent(playerId)}?include=${encodeURIComponent(include)}`;
  const key = `player:${playerId}:${include}`;
  return bmFetch(path, {}, { cacheKey: key, ttl: TTL.player_single });
}

// Resolve a Reforger GUID to a BattleMetrics player. Returns the player resource
// (or null) — replaces the old adminMgrFetchBmName, which can now derive the
// name from .data[0].attributes.name.
export async function matchPlayerByGuid(guid) {
  if (!guid) return null;
  try {
    const data = await bmFetch('/players/match', {
      method: 'POST',
      body: JSON.stringify({
        data: [{ type: 'identifier', attributes: { type: 'reforgerUUID', identifier: guid } }]
      })
    });
    return (data.data || [])[0] || null;
  } catch {
    return null;
  }
}

export async function listBansForPlayer(playerId) {
  const key = `bans-player:${playerId}`;
  const data = await bmFetch(
    `/bans?filter[player]=${encodeURIComponent(playerId)}&page[size]=100`,
    {},
    { cacheKey: key, ttl: TTL.bans_list }
  );
  return data.data || [];
}

export async function listBans({ serverIds, includeExpired = false } = {}) {
  // The /bans endpoint does NOT accept a server filter — bans are org-wide.
  // We ignore serverIds and rely on org scope from the token; the dashboard
  // can filter client-side by ban.relationships.server if needed later.
  const params = ['page[size]=100', 'include=player'];
  if (!includeExpired) params.push('filter[expired]=false');
  const path = `/bans?${params.join('&')}`;
  const key = `bans-list:${includeExpired ? 1 : 0}`;
  const data = await bmFetch(path, {}, { cacheKey: key, ttl: TTL.bans_list });
  // Decorate each ban with the player name (from the included resources)
  // so the dashboard table doesn't have to do a second lookup.
  const playerById = {};
  for (const inc of data.included || []) {
    if (inc.type === 'player') playerById[inc.id] = inc;
  }
  for (const ban of data.data || []) {
    const pRel = ban.relationships?.player?.data;
    if (pRel && playerById[pRel.id]) {
      ban.player = {
        id: pRel.id,
        name: playerById[pRel.id].attributes?.name || null
      };
    }
  }
  return data.data || [];
}

export async function createBan({ playerId, identifiers, reason, note, expires, banListId, autoAddEnabled = true, orgWide = true, serverIds }) {
  // BM's POST /bans schema: identifiers (array), reason, note, expires (ISO or null),
  // banList (optional), orgWide vs server-scoped (autoAddEnabled controls native banlist).
  const attributes = {
    reason: reason || null,
    note: note || null,
    expires: expires || null,
    autoAddEnabled: !!autoAddEnabled,
    orgWide: !!orgWide
  };
  const relationships = {};
  if (identifiers && identifiers.length) {
    relationships.identifiers = { data: identifiers.map((id) => ({ type: 'identifier', id: String(id) })) };
  }
  if (playerId) {
    relationships.player = { data: { type: 'player', id: String(playerId) } };
  }
  if (banListId) {
    relationships.banList = { data: { type: 'banList', id: String(banListId) } };
  }
  if (!orgWide && serverIds && serverIds.length) {
    relationships.server = { data: serverIds.map((id) => ({ type: 'server', id: String(id) })) };
  }
  const data = await bmFetch('/bans', {
    method: 'POST',
    body: JSON.stringify({ data: { type: 'ban', attributes, relationships } })
  });
  invalidatePrefix('bans-list:');
  invalidatePrefix(`bans-player:${playerId || ''}`);
  return data.data;
}

export async function deleteBan(banId) {
  await bmFetch(`/bans/${encodeURIComponent(banId)}`, { method: 'DELETE' });
  invalidatePrefix('bans-list:');
  return { ok: true };
}

export async function updateBan(banId, attributes) {
  const data = await bmFetch(`/bans/${encodeURIComponent(banId)}`, {
    method: 'PATCH',
    body: JSON.stringify({ data: { type: 'ban', id: String(banId), attributes } })
  });
  invalidatePrefix('bans-list:');
  return data.data;
}

export async function rconKick(serverId, { playerId, identifier, reason }) {
  // BM exposes RCON via /servers/:id/command. The exact command syntax depends
  // on the game; for Reforger we issue `#kick <identifier or playerId> <reason>`
  // through BM's `command` endpoint.
  const body = {
    data: {
      type: 'rconCommand',
      attributes: {
        command: 'kick',
        options: {
          player: identifier || playerId,
          reason: reason || ''
        }
      }
    }
  };
  return bmFetch(`/servers/${encodeURIComponent(serverId)}/command`, {
    method: 'POST',
    body: JSON.stringify(body)
  });
}

export async function listPlayerNotes(playerId) {
  const key = `notes:${playerId}`;
  const data = await bmFetch(
    `/players/${encodeURIComponent(playerId)}/relationships/notes`,
    {},
    { cacheKey: key, ttl: TTL.notes_list }
  );
  return data.data || [];
}

export async function createPlayerNote(playerId, { note, shared = true }) {
  const data = await bmFetch('/notes', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'note',
        attributes: { note, shared },
        relationships: { player: { data: { type: 'player', id: String(playerId) } } }
      }
    })
  });
  invalidatePrefix(`notes:${playerId}`);
  return data.data;
}

export async function updatePlayerNote(noteId, { note, shared }) {
  const attributes = {};
  if (note !== undefined) attributes.note = note;
  if (shared !== undefined) attributes.shared = !!shared;
  const data = await bmFetch(`/notes/${encodeURIComponent(noteId)}`, {
    method: 'PATCH',
    body: JSON.stringify({ data: { type: 'note', id: String(noteId), attributes } })
  });
  invalidatePrefix('notes:');
  return data.data;
}

export async function deletePlayerNote(noteId) {
  await bmFetch(`/notes/${encodeURIComponent(noteId)}`, { method: 'DELETE' });
  invalidatePrefix('notes:');
  return { ok: true };
}

export async function listActivity({ serverIds, types, limit = 50 } = {}) {
  // BM /activity filter[types] expects an object keyed by type name with
  // truthy values: filter[types][playerJoin]=true&filter[types][chat]=true.
  // Build that here.
  const params = [`page[size]=${Math.min(limit, 100)}`];
  if (serverIds && serverIds.length) params.push(`filter[servers]=${serverIds.join(',')}`);
  if (types && types.length) {
    for (const t of types) params.push(`filter[types][${encodeURIComponent(t)}]=true`);
  }
  const path = `/activity?${params.join('&')}`;
  const key = `activity:${(serverIds || []).join(',')}:${(types || []).join(',')}:${limit}`;
  const data = await bmFetch(path, {}, { cacheKey: key, ttl: TTL.activity });
  return data.data || [];
}

// ─── Webhook signature verify ───────────────────────────────────────────────
// BM webhook signs the body with HMAC-SHA256 of the configured webhook secret.
// Header: X-BattleMetrics-Signature: sha256=<hex>
export function verifyWebhookSignature(rawBody, headerValue, secret) {
  if (!headerValue || !secret) return false;
  const match = /^sha256=([0-9a-f]+)$/i.exec(headerValue.trim());
  if (!match) return false;
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  const got = match[1];
  if (got.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(got, 'hex'), Buffer.from(expected, 'hex'));
}

export const _internal = { TTL, cache };
