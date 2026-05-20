import React, { useEffect, useState } from 'react';
import { listActivity } from '../../util/bmApi';
import { bmEvents, type SseEvent } from '../../util/sseClient';

type Props = {
  serverIds?: string[];
  pollMs?: number;
};

export function BMActivityFeed({ serverIds, pollMs = 30_000 }: Props) {
  const [events, setEvents] = useState<any[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const out = await listActivity({ serverIds, limit: 100 });
        if (alive) { setEvents(out.events); setErr(null); }
      } catch (e: any) {
        if (alive) setErr(e?.message || 'Failed to load');
      }
    }
    load();
    const t = setInterval(load, pollMs);

    // Webhook SSE deliveries also nudge a reload (cheap — caches will short-circuit).
    bmEvents.start();
    const unsub = bmEvents.subscribe((e: SseEvent) => {
      if (e.type.startsWith('bm.')) load();
    });

    return () => { alive = false; clearInterval(t); unsub(); };
  }, [JSON.stringify(serverIds || []), pollMs]);

  return (
    <div className="bmActivity">
      {err ? <div className="bmError">{err}</div> : null}
      {events.length === 0 ? (
        <div className="muted">No recent events.</div>
      ) : (
        <ul className="bmActivity-list">
          {events.map((e: any) => {
            const a = e.attributes || {};
            const ts = a.timestamp ? new Date(a.timestamp).toLocaleString() : '';
            return (
              <li key={e.id || `${ts}-${a.type}`} className="bmActivity-row">
                <span className="bmActivity-ts">{ts}</span>
                <span className="bmActivity-type">{a.type || 'event'}</span>
                <span className="bmActivity-msg">{a.message || a.text || JSON.stringify(a).slice(0, 200)}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
