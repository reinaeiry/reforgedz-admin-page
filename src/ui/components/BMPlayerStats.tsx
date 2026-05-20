import React, { useEffect, useState } from 'react';
import { getPlayerStats, type PlayerStats } from '../../util/bmApi';

function fmtDuration(sec: number | null): string {
  if (sec == null) return '—';
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m}m ${sec % 60}s`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m`;
}

export function BMPlayerStats({ guid }: { guid: string }) {
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setErr(null);
    setStats(null);
    getPlayerStats(guid).then((s) => {
      if (alive) setStats(s);
    }).catch((e) => {
      if (alive) setErr(e?.message || 'Failed to load stats');
    });
    return () => { alive = false; };
  }, [guid]);

  if (err) return <div className="bmError">{err}</div>;
  if (!stats) return <div className="muted">Loading stats…</div>;

  const kdr = stats.kdr ? stats.kdr.toFixed(2) : '0.00';

  return (
    <div className="bmStats">
      <Stat label="Kills" value={String(stats.kills)} />
      <Stat label="Deaths" value={String(stats.deaths)} />
      <Stat label="K/D" value={kdr} />
      <Stat
        label="Avg time alive"
        value={fmtDuration(stats.avgAliveSec)}
        sub={stats.samples ? `${stats.samples} samples` : 'not enough data'}
      />
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bmStat">
      <div className="bmStat-value">{value}</div>
      <div className="bmStat-label">{label}</div>
      {sub ? <div className="bmStat-sub">{sub}</div> : null}
    </div>
  );
}
