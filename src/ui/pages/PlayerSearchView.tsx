import React, { useEffect, useMemo, useState } from 'react';
import {
  getPlayerActivity,
  getPlayerProfile,
  getServerIncidents,
  searchPlayers,
  type Incident,
  type PlayerActivityItem,
  type PlayerProfile,
  type PlayerSearchResult,
} from '../../util/api';
import { INCIDENT_CATEGORY_LABELS } from '../../util/anticheatCategories';

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
    default: return item.type;
  }
}

// Only the non-flag event types - every flag category (wallbang, godMode,
// interactRange, and the 8 live-scan-only ones) comes from `incidents`
// instead (see the effect below), which covers all 11 categories rather than
// just the 3 the permanent index happens to store. Fetching these two lists
// with overlapping types would double up wallbang/godMode/interactRange rows.
const NEUTRAL_TYPES = ['kill', 'death', 'hit', 'damaged', 'interact', 'disconnect'];

const ACTIVITY_TYPE_GROUPS: { label: string; types: string[] }[] = [
  { label: 'Combat', types: ['kill', 'death', 'hit', 'damaged'] },
  { label: 'Other', types: ['interact', 'disconnect'] },
];

const FLAG_CATEGORIES = Object.keys(INCIDENT_CATEGORY_LABELS);

// Severity -> color tier, plus a 'clean' tier for a player with zero flags
// (a deliberate green "nothing here" signal, not just an absence of color)
// and 'neutral' for ordinary combat/connection events, which should read as
// background noise next to an actual flag, not compete with it visually.
type Tier = 'high' | 'medium' | 'low' | 'neutral' | 'clean';

const TIER_STYLE: Record<Tier, { border: string; bg: string; text: string }> = {
  high: { border: 'var(--red)', bg: 'var(--red-dim)', text: 'var(--red)' },
  medium: { border: 'var(--orange)', bg: 'var(--orange-dim)', text: 'var(--orange)' },
  low: { border: 'var(--yellow)', bg: 'var(--yellow-dim)', text: 'var(--yellow)' },
  neutral: { border: 'var(--border-strong)', bg: 'transparent', text: 'var(--text-dim)' },
  clean: { border: 'var(--green)', bg: 'var(--green-dim)', text: 'var(--green)' },
};

const SEVERITY_TIER: Record<string, Tier> = { high: 'high', medium: 'medium', low: 'low' };

// One merged, chronological detection log - the case-file format from a real
// anti-cheat vendor tool reads as a single dense timeline where flags are
// colored rows jumping out of an otherwise-muted activity stream, not a
// separate "incidents" table an admin has to cross-reference by hand against
// a separate "activity" table.
type TimelineRow = {
  tsMs: number;
  tier: Tier;
  tag: string;
  tagTitle: string;
  summary: string;
  serverId: string;
  confidence: number | null;
};

function activityToRow(item: PlayerActivityItem): TimelineRow {
  return { tsMs: item.tsMs, tier: 'neutral', tag: item.type, tagTitle: item.type, summary: describeActivity(item), serverId: item.serverId, confidence: null };
}

function incidentToRow(inc: Incident): TimelineRow {
  return {
    tsMs: inc.tsMs,
    tier: SEVERITY_TIER[inc.severity] || 'medium',
    tag: inc.category,
    tagTitle: INCIDENT_CATEGORY_LABELS[inc.category] || inc.category,
    summary: inc.summary,
    serverId: inc.serverId,
    confidence: inc.confidence,
  };
}

function TimelineRowView({ row }: { row: TimelineRow }) {
  const style = TIER_STYLE[row.tier];
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        borderLeft: `3px solid ${style.border}`,
        background: style.bg,
        padding: '5px 10px',
        fontSize: '.78rem',
      }}
    >
      <span
        title={row.tagTitle}
        style={{
          fontSize: '.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px',
          color: style.text, minWidth: 92, flexShrink: 0,
        }}
      >
        {row.tag}
      </span>
      <span style={{ flex: 1, color: 'var(--text)', minWidth: 0 }}>{row.summary}</span>
      {row.confidence !== null ? (
        <span className="muted" style={{ fontSize: '.68rem', flexShrink: 0 }} title="Confidence for this specific incident">{row.confidence}%</span>
      ) : null}
      <span className="muted" style={{ fontSize: '.68rem', flexShrink: 0, minWidth: 70, textAlign: 'right' }}>{row.serverId}</span>
      <span className="muted" style={{ fontSize: '.68rem', flexShrink: 0, minWidth: 130, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        {new Date(row.tsMs).toLocaleString()}
      </span>
    </div>
  );
}

function PlayerProfilePanel({ identityId, onBack }: { identityId: string; onBack: () => void }) {
  const [profile, setProfile] = useState<PlayerProfile | null | undefined>(undefined);
  const [activity, setActivity] = useState<PlayerActivityItem[]>([]);
  const [activityLoading, setActivityLoading] = useState(false);
  const [nextBefore, setNextBefore] = useState<number | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<Set<string>>(new Set()); // empty = all neutral types
  const [flagFilter, setFlagFilter] = useState<Set<string>>(new Set()); // empty = all flag categories
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [incidentsScanning, setIncidentsScanning] = useState(false);

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

  // Incidents cover every flag category (the live scanner's full 11, not
  // just the 3 the permanent index stores) but are scoped per-server, so
  // fetching a player's full flag history means asking every server they've
  // touched. Each call is backed by the same cache the Flagged tab uses - a
  // server nobody's opened before returns scanning:true and an empty list
  // instantly rather than blocking, so this polls a few times to pick up the
  // result once that background scan finishes instead of leaving it looking
  // permanently empty.
  useEffect(() => {
    if (!profile || !profile.servers.length) { setIncidents([]); setIncidentsScanning(false); return; }
    let alive = true;
    let pollHandle: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    async function load() {
      const results = await Promise.all(
        profile!.servers.map((s) => getServerIncidents({ serverId: s.id, identityId, limit: 300 }).catch(() => null))
      );
      if (!alive) return;
      const merged: Incident[] = [];
      let anyScanning = false;
      for (const r of results) {
        if (!r) continue;
        merged.push(...r.incidents);
        if (r.scanning) anyScanning = true;
      }
      merged.sort((a, b) => b.tsMs - a.tsMs);
      setIncidents(merged);
      setIncidentsScanning(anyScanning);
      attempts += 1;
      if (anyScanning && attempts < 6) pollHandle = setTimeout(load, 8000);
    }
    load();

    return () => { alive = false; if (pollHandle) clearTimeout(pollHandle); };
  }, [profile, identityId]);

  function loadMoreActivity(id: string, beforeTsMs: number | undefined, apply: (fn: (prev: PlayerActivityItem[]) => PlayerActivityItem[]) => void) {
    setActivityLoading(true);
    getPlayerActivity(id, { beforeTsMs, limit: 50, types: typeFilter.size ? Array.from(typeFilter) : NEUTRAL_TYPES }).then((r) => {
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

  function toggleFlag(cat: string) {
    setFlagFilter((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  }

  const timelineRows = useMemo((): TimelineRow[] => {
    const activityRows = activity.map(activityToRow);
    const incidentRows = incidents
      .filter((inc) => !flagFilter.size || flagFilter.has(inc.category))
      .map(incidentToRow);
    const merged = [...activityRows, ...incidentRows];
    merged.sort((a, b) => b.tsMs - a.tsMs);
    return merged;
  }, [activity, incidents, flagFilter]);

  if (err) return <div className="bmError">{err}</div>;
  if (profile === undefined) return <div className="muted">Loading profile…</div>;
  if (profile === null) return <div className="muted">No permanent record for this player yet.</div>;

  const headerTier: Tier = profile.highestSeverity ? (SEVERITY_TIER[profile.highestSeverity] || 'medium') : 'clean';
  const headerStyle = TIER_STYLE[headerTier];

  return (
    <div>
      <button className="btn" onClick={onBack} style={{ marginBottom: 12 }}>← Back to search</button>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h2 style={{ margin: 0 }}>{profile.displayName}</h2>
            {profile.ban?.active ? <span className="bmBadge bmBadge-warn">BANNED</span> : null}
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
          {profile.ban ? (
            <div className="bmError" style={{ marginTop: 8, fontSize: '.8rem', maxWidth: 520 }}>
              {profile.ban.active ? 'Banned' : 'Previously banned (expired)'} by <strong>{profile.ban.bannedBy || 'unknown'}</strong> on{' '}
              {new Date(profile.ban.timestamp * 1000).toLocaleString()} — {profile.ban.reason || 'no reason recorded'}
            </div>
          ) : null}
        </div>

        <div
          style={{
            background: headerStyle.bg, border: `1px solid ${headerStyle.border}`, borderRadius: 8,
            padding: '10px 22px', textAlign: 'center', minWidth: 120, flexShrink: 0,
          }}
        >
          <div style={{ fontSize: '.65rem', letterSpacing: 1, textTransform: 'uppercase', color: headerStyle.text, fontWeight: 700 }}>Risk</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: headerStyle.text, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>
            {profile.totals.riskScore.toFixed(1)}
          </div>
          <div className="muted" style={{ fontSize: '.68rem' }}>
            {profile.totals.flaggedCount > 0 ? `${profile.totals.confidence}% confidence · ${profile.totals.flaggedCount} flagged` : 'no flags on record'}
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: 20, alignItems: 'start' }}>
        <section style={{ minWidth: 0 }}>
          <h3 style={{ fontSize: '.85rem' }}>Detection timeline</h3>
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
              <button className="btn btn-sm" onClick={() => setTypeFilter(new Set())}>Clear</button>
            ) : null}
          </div>
          <div className="row" style={{ gap: 6, marginBottom: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="muted" style={{ fontSize: '.7rem', textTransform: 'uppercase' }}>Flags:</span>
            {FLAG_CATEGORIES.map((cat) => (
              <label key={cat} title={INCIDENT_CATEGORY_LABELS[cat]} style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '.75rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={flagFilter.has(cat)} onChange={() => toggleFlag(cat)} />
                {cat}
              </label>
            ))}
            {flagFilter.size > 0 ? (
              <button className="btn btn-sm" onClick={() => setFlagFilter(new Set())}>Clear</button>
            ) : null}
          </div>

          {incidentsScanning ? (
            <div className="muted" style={{ fontSize: '.75rem', marginBottom: 8 }}>
              Still scanning one or more servers for older flag history — this fills in automatically, no need to reload.
            </div>
          ) : null}

          {timelineRows.length === 0 && !activityLoading ? (
            <div className="muted">No recorded activity.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
              {timelineRows.map((row, idx) => (
                <TimelineRowView key={`${row.tsMs}-${row.tag}-${idx}`} row={row} />
              ))}
            </div>
          )}
          {nextBefore ? (
            <button className="btn" style={{ marginTop: 8 }} disabled={activityLoading}
              onClick={() => loadMoreActivity(identityId, nextBefore, setActivity)}>
              {activityLoading ? 'Loading…' : 'Load more'}
            </button>
          ) : null}
        </section>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="bmStats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StatTile label="Kills" value={profile.totals.kills} />
            <StatTile label="Deaths" value={profile.totals.deaths} />
            <StatTile label="K/D" value={profile.totals.deaths > 0 ? (profile.totals.kills / profile.totals.deaths).toFixed(2) : profile.totals.kills.toFixed(2)} />
            <StatTile label="Hits" value={profile.totals.hits} />
            <StatTile label="Sessions" value={profile.totals.sessions} />
            <StatTile label="Playtime" value={fmtDuration(profile.totals.playtimeMs)} />
          </div>

          {profile.perServer.length > 1 ? (
            <div>
              <h3 style={{ fontSize: '.8rem', marginBottom: 6 }}>Per-server</h3>
              <table className="bmTable" style={{ fontSize: '.75rem' }}>
                <thead>
                  <tr><th>Server</th><th>K/D</th><th>Playtime</th></tr>
                </thead>
                <tbody>
                  {profile.perServer.map((s) => (
                    <tr key={s.serverId}>
                      <td>{s.serverName}</td>
                      <td>{s.kills}/{s.deaths}</td>
                      <td>{fmtDuration(s.playtimeMs)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

function severityBadgeClass(sev: PlayerSearchResult['highestSeverity']): string {
  if (sev === 'high') return 'bmBadge bmBadge-warn';
  if (sev === 'medium') return 'bmBadge bmBadge-medium';
  if (sev === 'low') return 'bmBadge bmBadge-low';
  return 'bmBadge';
}

function riskTierOf(sev: PlayerSearchResult['highestSeverity']): Tier {
  return sev ? (SEVERITY_TIER[sev] || 'medium') : 'neutral';
}

const PAGE_SIZE = 50;

export function PlayerSearchView({ initialIdentityId }: { initialIdentityId?: string | null } = {}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlayerSearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [includeBanned, setIncludeBanned] = useState(false);
  const [selected, setSelected] = useState<string | null>(initialIdentityId || null);

  // Every player, all-time, ranked by risk score - no minimum query length,
  // an empty query is the default "show everyone" state. Typing narrows by
  // name without changing the ranking. Banned players are excluded by
  // default ("should disappear if banned") unless includeBanned is checked.
  useEffect(() => {
    setLoading(true);
    const handle = setTimeout(() => {
      searchPlayers(query, PAGE_SIZE, offset, includeBanned).then((r) => { setResults(r.results); setLoading(false); }).catch(() => setLoading(false));
    }, query ? 300 : 0);
    return () => clearTimeout(handle);
  }, [query, offset, includeBanned]);

  if (selected) {
    return <PlayerProfilePanel identityId={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <div className="row" style={{ gap: 14, alignItems: 'center', marginBottom: 16 }}>
        <input
          className="input"
          style={{ maxWidth: 360 }}
          placeholder="Filter by player name (optional)…"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOffset(0); }}
          autoFocus
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '.8rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={includeBanned} onChange={(e) => { setIncludeBanned(e.target.checked); setOffset(0); }} />
          <span className="muted">Show banned players</span>
        </label>
      </div>

      {loading && !results ? (
        <div className="muted">Loading…</div>
      ) : !results || results.length === 0 ? (
        <div className="muted">{query ? `No players matching "${query}".` : 'No players indexed yet.'}</div>
      ) : (
        <>
          <table className="bmTable">
            <thead><tr><th>Risk</th><th>Confidence</th><th>Player</th><th>K/D</th><th>Hits</th><th>Sessions</th><th>Playtime</th><th>Last seen</th></tr></thead>
            <tbody>
              {results.map((r) => {
                const tier = riskTierOf(r.highestSeverity);
                const style = TIER_STYLE[tier];
                return (
                  <tr key={r.identityId} style={{ cursor: 'pointer', borderLeft: r.flaggedCount > 0 ? `3px solid ${style.border}` : undefined }} onClick={() => setSelected(r.identityId)}>
                    <td>
                      {r.highestSeverity ? (
                        <span
                          style={{
                            display: 'inline-flex', alignItems: 'baseline', gap: 4, padding: '2px 8px', borderRadius: 4,
                            background: style.bg, border: `1px solid ${style.border}`,
                          }}
                        >
                          <strong style={{ color: style.text, fontVariantNumeric: 'tabular-nums' }}>{r.riskScore}</strong>
                          <span className={severityBadgeClass(r.highestSeverity)} style={{ padding: 0, background: 'transparent', border: 'none' }}>{r.highestSeverity}</span>
                        </span>
                      ) : <span className="muted">—</span>}
                    </td>
                    <td>{r.flaggedCount > 0 ? <span title="How sure we are, weighted by how much independent evidence there is">{r.confidence}%</span> : <span className="muted">—</span>}</td>
                    <td>{r.displayName}</td>
                    <td>{r.kills}/{r.deaths}</td>
                    <td>{r.hits}</td>
                    <td>{r.sessions}</td>
                    <td>{fmtDuration(r.playtimeMs)}</td>
                    <td>{r.lastSeen ? new Date(r.lastSeen).toLocaleString() : '—'}</td>
                  </tr>
                );
              })}
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
