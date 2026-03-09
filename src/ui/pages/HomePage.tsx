import React, { useEffect, useMemo, useState } from 'react';
import { getReplayStatusAll, type ReplayStatus } from '../../util/api';

function formatClockTime(tsMs: number | null | undefined): string {
  if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return '--';
  try { return new Date(tsMs).toLocaleString(); } catch { return '--'; }
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
      .then((data) => { if (!cancelled) { setStatuses(data); setStatusError(null); } })
      .catch((err) => { if (!cancelled) setStatusError(err instanceof Error ? err.message : 'Failed to load replay status'); });
    return () => { cancelled = true; };
  }, []);

  const topServers = useMemo(() => {
    if (!statuses) return [] as ReplayStatus[];
    return statuses.slice().sort((a, b) => {
      return (typeof b.storedEvents === 'number' ? b.storedEvents : -1) - (typeof a.storedEvents === 'number' ? a.storedEvents : -1);
    }).slice(0, 6);
  }, [statuses]);

  const totalStored = statuses?.reduce((s, x) => s + (typeof x.storedEvents === 'number' ? x.storedEvents : 0), 0) ?? 0;
  const totalAll = statuses?.reduce((s, x) => s + (typeof x.totalEvents === 'number' ? x.totalEvents : 0), 0) ?? 0;

  return (
    <div className="container">
      <div className="stack" style={{ gap: 20 }}>
        <div className="heroCard">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="label" style={{ color: 'var(--cyan)', marginBottom: 8 }}>Overview</div>
            <h1 className="h1" style={{ fontSize: 26, marginBottom: 6 }}>Welcome back</h1>
            <div className="muted" style={{ fontSize: 13 }}>
              Manage your servers, players, and replay data from one place.
            </div>
          </div>
        </div>

        {statuses ? (
          <div className="statsGrid">
            <div className="card statCard">
              <div className="label">Servers</div>
              <div className="statValue" style={{ color: 'var(--cyan)' }}>{statuses.length}</div>
            </div>
            <div className="card statCard">
              <div className="label">Buffered Events</div>
              <div className="statValue">{totalStored.toLocaleString()}</div>
            </div>
            <div className="card statCard">
              <div className="label">All-Time Events</div>
              <div className="statValue">{totalAll.toLocaleString()}</div>
            </div>
          </div>
        ) : null}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 14 }}>
          <div className="card">
            <div className="stack" style={{ gap: 12 }}>
              <div className="label">Server Activity</div>
              {statusError ? <div className="error">{statusError}</div> : null}
              {topServers.length > 0 ? (
                <div className="stack" style={{ gap: 4 }}>
                  {topServers.map((s) => {
                    const retMs = typeof s.retentionMs === 'number' ? s.retentionMs : 0;
                    const end = typeof s.lastReceivedAt === 'number' ? s.lastReceivedAt : null;
                    const compStart = (retMs > 0 && end !== null) ? (end - retMs) : null;
                    const start = typeof s.firstReceivedAt === 'number'
                      ? (compStart !== null ? Math.max(s.firstReceivedAt, compStart) : s.firstReceivedAt)
                      : compStart;

                    return (
                      <div key={s.serverId} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                        padding: '10px 12px', borderRadius: 'var(--r)',
                        background: 'var(--bg-raised)', border: '1px solid var(--border)',
                      }}>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-bright)' }}>{s.name}</div>
                          <div className="muted" style={{ fontSize: 11 }}>
                            {formatClockTime(start)} &rarr; {formatClockTime(end)}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--cyan)' }}>
                            {typeof s.storedEvents === 'number' ? s.storedEvents.toLocaleString() : '--'}
                          </div>
                          <div className="muted" style={{ fontSize: 11 }}>
                            {retMs > 0 ? formatDurationMs(retMs) : 'No limit'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>
                  {statuses ? 'No servers detected yet.' : 'Loading...'}
                </div>
              )}
            </div>
          </div>

          <div className="stack" style={{ gap: 14 }}>
            <div className="card cardAccent">
              <div className="stack" style={{ gap: 10 }}>
                <div className="label">Replay Controls</div>
                <div className="stack" style={{ gap: 6 }}>
                  {[
                    ['Click', 'Attach camera to player'],
                    ['F', 'Detach camera'],
                    ['RMB', 'Rotate view'],
                    ['WASD', 'Move camera'],
                  ].map(([key, desc]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        minWidth: 44, padding: '2px 8px', borderRadius: 6,
                        background: 'var(--cyan-dim)', border: '1px solid rgba(56,189,248,0.12)',
                        color: 'var(--cyan)', fontSize: 10, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace",
                      }}>{key}</span>
                      <span className="muted" style={{ fontSize: 12 }}>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="stack" style={{ gap: 6 }}>
                <div className="label">Retention</div>
                <div className="muted" style={{ fontSize: 12 }}>
                  Replay data is a rolling buffer. Server restarts are marked in the timeline.
                  Clearing history removes events but keeps cached map metadata.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
