// Player search/profile/activity reads, built on top of the existing per-server
// data files (pii.json for identity/name lookup, events.ndjson for history) -
// no new storage, same source of truth the replay tooling already uses.

import path from 'node:path';
import { createReadStream } from 'node:fs';
import readline from 'node:readline';

// pii.json shape (confirmed against server/index.js's recordPiiPlayer/savePii):
// { [identityId]: { uid, names: string[], ips: string[], firstSeen, lastSeen, sessionCount } }

export async function searchPlayers({ query, limit, listAllServers, readJsonOrNull, dataDir }) {
  const q = String(query || '').trim().toLowerCase();
  if (q.length < 2) return [];

  const servers = await listAllServers();
  const byIdentity = new Map();

  for (const server of servers) {
    const pii = await readJsonOrNull(path.join(dataDir, 'servers', server.id, 'pii.json'));
    if (!pii || typeof pii !== 'object') continue;

    for (const [identityId, rec] of Object.entries(pii)) {
      if (!rec || !Array.isArray(rec.names)) continue;
      const matches = rec.names.some((n) => typeof n === 'string' && n.toLowerCase().includes(q));
      if (!matches) continue;

      let entry = byIdentity.get(identityId);
      if (!entry) {
        entry = { identityId, names: new Set(), lastSeen: 0, servers: [] };
        byIdentity.set(identityId, entry);
      }
      for (const n of rec.names) entry.names.add(n);
      if (typeof rec.lastSeen === 'number' && rec.lastSeen > entry.lastSeen) entry.lastSeen = rec.lastSeen;
      entry.servers.push({ id: server.id, name: server.name });
    }
  }

  const results = Array.from(byIdentity.values()).map((e) => {
    const names = Array.from(e.names);
    return {
      identityId: e.identityId,
      displayName: names[0] || e.identityId,
      alsoKnownAs: names.slice(1),
      lastSeen: e.lastSeen || null,
      servers: e.servers,
    };
  });

  results.sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0));
  return results.slice(0, limit || 25);
}

// Full scan of one server's events.ndjson, filtered to lines belonging to the
// given identityId. Returns raw matching lines (already-parsed payload.event
// objects) plus their type/tsMs - callers aggregate as needed. Linear scan;
// see server/lib/anticheat.js's header comment for why this doesn't use the
// seek-to-timestamp optimization readNdjsonByteWindow uses elsewhere.
async function scanServerForIdentity(filePath, identityId) {
  const out = [];
  let stream;
  try {
    stream = createReadStream(filePath, { encoding: 'utf8' });
  } catch {
    return out;
  }
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  try {
    for await (const line of rl) {
      if (!line) continue;
      let outer;
      try { outer = JSON.parse(line); } catch { continue; }
      const p = outer && outer.payload;
      if (!p || typeof p.tsMs !== 'number') continue;
      const evt = p.event || {};
      const ids = [evt.identityId, evt.killerIdentityId, evt.victimIdentityId, evt.shooterIdentityId, evt.playerIdentityId];
      if (!ids.includes(identityId)) continue;
      out.push({ type: p.type, tsMs: p.tsMs, event: evt });
    }
  } finally {
    try { rl.close(); } catch { /* ignore */ }
    try { stream.destroy(); } catch { /* ignore */ }
  }
  return out;
}

export async function getPlayerProfile({ identityId, listAllServers, readJsonOrNull, dataDir, sanitizeServerId }) {
  const servers = await listAllServers();
  const totals = { kills: 0, deaths: 0, hits: 0, shots: 0, sessions: 0, playtimeMs: 0 };
  const perServer = [];
  let displayName = identityId;
  const alsoKnownAs = new Set();
  let firstSeen = null;
  let lastSeen = null;

  for (const server of servers) {
    const pii = await readJsonOrNull(path.join(dataDir, 'servers', server.id, 'pii.json'));
    const rec = pii && pii[identityId];
    if (rec && Array.isArray(rec.names) && rec.names.length) {
      displayName = rec.names[0];
      for (const n of rec.names.slice(1)) alsoKnownAs.add(n);
    }

    const filePath = path.join(dataDir, 'servers', sanitizeServerId(server.id), 'events.ndjson');
    const lines = await scanServerForIdentity(filePath, identityId);
    if (!lines.length) continue;

    const s = { serverId: server.id, serverName: server.name, kills: 0, deaths: 0, hits: 0, shots: 0, sessions: 0, playtimeMs: 0, firstSeen: null, lastSeen: null };
    const joinTsBySession = new Map();

    for (const { type, tsMs, event } of lines) {
      if (s.firstSeen === null || tsMs < s.firstSeen) s.firstSeen = tsMs;
      if (s.lastSeen === null || tsMs > s.lastSeen) s.lastSeen = tsMs;

      if (type === 'kill' && event.killerIdentityId === identityId) s.kills++;
      if ((type === 'kill' || type === 'death') && event.victimIdentityId === identityId) s.deaths++;
      if (type === 'hit' && event.shooterIdentityId === identityId) s.hits++;
      if (type === 'shot' && event.identityId === identityId) s.shots++;
      // Session/playtime tracking would need join events paired with disconnect
      // events by sessionId; join events aren't in the category list captured by
      // this scan today (only kill/death/hit/shot/interact/disconnect carry an
      // identity field) - sessions/playtimeMs are left at 0 until that's added.
    }

    totals.kills += s.kills;
    totals.deaths += s.deaths;
    totals.hits += s.hits;
    totals.shots += s.shots;
    perServer.push(s);

    if (firstSeen === null || (s.firstSeen !== null && s.firstSeen < firstSeen)) firstSeen = s.firstSeen;
    if (lastSeen === null || (s.lastSeen !== null && s.lastSeen > lastSeen)) lastSeen = s.lastSeen;
  }

  return {
    identityId,
    displayName,
    alsoKnownAs: Array.from(alsoKnownAs),
    firstSeen,
    lastSeen,
    servers: perServer.map((s) => ({ id: s.serverId, name: s.serverName })),
    totals,
    perServer,
  };
}

export async function getPlayerActivity({ identityId, serverId, types, beforeTsMs, limit, listAllServers, dataDir, sanitizeServerId }) {
  const servers = serverId
    ? [{ id: serverId, name: serverId }]
    : await listAllServers();

  const typeSet = types && types.size ? types : null;
  const cutoff = typeof beforeTsMs === 'number' ? beforeTsMs : Date.now();
  const cap = limit || 50;

  const items = [];
  for (const server of servers) {
    const filePath = path.join(dataDir, 'servers', sanitizeServerId(server.id), 'events.ndjson');
    const lines = await scanServerForIdentity(filePath, identityId);
    for (const { type, tsMs, event } of lines) {
      if (tsMs >= cutoff) continue;
      if (typeSet && !typeSet.has(type)) continue;
      items.push({ tsMs, type, serverId: server.id, serverName: server.name, detail: event });
    }
  }

  items.sort((a, b) => b.tsMs - a.tsMs);
  const page = items.slice(0, cap);
  const nextBeforeTsMs = page.length === cap ? page[page.length - 1].tsMs : null;
  return { items: page, nextBeforeTsMs };
}
