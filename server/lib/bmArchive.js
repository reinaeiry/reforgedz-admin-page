// Read-only access to the BattleMetrics archive: everything BM held for the ReforgedZ organisation,
// exported before we stopped depending on it (Server-Ops tools/bm-export: bm_export.py pulls the raw
// API pages, bm_import.py builds data/bm_archive.db). Nothing here calls BattleMetrics.
//
// Keyed by Reforger UUID, the id the rest of this app uses. BM's own player id (bmId) is kept only to
// join its tables. The file is replaced whole by the importer, so it is reopened when its mtime moves.

import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

let dbPath = null;
let db = null;
let openedMtime = 0;

export function initBmArchive(dataDir) {
  dbPath = path.join(dataDir, 'bm_archive.db');
  open();
}

function open() {
  if (!dbPath) return null;
  let st;
  try { st = fs.statSync(dbPath); } catch { if (db) { try { db.close(); } catch {} } db = null; return null; }
  if (db && st.mtimeMs === openedMtime) return db;
  try {
    if (db) db.close();
    db = new Database(dbPath, { readonly: true, fileMustExist: true });
    openedMtime = st.mtimeMs;
  } catch {
    db = null;
  }
  return db;
}

const ms = (iso) => {
  const t = iso ? Date.parse(iso) : NaN;
  return Number.isFinite(t) ? t : null;
};

export function archiveInfo() {
  const d = open();
  if (!d) return { available: false };
  const meta = Object.fromEntries(d.prepare(`SELECT key, value FROM bm_meta`).all().map((r) => [r.key, r.value]));
  const count = (t) => d.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get().n;
  return {
    available: true,
    exportedAt: meta.exported_at || null,
    exportFinishedAt: meta.export_finished_at || null,
    players: count('bm_players'), sessions: count('bm_sessions'), bans: count('bm_bans'),
    notes: count('bm_notes'), flags: count('bm_flags'),
  };
}

// Everything the archive knows about one player. bmIds: a UUID can map to more than one BM player.
export function forIdentity(identityId, { sessionLimit = 200 } = {}) {
  const d = open();
  if (!d || !identityId) return null;
  const players = d.prepare(`SELECT bm_id AS bmId, name, created_at AS createdAt FROM bm_players
    WHERE reforger_uuid = ? COLLATE NOCASE`).all(identityId);
  const ids = players.map((p) => p.bmId);
  const inList = ids.map(() => '?').join(',') || "''";
  const names = ids.length ? d.prepare(`SELECT identifier AS name, last_seen AS lastSeen FROM bm_identifiers
    WHERE bm_id IN (${inList}) AND type = 'name' ORDER BY last_seen DESC`).all(...ids) : [];
  const servers = ids.length ? d.prepare(`SELECT s.name AS server, ps.first_seen AS firstSeen, ps.last_seen AS lastSeen,
      ps.time_played AS timePlayed
    FROM bm_player_servers ps LEFT JOIN bm_servers s ON s.id = ps.server_id WHERE ps.bm_id IN (${inList})
    ORDER BY ps.last_seen DESC`).all(...ids) : [];
  const sessions = ids.length ? d.prepare(`SELECT s.name AS server, ss.name, ss.start, ss.stop, ss.first_time AS firstTime
    FROM bm_sessions ss LEFT JOIN bm_servers s ON s.id = ss.server_id WHERE ss.bm_id IN (${inList})
    ORDER BY ss.start DESC LIMIT ?`).all(...ids, Math.min(Math.max(Number(sessionLimit) || 200, 1), 2000)) : [];
  const bans = d.prepare(`SELECT b.id, b.reason, b.note, b.timestamp, b.expires, b.admin, s.name AS server, b.org_wide AS orgWide
    FROM bm_bans b LEFT JOIN bm_servers s ON s.id = b.server_id
    WHERE b.reforger_uuid = ? COLLATE NOCASE ${ids.length ? `OR b.bm_id IN (${inList})` : ''}
    ORDER BY b.timestamp DESC`).all(identityId, ...ids);
  const notes = ids.length ? d.prepare(`SELECT id, note, author, created_at AS createdAt, shared FROM bm_notes
    WHERE bm_id IN (${inList}) ORDER BY created_at DESC`).all(...ids) : [];
  const flags = ids.length ? d.prepare(`SELECT flag_name AS flag, added_at AS addedAt, removed_at AS removedAt FROM bm_flags
    WHERE bm_id IN (${inList})`).all(...ids) : [];
  if (!ids.length && !bans.length) return null;
  return {
    bmIds: ids,
    names: names.map((n) => ({ name: n.name, lastSeenMs: ms(n.lastSeen) })),
    servers: servers.map((s) => ({ server: s.server, firstSeenMs: ms(s.firstSeen), lastSeenMs: ms(s.lastSeen),
      timePlayedS: s.timePlayed })),
    sessions: sessions.map((s) => ({ server: s.server, name: s.name, joinedMs: ms(s.start), leftMs: ms(s.stop),
      firstTime: !!s.firstTime })),
    bans: bans.map((b) => ({ id: b.id, reason: b.reason, note: b.note, bannedMs: ms(b.timestamp),
      expiresMs: ms(b.expires), admin: b.admin, server: b.server, orgWide: !!b.orgWide })),
    notes: notes.map((n) => ({ id: n.id, note: n.note, author: n.author, createdMs: ms(n.createdAt), shared: !!n.shared })),
    flags: flags.map((f) => ({ flag: f.flag, addedMs: ms(f.addedAt), removedMs: ms(f.removedAt) })),
  };
}

// Old links carry BattleMetrics' player id (/player/by-bm/:id): map it to the Reforger UUID.
// The newest name BattleMetrics recorded for a UUID, or null. One indexed query, for places that need
// only a display name (the GM roster), so it skips forIdentity's sessions, bans and notes.
export function latestNameForIdentity(identityId) {
  const d = open();
  if (!d || !identityId) return null;
  const row = d.prepare(`SELECT COALESCE((SELECT i.identifier FROM bm_identifiers i
        WHERE i.bm_id = p.bm_id AND i.type = 'name' ORDER BY i.last_seen DESC LIMIT 1), p.name) AS name
    FROM bm_players p WHERE p.reforger_uuid = ? COLLATE NOCASE ORDER BY p.updated_at DESC LIMIT 1`).get(identityId);
  return row?.name || null;
}

// The UUID behind a BattleMetrics player id, for old links that carry BM's id.
export function guidForBmId(bmId) {
  const d = open();
  if (!d || !/^\d{1,12}$/.test(String(bmId || ''))) return null;
  return d.prepare(`SELECT reforger_uuid AS guid FROM bm_players WHERE bm_id = ?`).get(String(bmId))?.guid || null;
}

// Name search over every name BM ever recorded, for players whose UUID it knew.
export function searchNames(query, limit = 25) {
  const d = open();
  const q = String(query || '').trim();
  if (!d || q.length < 2) return [];
  return d.prepare(`SELECT p.reforger_uuid AS identityId, i.identifier AS name, MAX(i.last_seen) AS lastSeen
    FROM bm_identifiers i JOIN bm_players p ON p.bm_id = i.bm_id
    WHERE i.type = 'name' AND p.reforger_uuid IS NOT NULL AND i.identifier LIKE ? ESCAPE '\\'
    GROUP BY p.reforger_uuid, i.identifier ORDER BY lastSeen DESC LIMIT ?`)
    .all(`%${q.replace(/[\\%_]/g, (c) => '\\' + c)}%`, Math.min(Math.max(Number(limit) || 25, 1), 200))
    .map((r) => ({ identityId: r.identityId, name: r.name, lastSeenMs: ms(r.lastSeen) }));
}

// Population history BM recorded for one of our servers, matched by the [EU1]-style tag in its name.
export function population(tag, { sinceMs, untilMs } = {}) {
  const d = open();
  if (!d || !tag) return [];
  const server = d.prepare(`SELECT id FROM bm_servers WHERE name LIKE ?`).get(`%[${tag}]%`);
  if (!server) return [];
  const since = new Date(Number(sinceMs) || 0).toISOString();
  const until = new Date(Number(untilMs) || Date.now()).toISOString();
  // hourly where BM kept it, daily for the rest
  const rows = d.prepare(`SELECT resolution, ts, min, value, max FROM bm_counts
    WHERE server_id = ? AND ts >= ? AND ts < ? ORDER BY ts`).all(server.id, since, until);
  const hourlyFrom = rows.filter((r) => r.resolution === '60').reduce((m, r) => (m && m < r.ts ? m : r.ts), null);
  return rows
    .filter((r) => r.resolution === '60' || !hourlyFrom || r.ts < hourlyFrom)
    .map((r) => ({ tsMs: ms(r.ts), players: r.value, peak: r.max, low: r.min, resolution: r.resolution === '60' ? 'hour' : 'day' }));
}
