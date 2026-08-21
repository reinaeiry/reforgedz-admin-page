import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getServerIncidents,
  getServerRiskSummary,
  listServers,
  type Incident,
  type PlayerRisk,
  type ServerInfo,
} from '../../util/api';
import { INCIDENT_CATEGORY_LABELS } from '../../util/anticheatCategories';

function severityBadgeClass(sev: Incident['severity']): string {
  if (sev === 'high') return 'bmBadge bmBadge-warn';
  if (sev === 'medium') return 'bmBadge bmBadge-medium';
  return 'bmBadge bmBadge-low';
}

// Simple horizontal bar, scaled against the top score on the current page -
// gives an at-a-glance sense of "how much worse is this player than the rest"
// the way vendor anti-cheat dashboards lead with a ranked severity bar rather
// than a bare number.
function RiskBar({ score, max }: { score: number; max: number }) {
  const pct = max > 0 ? Math.max(4, Math.round((score / max) * 100)) : 0;
  const color = score >= max * 0.66 ? 'var(--red, #e74c3c)' : score >= max * 0.33 ? '#f1c40f' : '#2ecc71';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 140 }}>
      <div style={{ flex: 1, height: 6, background: 'var(--surface)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 3 }} />
      </div>
      <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: '.8rem', minWidth: 30, textAlign: 'right' }}>{score}</span>
    </div>
  );
}

function CategoryChips({ categories }: { categories: Record<string, number> }) {
  const entries = Object.entries(categories).sort((a, b) => b[1] - a[1]);
  return (
    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {entries.map(([cat, count]) => (
        <span key={cat} className="bmBadge" title={INCIDENT_CATEGORY_LABELS[cat] || cat}>
          {INCIDENT_CATEGORY_LABELS[cat]?.split(' ')[0] || cat} ×{count}
        </span>
      ))}
    </div>
  );
}

function PlayerIncidentDetail({ serverId, identityId }: { serverId: string; identityId: string }) {
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    getServerIncidents({ serverId, identityId, limit: 100 }).then((r) => {
      if (alive) setIncidents(r.incidents);
    }).catch((e: any) => { if (alive) setErr(e?.message || 'Failed to load incidents'); });
    return () => { alive = false; };
  }, [serverId, identityId]);

  if (err) return <div className="bmError">{err}</div>;
  if (!incidents) return <div className="muted">Loading incidents…</div>;
  if (!incidents.length) return <div className="muted">No incidents on record.</div>;

  return (
    <table className="bmTable" style={{ marginTop: 8 }}>
      <thead>
        <tr>
          <th>Severity</th>
          <th>Confidence</th>
          <th>Category</th>
          <th>Summary</th>
          <th>When</th>
        </tr>
      </thead>
      <tbody>
        {incidents.map((inc, idx) => (
          <tr key={`${inc.tsMs}-${idx}`}>
            <td><span className={severityBadgeClass(inc.severity)}>{inc.severity}</span></td>
            <td>{inc.confidence}%</td>
            <td>{INCIDENT_CATEGORY_LABELS[inc.category] || inc.category}</td>
            <td>{inc.summary}</td>
            <td>{new Date(inc.tsMs).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AntiCheatPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [selectedServerId, setSelectedServerId] = useState<string>('');
  const [players, setPlayers] = useState<PlayerRisk[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [stale, setStale] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listServers().then((s) => { if (alive) setServers(s); }).catch(() => {});
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!selectedServerId) { setPlayers(null); return; }
    let alive = true;
    setLoading(true);
    setErr(null);
    setExpanded(null);
    getServerRiskSummary({ serverId: selectedServerId, limit: 200 }).then((r) => {
      if (!alive) return;
      setPlayers(r.players);
      setStale(r.stale);
      setLoading(false);
    }).catch((e: any) => {
      if (!alive) return;
      setErr(e?.message || 'Failed to load risk summary');
      setLoading(false);
    });
    return () => { alive = false; };
  }, [selectedServerId]);

  const maxScore = players && players.length ? players[0].riskScore : 0;

  return (
    <div className="page" style={{ padding: 24 }}>
      <div className="row" style={{ gap: 12, alignItems: 'center', marginBottom: 16 }}>
        <div style={{ minWidth: 220 }}>
          <select
            className="input"
            value={selectedServerId}
            onChange={(e) => setSelectedServerId(e.target.value)}
          >
            <option value="">Select a server…</option>
            {servers.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        {stale ? (
          <span className="muted" style={{ fontSize: '.8rem' }}>
            Showing a cached result while a fresh scan runs in the background — refresh in a minute for the latest.
          </span>
        ) : null}
      </div>

      {!selectedServerId ? (
        <div className="muted">Select a server to view flagged players.</div>
      ) : loading ? (
        <div className="muted">Scanning this server for the first time — this can take a while on a large log. Every load after this one will be instant.</div>
      ) : err ? (
        <div className="bmError">{err}</div>
      ) : !players || players.length === 0 ? (
        <div className="muted">No flagged players on this server right now.</div>
      ) : (
        <table className="bmTable">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Highest</th>
              <th>Player</th>
              <th>Incidents</th>
              <th>Categories</th>
              <th>Last flagged</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <React.Fragment key={p.identityId}>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => setExpanded(expanded === p.identityId ? null : p.identityId)}
                >
                  <td><RiskBar score={p.riskScore} max={maxScore} /></td>
                  <td><span className={severityBadgeClass(p.highestSeverity)}>{p.highestSeverity}</span></td>
                  <td>
                    <Link to={`/player/${p.identityId}`} className="bmGuid" onClick={(e) => e.stopPropagation()}>
                      {p.identityId}
                    </Link>
                  </td>
                  <td>{p.incidentCount}</td>
                  <td><CategoryChips categories={p.categories} /></td>
                  <td>{new Date(p.lastIncidentTsMs).toLocaleString()}</td>
                  <td className="muted">{expanded === p.identityId ? '▾' : '▸'}</td>
                </tr>
                {expanded === p.identityId ? (
                  <tr>
                    <td colSpan={7} style={{ background: 'var(--bg-dark, #111)' }}>
                      <PlayerIncidentDetail serverId={selectedServerId} identityId={p.identityId} />
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
