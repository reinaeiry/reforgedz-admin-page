// Small EventSource wrapper with auto-reconnect and per-type listeners.
// Hooks up to /api/bm/events (Server-Sent Events). Used for live activity
// feed + cross-admin toast notifications (ban.create, kick, etc.)

import { eventStreamUrl } from './bmApi';

export type SseEvent = {
  type: string;
  ts: number;
  payload?: any;
  // Top-level routing keys set by the server-side eventBus envelope. For
  // ticket events these are populated; for ban/kick events they're absent.
  channelId?: string;
  permKey?: string;
};
type Listener = (event: SseEvent) => void;

export class BmEventStream {
  private es: EventSource | null = null;
  private listeners = new Set<Listener>();
  private reconnectAt: number | null = null;
  private url: string;

  constructor(url: string = eventStreamUrl()) {
    this.url = url;
  }

  start(): void {
    if (this.es) return;
    this.connect();
  }

  stop(): void {
    if (this.es) { this.es.close(); this.es = null; }
    if (this.reconnectAt) { clearTimeout(this.reconnectAt); this.reconnectAt = null; }
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private connect(): void {
    try {
      // withCredentials forwards the SSO cookie.
      this.es = new EventSource(this.url, { withCredentials: true } as EventSourceInit);
      this.es.onerror = () => {
        if (!this.es) return;
        this.es.close();
        this.es = null;
        // Reconnect after 5s.
        this.reconnectAt = window.setTimeout(() => this.connect(), 5000) as unknown as number;
      };
      // Forward every named event. Unknown event types come through onmessage.
      this.es.onmessage = (ev) => this.dispatch('message', ev.data);
      const wrap = (type: string) => (ev: MessageEvent) => this.dispatch(type, ev.data);
      // Common types we publish from the server.
      for (const t of [
        'hello',
        'ban.create', 'ban.update', 'ban.delete',
        'kick',
        'bm.note.create', 'bm.note.update',
        'ticket.message', 'ticket.message.update', 'ticket.message.delete',
        'ticket.create', 'ticket.close'
      ]) {
        this.es.addEventListener(t, wrap(t) as EventListener);
      }
    } catch {
      this.reconnectAt = window.setTimeout(() => this.connect(), 5000) as unknown as number;
    }
  }

  private dispatch(type: string, data: string): void {
    let parsed: any = null;
    try { parsed = data ? JSON.parse(data) : null; } catch { parsed = data; }
    const event: SseEvent = {
      type,
      ts: parsed?.ts || Date.now(),
      payload: parsed?.payload ?? parsed,
      channelId: parsed?.channelId,
      permKey: parsed?.permKey
    };
    for (const fn of this.listeners) {
      try { fn(event); } catch { /* listener errored, ignore */ }
    }
  }
}

// Default instance — start/stop and subscribe from one place.
export const bmEvents = new BmEventStream();
