import React, { useEffect, useMemo, useState } from 'react';
import { getReplayStatusAll, type ReplayStatus } from '../../util/api';

function formatClockTime(tsMs: number | null | undefined): string {
  if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return '--';
  try {
    return new Date(tsMs).toLocaleString();
  } catch {
    return '--';
  }
}

function formatDurationMs(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return '--';
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
    return () => { cancelled = true; };
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
      <div className="stack" style={{ gap: 24 }}>
        {/* Hero */}
        <div className="heroCard">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rz-accent)', marginBottom: 6 }}>
              Dashboard
            </div>
            <h1 className="h1" style={{ fontSize: 28, marginBottom: 8 }}>Welcome back</h1>
            <div className="muted" style={{ fontSize: 14 }}>
              Use the sidebar to manage users, servers, and replay history.
            </div>
          </div>
        </div>

        {/* Stats row */}
        {statuses ? (
          <div className="statsGrid">
            <div className="card statCard">
              <div className="label">Servers</div>
              <div className="statValue">{statuses.length}</div>
            </div>
            <div className="card statCard">
              <div className="label">Total Events</div>
              <div className="statValue">
                {statuses.reduce((sum, s) => sum + (typeof s.storedEvents === 'number' ? s.storedEvents : 0), 0).toLocaleString()}
              </div>
            </div>
            <div className="card statCard">
              <div className="label">All-Time Events</div>
              <div className="statValue">
                {statuses.reduce((sum, s) => sum + (typeof s.totalEvents === 'number' ? s.totalEvents : 0), 0).toLocaleString()}
              </div>
            </div>
          </div>
        ) : null}

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 16 }}>
          {/* Replay overview */}
          <div className="card">
            <div className="stack" style={{ gap: 14 }}>
              <div>
                <div className="label">Replay Overview</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {statuses ? `${statuses.length} server${statuses.length === 1 ? '' : 's'} detected.` : 'Loading...'}
                </div>
                {statusError ? <div className="error" style={{ marginTop: 8 }}>{statusError}</div> : null}
              </div>

              {topServers.length > 0 ? (
                <div className="stack" style={{ gap: 4 }}>
                  {topServers.map((s) => {
                    const retentionMs = typeof s.retentionMs === 'number' ? s.retentionMs : 0;
                    const bufferEnd = typeof s.lastReceivedAt === 'number' ? s.lastReceivedAt : null;
                    const computedStart = (retentionMs > 0 && bufferEnd !== null) ? (bufferEnd - retentionMs) : null;
                    const bufferStart = (typeof s.firstReceivedAt === 'number')
                      ? (computedStart !== null ? Math.max(s.firstReceivedAt, computedStart) : s.firstReceivedAt)
                      : computedStart;

                    return (
                      <div key={s.serverId} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 12,
                        padding: '10px 12px',
                        borderRadius: 'var(--rz-radius)',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--rz-text-bright)' }}>{s.name}</div>
                          <div className="muted" style={{ fontSize: 11 }}>
                            {formatClockTime(bufferStart)} &rarr; {formatClockTime(bufferEnd)}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--rz-accent)' }}>
                            {typeof s.storedEvents === 'number' ? s.storedEvents.toLocaleString() : '--'}
                          </div>
                          <div className="muted" style={{ fontSize: 11 }}>
                            {retentionMs > 0 ? formatDurationMs(retentionMs) : 'No limit'}
                          </div>
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

          {/* Tips */}
          <div className="stack" style={{ gap: 16 }}>
            <div className="card">
              <div className="stack" style={{ gap: 12 }}>
                <div className="label">Replay Controls</div>
                <div className="stack" style={{ gap: 8, fontSize: 13 }}>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span className="tag" style={{ color: 'var(--rz-accent)', background: 'var(--rz-accent-soft)', fontFamily: 'monospace', fontSize: 10 }}>CLICK</span>
                    <span className="muted">Attach camera to player</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span className="tag" style={{ color: 'var(--rz-accent)', background: 'var(--rz-accent-soft)', fontFamily: 'monospace', fontSize: 10, minWidth: 46, textAlign: 'center' }}>F</span>
                    <span className="muted">Detach camera</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span className="tag" style={{ color: 'var(--rz-accent)', background: 'var(--rz-accent-soft)', fontFamily: 'monospace', fontSize: 10, minWidth: 46, textAlign: 'center' }}>RMB</span>
                    <span className="muted">Rotate camera</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="stack" style={{ gap: 8 }}>
                <div className="label">Retention</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  Replay is a rolling buffer. Restarts are marked in the timeline.
                </div>
                <div className="muted" style={{ fontSize: 12 }}>
                  Clearing server history removes replay data but preserves cached map metadata.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
