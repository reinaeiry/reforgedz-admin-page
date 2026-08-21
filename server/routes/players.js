// /api/players/* — player search, profile, activity, and anti-cheat incidents
// for the ReforgedZ Player Profiles desktop app. Gated at the mount site in
// index.js with requireAuth + requireTool('players'), same pattern as
// /api/replay/* with requireTool('replay') - no per-route gate needed here
// since this is a single flat permission, not a category system like tickets.

import express from 'express';
import { listPlayersIndexed, getPlayerProfileIndexed, getPlayerTimelineIndexed } from '../lib/playerIndex.js';
import { getIncidentsCached, summarizePlayerRisk, getScanProgress } from '../lib/anticheat.js';

// search/profile/activity now read the permanent SQLite index (playerIndex.js)
// instead of scanning raw events.ndjson - orders of magnitude faster, and
// survives the 7-day retention trim on the raw logs. The old raw-scan
// versions (lib/playerHistory.js) are left in place but unused here; incident
// scanning (below) still reads the raw log directly since incidents aren't
// indexed, only the underlying kill/death/hit/interact events are.

export function buildPlayersRouter({ asyncRoute, DATA_DIR, sanitizeServerId, path, getBanInfo, getActiveBannedIdentityIds }) {
  const router = express.Router();

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

    const { incidents: all, stale, scanning, computedAt } = await getIncidentsCached(safeId, filePath);
    let incidents = all;

    const identityId = req.query.identityId ? String(req.query.identityId) : null;
    if (identityId) incidents = incidents.filter((i) => i.identityId === identityId);

    const category = req.query.category ? String(req.query.category) : null;
    if (category) incidents = incidents.filter((i) => i.category === category);

    const minConfidence = req.query.minConfidence ? Number(req.query.minConfidence) : 0;
    if (minConfidence > 0) incidents = incidents.filter((i) => i.confidence >= minConfidence);

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

    const { incidents, stale, scanning, computedAt } = await getIncidentsCached(safeId, filePath);
    const players = summarizePlayerRisk(incidents);

    const limit = req.query.limit ? Number(req.query.limit) : 100;
    const cap = Math.min(Math.max(limit, 1), 500);

    res.json({ serverId: safeId, players: players.slice(0, cap), total: players.length, stale, scanning, computedAt });
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
