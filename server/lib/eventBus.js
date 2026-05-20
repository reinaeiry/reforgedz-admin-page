// In-process publish/subscribe for SSE clients. Webhook handler publishes to
// this; bm-sse.js subscribes per-connection and pipes events out as SSE.
// Single-process only — fine for our scale; replace with Redis or similar
// if we ever scale beyond one container.

const subscribers = new Set(); // each entry: function(event)
let nextId = 1;

export function subscribe(fn) {
  const id = nextId++;
  subscribers.add(fn);
  return { id, unsubscribe: () => subscribers.delete(fn) };
}

export function publish(event) {
  // event: { type, ts, payload }
  const e = { ts: Date.now(), ...event };
  for (const fn of subscribers) {
    try { fn(e); } catch (err) { console.warn('[eventBus] subscriber threw:', err.message); }
  }
}
