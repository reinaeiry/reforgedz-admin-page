import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServerIncidents, listServers, type Incident, type ServerInfo } from '../../util/api';
import { INCIDENT_CATEGORY_LABELS } from '../../util/anticheatCategories';

const SEVERITY_ORDER: Record<Incident['severity'], number> = { high: 0, medium: 1, low: 2 };

function severityBadgeClass(sev: Incident['severity']): string {
  if (sev === 'high') return 'bmBadge bmBadge-warn';
  if (sev === 'medium') return 'bmBadge bmBadge-medium';
  return 'bmBadge bmBadge-low';
}

export function AntiCheatPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [selectedServerId, setSelectedServerId] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [minConfidence, setMinConfidence] = useState<number>(0);
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listServers().then((s) => { if (alive) setServers(s); }).catch(() => {});
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!selectedServerId) { setIncidents(null); return; }
    let alive = true;
    setLoading(true);
    setErr(null);
    getServerIncidents({
      serverId: selectedServerId,
      category: category || undefined,
      minConfidence: minConfidence || undefined,
      limit: 500,
    }).then((r) => {
      if (!alive) return;
      setIncidents(r.incidents);
      setLoading(false);
    }).catch((e: any) => {
      if (!alive) return;
      setErr(e?.message || 'Failed to load incidents');
      setLoading(false);
    });
    return () => { alive = false; };
  }, [selectedServerId, category, minConfidence]);

  const sorted = incidents
    ? [...incidents].sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] || b.confidence - a.confidence)
    : null;

  return (
    <div className="page" style={{ padding: 24 }}>
      <div className="row" style={{ gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
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

        <div style={{ minWidth: 200 }}>
          <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All categories</option>
            {Object.entries(INCIDENT_CATEGORY_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="muted" style={{ fontSize: '.8rem' }}>Min confidence</span>
          <input
            className="input"
            type="number"
            min={0}
            max={100}
            style={{ width: 72 }}
            value={minConfidence}
            onChange={(e) => setMinConfidence(Number(e.target.value) || 0)}
          />
        </div>
      </div>

      {!selectedServerId ? (
        <div className="muted">Select a server to view anti-cheat incidents.</div>
      ) : loading ? (
        <div className="muted">Loading incidents for this server…</div>
      ) : err ? (
        <div className="bmError">{err}</div>
      ) : !sorted || sorted.length === 0 ? (
        <div className="muted">No incidents matching these filters.</div>
      ) : (
        <table className="bmTable">
          <thead>
            <tr>
              <th>Severity</th>
              <th>Confidence</th>
              <th>Category</th>
              <th>Player</th>
              <th>Summary</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((inc, idx) => (
              <tr key={`${inc.identityId}-${inc.tsMs}-${idx}`}>
                <td><span className={severityBadgeClass(inc.severity)}>{inc.severity}</span></td>
                <td>{inc.confidence}%</td>
                <td>{INCIDENT_CATEGORY_LABELS[inc.category] || inc.category}</td>
                <td>
                  {inc.identityId ? (
                    <Link to={`/player/${inc.identityId}`} className="bmGuid">{inc.identityId}</Link>
                  ) : <span className="muted">unknown</span>}
                </td>
                <td>{inc.summary}</td>
                <td>{new Date(inc.tsMs).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
