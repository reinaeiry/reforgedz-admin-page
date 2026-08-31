import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { hasBmPerm } from '../../util/session';
import { accountUnban, addIpBan, type BmDashServer, deleteBan, type IpBanInfo, listBans, listBmServers, listIpBans, removeIpBan, updateBan } from '../../util/bmApi';
import { renderBanReason } from '../../util/banFormat';
import { ConfirmModal } from '../components/ConfirmModal';
import { load as loadFilter, save as saveFilter } from '../../util/serverFilter';
import { BMServerStatusStrip } from '../components/BMServerStatusStrip';
import { BMPlayerSearch } from '../components/BMPlayerSearch';
import { BMLogs } from '../components/BMLogs';
import { BMOnlinePlayerList } from '../components/BMOnlinePlayerList';
import { ServerFilterChips } from '../components/ServerFilterChips';
import { BMBanForm } from '../components/BMBanForm';
import { IngameTable } from '../components/IngameTable';
import { IngameActionForm } from '../components/IngameActionForm';
import { useToast } from '../components/Toast';
import { bmEvents } from '../../util/sseClient';

type TabKey = 'overview' | 'players' | 'bans' | 'ipbans' | 'servers' | 'logs';

const TABS: { key: TabKey; label: string; perm: () => boolean }[] = [
  { key: 'overview', label: 'Overview', perm: () => hasBmPerm('viewServers') || hasBmPerm('viewActivity') },
  { key: 'players', label: 'Players', perm: () => hasBmPerm('viewPlayers') },
  { key: 'bans', label: 'Bans and Mutes', perm: () => hasBmPerm('viewBans') || hasBmPerm('viewIngameBans') || hasBmPerm('viewIngameMutes') },
  { key: 'ipbans', label: 'IP Bans', perm: () => hasBmPerm('viewIps') },
  { key: 'servers', label: 'Servers', perm: () => hasBmPerm('viewServers') },
  { key: 'logs', label: 'Logs', perm: () => hasBmPerm('viewActivity') },
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
        Your account doesn't have any Moderation permissions yet.
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
              <h2>Recent logs</h2>
              {hasBmPerm('viewActivity')
                ? <BMLogs pageSize={20} scopes={bmIdsToScopes(filter, servers)} />
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
        <BansAndMutesTab servers={servers} serverIds={filter} />
      ) : null}

      {activeTab?.key === 'ipbans' ? (
        <IpBansTab />
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

      {activeTab?.key === 'logs' ? (
        <section className="bmTabPanel">
          <h2>Game logs</h2>
          <BMLogs showPlayerSearch scopes={bmIdsToScopes(filter, servers)} />
        </section>
      ) : null}

    </div>
  );
}

// Map the top-right server filter (which carries BattleMetrics IDs) into
// the scope tags the logs API expects (NA1 / NA2 / EU1 / EU2). When no
// server is selected we return undefined so the query falls back to "all
// allowed scopes". If selected servers don't carry a tag we just drop them.
function bmIdsToScopes(filter: string[], servers: BmDashServer[]): string[] | undefined {
  if (!filter.length) return undefined;
  const out: string[] = [];
  for (const id of filter) {
    const s = servers.find((x) => x.bmServerId === id);
    if (s?.tag) out.push(s.tag);
  }
  return out.length ? out : undefined;
}

type BanSource = 'bm' | 'ingameBans' | 'ingameMutes';

function BansAndMutesTab({ servers, serverIds }: { servers: BmDashServer[]; serverIds: string[] }) {
  const [source, setSource] = useState<BanSource>(() => {
    if (hasBmPerm('viewBans')) return 'bm';
    if (hasBmPerm('viewIngameBans')) return 'ingameBans';
    return 'ingameMutes';
  });
  const [adding, setAdding] = useState<'bans' | 'mutes' | null>(null);
  const [pickedPlayer, setPickedPlayer] = useState<{ uid: string; name: string } | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const sources: { key: BanSource; label: string; visible: boolean }[] = [
    { key: 'bm', label: 'BattleMetrics Bans', visible: hasBmPerm('viewBans') },
    { key: 'ingameBans', label: 'In-game Bans', visible: hasBmPerm('viewIngameBans') },
    { key: 'ingameMutes', label: 'In-game Mutes', visible: hasBmPerm('viewIngameMutes') }
  ];

  const activeServerTag = useMemo(() => {
    if (!serverIds.length) return 'all';
    if (serverIds.length > 1) return 'all';
    const s = servers.find((x) => x.bmServerId === serverIds[0]);
    return s?.tag || 'all';
  }, [serverIds, servers]);

  const allServerTags = useMemo(
    () => servers.map((s) => s.tag).filter((t): t is string => !!t && t !== 'NA3' && t !== 'EU3'),
    [servers]
  );

  const canEditIngameBans = hasBmPerm('editIngameBans');
  const canEditIngameMutes = hasBmPerm('editIngameMutes');

  function startAdd(kind: 'bans' | 'mutes') {
    setPickedPlayer(null);
    setAdding(kind);
  }

  return (
    <section className="bmTabPanel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, gap: 8, flexWrap: 'wrap' }}>
        <div className="bmLogs-chips">
          {sources.filter((s) => s.visible).map((s) => (
            <button
              key={s.key}
              type="button"
              className={`bmChip ${source === s.key ? 'bmChip-on' : ''}`}
              onClick={() => setSource(s.key)}
            >{s.label}</button>
          ))}
        </div>
        {source === 'ingameBans' && canEditIngameBans ? (
          <button className="btn btn-primary" onClick={() => startAdd('bans')}>+ Add in-game ban</button>
        ) : null}
        {source === 'ingameMutes' && canEditIngameMutes ? (
          <button className="btn btn-primary" onClick={() => startAdd('mutes')}>+ Add in-game mute</button>
        ) : null}
      </div>
      {source === 'bm' ? <BansTab servers={servers} serverIds={serverIds} /> : null}
      {source === 'ingameBans' ? <IngameTable key={`bans-${refreshKey}`} kind="bans" serverFilter={activeServerTag} /> : null}
      {source === 'ingameMutes' ? <IngameTable key={`mutes-${refreshKey}`} kind="mutes" serverFilter={activeServerTag} /> : null}

      {adding && !pickedPlayer ? (
        <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) setAdding(null); }}>
          <div className="modalCard">
            <header className="modalHeader"><h3>Pick a player to {adding === 'mutes' ? 'mute' : 'ban'}</h3></header>
            <div className="modalBody">
              <BMPlayerSearch
                navigateOnPick={false}
                onPick={(p) => {
                  if (!p.guid) {
                    alert('Player has no GUID — cannot apply in-game action.');
                    return;
                  }
                  setPickedPlayer({ uid: p.guid, name: p.name });
                }}
              />
            </div>
            <footer className="modalFooter">
              <button className="btn" onClick={() => setAdding(null)}>Cancel</button>
            </footer>
          </div>
        </div>
      ) : null}

      {adding && pickedPlayer ? (
        <IngameActionForm
          kind={adding}
          player={pickedPlayer}
          servers={allServerTags}
          onClose={() => { setAdding(null); setPickedPlayer(null); }}
          onCreated={() => setRefreshKey((k) => k + 1)}
        />
      ) : null}
    </section>
  );
}

function BansTab({ servers, serverIds }: { servers: BmDashServer[]; serverIds: string[] }) {
  const [bans, setBans] = useState<any[]>([]);
  const [includeExpired, setIncludeExpired] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  // Success needs its own line: the one thing admins consistently get wrong is that a
  // lifted ban is not immediate, so say when it actually applies.
  const [notice, setNotice] = useState<string | null>(null);
  const [banFor, setBanFor] = useState<{ bmPlayerId: string; name: string; guid?: string | null } | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [unbanConfirm, setUnbanConfirm] = useState<any | null>(null);
  const [busy, setBusy] = useState(false);
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

  async function doUnban() {
    if (!unbanConfirm) return;
    setBusy(true);
    setNotice(null);
    try {
      // Two halves. deleteBan clears the BattleMetrics record; on its own that frees
      // nobody, because the entry keeping them out of all six servers lives in our
      // controller. Lift that too, and report honestly if we cannot.
      await deleteBan(unbanConfirm.id);
      let liftNote = '';
      try {
        const out = await accountUnban({
          playerId: unbanConfirm.playerId,
          playerName: unbanConfirm.playerName,
        });
        liftNote = out?.appliesAt ? ` Game-server ban lifted; applies ${out.appliesAt}.` : '';
      } catch (e: any) {
        // The BM record is already gone, so do not fail the whole action - say what is
        // still true, which is that the player remains banned in game.
        setErr(
          `BattleMetrics record removed, but the game-server ban could NOT be lifted: ` +
          `${e?.message || 'unknown error'}. The player is still banned on every server. ` +
          `Use .unban <uuid> in Discord.`,
        );
        setUnbanConfirm(null);
        await load();
        return;
      }
      setErr(null);
      setNotice(`Ban removed.${liftNote}`);
      setUnbanConfirm(null);
      await load();
    } catch (e: any) {
      setErr(e?.message || 'Failed to unban');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="bmTabPanel">
      <div className="bmToolbar">
        <label className="bmInlineLabel">
          <input type="checkbox" checked={includeExpired} onChange={(e) => setIncludeExpired(e.target.checked)} />
          Include expired
        </label>
        <button className="btn" onClick={load}>Refresh</button>
        {canBan ? <button className="btn btn-primary" onClick={() => setShowSearch(true)}>+ New ban</button> : null}
      </div>
      {err ? <div className="bmError">{err}</div> : null}
      {notice ? <div className="bmNotice">{notice}</div> : null}
      <table className="bmTable">
        <thead>
          <tr><th>Player</th><th>Reason</th><th>Expires</th><th>Created</th><th></th></tr>
        </thead>
        <tbody>
          {bans.length === 0 ? (
            <tr><td colSpan={5} className="muted">No bans.</td></tr>
          ) : bans.map((b) => {
            const a = b.attributes || {};
            const idName = a.identifiers?.find((i: any) => i.type === 'name')?.identifier;
            const playerName = b.player?.name || idName || a.note?.split('\n')[0] || '(unknown)';
            return (
              <tr key={b.id}>
                <td>
                  {b.player?.id
                    ? <a href="#" onClick={(e) => { e.preventDefault(); nav(`/player/by-bm/${b.player.id}`); }}>{playerName}</a>
                    : playerName}
                </td>
                <td>{renderBanReason(a.reason, a.expires, a.createdAt)}</td>
                <td>{a.expires ? new Date(a.expires).toLocaleString() : 'Permanent'}</td>
                <td>{a.createdAt ? new Date(a.createdAt).toLocaleString() : ''}</td>
                <td className="bmBanActions">
                  {b.player?.id ? (
                    <button className="btn btn-sm" onClick={() => nav(`/player/by-bm/${b.player.id}`)}>View</button>
                  ) : (
                    <a className="btn btn-sm" href={`https://www.battlemetrics.com/rcon/bans/${b.id}`} target="_blank" rel="noreferrer">BM</a>
                  )}
                  {canBan ? (
                    <>
                      <button className="btn btn-sm" onClick={() => setEditing(b)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => setUnbanConfirm({ id: b.id, playerName, playerId: b.player?.id })}>Remove</button>
                    </>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* New ban: search a player, then open the full ban form */}
      {showSearch ? (
        <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) setShowSearch(false); }}>
          <div className="modalCard">
            <header className="modalHeader"><h3>Pick a player to ban</h3></header>
            <div className="modalBody">
              <BMPlayerSearch
                navigateOnPick={false}
                onPick={(p) => {
                  setShowSearch(false);
                  setBanFor({ bmPlayerId: p.bmPlayerId || '', name: p.name, guid: p.guid });
                }}
              />
            </div>
            <footer className="modalFooter">
              <button className="btn" onClick={() => setShowSearch(false)}>Cancel</button>
            </footer>
          </div>
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

      {editing ? (
        <EditBanModal
          ban={editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); }}
        />
      ) : null}

      {unbanConfirm ? (
        <ConfirmModal
          title="Remove ban?"
          danger
          busy={busy}
          confirmLabel="Remove"
          body={<p>Remove the ban on <strong>{unbanConfirm.playerName}</strong>? This clears the BattleMetrics record <em>and</em> lifts the ban on the game servers. It takes effect at each server&apos;s next restart &mdash; up to 4 hours away, not immediately.</p>}
          onConfirm={doUnban}
          onCancel={() => setUnbanConfirm(null)}
        />
      ) : null}
    </section>
  );
}

function EditBanModal({ ban, onClose, onSaved }: { ban: any; onClose: () => void; onSaved: () => void }) {
  const a = ban.attributes || {};
  const initialReason = a.reason || '';
  const initialNote = a.note || '';
  // datetime-local needs `YYYY-MM-DDTHH:mm` without timezone — convert.
  const initialExpiresLocal = (() => {
    if (!a.expires) return '';
    const d = new Date(a.expires);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  })();
  const [reason, setReason] = useState(initialReason);
  const [note, setNote] = useState(initialNote);
  const [expires, setExpires] = useState<string>(initialExpiresLocal);
  const [permanent, setPermanent] = useState<boolean>(!a.expires);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function save() {
    setBusy(true);
    setErr(null);
    try {
      const expiresIso = permanent ? null : (expires ? new Date(expires).toISOString() : null);
      await updateBan(ban.id, { reason, note, expires: expiresIso });
      onSaved();
    } catch (e: any) {
      setErr(e?.message || 'Failed to save');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modalCard bmBanForm">
        <header className="modalHeader"><h3>Edit ban</h3></header>
        <div className="modalBody">
          {err ? <div className="bmError">{err}</div> : null}
          <div className="field">
            <label>Reason</label>
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} autoFocus />
          </div>
          <div className="field">
            <label>Note (internal)</label>
            <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
          <div className="field">
            <label className="bmInlineLabel">
              <input type="checkbox" checked={permanent} onChange={(e) => setPermanent(e.target.checked)} />
              Permanent
            </label>
          </div>
          {!permanent ? (
            <div className="field">
              <label>Expires</label>
              <input type="datetime-local" value={expires} onChange={(e) => setExpires(e.target.value)} />
            </div>
          ) : null}
        </div>
        <footer className="modalFooter">
          <button className="btn" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="btn btn-primary" onClick={save} disabled={busy}>Save</button>
        </footer>
      </div>
    </div>
  );
}

function IpBansTab() {
  const [bans, setBans] = useState<IpBanInfo[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [removeConfirm, setRemoveConfirm] = useState<IpBanInfo | null>(null);
  const canManage = hasBmPerm('viewIps');

  async function load() {
    try {
      const out = await listIpBans();
      setBans(out.bans || []);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load');
    }
  }
  useEffect(() => { load(); }, []);

  async function doRemove() {
    if (!removeConfirm) return;
    setBusy(true);
    try {
      await removeIpBan(removeConfirm.ip);
      setRemoveConfirm(null);
      await load();
    } catch (e: any) {
      setErr(e?.message || 'Failed to remove');
    } finally {
      setBusy(false);
    }
  }

  const filtered = search.trim()
    ? bans.filter((b) => [b.ip, b.username, b.be_guid, b.banned_by, b.reason].some((v) => (v || '').toLowerCase().includes(search.trim().toLowerCase())))
    : bans;

  return (
    <section className="bmTabPanel">
      <div className="bmToolbar">
        <input className="bmSearch-input" style={{ maxWidth: 320 }} placeholder="Filter by IP, name, GUID, reason…" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn" onClick={load}>Refresh</button>
        {canManage ? <button className="btn btn-primary" onClick={() => setShowAdd(true)}>+ Add IP ban</button> : null}
      </div>
      {err ? <div className="bmError">{err}</div> : null}
      <table className="bmTable">
        <thead>
          <tr><th>IP</th><th>Last name</th><th>GUID</th><th>Banned by</th><th>Reason</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan={6} className="muted">{bans.length === 0 ? 'No IP bans recorded.' : 'No matches.'}</td></tr>
          ) : filtered.map((b) => (
            <tr key={b.ip}>
              <td><code>{b.ip}</code></td>
              <td>{b.username || '(unknown)'}</td>
              <td>{b.be_guid ? <Link to={`/player/${b.be_guid}`} className="bmGuid">{b.be_guid}</Link> : <span className="muted">—</span>}</td>
              <td>{b.banned_by || ''}</td>
              <td>{b.reason || ''}</td>
              <td className="bmBanActions">
                {canManage ? <button className="btn btn-sm btn-danger" onClick={() => setRemoveConfirm(b)}>Remove</button> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAdd ? (
        <AddIpBanModal
          onClose={() => setShowAdd(false)}
          onAdded={() => { setShowAdd(false); load(); }}
        />
      ) : null}
      {removeConfirm ? (
        <ConfirmModal
          title="Remove IP ban?"
          danger
          busy={busy}
          confirmLabel="Remove"
          body={(
            <div>
              <p>Remove the IP ban on <code>{removeConfirm.ip}</code> ({removeConfirm.username || 'unknown'})?</p>
              <p className="muted" style={{ fontSize: '.78rem' }}>
                The ipban-controller will queue an UNBAN action to every listener — the firewall rule will be removed from each game-server host on the next poll.
              </p>
            </div>
          )}
          onConfirm={doRemove}
          onCancel={() => setRemoveConfirm(null)}
        />
      ) : null}
    </section>
  );
}

function AddIpBanModal({ onClose, onAdded }: { onClose: () => void; onAdded: () => void }) {
  const [ip, setIp] = useState('');
  const [username, setUsername] = useState('');
  const [be_guid, setGuid] = useState('');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit() {
    if (!ip.trim()) { setErr('IP is required'); return; }
    setBusy(true);
    setErr(null);
    try {
      await addIpBan({
        ip: ip.trim(),
        username: username.trim() || undefined,
        be_guid: be_guid.trim() || null,
        reason: reason.trim() || undefined
      });
      onAdded();
    } catch (e: any) {
      setErr(e?.message || 'Failed to add IP ban');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modalCard bmBanForm">
        <header className="modalHeader"><h3>Add IP ban</h3></header>
        <div className="modalBody">
          {err ? <div className="bmError">{err}</div> : null}
          <div className="field">
            <label>IP address</label>
            <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="1.2.3.4" autoFocus />
          </div>
          <div className="field">
            <label>Last-seen name (optional)</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="field">
            <label>Reforger GUID (optional)</label>
            <input type="text" value={be_guid} onChange={(e) => setGuid(e.target.value)} />
          </div>
          <div className="field">
            <label>Reason</label>
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. cheating, VPN abuse" />
          </div>
          <p className="muted" style={{ fontSize: '.78rem' }}>
            The ipban-controller will queue a BAN action to every listener — the firewall rule will be installed on each game-server host on the next poll (~30s).
          </p>
        </div>
        <footer className="modalFooter">
          <button className="btn" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="btn btn-danger" onClick={submit} disabled={busy || !ip.trim()}>Add ban</button>
        </footer>
      </div>
    </div>
  );
}
