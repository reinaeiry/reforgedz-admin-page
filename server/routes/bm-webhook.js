// POST /api/bm/webhook — BattleMetrics-side webhook delivery.
// HMAC-SHA256 signature verify against BM_WEBHOOK_SECRET. We invalidate the
// relevant cache slices and republish to the in-process eventBus so SSE
// clients get notified.
//
// IMPORTANT: this router must be mounted with express.raw() (not express.json)
// so we can verify the signature against the EXACT request bytes BM signed.

import express from 'express';
import { verifyWebhookSignature, invalidatePrefix } from '../lib/battlemetrics.js';
import { publish } from '../lib/eventBus.js';

const router = express.Router();

router.post('/', (req, res) => {
  const secret = process.env.BM_WEBHOOK_SECRET || '';
  if (!secret) return res.status(503).json({ error: 'webhook_disabled' });

  // express.raw sets req.body to a Buffer; if something else parsed it, fall back.
  const raw = Buffer.isBuffer(req.body) ? req.body : Buffer.from(JSON.stringify(req.body || {}), 'utf8');
  const sig = req.headers['x-battlemetrics-signature'] || req.headers['x-bm-signature'];
  if (!verifyWebhookSignature(raw, String(sig || ''), secret)) {
    return res.status(401).json({ error: 'bad_signature' });
  }

  let payload = {};
  try {
    payload = raw.length ? JSON.parse(raw.toString('utf8')) : {};
  } catch {
    return res.status(400).json({ error: 'bad_json' });
  }

  const events = Array.isArray(payload.data) ? payload.data : (payload && Object.keys(payload).length ? [payload] : []);
  for (const event of events) {
    const type = event?.type || event?.attributes?.type || 'unknown';
    if (/ban/i.test(type)) invalidatePrefix('bans-');
    if (/player/i.test(type)) invalidatePrefix('players-search:');
    if (/note/i.test(type)) invalidatePrefix('notes:');
    if (/server/i.test(type)) invalidatePrefix('server:');
    publish({ type: `bm.${type}`, payload: event });
  }
  res.json({ ok: true, count: events.length });
});

export default router;
