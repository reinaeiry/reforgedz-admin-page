// GET /api/bm/events — Server-Sent Events stream for the live activity feed,
// cross-admin toast notifications, and (now) the ticket relay. Anyone with
// `moderation.viewActivity` OR `admin.tickets` can connect; each event is
// filtered per-subscriber so a tickets-only user doesn't see ban events
// they couldn't otherwise read, and vice versa. IP-bearing events are a third
// channel, gated on `moderation.viewIps`.

import express from 'express';
import { subscribe } from '../lib/eventBus.js';

const TICKET_TYPES = new Set([
  'ticket.message', 'ticket.message.update', 'ticket.message.delete',
  'ticket.create', 'ticket.close'
]);

// These carry a player's raw IP in the payload. The routes that raise them already
// require `viewIps` to ACT, but the broadcast went to the general activity channel, so
// every account with `viewActivity` received the address - including accounts a manager
// had deliberately denied IP access. Give them their own channel gated on the same perm
// the action requires.
const IP_TYPES = new Set(['ipban.add', 'ipban.remove']);

export function classify(evt) {
  if (TICKET_TYPES.has(evt.type)) return 'tickets';
  if (IP_TYPES.has(evt.type)) return 'ips';
  return 'activity';
}

/**
 * Which SSE channels a user may receive. Exported so the rule can be tested directly -
 * it decides whether a raw IP reaches someone's browser.
 * Returns null when the user may not connect at all.
 */
export function channelsFor(rzUser) {
  const mod = rzUser?.perms?.moderation || rzUser?.perms?.battlemetrics || {};
  const activity = mod.viewActivity === true;
  const tickets = rzUser?.perms?.admin?.tickets === true;
  const ips = mod.viewIps === true;
  if (!activity && !tickets) return null;
  return { activity, tickets, ips };
}

export function buildBmSseRouter({ requirePerm }) {
  const router = express.Router();

  function gate(req, res, next) {
    if (!req.rzUser) return res.status(401).end();
    const ch = channelsFor(req.rzUser);
    if (!ch) return res.status(403).end();
    req._sseChannels = ch;
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

    const channels = req._sseChannels || { activity: false, tickets: false, ips: false };
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
