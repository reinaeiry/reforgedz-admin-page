// Permanent player index (SQLite, better-sqlite3). Unlike events.ndjson, which
// the existing retention sweep trims to a rolling window (default 7 days),
// this survives forever - it's fed incrementally on every ingested event (see
// recordEvent, called from the ingest path in index.js) and can be backfilled
// once from whatever's still in the raw logs (scripts/backfill-player-index.mjs).
//
// Deliberately NOT a permanent copy of every raw event - snapshot/vehicleIndex/
// serverHealth stay bulk telemetry subject to the normal retention window.
// This indexes the low-volume, meaningful-per-player events: kills, deaths,
// hits, interactions, disconnects, and per-server aggregate stats (including
// session count / playtime, paired from join+disconnect).

import Database from 'better-sqlite3';
import path from 'node:path';
import { checkHitForIncidents, checkInteractForIncident, SEVERITY } from './anticheat.js';

const SEVERITY_RANK = { [SEVERITY.LOW]: 1, [SEVERITY.MEDIUM]: 2, [SEVERITY.HIGH]: 4 };
const SEVERITY_OF = {
  wallbang: SEVERITY.HIGH, godMode: SEVERITY.HIGH, interactRange: SEVERITY.MEDIUM,
};

let db = null;

export function initPlayerIndex(dataDir) {
  const dbPath = path.join(dataDir, 'players.db');
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS players (
      identity_id TEXT PRIMARY KEY,
      display_name TEXT,
      first_seen_ms INTEGER,
      last_seen_ms INTEGER
    );

    CREATE TABLE IF NOT EXISTS player_names (
      identity_id TEXT NOT NULL,
      name TEXT NOT NULL,
      last_seen_ms INTEGER,
      PRIMARY KEY (identity_id, name)
    );

    CREATE TABLE IF NOT EXISTS player_server_stats (
      identity_id TEXT NOT NULL,
      server_id TEXT NOT NULL,
      kills INTEGER NOT NULL DEFAULT 0,
      deaths INTEGER NOT NULL DEFAULT 0,
      hits INTEGER NOT NULL DEFAULT 0,
      shots INTEGER NOT NULL DEFAULT 0,
      sessions INTEGER NOT NULL DEFAULT 0,
      playtime_ms INTEGER NOT NULL DEFAULT 0,
      first_seen_ms INTEGER,
      last_seen_ms INTEGER,
      -- Permanent, all-time anti-cheat signal - NOT a live rescan. Only the
      -- cheap single-event checks (wallbang, godMode, interactRange) are
      -- accumulated here as events are indexed; the multi-event checks
      -- (speedhack, noclip, aimSnap, ammo) still need a live scan (Flagged tab)
      -- since they require rolling snapshot state this indexer doesn't keep.
      risk_score REAL NOT NULL DEFAULT 0,
      flagged_count INTEGER NOT NULL DEFAULT 0,
      max_severity TEXT NOT NULL DEFAULT 'low',
      PRIMARY KEY (identity_id, server_id)
    );

    CREATE TABLE IF NOT EXISTS player_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      identity_id TEXT NOT NULL,
      server_id TEXT NOT NULL,
      ts_ms INTEGER NOT NULL,
      type TEXT NOT NULL,
      detail_json TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_player_events_identity ON player_events(identity_id, ts_ms DESC);
    CREATE INDEX IF NOT EXISTS idx_player_events_server ON player_events(server_id, ts_ms DESC);

    -- Bridges join -> disconnect for session/playtime pairing. Keyed by the
    -- numeric session-local playerId, NOT identityId, because join events
    -- often haven't resolved identityId yet (empty string) at connect time -
    -- disconnect events reliably have it, so identity gets attributed there.
    CREATE TABLE IF NOT EXISTS pending_sessions (
      server_id TEXT NOT NULL,
      player_id INTEGER NOT NULL,
      joined_ts_ms INTEGER NOT NULL,
      name TEXT,
      PRIMARY KEY (server_id, player_id)
    );
  `);
  return db;
}

export function getDb() {
  if (!db) throw new Error('playerIndex not initialized - call initPlayerIndex first');
  return db;
}

function upsertPlayer(identityId, name, tsMs) {
  if (!identityId) return;
  db.prepare(`
    INSERT INTO players (identity_id, display_name, first_seen_ms, last_seen_ms)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(identity_id) DO UPDATE SET
      last_seen_ms = MAX(last_seen_ms, excluded.last_seen_ms),
      display_name = excluded.display_name
  `).run(identityId, name || identityId, tsMs, tsMs);

  if (name) {
    db.prepare(`
      INSERT INTO player_names (identity_id, name, last_seen_ms)
      VALUES (?, ?, ?)
      ON CONFLICT(identity_id, name) DO UPDATE SET last_seen_ms = MAX(last_seen_ms, excluded.last_seen_ms)
    `).run(identityId, name, tsMs);
  }
}

function bumpServerStat(identityId, serverId, field, delta, tsMs) {
  if (!identityId) return;
  db.prepare(`
    INSERT INTO player_server_stats (identity_id, server_id, ${field}, first_seen_ms, last_seen_ms)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(identity_id, server_id) DO UPDATE SET
      ${field} = ${field} + excluded.${field},
      first_seen_ms = MIN(first_seen_ms, excluded.first_seen_ms),
      last_seen_ms = MAX(last_seen_ms, excluded.last_seen_ms)
  `).run(identityId, serverId, delta, tsMs, tsMs);
}

function logEvent(identityId, serverId, tsMs, type, detail) {
  if (!identityId) return;
  db.prepare(`
    INSERT INTO player_events (identity_id, server_id, ts_ms, type, detail_json)
    VALUES (?, ?, ?, ?, ?)
  `).run(identityId, serverId, tsMs, type, JSON.stringify(detail || {}));
}

// Permanent risk accumulation. riskScore uses the same weighting as the live
// scanner's summarizePlayerRisk (severity weight x confidence fraction) so a
// player's "All Players" risk number and their "Flagged" tab standing agree
// in spirit, even though this only ever sees the cheap single-event checks.
function bumpRisk(identityId, serverId, category, confidence, tsMs) {
  if (!identityId) return;
  const severity = SEVERITY_OF[category] || SEVERITY.LOW;
  const scoreDelta = (SEVERITY_RANK[severity] || 1) * (confidence / 100);

  const existing = db.prepare(`SELECT max_severity FROM player_server_stats WHERE identity_id = ? AND server_id = ?`)
    .get(identityId, serverId);
  const nextSeverity = (!existing || (SEVERITY_RANK[severity] > (SEVERITY_RANK[existing.max_severity] || 0)))
    ? severity : existing.max_severity;

  db.prepare(`
    INSERT INTO player_server_stats (identity_id, server_id, risk_score, flagged_count, max_severity, first_seen_ms, last_seen_ms)
    VALUES (?, ?, ?, 1, ?, ?, ?)
    ON CONFLICT(identity_id, server_id) DO UPDATE SET
      risk_score = risk_score + excluded.risk_score,
      flagged_count = flagged_count + 1,
      max_severity = excluded.max_severity,
      first_seen_ms = MIN(first_seen_ms, excluded.first_seen_ms),
      last_seen_ms = MAX(last_seen_ms, excluded.last_seen_ms)
  `).run(identityId, serverId, scoreDelta, nextSeverity, tsMs, tsMs);
}

// Sanity cap on a single session's computed duration, in case a join was
// orphaned (server restarted between join and what would have been its
// disconnect) and got wrongly paired with a much later disconnect for the
// same recycled playerId slot.
const MAX_PLAUSIBLE_SESSION_MS = 24 * 60 * 60 * 1000;

// Core per-event indexer. Called once per parsed NDJSON line, both from the
// live ingest path (index.js) and the one-time backfill script - same
// function, same behavior, so backfilled and live-indexed history are
// indistinguishable afterward.
export function recordEvent(serverId, type, tsMs, evt) {
  if (!db || !evt) return;

  if (type === 'restart' || type === 'serverStart') {
    // Orphan any joins that never got a matching disconnect before this
    // restart - don't let them pair with a disconnect from the new run.
    db.prepare(`DELETE FROM pending_sessions WHERE server_id = ?`).run(serverId);
    return;
  }

  if (type === 'join') {
    if (typeof evt.playerId !== 'number') return;
    db.prepare(`
      INSERT INTO pending_sessions (server_id, player_id, joined_ts_ms, name)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(server_id, player_id) DO UPDATE SET joined_ts_ms = excluded.joined_ts_ms, name = excluded.name
    `).run(serverId, evt.playerId, tsMs, evt.name || null);
    return;
  }

  if (type === 'disconnect') {
    if (typeof evt.playerId !== 'number') return;
    upsertPlayer(evt.identityId, evt.name, tsMs);
    logEvent(evt.identityId, serverId, tsMs, 'disconnect', { name: evt.name });

    const pending = db.prepare(`SELECT joined_ts_ms FROM pending_sessions WHERE server_id = ? AND player_id = ?`)
      .get(serverId, evt.playerId);
    if (pending) {
      db.prepare(`DELETE FROM pending_sessions WHERE server_id = ? AND player_id = ?`).run(serverId, evt.playerId);
      const durationMs = tsMs - pending.joined_ts_ms;
      if (evt.identityId && durationMs > 0 && durationMs <= MAX_PLAUSIBLE_SESSION_MS) {
        bumpServerStat(evt.identityId, serverId, 'sessions', 1, tsMs);
        bumpServerStat(evt.identityId, serverId, 'playtime_ms', durationMs, tsMs);
      }
    }
    return;
  }

  if (type === 'kill' || type === 'death') {
    if (evt.victimIdentityId) {
      upsertPlayer(evt.victimIdentityId, evt.victimName, tsMs);
      bumpServerStat(evt.victimIdentityId, serverId, 'deaths', 1, tsMs);
      logEvent(evt.victimIdentityId, serverId, tsMs, 'death', {
        killerName: evt.killerName, weaponName: evt.weaponName, distanceM: evt.distanceM, relation: evt.relation,
      });
    }
    if (type === 'kill' && evt.killerIdentityId && evt.killerIdentityId !== evt.victimIdentityId) {
      upsertPlayer(evt.killerIdentityId, evt.killerName, tsMs);
      bumpServerStat(evt.killerIdentityId, serverId, 'kills', 1, tsMs);
      logEvent(evt.killerIdentityId, serverId, tsMs, 'kill', {
        victimName: evt.victimName, weaponName: evt.weaponName, distanceM: evt.distanceM, relation: evt.relation,
      });
    }
    return;
  }

  if (type === 'hit') {
    if (evt.shooterIdentityId) {
      upsertPlayer(evt.shooterIdentityId, evt.shooterName, tsMs);
      bumpServerStat(evt.shooterIdentityId, serverId, 'hits', 1, tsMs);
      // Instigator-side record: who they hit, with what, how much damage, from
      // how far, and whether it was through blocked line of sight.
      logEvent(evt.shooterIdentityId, serverId, tsMs, 'hit', {
        victimIdentityId: evt.victimIdentityId, victimName: evt.victimName,
        weaponName: evt.weaponName, distanceM: evt.distanceM, damage: evt.damage,
        losBlocked: evt.losBlocked, fatal: evt.fatal,
      });
    }
    if (evt.victimIdentityId) {
      upsertPlayer(evt.victimIdentityId, evt.victimName, tsMs);
      // Receiving-side record: who hit them and how much - this is the
      // "instigator/damage" half that was missing from a victim's own timeline.
      logEvent(evt.victimIdentityId, serverId, tsMs, 'damaged', {
        shooterIdentityId: evt.shooterIdentityId, shooterName: evt.shooterName,
        weaponName: evt.weaponName, distanceM: evt.distanceM, damage: evt.damage,
        healthBefore: evt.victimHealthBefore, healthAfter: evt.victimHealthAfter, fatal: evt.fatal,
      });
    }

    // Permanent risk accumulation - the cheap single-event checks only (see
    // bumpRisk's comment). Logged as their own event type (not 'hit') so a
    // flagged incident is visually distinct from a normal hit in the timeline.
    for (const check of checkHitForIncidents(evt)) {
      const owner = check.category === 'wallbang' ? evt.shooterIdentityId : evt.victimIdentityId;
      if (!owner) continue;
      bumpRisk(owner, serverId, check.category, check.confidence, tsMs);
      logEvent(owner, serverId, tsMs, check.category, { confidence: check.confidence, summary: check.summary, ...check.evidence });
    }
    return;
  }

  if (type === 'shot') {
    if (evt.identityId) {
      upsertPlayer(evt.identityId, evt.name, tsMs);
      bumpServerStat(evt.identityId, serverId, 'shots', 1, tsMs);
    }
    return;
  }

  if (type === 'interact') {
    if (evt.playerIdentityId) {
      upsertPlayer(evt.playerIdentityId, null, tsMs);
      logEvent(evt.playerIdentityId, serverId, tsMs, 'interact', {
        actionType: evt.actionType, distanceM: evt.distanceM,
      });

      const check = checkInteractForIncident(evt);
      if (check) {
        bumpRisk(evt.playerIdentityId, serverId, check.category, check.confidence, tsMs);
        logEvent(evt.playerIdentityId, serverId, tsMs, check.category, { confidence: check.confidence, summary: check.summary, ...check.evidence });
      }
    }
    return;
  }

  // snapshot/vehicleIndex/serverHealth/etc: intentionally not indexed here -
  // bulk telemetry, stays in the raw (retention-bound) log only. Snapshot
  // *does* carry names/identityId per player though, and is by far the most
  // frequent event, which is exactly why it's cheap to at least refresh
  // known-name/last-seen from it without writing a full event row.
  if (type === 'snapshot' && Array.isArray(evt.players)) {
    for (const pl of evt.players) {
      if (pl && pl.identityId) upsertPlayer(pl.identityId, pl.name, tsMs);
    }
  }
}

const SEVERITY_RANK_SQL = "CASE pss.max_severity WHEN 'high' THEN 3 WHEN 'medium' THEN 2 ELSE 1 END";
const SEVERITY_FROM_RANK = { 3: SEVERITY.HIGH, 2: SEVERITY.MEDIUM, 1: SEVERITY.LOW };

// The default "All Players" view: every indexed player, all-time, ranked by
// permanent risk score first (severity x confidence, accumulated by
// bumpRisk) - not gated behind typing a search query. `query`, when given,
// filters by name on top of the same ranking; it's a refinement, not a gate.
export function listPlayersIndexed({ query, limit, offset, excludeIds } = {}) {
  const hasQuery = typeof query === 'string' && query.trim().length >= 2;
  const excludeList = Array.isArray(excludeIds) ? excludeIds.filter(Boolean) : [];

  const conditions = [];
  if (hasQuery) conditions.push(`p.identity_id IN (SELECT DISTINCT identity_id FROM player_names WHERE LOWER(name) LIKE ?)`);
  if (excludeList.length) conditions.push(`p.identity_id NOT IN (${excludeList.map(() => '?').join(',')})`);
  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  const params = [];
  if (hasQuery) params.push(`%${query.trim().toLowerCase()}%`);
  if (excludeList.length) params.push(...excludeList);

  const rows = db.prepare(`
    SELECT
      p.identity_id AS identityId,
      p.display_name AS displayName,
      p.last_seen_ms AS lastSeen,
      COALESCE(SUM(pss.risk_score), 0) AS riskScore,
      COALESCE(SUM(pss.flagged_count), 0) AS flaggedCount,
      MAX(${SEVERITY_RANK_SQL}) AS severityRank,
      COALESCE(SUM(pss.kills), 0) AS kills,
      COALESCE(SUM(pss.deaths), 0) AS deaths,
      COALESCE(SUM(pss.hits), 0) AS hits,
      COALESCE(SUM(pss.sessions), 0) AS sessions,
      COALESCE(SUM(pss.playtime_ms), 0) AS playtimeMs,
      COALESCE(SUM(pss.kills + pss.deaths + pss.hits + pss.sessions), 0) AS activity
    FROM players p
    LEFT JOIN player_server_stats pss ON pss.identity_id = p.identity_id
    ${whereClause}
    GROUP BY p.identity_id
    -- riskScore is the primary sort, but while hit/interact capture isn't
    -- deployed everywhere it's 0 for literally everyone, which degraded the
    -- ranking to pure recency - surfacing players who joined for two minutes
    -- and left, making the whole list look empty even though most players
    -- have real kill/death history. activity (kills+deaths+hits+sessions) as
    -- the second sort key means substantive profiles surface even when no
    -- one has been flagged yet; lastSeen is only the final tiebreaker now.
    ORDER BY riskScore DESC, activity DESC, lastSeen DESC
    LIMIT ? OFFSET ?
  `).all(...params, limit || 50, offset || 0);

  return rows.map((r) => ({
    identityId: r.identityId,
    displayName: r.displayName,
    lastSeen: r.lastSeen,
    riskScore: Math.round(r.riskScore * 10) / 10,
    flaggedCount: r.flaggedCount,
    highestSeverity: r.flaggedCount > 0 ? (SEVERITY_FROM_RANK[r.severityRank] || SEVERITY.LOW) : null,
    kills: r.kills, deaths: r.deaths, hits: r.hits, sessions: r.sessions, playtimeMs: r.playtimeMs,
  }));
}

export function getPlayerProfileIndexed(identityId) {
  const player = db.prepare(`SELECT * FROM players WHERE identity_id = ?`).get(identityId);
  if (!player) return null;

  const names = db.prepare(`SELECT name FROM player_names WHERE identity_id = ? ORDER BY last_seen_ms DESC`)
    .all(identityId).map((n) => n.name);
  const perServer = db.prepare(`SELECT * FROM player_server_stats WHERE identity_id = ?`).all(identityId);

  const totals = { kills: 0, deaths: 0, hits: 0, shots: 0, sessions: 0, playtimeMs: 0, riskScore: 0, flaggedCount: 0 };
  let severityRank = 0;
  for (const s of perServer) {
    totals.kills += s.kills; totals.deaths += s.deaths; totals.hits += s.hits;
    totals.shots += s.shots; totals.sessions += s.sessions; totals.playtimeMs += s.playtime_ms;
    totals.riskScore += s.risk_score; totals.flaggedCount += s.flagged_count;
    severityRank = Math.max(severityRank, SEVERITY_RANK[s.max_severity] || 0);
  }
  totals.riskScore = Math.round(totals.riskScore * 10) / 10;

  return {
    identityId,
    displayName: names[0] || player.display_name,
    alsoKnownAs: names.slice(1),
    firstSeen: player.first_seen_ms,
    lastSeen: player.last_seen_ms,
    servers: perServer.map((s) => ({ id: s.server_id, name: s.server_id })),
    totals,
    highestSeverity: totals.flaggedCount > 0 ? (SEVERITY_FROM_RANK[severityRank] || SEVERITY.LOW) : null,
    perServer: perServer.map((s) => ({
      serverId: s.server_id, serverName: s.server_id,
      kills: s.kills, deaths: s.deaths, hits: s.hits, shots: s.shots,
      sessions: s.sessions, playtimeMs: s.playtime_ms,
      firstSeen: s.first_seen_ms, lastSeen: s.last_seen_ms,
    })),
  };
}

// Permanent incidents for a server - survives the raw log's 7-day retention
// trim, unlike the live scanner (anticheat.js's scanServerForIncidents), which
// only ever sees whatever's still in events.ndjson. Only covers the categories
// bumpRisk actually accumulates (wallbang, godMode, interactRange - the
// single-event checks; see recordEvent's 'hit'/'interact' branches). The
// multi-event categories (speedhack, noclip, aimSnap, ammo, ...) never make it
// here and stay live-scan-only, bound by retention - routes/players.js merges
// both sources so a caller sees "whatever's permanently known, plus whatever's
// still in the live window" rather than picking one.
const PERMANENT_INCIDENT_TYPES = Object.freeze(['wallbang', 'godMode', 'interactRange']);

export function listIncidentsIndexed(serverId, { identityId, category, minConfidence, limit } = {}) {
  const types = category ? PERMANENT_INCIDENT_TYPES.filter((t) => t === category) : PERMANENT_INCIDENT_TYPES;
  if (!types.length) return [];

  const conditions = ['server_id = ?', `type IN (${types.map(() => '?').join(',')})`];
  const params = [serverId, ...types];
  if (identityId) { conditions.push('identity_id = ?'); params.push(identityId); }

  const rows = db.prepare(`
    SELECT identity_id AS identityId, ts_ms AS tsMs, type AS category, detail_json AS detailJson
    FROM player_events
    WHERE ${conditions.join(' AND ')}
    ORDER BY ts_ms DESC
    LIMIT ?
  `).all(...params, Math.min(Math.max(limit || 500, 1), 2000));

  return rows
    .map((r) => {
      const detail = JSON.parse(r.detailJson || '{}');
      return {
        category: r.category,
        severity: SEVERITY_OF[r.category] || SEVERITY.LOW,
        confidence: typeof detail.confidence === 'number' ? detail.confidence : 0,
        serverId,
        identityId: r.identityId,
        tsMs: r.tsMs,
        summary: detail.summary || '',
        evidence: detail,
      };
    })
    .filter((i) => !minConfidence || i.confidence >= minConfidence);
}

export function getPlayerTimelineIndexed(identityId, { serverId, types, beforeTsMs, limit }) {
  const conditions = ['identity_id = ?'];
  const params = [identityId];
  if (serverId) { conditions.push('server_id = ?'); params.push(serverId); }
  if (types && types.size) {
    conditions.push(`type IN (${Array.from(types).map(() => '?').join(',')})`);
    params.push(...types);
  }
  if (typeof beforeTsMs === 'number') { conditions.push('ts_ms < ?'); params.push(beforeTsMs); }

  const cap = limit || 50;
  const rows = db.prepare(`
    SELECT server_id AS serverId, ts_ms AS tsMs, type, detail_json AS detailJson
    FROM player_events
    WHERE ${conditions.join(' AND ')}
    ORDER BY ts_ms DESC
    LIMIT ?
  `).all(...params, cap);

  const items = rows.map((r) => ({
    tsMs: r.tsMs, type: r.type, serverId: r.serverId, serverName: r.serverId,
    detail: JSON.parse(r.detailJson || '{}'),
  }));
  const nextBeforeTsMs = items.length === cap ? items[items.length - 1].tsMs : null;
  return { items, nextBeforeTsMs };
}
