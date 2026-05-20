import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { hasBmPerm } from '../../util/session';
import { type BmDashServer, listBans, listBmServers } from '../../util/bmApi';
import { load as loadFilter, save as saveFilter } from '../../util/serverFilter';
import { BMServerStatusStrip } from '../components/BMServerStatusStrip';
import { BMPlayerSearch } from '../components/BMPlayerSearch';
import { BMActivityFeed } from '../components/BMActivityFeed';
import { BMOnlinePlayerList } from '../components/BMOnlinePlayerList';
import { ServerFilterChips } from '../components/ServerFilterChips';
import { BMBanForm } from '../components/BMBanForm';
import { useToast } from '../components/Toast';
import { bmEvents } from '../../util/sseClient';

type TabKey = 'overview' | 'players' | 'bans' | 'servers' | 'activity' | 'chat';

const TABS: { key: TabKey; label: string; perm: () => boolean }[] = [
  { key: 'overview', label: 'Overview', perm: () => hasBmPerm('viewServers') || hasBmPerm('viewActivity') },
  { key: 'players', label: 'Players', perm: () => hasBmPerm('viewPlayers') },
  { key: 'bans', label: 'Bans', perm: () => hasBmPerm('viewBans') },
  { key: 'servers', label: 'Servers', perm: () => hasBmPerm('viewServers') },
  { key: 'activity', label: 'Activity', perm: () => hasBmPerm('viewActivity') },
  { key: 'chat', label: 'Chat', perm: () => hasBmPerm('viewChat') },
];

const STORAGE_TAB_KEY = 'rz.bm.lastTab.v1';

export function BattleMetricsPage() {
  const [params, setParams] = useSearchParams();
  const initialTab = (params.get('tab') as TabKey) || (sessionStorage.getItem(STORAGE_TAB_KEY) as TabKey) || 'overview';
  const [tab, setTab] = useState<TabKey>(initialTab);
  const [servers, setServers] = useState<BmDashServer[]>([]);
  const [filter, setFilter] = useState<string[]>(loadFilter());
  const toast = useToast();

  // Hook up the SSE stream so cross-admin toasts fire here. Start once.
  useEffect(() => {
    bmEvents.start();
    const unsub = bmEvents.subscribe((e) => {
      if (e.type === 'ban.create') toast.push(`${e.payload?.by || 'Someone'} banned ${e.payload?.playerId || 'a player'}: ${e.payload?.reason || ''}`, { kind: 'warn' });
      else if (e.type === 'ban.delete') toast.push(`${e.payload?.by || 'Someone'} removed a ban`, { kind: 'info' });
      else if (e.type === 'kick') toast.push(`${e.payload?.by || 'Someone'} kicked a player`, { kind: 'info' });
    });
    return () => { unsub(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist tab + URL.
  useEffect(() => {
    sessionStorage.setItem(STORAGE_TAB_KEY, tab);
    if (params.get('tab') !== tab) {
      const next = new URLSearchParams(params);
      next.set('tab', tab);
      setParams(next, { replace: true });
    }
  }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  // Load server list once for the filter + ban form.
  useEffect(() => {
    let alive = true;
    listBmServers().then((out) => {
      if (alive) setServers(out.servers);
    }).catch(() => {});
    return () => { alive = false; };
  }, []);

  const visibleTabs = useMemo(() => TABS.filter((t) => t.perm()), []);
  const activeTab = visibleTabs.find((t) => t.key === tab) || visibleTabs[0];

  if (!visibleTabs.length) {
    return (
      <div className="page" style={{ padding: 24 }}>
        Your account doesn't have any BattleMetrics permissions yet.
        Ask a manager at <a href="https://auth.reforgedz.net/manage">auth.reforgedz.net</a>.
      </div>
    );
  }

  return (
    <div className="bmPage">
      <header className="bmTabbar">
        {visibleTabs.map((t) => (
          <button
            key={t.key}
            className={`bmTab ${t.key === activeTab?.key ? 'on' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
        <div className="bmTabbar-spacer" />
        <ServerFilterChips
          servers={servers}
          value={filter}
          onChange={(s) => { setFilter(s); saveFilter(s); }}
        />
      </header>

      {activeTab?.key === 'overview' ? (
        <section className="bmTabPanel">
          <BMServerStatusStrip onServersLoaded={setServers} />
          <div className="bmGrid2">
            <div>
              <h2>Search</h2>
              <BMPlayerSearch serverIds={filter.length ? filter : undefined} />
            </div>
            <div>
              <h2>Recent activity</h2>
              {hasBmPerm('viewActivity')
                ? <BMActivityFeed serverIds={filter.length ? filter : undefined} />
                : <div className="muted">You don't have View Activity permission.</div>}
            </div>
          </div>
        </section>
      ) : null}

      {activeTab?.key === 'players' ? (
        <section className="bmTabPanel">
          <h2>Find a player</h2>
          <BMPlayerSearch serverIds={filter.length ? filter : undefined} />
        </section>
      ) : null}

      {activeTab?.key === 'bans' ? (
        <BansTab servers={servers} serverIds={filter} />
      ) : null}

      {activeTab?.key === 'servers' ? (
        <section className="bmTabPanel">
          <BMServerStatusStrip onServersLoaded={setServers} />
          <div className="bmServersGrid">
            {servers.filter((s) => !filter.length || filter.includes(s.bmServerId)).map((s) => (
              <div key={s.bmServerId} className="bmServerPanel">
                <h3>{s.name}</h3>
                <BMOnlinePlayerList server={s} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {activeTab?.key === 'activity' ? (
        <section className="bmTabPanel">
          <BMActivityFeed serverIds={filter.length ? filter : undefined} />
        </section>
      ) : null}

      {activeTab?.key === 'chat' ? (
        <section className="bmTabPanel">
          <BMActivityFeed serverIds={filter.length ? filter : undefined} chatOnly />
        </section>
      ) : null}
    </div>
  );
}

function BansTab({ servers, serverIds }: { servers: BmDashServer[]; serverIds: string[] }) {
  const [bans, setBans] = useState<any[]>([]);
  const [includeExpired, setIncludeExpired] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [banFor, setBanFor] = useState<{ bmPlayerId: string; name: string; guid?: string | null } | null>(null);
  const canBan = hasBmPerm('ban');
  const nav = useNavigate();

  async function load() {
    try {
      const out = await listBans({ serverIds: serverIds.length ? serverIds : undefined, includeExpired });
      setBans(out.bans);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load');
    }
  }
  useEffect(() => { load(); }, [JSON.stringify(serverIds), includeExpired]); // eslint-disable-line

  return (
    <section className="bmTabPanel">
      <div className="bmToolbar">
        <label className="bmInlineLabel">
          <input type="checkbox" checked={includeExpired} onChange={(e) => setIncludeExpired(e.target.checked)} />
          Include expired
        </label>
        <button className="btn" onClick={load}>Refresh</button>
      </div>
      {err ? <div className="bmError">{err}</div> : null}
      <table className="bmTable">
        <thead>
          <tr><th>Player</th><th>Reason</th><th>Expires</th><th>Created</th><th></th></tr>
        </thead>
        <tbody>
          {bans.length === 0 ? (
            <tr><td colSpan={5} className="muted">No bans.</td></tr>
          ) : bans.map((b) => {
            const a = b.attributes || {};
            return (
              <tr key={b.id}>
                <td>{a.identifiers?.find((i: any) => i.type === 'name')?.identifier || '(unknown)'}</td>
                <td>{a.reason || ''}</td>
                <td>{a.expires ? new Date(a.expires).toLocaleString() : 'Permanent'}</td>
                <td>{a.createdAt ? new Date(a.createdAt).toLocaleString() : ''}</td>
                <td>
                  <a className="btn btn-sm" href={`https://www.battlemetrics.com/rcon/bans/${b.id}`} target="_blank" rel="noreferrer">View on BM</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {canBan ? (
        <div className="bmFooter">
          <p className="muted">Tip: open a player profile to ban with the full form.</p>
        </div>
      ) : null}
      {banFor ? (
        <BMBanForm
          player={banFor}
          servers={servers}
          onClose={() => setBanFor(null)}
          onCreated={() => { setBanFor(null); load(); }}
        />
      ) : null}
    </section>
  );
}
