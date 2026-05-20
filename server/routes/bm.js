// /api/bm/* — BattleMetrics dashboard backend. Every route gated on a
// specific battlemetrics.* perm. The /search endpoint also reads our local
// replay-events PII cache and merges results.
//
// requireAuth + requirePerm are passed in by the parent (server/index.js)
// because they're closures over the rz-auth module that's instantiated there.

import express from 'express';
import * as bm from '../lib/battlemetrics.js';
import * as bmServers from '../lib/bmServers.js';
import * as linkages from '../lib/linkages.js';
import { postAuditEvent, ctxFromReq } from '../lib/bmAudit.js';
import { publish } from '../lib/eventBus.js';

export function buildBmRouter({ requirePerm, getPteroServers, asyncRoute }) {
  const router = express.Router();

  function getRequestedServerIds(req) {
    // ?servers=33903005,36715840 or omitted -> all of our org's mapped servers
    const q = req.query.servers;
    if (typeof q === 'string' && q.trim()) {
      return q.split(',').map((s) => s.trim()).filter(Boolean);
    }
    const all = bmServers.listAll();
    return all.map((s) => s.bmServerId);
  }

  // ─── Servers ──────────────────────────────────────────────────────────────

  router.get('/servers', requirePerm('viewServers'), asyncRoute(async (req, res) => {
    // Ensure mapping is fresh; refresh if forced.
    const pteros = await getPteroServers();
    const snap = await bmServers.ensure(pteros, { forceRefresh: req.query.refresh === '1' });
    const out = await Promise.all(Object.values(snap.mapping).map(async (m) => {
      try {
        const live = await bm.getServer(m.bmServerId);
        const a = live?.attributes || {};
        return {
          ...m,
          status: a.status || 'unknown',
          players: a.players ?? 0,
          maxPlayers: a.maxPlayers ?? 0,
          rank: a.rank ?? null,
          updatedAt: a.updatedAt || null
        };
      } catch {
        return { ...m, status: 'unknown', players: 0, maxPlayers: 0, error: true };
      }
    }));
    res.json({ servers: out, unmatched: snap.unmatched || [] });
  }));

  router.get('/servers/:id/players', requirePerm('viewServers'), asyncRoute(async (req, res) => {
    const players = await bm.getServerPlayers(req.params.id);
    res.json({ players });
  }));

  // ─── Player search (unified) ──────────────────────────────────────────────

  router.get('/search', requirePerm('viewPlayers'), asyncRoute(async (req, res) => {
    const q = String(req.query.q || '').trim();
    const serverIds = getRequestedServerIds(req);
    const bmResp = await bm.searchPlayers({ q, serverIds, limit: 25 });
    // included identifiers are normalized into each player's identifiers array
    const idById = {};
    for (const inc of bmResp.included || []) {
      if (inc.type === 'identifier') idById[inc.id] = inc;
    }
    const players = (bmResp.data || []).map((p) => {
      const ids = (p.relationships?.identifier?.data || [])
        .map((r) => idById[r.id])
        .filter(Boolean)
        .map((i) => ({ type: i.attributes?.type, identifier: i.attributes?.identifier }));
      return {
        source: 'battlemetrics',
        bmPlayerId: p.id,
        name: p.attributes?.name || '',
        firstSeen: p.attributes?.createdAt || null,
        lastSeen: p.attributes?.updatedAt || null,
        identifiers: ids,
        guid: ids.find((i) => i.type === 'reforgerUUID')?.identifier || null
      };
    });
    // TODO: merge local PII cache results. The previous /api/admin/pii path was
    // removed in the strip-down; reintroducing it is a separate task. For now
    // we return only BM results.
    res.json({ players });
  }));

  // ─── Player profile ──────────────────────────────────────────────────────

  router.get('/players/by-guid/:guid', requirePerm('viewPlayers'), asyncRoute(async (req, res) => {
    const player = await bm.matchPlayerByGuid(req.params.guid);
    if (!player) return res.status(404).json({ error: 'not_found' });
    res.json({ player });
  }));

  router.get('/players/:id', requirePerm('viewPlayers'), asyncRoute(async (req, res) => {
    const hasSessions = !!req.rzUser.perms?.battlemetrics?.viewSessions;
    const include = hasSessions ? 'identifier,session,server' : 'server';
    const data = await bm.getPlayer(req.params.id, { include });
    res.json(data);
  }));

  router.get('/players/:id/bans', requirePerm('viewBans'), asyncRoute(async (req, res) => {
    const bans = await bm.listBansForPlayer(req.params.id);
    res.json({ bans });
  }));

  router.get('/players/:id/notes', requirePerm('writeNotes'), asyncRoute(async (req, res) => {
    const notes = await bm.listPlayerNotes(req.params.id);
    res.json({ notes });
  }));

  router.post('/players/:id/notes', requirePerm('writeNotes'), asyncRoute(async (req, res) => {
    const { note, shared } = req.body || {};
    if (!note || typeof note !== 'string') return res.status(400).json({ error: 'missing_note' });
    const out = await bm.createPlayerNote(req.params.id, { note, shared });
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.note.create',
      detail: { playerId: req.params.id, length: note.length },
      ctx: ctxFromReq(req)
    });
    res.json({ note: out });
  }));

  router.patch('/notes/:noteId', requirePerm('writeNotes'), asyncRoute(async (req, res) => {
    const out = await bm.updatePlayerNote(req.params.noteId, req.body || {});
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.note.update',
      detail: { noteId: req.params.noteId },
      ctx: ctxFromReq(req)
    });
    res.json({ note: out });
  }));

  router.delete('/notes/:noteId', requirePerm('writeNotes'), asyncRoute(async (req, res) => {
    await bm.deletePlayerNote(req.params.noteId);
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.note.delete',
      detail: { noteId: req.params.noteId },
      ctx: ctxFromReq(req)
    });
    res.json({ ok: true });
  }));

  // ─── Bans ────────────────────────────────────────────────────────────────

  router.get('/bans', requirePerm('viewBans'), asyncRoute(async (req, res) => {
    const serverIds = getRequestedServerIds(req);
    const includeExpired = req.query.includeExpired === '1';
    const bans = await bm.listBans({ serverIds, includeExpired });
    res.json({ bans });
  }));

  router.post('/bans', requirePerm('ban'), asyncRoute(async (req, res) => {
    const {
      playerId, identifiers, reason, note, expires, orgWide, serverIds, dualWrite
    } = req.body || {};

    const created = await bm.createBan({
      playerId,
      identifiers,
      reason,
      note: note ? `${note}\n\n— ${req.rzUser.username}` : `— ${req.rzUser.username}`,
      expires,
      orgWide: orgWide !== false,
      serverIds
    });

    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.ban.create',
      detail: {
        playerId,
        reason,
        expires: expires || 'permanent',
        orgWide: orgWide !== false,
        serverIds: serverIds || null,
        dualWrite: !!dualWrite
      },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'ban.create', payload: { by: req.rzUser.username, playerId, reason } });

    // Dual-write to game-server config is a TODO that mirrors the existing
    // admin-config SSH path used by GM Management. We leave it as a marker
    // in the audit log for now; concrete implementation lives with the
    // adminmgr code path.
    res.json({ ban: created, dualWritten: false });
  }));

  router.patch('/bans/:id', requirePerm('ban'), asyncRoute(async (req, res) => {
    const updated = await bm.updateBan(req.params.id, req.body || {});
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.ban.update',
      detail: { banId: req.params.id },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'ban.update', payload: { by: req.rzUser.username, banId: req.params.id } });
    res.json({ ban: updated });
  }));

  router.delete('/bans/:id', requirePerm('ban'), asyncRoute(async (req, res) => {
    await bm.deleteBan(req.params.id);
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.ban.delete',
      detail: { banId: req.params.id },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'ban.delete', payload: { by: req.rzUser.username, banId: req.params.id } });
    res.json({ ok: true });
  }));

  // ─── Kick ────────────────────────────────────────────────────────────────

  router.post('/kick', requirePerm('kick'), asyncRoute(async (req, res) => {
    const { serverId, playerId, identifier, reason } = req.body || {};
    if (!serverId || (!playerId && !identifier)) {
      return res.status(400).json({ error: 'missing_target' });
    }
    await bm.rconKick(serverId, { playerId, identifier, reason });
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'bm.kick',
      detail: { serverId, playerId, identifier, reason },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'kick', payload: { by: req.rzUser.username, serverId, playerId } });
    res.json({ ok: true });
  }));

  // ─── Activity + chat ─────────────────────────────────────────────────────

  router.get('/activity', requirePerm('viewActivity'), asyncRoute(async (req, res) => {
    const serverIds = getRequestedServerIds(req);
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const events = await bm.listActivity({ serverIds, limit });
    res.json({ events });
  }));

  router.get('/chat', requirePerm('viewChat'), asyncRoute(async (req, res) => {
    const serverIds = getRequestedServerIds(req);
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const events = await bm.listChat({ serverIds, limit });
    res.json({ events });
  }));

  // ─── Linkages (Discord + transcripts) ────────────────────────────────────

  router.get('/linkages/by-guid/:guid', requirePerm('viewPlayers'), asyncRoute(async (req, res) => {
    const link = await linkages.getLinkageByGuid(req.params.guid);
    const transcripts = await linkages.getTranscriptsByGuid(req.params.guid, 20);
    res.json({ linkage: link, transcripts });
  }));

  router.get('/linkages/by-discord-id/:id', requirePerm('viewPlayers'), asyncRoute(async (req, res) => {
    const link = await linkages.getLinkageByDiscordId(req.params.id);
    const transcripts = await linkages.getTranscriptsByDiscordId(req.params.id, 20);
    res.json({ linkage: link, transcripts });
  }));

  return router;
}
