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
    case 'death':
      if (d.relation === 'SUICIDE') return `Died (self-inflicted)${d.weaponName ? ` — ${d.weaponName}` : ''}`;
      if (d.relation === 'UNKNOWN' || !d.killerName) return 'Died (unattributed — fall damage, zombie, or environmental)';
      return `Killed by ${d.killerName}${d.weaponName ? ` (${d.weaponName})` : ''}`;
    case 'hit': return `Hit ${d.victimName || 'someone'}${d.weaponName ? ` with ${d.weaponName}` : ''}${typeof d.damage === 'number' ? ` for ${d.damage.toFixed(0)} dmg` : ''}${d.losBlocked ? ' — LOS blocked' : ''}`;
    case 'damaged': return `Hit by ${d.shooterName || 'unknown'}${d.weaponName ? ` (${d.weaponName})` : ''}${typeof d.damage === 'number' ? ` for ${d.damage.toFixed(0)} dmg` : ''}`;
    case 'interact': return `${d.actionType || 'Interacted'}${typeof d.distanceM === 'number' ? ` (${d.distanceM.toFixed(1)}m)` : ''}`;
    case 'disconnect': return 'Disconnected';
    case 'wallbang': return `Flagged: hit landed through blocked line of sight on ${d.victimName || 'a player'} (${typeof d.distanceM === 'number' ? `${d.distanceM.toFixed(0)}m, ` : ''}${d.weaponName || 'unknown weapon'})`;
    case 'godMode': return `Flagged: damage/health mismatch (${d.summary || 'reported damage did not match actual health change'})`;
    case 'interactRange': return `Flagged: ${d.summary || 'interaction from implausible range'}`;
    default: return item.type;
  }
}

// Event types worth letting an admin filter by. Grouped loosely so the
// checkbox row reads as "combat" vs "flags" vs "connection" rather than a
// flat alphabetical dump.
const ACTIVITY_TYPE_GROUPS: { label: string; types: string[] }[] = [
  { label: 'Combat', types: ['kill', 'death', 'hit', 'damaged'] },
  { label: 'Flags', types: ['wallbang', 'godMode', 'interactRange'] },
  { label: 'Other', types: ['interact', 'disconnect'] },
];

function PlayerProfilePanel({ identityId, onBack }: { identityId: string; onBack: () => void }) {
  const [profile, setProfile] = useState<PlayerProfile | null | undefined>(undefined);
  const [activity, setActivity] = useState<PlayerActivityItem[]>([]);
  const [activityLoading, setActivityLoading] = useState(false);
  const [nextBefore, setNextBefore] = useState<number | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<Set<string>>(new Set()); // empty = all types

  useEffect(() => {
    let alive = true;
    setProfile(undefined);
    getPlayerProfile(identityId).then((p) => { if (alive) setProfile(p); }).catch((e: any) => {
      if (alive) setErr(e?.message || 'Failed to load profile');
    });
    return () => { alive = false; };
  }, [identityId]);

  useEffect(() => {
    let alive = true;
    setActivity([]);
    setNextBefore(null);
    loadMoreActivity(identityId, undefined, alive ? setActivity : () => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identityId, typeFilter]);

  function loadMoreActivity(id: string, beforeTsMs: number | undefined, apply: (fn: (prev: PlayerActivityItem[]) => PlayerActivityItem[]) => void) {
    setActivityLoading(true);
    getPlayerActivity(id, { beforeTsMs, limit: 50, types: typeFilter.size ? Array.from(typeFilter) : undefined }).then((r) => {
      apply((prev) => [...prev, ...r.items]);
      setNextBefore(r.nextBeforeTsMs);
      setActivityLoading(false);
    }).catch(() => setActivityLoading(false));
  }

  function toggleType(t: string) {
    setTypeFilter((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  }

  if (err) return <div className="bmError">{err}</div>;
  if (profile === undefined) return <div className="muted">Loading profile…</div>;
  if (profile === null) return <div className="muted">No permanent record for this player yet.</div>;

  return (
    <div>
      <button className="btn" onClick={onBack} style={{ marginBottom: 12 }}>← Back to search</button>

      <header style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h2 style={{ margin: 0 }}>{profile.displayName}</h2>
          {profile.highestSeverity ? (
            <span className={severityBadgeClass(profile.highestSeverity)}>
              {profile.highestSeverity} · {profile.totals.flaggedCount} flagged
            </span>
          ) : null}
        </div>
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
        <div className="row" style={{ gap: 14, marginBottom: 10, flexWrap: 'wrap' }}>
          {ACTIVITY_TYPE_GROUPS.map((group) => (
            <div key={group.label} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span className="muted" style={{ fontSize: '.7rem', textTransform: 'uppercase' }}>{group.label}:</span>
              {group.types.map((t) => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={typeFilter.has(t)} onChange={() => toggleType(t)} />
                  {t}
                </label>
              ))}
            </div>
          ))}
          {typeFilter.size > 0 ? (
            <button className="btn btn-sm" onClick={() => setTypeFilter(new Set())}>Clear filter</button>
          ) : null}
        </div>
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

function severityBadgeClass(sev: PlayerSearchResult['highestSeverity']): string {
  if (sev === 'high') return 'bmBadge bmBadge-warn';
  if (sev === 'medium') return 'bmBadge bmBadge-medium';
  if (sev === 'low') return 'bmBadge bmBadge-low';
  return 'bmBadge';
}

const PAGE_SIZE = 50;

export function PlayerSearchView({ initialIdentityId }: { initialIdentityId?: string | null } = {}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlayerSearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<string | null>(initialIdentityId || null);

  // Every player, all-time, ranked by risk score - no minimum query length,
  // an empty query is the default "show everyone" state. Typing narrows by
  // name without changing the ranking.
  useEffect(() => {
    setLoading(true);
    const handle = setTimeout(() => {
      searchPlayers(query, PAGE_SIZE, offset).then((r) => { setResults(r.results); setLoading(false); }).catch(() => setLoading(false));
    }, query ? 300 : 0);
    return () => clearTimeout(handle);
  }, [query, offset]);

  if (selected) {
    return <PlayerProfilePanel identityId={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <input
        className="input"
        style={{ maxWidth: 360, marginBottom: 16 }}
        placeholder="Filter by player name (optional)…"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOffset(0); }}
        autoFocus
      />

      {loading && !results ? (
        <div className="muted">Loading…</div>
      ) : !results || results.length === 0 ? (
        <div className="muted">{query ? `No players matching "${query}".` : 'No players indexed yet.'}</div>
      ) : (
        <>
          <table className="bmTable">
            <thead><tr><th>Risk</th><th>Player</th><th>K/D</th><th>Hits</th><th>Sessions</th><th>Playtime</th><th>Last seen</th></tr></thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.identityId} style={{ cursor: 'pointer' }} onClick={() => setSelected(r.identityId)}>
                  <td>
                    {r.highestSeverity ? (
                      <span className={severityBadgeClass(r.highestSeverity)}>{r.highestSeverity} · {r.flaggedCount}</span>
                    ) : <span className="muted">—</span>}
                  </td>
                  <td>{r.displayName}</td>
                  <td>{r.kills}/{r.deaths}</td>
                  <td>{r.hits}</td>
                  <td>{r.sessions}</td>
                  <td>{fmtDuration(r.playtimeMs)}</td>
                  <td>{r.lastSeen ? new Date(r.lastSeen).toLocaleString() : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row" style={{ gap: 8, marginTop: 10 }}>
            <button className="btn" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}>← Prev</button>
            <button className="btn" disabled={results.length < PAGE_SIZE} onClick={() => setOffset(offset + PAGE_SIZE)}>Next →</button>
          </div>
        </>
      )}
    </div>
  );
}
