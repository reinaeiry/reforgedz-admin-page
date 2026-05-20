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
import * as ipBans from '../lib/ipBans.js';
import * as gameLogs from '../lib/gameLogs.js';
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
    // Always scope to OUR org's servers — never search the global BM dataset.
    // If the caller passed a subset of server IDs, use that; otherwise default
    // to every BM server in our org so we only see players that have joined us.
    const explicit = typeof req.query.servers === 'string' && req.query.servers.trim()
      ? req.query.servers.split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    let serverIds = explicit;
    if (serverIds.length === 0) {
      const pteros = await getPteroServers();
      await bmServers.ensure(pteros);
      serverIds = bmServers.listAll().map((s) => s.bmServerId);
    }
    if (serverIds.length === 0) {
      // Mapping not built yet (e.g. Ptero unreachable) — return empty rather
      // than searching globally, which would expose non-org players.
      return res.json({ players: [] });
    }
    const bmResp = await bm.searchPlayers({ q, serverIds, limit: 25 });
    // Group included identifiers by their player relationship — BM's JSON:API
    // response doesn't put identifiers under the player's relationships,
    // they back-reference the player from the identifier side.
    const idsByPlayer = {};
    for (const inc of bmResp.included || []) {
      if (inc.type !== 'identifier') continue;
      const pid = inc.relationships?.player?.data?.id;
      if (!pid) continue;
      const t = inc.attributes?.type;
      const v = inc.attributes?.identifier;
      const lastSeen = inc.attributes?.lastSeen || null;
      if (!t || !v) continue;
      (idsByPlayer[pid] = idsByPlayer[pid] || []).push({ type: t, identifier: v, lastSeen });
    }
    const players = (bmResp.data || []).map((p) => {
      const ids = idsByPlayer[p.id] || [];
      // Prefer the most-recent reforgerUUID identifier as the player's "GUID".
      const guidIds = ids.filter((i) => i.type === 'reforgerUUID');
      guidIds.sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''));
      return {
        source: 'battlemetrics',
        bmPlayerId: p.id,
        name: p.attributes?.name || '',
        firstSeen: p.attributes?.createdAt || null,
        lastSeen: p.attributes?.updatedAt || null,
        identifiers: ids,
        guid: guidIds[0]?.identifier || null
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
    // We always include identifier so the basic profile shows Steam/hardware IDs
    // (those are now part of the viewPlayers tier). Only IPs are stripped
    // client-side if the viewer lacks viewIps.
    const include = 'identifier,server,playerCounter,playerFlag';
    try {
      const data = await bm.getPlayer(req.params.id, { include });
      res.json(data);
    } catch (err) {
      // BM 404 ("Unknown player") => surface as 404 to the SPA, not 500.
      if (/\bbm 404\b/.test(err?.message || '')) {
        return res.status(404).json({ error: 'not_found' });
      }
      throw err;
    }
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

  // ─── Linkages (Discord + transcripts) ────────────────────────────────────

  // ─── IpBan controller (in-game log IPs + alt accounts + IP-ban CRUD) ────
  // All gated by battlemetrics.viewIps (the unified IP-PII gate).
  router.get('/players/by-guid/:guid/ip-alts', requirePerm('viewIps'), asyncRoute(async (req, res) => {
    if (!ipBans.isEnabled()) {
      return res.status(503).json({ error: 'ipban_controller_not_configured' });
    }
    const out = await ipBans.getPlayerByGuid(req.params.guid);
    if (!out) return res.json({ records: [], ips: [], alts: [], ip_bans: [] });
    res.json(out);
  }));

  router.get('/ipbans', requirePerm('viewIps'), asyncRoute(async (_req, res) => {
    if (!ipBans.isEnabled()) return res.status(503).json({ error: 'ipban_controller_not_configured' });
    const out = await ipBans.listBans();
    res.json({ bans: (out && out.bans) || [] });
  }));

  router.post('/ipbans', requirePerm('viewIps'), asyncRoute(async (req, res) => {
    if (!ipBans.isEnabled()) return res.status(503).json({ error: 'ipban_controller_not_configured' });
    const { ip, username, be_guid, reason } = req.body || {};
    if (!ip) return res.status(400).json({ error: 'missing_ip' });
    const out = await ipBans.addBan({
      ip,
      username: username || 'Unknown',
      be_guid: be_guid || null,
      reason: reason || '',
      banned_by: req.rzUser.username
    });
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'ipban.add',
      detail: { ip, username, be_guid, reason },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'ipban.add', payload: { by: req.rzUser.username, ip } });
    res.json(out || { ok: true });
  }));

  router.delete('/ipbans/:ip', requirePerm('viewIps'), asyncRoute(async (req, res) => {
    if (!ipBans.isEnabled()) return res.status(503).json({ error: 'ipban_controller_not_configured' });
    const out = await ipBans.removeBan(req.params.ip);
    postAuditEvent({
      actorUsername: req.rzUser.username,
      action: 'ipban.remove',
      detail: { ip: req.params.ip },
      ctx: ctxFromReq(req)
    });
    publish({ type: 'ipban.remove', payload: { by: req.rzUser.username, ip: req.params.ip } });
    res.json(out || { ok: true });
  }));

  // ─── Game logs ────────────────────────────────────────────────────────────
  // Discord-scraped ingame logs (anticheat / shops / kill / chat / base).
  // viewActivity gates everything; chat lines additionally require viewChat
  // if you wanted to split them later — for v1 we collapse under viewActivity.

  router.get('/logs', requirePerm('viewActivity'), asyncRoute(async (req, res) => {
    const types = typeof req.query.types === 'string' && req.query.types
      ? req.query.types.split(',').map((s) => s.trim()).filter(Boolean)
      : null;
    const servers = typeof req.query.servers === 'string' && req.query.servers
      ? req.query.servers.split(',').map((s) => s.trim()).filter(Boolean)
      : null;
    const logs = await gameLogs.listLogs({
      guid: req.query.guid || null,
      name: req.query.name || null,
      types,
      servers,
      q: req.query.q || null,
      sinceMs: req.query.sinceMs ? +req.query.sinceMs : null,
      untilMs: req.query.untilMs ? +req.query.untilMs : null,
      limit: req.query.limit ? +req.query.limit : 100,
      offset: req.query.offset ? +req.query.offset : 0
    });
    // Browser can reuse the response for 15s without revalidation — covers
    // the "user toggles a filter twice in a row" case for free.
    res.set('Cache-Control', 'private, max-age=15');
    res.json({ logs });
  }));

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
