import React, { useEffect, useState } from 'react';
import {
  getPlayerActivity,
  getPlayerProfile,
  searchPlayers,
  type PlayerActivityItem,
  type PlayerProfile,
  type PlayerSearchResult,
} from '../../util/api';

function fmtDuration(ms: number): string {
  if (!ms || ms <= 0) return '0m';
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bmStat">
      <div className="bmStat-value">{value}</div>
      <div className="bmStat-label">{label}</div>
    </div>
  );
}

function describeActivity(item: PlayerActivityItem): string {
  const d = item.detail as any;
  switch (item.type) {
    case 'kill': return `Killed ${d.victimName || 'someone'}${d.weaponName ? ` with ${d.weaponName}` : ''}${typeof d.distanceM === 'number' ? ` (${d.distanceM.toFixed(0)}m)` : ''}`;
    case 'death': return `Killed by ${d.killerName || 'unknown'}${d.weaponName ? ` (${d.weaponName})` : ''}`;
    case 'hit': return `Hit ${d.victimName || 'someone'}${d.weaponName ? ` with ${d.weaponName}` : ''}${d.losBlocked ? ' — LOS blocked' : ''}`;
    case 'interact': return `${d.actionType || 'Interacted'}${typeof d.distanceM === 'number' ? ` (${d.distanceM.toFixed(1)}m)` : ''}`;
    case 'disconnect': return 'Disconnected';
    default: return item.type;
  }
}

function PlayerProfilePanel({ identityId, onBack }: { identityId: string; onBack: () => void }) {
  const [profile, setProfile] = useState<PlayerProfile | null | undefined>(undefined);
  const [activity, setActivity] = useState<PlayerActivityItem[]>([]);
  const [activityLoading, setActivityLoading] = useState(false);
  const [nextBefore, setNextBefore] = useState<number | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setProfile(undefined);
    setActivity([]);
    setNextBefore(null);
    getPlayerProfile(identityId).then((p) => { if (alive) setProfile(p); }).catch((e: any) => {
      if (alive) setErr(e?.message || 'Failed to load profile');
    });
    loadMoreActivity(identityId, undefined, alive ? setActivity : () => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identityId]);

  function loadMoreActivity(id: string, beforeTsMs: number | undefined, apply: (fn: (prev: PlayerActivityItem[]) => PlayerActivityItem[]) => void) {
    setActivityLoading(true);
    getPlayerActivity(id, { beforeTsMs, limit: 50 }).then((r) => {
      apply((prev) => [...prev, ...r.items]);
      setNextBefore(r.nextBeforeTsMs);
      setActivityLoading(false);
    }).catch(() => setActivityLoading(false));
  }

  if (err) return <div className="bmError">{err}</div>;
  if (profile === undefined) return <div className="muted">Loading profile…</div>;
  if (profile === null) return <div className="muted">No permanent record for this player yet.</div>;

  return (
    <div>
      <button className="btn" onClick={onBack} style={{ marginBottom: 12 }}>← Back to search</button>

      <header style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>{profile.displayName}</h2>
        <div className="muted" style={{ fontSize: '.8rem' }}>
          <code className="bmGuid">{profile.identityId}</code>
          {profile.alsoKnownAs.length ? <span> · also known as {profile.alsoKnownAs.join(', ')}</span> : null}
        </div>
        <div className="muted" style={{ fontSize: '.8rem', marginTop: 4 }}>
          First seen {profile.firstSeen ? new Date(profile.firstSeen).toLocaleDateString() : '—'} ·
          {' '}Last seen {profile.lastSeen ? new Date(profile.lastSeen).toLocaleString() : '—'} ·
          {' '}Servers: {profile.servers.map((s) => s.name).join(', ') || '—'}
        </div>
      </header>

      <div className="bmStats" style={{ marginBottom: 20 }}>
        <StatTile label="Kills" value={profile.totals.kills} />
        <StatTile label="Deaths" value={profile.totals.deaths} />
        <StatTile label="K/D" value={profile.totals.deaths > 0 ? (profile.totals.kills / profile.totals.deaths).toFixed(2) : profile.totals.kills.toFixed(2)} />
        <StatTile label="Hits" value={profile.totals.hits} />
        <StatTile label="Sessions" value={profile.totals.sessions} />
        <StatTile label="Playtime" value={fmtDuration(profile.totals.playtimeMs)} />
      </div>

      {profile.perServer.length > 1 ? (
        <section style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: '.85rem' }}>Per-server breakdown</h3>
          <table className="bmTable">
            <thead>
              <tr><th>Server</th><th>Kills</th><th>Deaths</th><th>Hits</th><th>Sessions</th><th>Playtime</th></tr>
            </thead>
            <tbody>
              {profile.perServer.map((s) => (
                <tr key={s.serverId}>
                  <td>{s.serverName}</td>
                  <td>{s.kills}</td>
                  <td>{s.deaths}</td>
                  <td>{s.hits}</td>
                  <td>{s.sessions}</td>
                  <td>{fmtDuration(s.playtimeMs)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      <section>
        <h3 style={{ fontSize: '.85rem' }}>Activity</h3>
        {activity.length === 0 && !activityLoading ? (
          <div className="muted">No recorded activity.</div>
        ) : (
          <table className="bmTable">
            <thead><tr><th>When</th><th>Server</th><th>Type</th><th>Detail</th></tr></thead>
            <tbody>
              {activity.map((item, idx) => (
                <tr key={`${item.tsMs}-${idx}`}>
                  <td>{new Date(item.tsMs).toLocaleString()}</td>
                  <td>{item.serverName}</td>
                  <td>{item.type}</td>
                  <td>{describeActivity(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {nextBefore ? (
          <button className="btn" style={{ marginTop: 8 }} disabled={activityLoading}
            onClick={() => loadMoreActivity(identityId, nextBefore, setActivity)}>
            {activityLoading ? 'Loading…' : 'Load more'}
          </button>
        ) : null}
      </section>
    </div>
  );
}

export function PlayerSearchView({ initialIdentityId }: { initialIdentityId?: string | null } = {}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlayerSearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(initialIdentityId || null);

  useEffect(() => {
    if (query.trim().length < 2) { setResults(null); return; }
    setLoading(true);
    const handle = setTimeout(() => {
      searchPlayers(query, 25).then((r) => { setResults(r.results); setLoading(false); }).catch(() => setLoading(false));
    }, 300);
    return () => clearTimeout(handle);
  }, [query]);

  if (selected) {
    return <PlayerProfilePanel identityId={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <input
        className="input"
        style={{ maxWidth: 360, marginBottom: 16 }}
        placeholder="Search by player name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />

      {query.trim().length < 2 ? (
        <div className="muted">Type at least 2 characters to search the permanent player record.</div>
      ) : loading ? (
        <div className="muted">Searching…</div>
      ) : !results || results.length === 0 ? (
        <div className="muted">No players matching "{query}".</div>
      ) : (
        <table className="bmTable">
          <thead><tr><th>Name</th><th>Also known as</th><th>Last seen</th><th>Servers</th></tr></thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.identityId} style={{ cursor: 'pointer' }} onClick={() => setSelected(r.identityId)}>
                <td>{r.displayName}</td>
                <td className="muted">{r.alsoKnownAs.join(', ') || '—'}</td>
                <td>{r.lastSeen ? new Date(r.lastSeen).toLocaleString() : '—'}</td>
                <td>{r.servers.map((s) => s.name).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
