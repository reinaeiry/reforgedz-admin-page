// Long-lived consumer that pipes the ticket-bot's SSE stream
// (/api/internal/tickets/events) into our shared bm-eventBus, so the
// admin SPA's single existing /api/bm/events EventSource receives ticket
// events alongside ban/kick/etc events. Auto-reconnects with backoff.

import { publish } from './eventBus.js';

function botBase() { return (process.env.TICKET_BOT_API_BASE || '').replace(/\/+$/, ''); }
function botKey() { return process.env.TICKET_BOT_INTERNAL_KEY || ''; }

let started = false;
let abortController = null;
let backoffMs = 1000;
const MAX_BACKOFF_MS = 30_000;

async function consume() {
  if (!botBase() || !botKey()) {
    console.log('[ticketRelay] TICKET_BOT_API_BASE / TICKET_BOT_INTERNAL_KEY not set — skipping');
    return;
  }
  abortController = new AbortController();
  try {
    const res = await fetch(`${botBase()}/api/internal/tickets/events`, {
      headers: { 'Authorization': `Bearer ${botKey()}`, 'Accept': 'text/event-stream' },
      signal: abortController.signal
    });
    if (!res.ok || !res.body) {
      throw new Error(`relay HTTP ${res.status}`);
    }
    backoffMs = 1000;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = '';
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      // SSE frames are separated by blank lines.
      let idx;
      while ((idx = buf.indexOf('\n\n')) >= 0) {
        const frame = buf.slice(0, idx);
        buf = buf.slice(idx + 2);
        let evType = 'message';
        let dataLines = [];
        for (const line of frame.split('\n')) {
          if (line.startsWith(':')) continue;
          if (line.startsWith('event:')) evType = line.slice(6).trim();
          else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim());
        }
        if (!dataLines.length) continue;
        try {
          const parsed = JSON.parse(dataLines.join('\n'));
          // Re-publish into bm-eventBus so the SPA picks it up over
          // /api/bm/events without needing a second SSE connection.
          publish({
            type: evType,
            payload: parsed.payload,
            channelId: parsed.channelId,
            permKey: parsed.permKey || null
          });
        } catch (err) {
          console.warn('[ticketRelay] bad data frame:', err.message);
        }
      }
    }
    throw new Error('relay stream ended');
  } catch (err) {
    if (err.name === 'AbortError') return;
    console.warn(`[ticketRelay] stream died (${err.message}); reconnecting in ${backoffMs}ms`);
    await new Promise((r) => setTimeout(r, backoffMs));
    backoffMs = Math.min(backoffMs * 2, MAX_BACKOFF_MS);
    if (started) consume().catch((e) => console.error('[ticketRelay] reconnect failed:', e));
  }
}

export function start() {
  if (started) return;
  started = true;
  consume().catch((err) => console.error('[ticketRelay] startup failed:', err));
}

export function stop() {
  started = false;
  if (abortController) abortController.abort();
}
