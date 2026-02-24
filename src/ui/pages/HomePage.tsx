import React, { useEffect, useMemo, useState } from 'react';
import { getReplayStatusAll, type ReplayStatus } from '../../util/api';

function formatClockTime(tsMs: number | null | undefined): string {
  if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return '—';
  try {
    return new Date(tsMs).toLocaleString();
  } catch {
    return '—';
  }
}

function formatDurationMs(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return '—';
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours >= 48 && hours % 24 === 0) return `${Math.floor(hours / 24)}d`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export function HomePage() {
  const [statuses, setStatuses] = useState<ReplayStatus[] | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getReplayStatusAll()
      .then((data) => {
        if (cancelled) return;
        setStatuses(data);
        setStatusError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : 'Failed to load replay status';
        setStatusError(message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topServers = useMemo(() => {
    if (!statuses) return [] as ReplayStatus[];
    const copy = statuses.slice();
    copy.sort((a, b) => {
      const aa = typeof a.storedEvents === 'number' ? a.storedEvents : -1;
      const bb = typeof b.storedEvents === 'number' ? b.storedEvents : -1;
      return bb - aa;
    });
    return copy.slice(0, 6);
  }, [statuses]);

  return (
    <div className="container">
      <div className="stack">
        <div className="card" style={{ padding: 18 }}>
          <div className="stack" style={{ gap: 8 }}>
            <div className="label">Welcome</div>
            <h1 className="h1" style={{ marginTop: 0 }}>ReforgedZ Admin</h1>
            <div className="muted">
              Use the sidebar to manage users, servers, and replay history.
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
          <div className="card">
            <div className="stack" style={{ gap: 10 }}>
              <div>
                <div className="label">Replay overview</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {statuses ? `${statuses.length} server${statuses.length === 1 ? '' : 's'} detected.` : 'Loading…'}
                </div>
                {statusError ? (
                  <div className="error" style={{ marginTop: 8 }}>{statusError}</div>
                ) : null}
              </div>

              {topServers.length > 0 ? (
                <div className="stack" style={{ gap: 8 }}>
                  {topServers.map((s) => {
                    const retentionMs = typeof s.retentionMs === 'number' ? s.retentionMs : 0;
                    const bufferEnd = typeof s.lastReceivedAt === 'number' ? s.lastReceivedAt : null;
                    const computedStart = (retentionMs > 0 && bufferEnd !== null) ? (bufferEnd - retentionMs) : null;
                    const bufferStart = (typeof s.firstReceivedAt === 'number')
                      ? (computedStart !== null ? Math.max(s.firstReceivedAt, computedStart) : s.firstReceivedAt)
                      : computedStart;

                    return (
                      <div key={s.serverId} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                        <div>
                          <div style={{ fontWeight: 850 }}>{s.name}</div>
                          <div className="muted" style={{ fontSize: 12 }}>
                            {formatClockTime(bufferStart)} → {formatClockTime(bufferEnd)}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: 900 }}>{typeof s.storedEvents === 'number' ? `${s.storedEvents} events` : '—'}</div>
                          <div className="muted" style={{ fontSize: 12 }}>{retentionMs > 0 ? formatDurationMs(retentionMs) : '∞'}</div>
                          {typeof s.totalEvents === 'number' && typeof s.storedEvents === 'number' && s.totalEvents !== s.storedEvents ? (
                            <div className="muted" style={{ fontSize: 11 }}>All-time {s.totalEvents} events</div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>
                  Open Replay Tool to see a detailed per-server dashboard.
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="stack" style={{ gap: 10 }}>
              <div>
                <div className="label">Replay Tool tips</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  A few quick controls that help a lot.
                </div>
              </div>

              <div className="stack" style={{ gap: 6, fontSize: 13 }}>
                <div><span style={{ fontWeight: 850 }}>Attach camera:</span> click a player in the left panel.</div>
                <div><span style={{ fontWeight: 850 }}>Detach:</span> press <span style={{ fontWeight: 900 }}>F</span>.</div>
                <div><span style={{ fontWeight: 850 }}>Event jump offset:</span> defaults to 5s before the event (configurable in Replay Tool).</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="stack" style={{ gap: 10 }}>
              <div>
                <div className="label">Retention</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  Replay is a rolling buffer. Restarts are marked in the timeline.
                </div>
              </div>
              <div className="muted" style={{ fontSize: 12 }}>
                If you clear a server’s history, replay data is removed but cached map metadata is preserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
