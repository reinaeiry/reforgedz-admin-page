// Tests for our own player system (sessions, population, notes, flags, the BattleMetrics archive
// reader, A2S parsing). Throwaway databases in a temp dir only - never the live data/.
//   node scripts/test-players-system.mjs          (inside the admin container, where better-sqlite3 is built)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import * as pi from '../server/lib/playerIndex.js';
import * as bma from '../server/lib/bmArchive.js';
import { parseInfo } from '../server/lib/a2s.js';

const fails = [];
const check = (label, cond, extra = '') => {
  console.log(`${cond ? '  PASS' : '  FAIL'}  ${label}${extra ? '  ' + extra : ''}`);
  if (!cond) fails.push(label);
};
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rz-players-'));
const G1 = '11111111-1111-4111-8111-111111111111';
const G2 = '22222222-2222-4222-8222-222222222222';
const T0 = Date.UTC(2026, 8, 28, 12, 0, 0);

try {
  pi.initPlayerIndex(tmp);
  const db = pi.getDb();
  const cols = db.prepare('PRAGMA table_info(pending_sessions)').all().map((c) => c.name);
  check('pending_sessions gained identity_id', cols.includes('identity_id'));
  pi.initPlayerIndex(tmp); // a second start must not fail on the migration
  check('re-running the migration is harmless', true);

  // a normal session: join (no identity yet) -> disconnect (identity)
  pi.recordEvent('eu1', 'join', T0, { event: { playerId: 5, name: 'Alpha' } });
  pi.recordEvent('eu1', 'disconnect', T0 + 30 * 60_000, { event: { playerId: 5, identityId: G1, name: 'Alpha' } });
  let s = pi.listSessions(G1);
  check('disconnect writes one session', s.length === 1 && s[0].endReason === 'disconnect' && s[0].leftMs - s[0].joinedMs === 30 * 60_000,
    JSON.stringify(s[0] || {}));

  // a session cut by a restart: the identity comes from a snapshot
  pi.recordEvent('eu1', 'join', T0 + 60 * 60_000, { event: { playerId: 9, name: 'Bravo' } });
  pi.recordEvent('eu1', 'snapshot', T0 + 61 * 60_000, { players: [{ playerId: 9, identityId: G2, name: 'Bravo' }] });
  pi.recordEvent('eu1', 'restart', T0 + 90 * 60_000, { event: {} });
  s = pi.listSessions(G2);
  check('a restart closes a snapshot-identified session', s.length === 1 && s[0].endReason === 'restart'
    && s[0].leftMs === T0 + 90 * 60_000, JSON.stringify(s[0] || {}));
  check('the restart still clears the open sessions', db.prepare('SELECT COUNT(*) AS n FROM pending_sessions').get().n === 0);
  const stats = db.prepare('SELECT sessions FROM player_server_stats WHERE identity_id = ?').get(G2);
  check('running totals unchanged by a restart-closed session', !stats || stats.sessions === 0);

  // a join whose identity never arrives is not guessed
  pi.recordEvent('eu2', 'join', T0, { event: { playerId: 3, name: 'Ghost' } });
  pi.recordEvent('eu2', 'restart', T0 + 60_000, { event: {} });
  check('an unidentified session is never attributed', db.prepare('SELECT COUNT(*) AS n FROM sessions').get().n === 2);

  // a ridiculous duration is dropped, as in the totals
  pi.recordEvent('eu1', 'join', T0, { event: { playerId: 6, name: 'Long' } });
  pi.recordEvent('eu1', 'disconnect', T0 + 3 * 86400_000, { event: { playerId: 6, identityId: G1, name: 'Long' } });
  check('an implausible session is dropped', pi.listSessions(G1).length === 1);

  // notes
  const id = pi.addNote(G1, '  suspected alt of someone  ', 'Nattii', 'u1');
  check('addNote returns an id and trims', Number.isInteger(id) && pi.listNotes(G1)[0].note === 'suspected alt of someone');
  check('empty note refused', pi.addNote(G1, '   ', 'Nattii') === null);
  check('editNote records the editor', pi.editNote(id, 'confirmed alt', 'Luigi') && pi.listNotes(G1)[0].editedBy === 'Luigi');
  check('deleteNote hides it but keeps it', pi.deleteNote(id, 'Luigi') && pi.listNotes(G1).length === 0
    && pi.listNotes(G1, { includeDeleted: true })[0].deletedBy === 'Luigi');
  check('a deleted note cannot be edited', pi.editNote(id, 'again', 'X') === false);

  // flags
  check('addFlag', pi.addFlag(G1, 'Streamer', 'Nattii') && pi.listFlags(G1).length === 1);
  check('no duplicate open flag', pi.addFlag(G1, 'Streamer', 'Nattii') === false);
  check('removeFlag closes it', pi.removeFlag(G1, 'Streamer', 'Nattii') && pi.listFlags(G1).length === 0);
  check('the removal is kept', db.prepare('SELECT removed_by FROM player_flags').get().removed_by === 'Nattii');

  // population
  pi.recordPopulation('EU1', T0 + 15_000, 50, 100);
  pi.recordPopulation('EU1', T0 + 45_000, 52, 100); // same minute: replaced
  pi.recordPopulation('EU1', T0 + 60_000, 55, 100);
  let pts = pi.getPopulation('EU1', { sinceMs: T0 - 1, untilMs: T0 + 120_000 });
  check('population keeps one row per minute', pts.length === 2 && pts[0].players === 52, JSON.stringify(pts));
  pts = pi.getPopulation('EU1', { sinceMs: T0 - 5 * 86400_000, untilMs: T0 + 120_000 });
  check('long ranges bucket by the hour (average and peak)', pts.length === 1 && pts[0].peak === 55, JSON.stringify(pts));

  // the BattleMetrics archive reader, on a synthetic archive
  const adb = new Database(path.join(tmp, 'bm_archive.db'));
  adb.exec(`CREATE TABLE bm_meta (key TEXT PRIMARY KEY, value TEXT);
    CREATE TABLE bm_servers (id TEXT PRIMARY KEY, name TEXT, ip TEXT, port INTEGER, created_at TEXT);
    CREATE TABLE bm_players (bm_id TEXT PRIMARY KEY, name TEXT, reforger_uuid TEXT, created_at TEXT, updated_at TEXT);
    CREATE TABLE bm_identifiers (id TEXT PRIMARY KEY, bm_id TEXT, type TEXT, identifier TEXT, last_seen TEXT, metadata_json TEXT);
    CREATE TABLE bm_player_servers (bm_id TEXT, server_id TEXT, first_seen TEXT, last_seen TEXT, time_played INTEGER);
    CREATE TABLE bm_sessions (id TEXT PRIMARY KEY, bm_id TEXT, server_id TEXT, name TEXT, start TEXT, stop TEXT, first_time INTEGER);
    CREATE TABLE bm_bans (id TEXT PRIMARY KEY, bm_id TEXT, reforger_uuid TEXT, reason TEXT, note TEXT, timestamp TEXT, expires TEXT,
      admin TEXT, server_id TEXT, org_wide INTEGER, raw_json TEXT);
    CREATE TABLE bm_notes (id TEXT PRIMARY KEY, bm_id TEXT, note TEXT, author TEXT, created_at TEXT, shared INTEGER, raw_json TEXT);
    CREATE TABLE bm_flags (id TEXT PRIMARY KEY, bm_id TEXT, flag_id TEXT, flag_name TEXT, added_at TEXT, removed_at TEXT, raw_json TEXT);
    CREATE TABLE bm_counts (server_id TEXT, resolution TEXT, ts TEXT, min INTEGER, value INTEGER, max INTEGER);
    INSERT INTO bm_meta VALUES ('exported_at', '2026-09-28T19:42:00Z');
    INSERT INTO bm_servers VALUES ('39356767', '[EU1] Official ReforgedZ Chernarus', '162.19.127.130', 2001, '2026-06-08');
    INSERT INTO bm_players VALUES ('900', 'Alpha', '${G1}', '2026-06-10', '2026-09-27');
    INSERT INTO bm_identifiers VALUES ('i1', '900', 'name', 'Alpha_Old', '2026-07-01T00:00:00Z', NULL);
    INSERT INTO bm_identifiers VALUES ('i2', '900', 'reforgerUUID', '${G1}', '2026-09-27T00:00:00Z', NULL);
    INSERT INTO bm_sessions VALUES ('s1', '900', '39356767', 'Alpha_Old', '2026-07-01T10:00:00Z', '2026-07-01T11:00:00Z', 0);
    INSERT INTO bm_bans VALUES ('b1', '900', '${G1}', 'Duping', NULL, '2026-08-01T00:00:00Z', NULL, 'Staff', '39356767', 1, '{}');
    INSERT INTO bm_notes VALUES ('n1', '900', 'Warned about KOS', 'Staff', '2026-07-02T00:00:00Z', 1, '{}');
    INSERT INTO bm_counts VALUES ('39356767', '1440', '2026-07-01T00:00:00.000Z', 10, 40, 90);
    INSERT INTO bm_counts VALUES ('39356767', '60', '2026-09-20T10:00:00.000Z', 60, 70, 80);`);
  adb.close();
  bma.initBmArchive(tmp);
  const a = bma.forIdentity(G1);
  check('archive: names, sessions, bans, notes by UUID', a && a.names[0].name === 'Alpha_Old' && a.sessions.length === 1
    && a.sessions[0].leftMs - a.sessions[0].joinedMs === 3600_000 && a.bans[0].reason === 'Duping' && a.notes[0].note === 'Warned about KOS',
    JSON.stringify(a && { n: a.names.length, s: a.sessions.length, b: a.bans.length, no: a.notes.length }));
  check('archive: unknown UUID is null', bma.forIdentity(G2) === null);
  check('archive: name search finds old names', bma.searchNames('alpha_o')[0]?.identityId === G1);
  check('archive: a % in the search is literal', bma.searchNames('%').length === 0);
  const pop = bma.population('EU1', { sinceMs: 0 });
  check('archive: population, hourly where kept and daily before', pop.length === 2 && pop[0].resolution === 'day' && pop[1].resolution === 'hour',
    JSON.stringify(pop));
  check('archive: info', bma.archiveInfo().available && bma.archiveInfo().players === 1);
  check('archive: roster name by UUID, any case', bma.latestNameForIdentity(G1.toUpperCase()) === 'Alpha_Old');
  check('archive: roster name for an unknown UUID is null', bma.latestNameForIdentity(G2) === null);
  check('archive: BM id resolves to the UUID', bma.guidForBmId('900') === G1 && bma.guidForBmId('x1') === null);

  // A2S parsing on a captured-shape reply
  const reply = Buffer.concat([Buffer.from([0xff, 0xff, 0xff, 0xff, 0x49, 17]), Buffer.from('[EU1] Test\0Map\0folder\0game\0', 'utf8'),
    Buffer.from([0x00, 0x00, 80, 100, 0])]);
  const info = parseInfo(reply);
  check('A2S reply parsed', info.players === 80 && info.maxPlayers === 100 && info.name === '[EU1] Test', JSON.stringify(info));
  let threw = false;
  try { parseInfo(Buffer.from([0xff, 0xff, 0xff, 0xff, 0x41, 1, 2, 3, 4])); } catch { threw = true; }
  check('a challenge is not mistaken for an info reply', threw);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
console.log('\n' + (fails.length ? `${fails.length} FAILURES: ${fails.join('; ')}` : 'ALL CHECKS PASSED'));
process.exit(fails.length ? 1 : 0);
