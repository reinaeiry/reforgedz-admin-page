// /api/tickets/* — admin-side gated mirror of the bot's
// /api/internal/tickets endpoints. Validates the calling user's
// per-category perm before forwarding.

import express from 'express';
import * as tickets from '../lib/tickets.js';
import { postAuditEvent, ctxFromReq } from '../lib/bmAudit.js';

export function buildTicketsRouter({ requireAuth, asyncRoute }) {
  const router = express.Router();

  function requireTicketsGate(req, res, next) {
    if (!req.rzUser) return res.status(401).json({ error: 'unauthorized' });
    if (req.rzUser.perms?.admin?.tickets !== true) {
      return res.status(403).json({ error: 'forbidden', required: 'admin.tickets' });
    }
    next();
  }

  function userAllowedCategories(req) {
    const t = req.rzUser?.perms?.tickets || {};
    return Object.keys(t).filter((k) => t[k] === true);
  }

  function canSeeCategory(req, permKey) {
    if (!permKey) return false;
    return req.rzUser?.perms?.tickets?.[permKey] === true;
  }

  function canCloseTickets(req) {
    if (!req.rzUser) return false;
    if (req.rzUser.perms?.manager === true) return true;
    if (req.rzUser.perms?.moderation?.manage === true) return true;
    if (req.rzUser.perms?.battlemetrics?.manage === true) return true;
    return false;
  }

  router.use(requireAuth, requireTicketsGate);

  router.get('/', asyncRoute(async (req, res) => {
    const allowed = userAllowedCategories(req);
    if (!allowed.length) return res.json({ tickets: [] });
    // Intersect: client filter (if any) ∩ user's allowed categories.
    const requested = typeof req.query.categories === 'string' && req.query.categories
      ? req.query.categories.split(',').map((s) => s.trim()).filter(Boolean)
      : allowed;
    const final = requested.filter((c) => allowed.includes(c));
    if (!final.length) return res.json({ tickets: [] });
    const status = String(req.query.status || 'open');
    const list = await tickets.listTickets({ status, categories: final });
    res.set('Cache-Control', 'private, max-age=5');
    res.json({ tickets: list });
  }));

  router.get('/:channelId', asyncRoute(async (req, res) => {
    const t = await tickets.getTicket(req.params.channelId);
    if (!t) return res.status(404).json({ error: 'not_found' });
    if (!canSeeCategory(req, t.permKey)) {
      return res.status(403).json({ error: 'forbidden', required: `tickets.${t.permKey}` });
    }
    res.set('Cache-Control', 'private, max-age=5');
    res.json({ ticket: t });
  }));

  router.get('/:channelId/messages', asyncRoute(async (req, res) => {
    const t = await tickets.getTicket(req.params.channelId);
    if (!t) return res.status(404).json({ error: 'not_found' });
    if (!canSeeCategory(req, t.permKey)) {
      return res.status(403).json({ error: 'forbidden', required: `tickets.${t.permKey}` });
    }
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const before = req.query.before || undefined;
    const messages = await tickets.getMessages(req.params.channelId, { before, limit });
    res.json({ messages });
  }));

  router.post('/:channelId/messages', asyncRoute(async (req, res) => {
    const t = await tickets.getTicket(req.params.channelId);
    if (!t) return res.status(404).json({ error: 'not_found' });
    if (!canSeeCategory(req, t.permKey)) {
      return res.status(403).json({ error: 'forbidden', required: `tickets.${t.permKey}` });
    }
    if (t.status === 'closed') return res.status(409).json({ error: 'ticket_closed' });

    // Inject the relay username into the multipart body. The bot reads it
    // from form field `relayUsername`. We can't easily mutate a streaming
    // multipart, so we route it via a custom header instead and the bot
    // route reads it from there too. Simpler: append to URL query.
    const url = new URL(`${(process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, '')}/api/internal/tickets/${encodeURIComponent(req.params.channelId)}/messages`);
    url.searchParams.set('relayUsername', req.rzUser.username);
    try {
      const out = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.TICKET_BOT_INTERNAL_KEY || ''}`,
          'Content-Type': req.headers['content-type'] || '',
          'Content-Length': req.headers['content-length'] || ''
        },
        body: req,
        duplex: 'half'
      });
      const text = await out.text();
      if (!out.ok) {
        return res.status(out.status).json({ error: 'relay_failed', detail: text.slice(0, 200) });
      }
      res.json(JSON.parse(text));
    } catch (err) {
      console.error('[POST /api/tickets/.../messages] relay error:', err);
      res.status(500).json({ error: 'internal_error' });
    }
  }));

  router.post('/:channelId/close', express.json(), asyncRoute(async (req, res) => {
    if (!canCloseTickets(req)) {
      return res.status(403).json({ error: 'forbidden', required: 'manager OR moderation.manage' });
    }
    const t = await tickets.getTicket(req.params.channelId);
    if (!t) return res.status(404).json({ error: 'not_found' });
    if (!canSeeCategory(req, t.permKey)) {
      return res.status(403).json({ error: 'forbidden', required: `tickets.${t.permKey}` });
    }
    const reason = String(req.body?.reason || 'Closed via admin panel').slice(0, 500);
    try {
      const out = await tickets.closeTicket(req.params.channelId, {
        closedByDiscordId: '0',
        closedByName: req.rzUser.username,
        reason
      });
      postAuditEvent({
        actorUsername: req.rzUser.username,
        action: 'ticket.close',
        detail: { channelId: req.params.channelId, ticketId: t.id, category: t.categoryKey, reason },
        ctx: ctxFromReq(req)
      });
      res.json(out || { ok: true });
    } catch (err) {
      console.error('[POST /api/tickets/.../close] error:', err);
      res.status(500).json({ error: 'internal_error', detail: err?.message || '' });
    }
  }));

  return router;
}
