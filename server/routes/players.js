// /api/players/* — player search, profile, activity, and anti-cheat incidents
// for the ReforgedZ Player Profiles desktop app. Gated at the mount site in
// index.js with requireAuth + requireTool('players'), same pattern as
// /api/replay/* with requireTool('replay') - no per-route gate needed here
// since this is a single flat permission, not a category system like tickets.

import express from 'express';
import { listPlayersIndexed, getPlayerProfileIndexed, getPlayerTimelineIndexed, listIncidentsIndexed, getDisplayNamesForIdentities,
  listSessions, getPopulation, listPopulationKeys, listNotes, addNote, editNote, deleteNote, getNote, listFlags, addFlag, removeFlag } from '../lib/playerIndex.js';
import { getIncidentsCached, summarizePlayerRisk, getScanProgress } from '../lib/anticheat.js';
import * as bmArchive from '../lib/bmArchive.js';
import { postAuditEvent, ctxFromReq } from '../lib/bmAudit.js';

const GUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// The live scanner (getIncidentsCached) only ever sees whatever's still in
// events.ndjson - once the 7-day retention sweep trims a line, any incident
// on it is gone from that source forever, which is exactly what "all time"
// flags require it not to do. listIncidentsIndexed reads the permanent SQLite
// index instead (fed forever by recordEvent, never trimmed) for the subset of
// categories cheap enough to accumulate per-event (wallbang/godMode/
// interactRange); the rest (speedhack, noclip, aimSnap, ammo, ...) still only
// exist in the live scan, bound by retention, since they need rolling
// multi-event state the permanent indexer doesn't keep. Merging both here
// means a caller always sees everything permanently known, plus whatever
// multi-event-only categories are still inside the live window - not one or
// the other. Deduped on (identityId, category, tsMs): the same wallbang, say,
// shows up in both sources while it's still within retention, and should
// count once, not twice.
function mergeIncidents(liveIncidents, indexedIncidents) {
  const seen = new Set(indexedIncidents.map((i) => `${i.identityId}|${i.category}|${i.tsMs}`));
  const extra = liveIncidents.filter((i) => !seen.has(`${i.identityId}|${i.category}|${i.tsMs}`));
  return [...indexedIncidents, ...extra];
}

// search/profile/activity now read the permanent SQLite index (playerIndex.js)
// instead of scanning raw events.ndjson - orders of magnitude faster, and
// survives the 7-day retention trim on the raw logs. The old raw-scan
// versions (lib/playerHistory.js) are left in place but unused here; incidents
// (below) merge that same permanent index with a live raw-log scan - see
// mergeIncidents above.

export function buildPlayersRouter({ asyncRoute, DATA_DIR, sanitizeServerId, path, getBanInfo, getActiveBannedIdentityIds,
  requirePerm }) {
  const router = express.Router();
  // Writes (notes, flags) need the same permission BattleMetrics notes needed, so the same staff keep it.
  const canWriteNotes = typeof requirePerm === 'function' ? requirePerm('writeNotes') : (req, res, next) => next();

  // ─── Our own player system (replaces BattleMetrics) ───────────────────────────────
  // Everything below reads our own data first and the BattleMetrics archive (bmArchive.js) for the
  // history BM collected before 2026-09-28. No route here calls BattleMetrics.

  // A name or a GUID -> candidate players, from every name we or BattleMetrics ever saw.
  router.get('/lookup', asyncRoute(async (req, res) => {
    const q = String(req.query.q || '').trim();
    if (q.length < 2) { res.json({ results: [] }); return; }
    const byId = new Map();
    const add = (identityId, name, lastSeenMs, source) => {
      if (!identityId) return;
      const cur = byId.get(identityId) || { identityId, names: new Set(), lastSeenMs: 0, sources: new Set() };
      if (name) cur.names.add(name);
      cur.lastSeenMs = Math.max(cur.lastSeenMs, lastSeenMs || 0);
      cur.sources.add(source);
      byId.set(identityId, cur);
    };
    if (GUID_RE.test(q)) {
      const p = getPlayerProfileIndexed(q);
      if (p) add(q, p.displayName, p.lastSeen, 'ours');
      const a = bmArchive.forIdentity(q, { sessionLimit: 1 });
      if (a) add(q, a.names[0]?.name, a.names[0]?.lastSeenMs, 'battlemetrics');
      if (!byId.size) add(q, null, 0, 'id');
    } else {
      for (const r of listPlayersIndexed({ query: q, limit: 50, offset: 0, excludeIds: [] })) {
        add(r.identityId, r.displayName, r.lastSeen, 'ours');
      }
      for (const r of bmArchive.searchNames(q, 50)) add(r.identityId, r.name, r.lastSeenMs, 'battlemetrics');
    }
    const results = [...byId.values()]
      .map((r) => ({ identityId: r.identityId, names: [...r.names], lastSeenMs: r.lastSeenMs || null, sources: [...r.sources] }))
      .sort((a, b) => (b.lastSeenMs || 0) - (a.lastSeenMs || 0))
      .slice(0, 50);
    res.json({ results });
  }));

  // Sessions: ours since 2026-09-28 plus BattleMetrics' (its last 90 days before the migration).
  router.get('/:identityId/sessions', asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    if (!GUID_RE.test(id)) { res.status(400).json({ error: 'bad identityId' }); return; }
    const limit = Math.min(Math.max(Number(req.query.limit) || 200, 1), 1000);
    const ours = listSessions(id, { limit }).map((s) => ({ ...s, source: 'ours' }));
    const archived = (bmArchive.forIdentity(id, { sessionLimit: limit })?.sessions || [])
      .map((s) => ({ serverId: s.server, name: s.name, joinedMs: s.joinedMs, leftMs: s.leftMs, source: 'battlemetrics' }));
    const sessions = [...ours, ...archived].sort((a, b) => (b.joinedMs || 0) - (a.joinedMs || 0)).slice(0, limit);
    res.json({ sessions });
  }));

  // Everything about a player at once, for the profile page.
  router.get('/:identityId/overview', asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    if (!GUID_RE.test(id)) { res.status(400).json({ error: 'bad identityId' }); return; }
    const profile = getPlayerProfileIndexed(id);
    const archive = bmArchive.forIdentity(id, { sessionLimit: 0 });
    if (!profile && !archive) { res.status(404).json({ error: 'not found' }); return; }
    res.json({
      identityId: id,
      profile: profile || null,
      ban: getBanInfo(id),
      notes: listNotes(id),
      flags: listFlags(id),
      archive: archive ? { names: archive.names, servers: archive.servers, bans: archive.bans, notes: archive.notes,
        flags: archive.flags } : null,
    });
  }));

  router.get('/:identityId/notes', asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    if (!GUID_RE.test(id)) { res.status(400).json({ error: 'bad identityId' }); return; }
    res.json({ notes: listNotes(id), archived: bmArchive.forIdentity(id, { sessionLimit: 0 })?.notes || [] });
  }));

  router.post('/:identityId/notes', canWriteNotes, asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    const note = typeof req.body?.note === 'string' ? req.body.note : '';
    if (!GUID_RE.test(id)) { res.status(400).json({ error: 'bad identityId' }); return; }
    if (!note.trim()) { res.status(400).json({ error: 'missing_note' }); return; }
    const noteId = addNote(id, note, req.rzUser?.username, req.rzUser?.id);
    postAuditEvent({ actorUsername: req.rzUser?.username, action: 'player.note.create',
      detail: { identityId: id, noteId, length: note.length }, ctx: ctxFromReq(req) });
    res.json({ id: noteId });
  }));

  router.patch('/notes/:noteId', canWriteNotes, asyncRoute(async (req, res) => {
    const noteId = Number(req.params.noteId);
    const note = typeof req.body?.note === 'string' ? req.body.note : '';
    if (!getNote(noteId)) { res.status(404).json({ error: 'not found' }); return; }
    if (!editNote(noteId, note, req.rzUser?.username)) { res.status(400).json({ error: 'not_changed' }); return; }
    postAuditEvent({ actorUsername: req.rzUser?.username, action: 'player.note.update', detail: { noteId },
      ctx: ctxFromReq(req) });
    res.json({ ok: true });
  }));

  router.delete('/notes/:noteId', canWriteNotes, asyncRoute(async (req, res) => {
    const noteId = Number(req.params.noteId);
    if (!getNote(noteId)) { res.status(404).json({ error: 'not found' }); return; }
    deleteNote(noteId, req.rzUser?.username);
    postAuditEvent({ actorUsername: req.rzUser?.username, action: 'player.note.delete', detail: { noteId },
      ctx: ctxFromReq(req) });
    res.json({ ok: true });
  }));

  router.post('/:identityId/flags', canWriteNotes, asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    const flag = typeof req.body?.flag === 'string' ? req.body.flag.trim() : '';
    if (!GUID_RE.test(id) || !flag) { res.status(400).json({ error: 'bad request' }); return; }
    const added = addFlag(id, flag, req.rzUser?.username);
    if (added) postAuditEvent({ actorUsername: req.rzUser?.username, action: 'player.flag.add', detail: { identityId: id, flag },
      ctx: ctxFromReq(req) });
    res.json({ ok: true, added, flags: listFlags(id) });
  }));

  router.delete('/:identityId/flags/:flag', canWriteNotes, asyncRoute(async (req, res) => {
    const id = String(req.params.identityId || '');
    if (!GUID_RE.test(id)) { res.status(400).json({ error: 'bad identityId' }); return; }
    const removed = removeFlag(id, String(req.params.flag || ''), req.rzUser?.username);
    if (removed) postAuditEvent({ actorUsername: req.rzUser?.username, action: 'player.flag.remove',
      detail: { identityId: id, flag: req.params.flag }, ctx: ctxFromReq(req) });
    res.json({ ok: true, removed, flags: listFlags(id) });
  }));

  // Players online over time: our own once-a-minute samples, with BattleMetrics' history before them.
  router.get('/population', asyncRoute(async (req, res) => {
    const server = String(req.query.server || '');
    if (!server) { res.json({ servers: listPopulationKeys(), archive: bmArchive.archiveInfo() }); return; }
    const untilMs = Number(req.query.until) || Date.now();
    const sinceMs = Number(req.query.since) || (untilMs - 7 * 86400_000);
    const ours = getPopulation(server, { sinceMs, untilMs });
    const oursFrom = ours.length ? ours[0].tsMs : untilMs;
    const archived = sinceMs < oursFrom ? bmArchive.population(server, { sinceMs, untilMs: oursFrom }) : [];
    res.json({ server, points: [...archived.map((p) => ({ ...p, source: 'battlemetrics' })),
      ...ours.map((p) => ({ ...p, source: 'ours' }))] });
  }));

  // No-query returns everyone, ranked by permanent risk score - this is the
  // "all inclusive" list, not a search-gated one. A query narrows it by name
  // without changing the ranking. Banned players are excluded by default
  // ("should disappear if banned") - pass includeBanned=1 to still see them,
  // e.g. for auditing an old ban rather than losing the record entirely.
  router.get('/search', asyncRoute(async (req, res) => {
    const q = req.query.q ? String(req.query.q) : '';
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const offset = req.query.offset ? Number(req.query.offset) : 0;
    const includeBanned = req.query.includeBanned === '1';
    const excludeIds = includeBanned ? [] : getActiveBannedIdentityIds();
    const results = listPlayersIndexed({
      query: q, limit: Math.min(Math.max(limit, 1), 200), offset: Math.max(offset, 0), excludeIds,
    });
    res.json({ results });
  }));

  router.get('/:identityId/profile', asyncRoute(async (req, res) => {
    const identityId = String(req.params.identityId || '');
    if (!identityId) { res.status(400).json({ error: 'missing identityId' }); return; }
    const profile = getPlayerProfileIndexed(identityId);
    if (!profile) { res.status(404).json({ error: 'not found' }); return; }
    profile.ban = getBanInfo(identityId);
    res.json(profile);
  }));

  router.get('/:identityId/activity', asyncRoute(async (req, res) => {
    const identityId = String(req.params.identityId || '');
    if (!identityId) { res.status(400).json({ error: 'missing identityId' }); return; }
    const serverId = req.query.serverId ? String(req.query.serverId) : null;
    const beforeTsMs = req.query.beforeTsMs ? Number(req.query.beforeTsMs) : undefined;
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const types = typeof req.query.types === 'string' && req.query.types.trim()
      ? new Set(req.query.types.split(',').map((t) => t.trim()).filter(Boolean))
      : null;
    const result = getPlayerTimelineIndexed(identityId, {
      serverId, types, beforeTsMs, limit: Math.min(Math.max(limit, 1), 200),
    });
    res.json(result);
  }));

  // Anti-cheat incidents, always scoped to one server (per the requirement that
  // this reads the same way the replay tooling is organized - per server, not
  // a merged global pool). Backed by getIncidentsCached's stale-while-revalidate
  // cache - only the first-ever request for a given server blocks on a real
  // scan; every request after that is instant. `stale`/`computedAt` in the
  // response tell the frontend whether it's looking at a background-refresh-
  // pending result, so it can show that rather than pretend it's always live.
  router.get('/incidents', asyncRoute(async (req, res) => {
    const serverId = String(req.query.serverId || '');
    if (!serverId) { res.status(400).json({ error: 'missing serverId' }); return; }
    const safeId = sanitizeServerId(serverId);
    const filePath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');

    const { incidents: live, stale, scanning, computedAt } = await getIncidentsCached(safeId, filePath);

    const identityId = req.query.identityId ? String(req.query.identityId) : null;
    const category = req.query.category ? String(req.query.category) : null;
    const minConfidence = req.query.minConfidence ? Number(req.query.minConfidence) : 0;
    const excludeCategories = typeof req.query.excludeCategories === 'string' && req.query.excludeCategories.trim()
      ? new Set(req.query.excludeCategories.split(',').map((c) => c.trim()).filter(Boolean))
      : null;

    const indexed = listIncidentsIndexed(safeId, { identityId, category, minConfidence, limit: 2000 });
    let incidents = mergeIncidents(live, indexed);

    if (identityId) incidents = incidents.filter((i) => i.identityId === identityId);
    if (category) incidents = incidents.filter((i) => i.category === category);
    if (minConfidence > 0) incidents = incidents.filter((i) => i.confidence >= minConfidence);
    if (excludeCategories) incidents = incidents.filter((i) => !excludeCategories.has(i.category));

    incidents.sort((a, b) => b.tsMs - a.tsMs);

    const limit = req.query.limit ? Number(req.query.limit) : 200;
    const cap = Math.min(Math.max(limit, 1), 1000);

    res.json({ serverId: safeId, incidents: incidents.slice(0, cap), total: incidents.length, stale, scanning, computedAt });
  }));

  // Player-ranked risk view - the primary landing view (vendor-anti-cheat-panel
  // style), backed by the same cache as /incidents so it costs nothing extra.
  router.get('/risk-summary', asyncRoute(async (req, res) => {
    const serverId = String(req.query.serverId || '');
    if (!serverId) { res.status(400).json({ error: 'missing serverId' }); return; }
    const safeId = sanitizeServerId(serverId);
    const filePath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');

    const excludeCategories = typeof req.query.excludeCategories === 'string' && req.query.excludeCategories.trim()
      ? new Set(req.query.excludeCategories.split(',').map((c) => c.trim()).filter(Boolean))
      : null;

    const { incidents: live, stale, scanning, computedAt } = await getIncidentsCached(safeId, filePath);
    const indexed = listIncidentsIndexed(safeId, { limit: 2000 });
    let merged = mergeIncidents(live, indexed);
    if (excludeCategories) merged = merged.filter((i) => !excludeCategories.has(i.category));
    const players = summarizePlayerRisk(merged);

    const limit = req.query.limit ? Number(req.query.limit) : 100;
    const cap = Math.min(Math.max(limit, 1), 500);
    const page = players.slice(0, cap);

    // The scanner only ever knows identityId - resolve display names from the
    // permanent index so the leaderboard doesn't just show raw GUIDs.
    const namesById = getDisplayNamesForIdentities(page.map((p) => p.identityId));
    for (const p of page) p.displayName = namesById[p.identityId] || null;

    res.json({ serverId: safeId, players: page, total: players.length, stale, scanning, computedAt });
  }));

  // Progress feed for an in-flight scan, so the frontend can show a real bar
  // instead of a spinner on the unavoidable first-ever scan of a server.
  // Mirrors routes/bm-sse.js's header/heartbeat conventions but polls
  // getScanProgress on an interval rather than subscribing to the event bus -
  // this isn't event-driven, it's "ask the scanner how far through the file
  // it is" every half second. Closes itself once the scan is no longer
  // running (progress entry gone), whether that's because it finished or
  // because no scan for this server was ever started.
  router.get('/scan-progress', (req, res) => {
    const serverId = String(req.query.serverId || '');
    if (!serverId) { res.status(400).json({ error: 'missing serverId' }); return; }
    const safeId = sanitizeServerId(serverId);

    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    });
    res.flushHeaders?.();
    res.write(`event: hello\ndata: {"ts":${Date.now()}}\n\n`);

    const poll = setInterval(() => {
      const progress = getScanProgress(safeId);
      if (!progress) {
        res.write(`event: done\ndata: {}\n\n`);
        clearInterval(poll);
        res.end();
        return;
      }
      const percent = progress.totalBytes > 0
        ? Math.min(99, Math.round((progress.bytesRead / progress.totalBytes) * 100))
        : 0;
      res.write(`event: progress\ndata: ${JSON.stringify({ ...progress, percent })}\n\n`);
    }, 500);

    req.on('close', () => clearInterval(poll));
  });

  return router;
}
