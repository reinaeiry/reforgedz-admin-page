// GET /api/bm/events — Server-Sent Events stream for the live activity feed
// + cross-admin toast notifications. Subscribes to eventBus, pipes each
// event out as `data: <json>`. Requires battlemetrics.viewActivity.

import express from 'express';
import { subscribe } from '../lib/eventBus.js';

export function buildBmSseRouter({ requirePerm }) {
  const router = express.Router();

  router.get('/', requirePerm('viewActivity'), (req, res) => {
    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no'
    });
    res.flushHeaders?.();

    // Initial heartbeat so the client knows the connection is live.
    res.write(`event: hello\ndata: {"ts":${Date.now()}}\n\n`);

    const sub = subscribe((evt) => {
      try {
        res.write(`event: ${evt.type || 'event'}\n`);
        res.write(`data: ${JSON.stringify(evt)}\n\n`);
      } catch { /* ignore */ }
    });

    // Periodic keepalive every 25s to keep CF/proxy connections open.
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
