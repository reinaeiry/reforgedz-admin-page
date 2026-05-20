// GET /api/bm/events — Server-Sent Events stream for the live activity feed,
// cross-admin toast notifications, and (now) the ticket relay. Anyone with
// `moderation.viewActivity` OR `admin.tickets` can connect; each event is
// filtered per-subscriber so a tickets-only user doesn't see ban events
// they couldn't otherwise read, and vice versa.

import express from 'express';
import { subscribe } from '../lib/eventBus.js';

const TICKET_TYPES = new Set([
  'ticket.message', 'ticket.message.update', 'ticket.message.delete',
  'ticket.create', 'ticket.close'
]);

function classify(evt) {
  if (TICKET_TYPES.has(evt.type)) return 'tickets';
  return 'activity';
}

export function buildBmSseRouter({ requirePerm }) {
  const router = express.Router();

  function gate(req, res, next) {
    if (!req.rzUser) return res.status(401).end();
    const mod = req.rzUser.perms?.moderation || req.rzUser.perms?.battlemetrics || {};
    const canActivity = mod.viewActivity === true;
    const canTickets = req.rzUser.perms?.admin?.tickets === true;
    if (!canActivity && !canTickets) return res.status(403).end();
    req._sseChannels = { activity: canActivity, tickets: canTickets };
    next();
  }

  router.get('/', gate, (req, res) => {
    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no'
    });
    res.flushHeaders?.();

    // Initial heartbeat so the client knows the connection is live.
    res.write(`event: hello\ndata: {"ts":${Date.now()}}\n\n`);

    const channels = req._sseChannels || { activity: false, tickets: false };
    const sub = subscribe((evt) => {
      try {
        const channel = classify(evt);
        if (!channels[channel]) return;
        // For ticket events, intersect with the user's per-category perms
        // so an NA1-only mod doesn't get toasts for EU1 messages.
        if (channel === 'tickets' && evt.permKey) {
          if (req.rzUser.perms?.tickets?.[evt.permKey] !== true) return;
        }
        res.write(`event: ${evt.type || 'event'}\n`);
        res.write(`data: ${JSON.stringify(evt)}\n\n`);
      } catch { /* ignore */ }
    });

    const ka = setInterval(() => {
      try { res.write(`: ka\n\n`); } catch { /* ignore */ }
    }, 25_000);

    req.on('close', () => {
      clearInterval(ka);
      sub.unsubscribe();
    });
  });

  return router;
}
