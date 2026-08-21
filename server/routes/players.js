// /api/players/* — player search, profile, activity, and anti-cheat incidents
// for the ReforgedZ Player Profiles desktop app. Gated at the mount site in
// index.js with requireAuth + requireTool('players'), same pattern as
// /api/replay/* with requireTool('replay') - no per-route gate needed here
// since this is a single flat permission, not a category system like tickets.

import express from 'express';
import { searchPlayers, getPlayerProfile, getPlayerActivity } from '../lib/playerHistory.js';
import { scanServerForIncidents } from '../lib/anticheat.js';

export function buildPlayersRouter({ asyncRoute, DATA_DIR, listAllServers, sanitizeServerId, readJsonOrNull, path }) {
  const router = express.Router();

  router.get('/search', asyncRoute(async (req, res) => {
    const q = String(req.query.q || '');
    const limit = req.query.limit ? Number(req.query.limit) : 25;
    const results = await searchPlayers({
      query: q,
      limit: Math.min(Math.max(limit, 1), 100),
      listAllServers,
      readJsonOrNull,
      dataDir: DATA_DIR,
    });
    res.json({ results });
  }));

  router.get('/:identityId/profile', asyncRoute(async (req, res) => {
    const identityId = String(req.params.identityId || '');
    if (!identityId) { res.status(400).json({ error: 'missing identityId' }); return; }
    const profile = await getPlayerProfile({
      identityId, listAllServers, readJsonOrNull, dataDir: DATA_DIR, sanitizeServerId,
    });
    res.json(profile);
  }));

  router.get('/:identityId/activity', asyncRoute(async (req, res) => {
    const identityId = String(req.params.identityId || '');
    if (!identityId) { res.status(400).json({ error: 'missing identityId' }); return; }
    const serverId = req.query.serverId ? String(req.query.serverId) : null;
    const beforeTsMs = req.query.beforeTsMs ? Number(req.query.beforeTsMs) : null;
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const types = typeof req.query.types === 'string' && req.query.types.trim()
      ? new Set(req.query.types.split(',').map((t) => t.trim()).filter(Boolean))
      : null;
    const result = await getPlayerActivity({
      identityId, serverId, types, beforeTsMs,
      limit: Math.min(Math.max(limit, 1), 200),
      listAllServers, dataDir: DATA_DIR, sanitizeServerId,
    });
    res.json(result);
  }));

  // Anti-cheat incidents, always scoped to one server (per the requirement that
  // this reads the same way the replay tooling is organized - per server, not
  // a merged global pool). v1 scans the server's full events.ndjson on each
  // request; this is the same "expensive on a multi-GB log" tradeoff flagged
  // for /profile - a SQLite side-index is the natural place to cache this if
  // request latency becomes a problem.
  router.get('/incidents', asyncRoute(async (req, res) => {
    const serverId = String(req.query.serverId || '');
    if (!serverId) { res.status(400).json({ error: 'missing serverId' }); return; }
    const safeId = sanitizeServerId(serverId);
    const filePath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');

    let incidents = await scanServerForIncidents(safeId, filePath);

    const identityId = req.query.identityId ? String(req.query.identityId) : null;
    if (identityId) incidents = incidents.filter((i) => i.identityId === identityId);

    const category = req.query.category ? String(req.query.category) : null;
    if (category) incidents = incidents.filter((i) => i.category === category);

    const minConfidence = req.query.minConfidence ? Number(req.query.minConfidence) : 0;
    if (minConfidence > 0) incidents = incidents.filter((i) => i.confidence >= minConfidence);

    incidents.sort((a, b) => b.tsMs - a.tsMs);

    const limit = req.query.limit ? Number(req.query.limit) : 200;
    const cap = Math.min(Math.max(limit, 1), 1000);

    res.json({ serverId: safeId, incidents: incidents.slice(0, cap), total: incidents.length });
  }));

  return router;
}
