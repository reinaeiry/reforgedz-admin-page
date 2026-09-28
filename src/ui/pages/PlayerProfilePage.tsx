import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getBanHistory,
  getIpAlts,
  linkageByDiscordId,
  linkageByGuid,
  listBmServers,
  type BanHistoryRow,
  type BmDashServer,
  type IpAltsResponse,
  type Linkage,
  type TranscriptRef,
} from '../../util/bmApi';
import {
  addFlag,
  getOverview,
  getSessions,
  guidForBmId,
  removeFlag,
  type PlayerOverview,
  type PlayerSession,
} from '../../util/playersApi';
import { hasBmPerm } from '../../util/session';
import { renderBanReason } from '../../util/banFormat';
import { DiscordAvatar } from '../components/DiscordAvatar';
import { PlayerNotesPanel } from '../components/PlayerNotesPanel';
import { BMBanForm } from '../components/BMBanForm';
import { BMLogs } from '../components/BMLogs';
import { BMPlayerStats } from '../components/BMPlayerStats';
import { IngameActionForm } from '../components/IngameActionForm';

// Resolved from our own data (the player index, the ban controller) and the archive of what
// BattleMetrics held before 2026-09-28 - no BattleMetrics call. bmPlayerId stays '' now; the
// ban form's BattleMetrics copy is skipped and the ban goes to our controller by GUID.
type ResolvedPlayer = {
  bmPlayerId: string;
  name: string;
  guid: string | null;
  identifiers: Array<{ type: string; identifier: string }>;
};

function fmtDuration(ms: number | null | undefined): string {
  if (!ms || ms < 0) return '';
  const m = Math.round(ms / 60000);
  return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${m % 60} min`;
}

// The controller writes UTC as "YYYY-MM-DD HH:MM:SS" with no zone, which Date would read as
// local time. Mark it as UTC so every admin sees the time in their own timezone.
function formatControllerTime(value: string): string {
  if (!value) return '';
  const d = new Date(`${value.replace(' ', 'T')}Z`);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleString();
}

export function PlayerProfilePage() {
  const { guid: guidParam, bmId } = useParams();
  const [player, setPlayer] = useState<ResolvedPlayer | null>(null);
  const [linkage, setLinkage] = useState<Linkage | null>(null);
  const [transcripts, setTranscripts] = useState<TranscriptRef[]>([]);
  const [overview, setOverview] = useState<PlayerOverview | null>(null);
  const [sessions, setSessions] = useState<PlayerSession[] | null>(null);
  const [flagDraft, setFlagDraft] = useState('');
  const [servers, setServers] = useState<BmDashServer[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [transcriptsErr, setTranscriptsErr] = useState<string | null>(null);
  const [banFormOpen, setBanFormOpen] = useState(false);
  const [ingameAction, setIngameAction] = useState<'bans' | 'mutes' | null>(null);
  const [ipAlts, setIpAlts] = useState<IpAltsResponse | null>(null);
  const [banHistory, setBanHistory] = useState<BanHistoryRow[] | null>(null);
  const [banHistoryErr, setBanHistoryErr] = useState<string | null>(null);
  const nav = useNavigate();

  // viewIps is the single PII gate now — covers BM IPs + in-game-log IPs +
  // IP-ban CRUD. Steam/hardware IDs come under viewPlayers (basic profile).
  const canViewIps = hasBmPerm('viewIps');
  // showAlts reveals the associated-accounts section without any IP addresses.
  const canShowAlts = hasBmPerm('showAlts');
  const canViewAlts = canViewIps || canShowAlts;
  const canBans = hasBmPerm('viewBans');
  const canWriteNotes = hasBmPerm('writeNotes');
  const canBan = hasBmPerm('ban');
  const canIngameBan = hasBmPerm('editIngameBans');
  const canIngameMute = hasBmPerm('editIngameMutes');
  const canViewLogs = hasBmPerm('viewActivity');

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        let guid: string | null = guidParam ? guidParam.toLowerCase() : null;
        if (!guid && bmId) {
          // An old BattleMetrics link: the archive maps BM's player id to the GUID.
          guid = (await guidForBmId(bmId).catch(() => null))?.identityId || null;
        }
        const ov = guid ? await getOverview(guid).catch(() => null) : null;

        if (!alive) return;
        if (!guid || !ov) {
          setErr('Player not found.');
          return;
        }
        const resolved = resolveFromOverview(ov);
        setOverview(ov);
        setPlayer(resolved);
        setErr(null);

        // Fan-out: linkage, transcripts, bans, servers
        const promises: Promise<any>[] = [];
        if (guid) {
          promises.push((async () => {
            try {
              const l = await linkageByGuid(guid!);
              if (!alive) return;
              setLinkage(l.linkage);
              let merged: TranscriptRef[] = l.transcripts || [];
              // Also pull by discord ID and merge - catches tickets where the
              // GUID never appeared in messages content but the Discord user
              // matches a known linkage.
              if (l.linkage?.discordId) {
                try {
                  const d = await linkageByDiscordId(l.linkage.discordId);
                  if (alive && d.transcripts?.length) {
                    const seen = new Set(merged.map((t) => t.id));
                    for (const t of d.transcripts) {
                      if (!seen.has(t.id)) { merged.push(t); seen.add(t.id); }
                    }
                    merged.sort((a, b) => (b.closedAt || 0) - (a.closedAt || 0));
                  }
                } catch { /* discord-side enrichment optional */ }
              }
              if (alive) setTranscripts(merged);
            } catch (e: any) {
              if (alive) setTranscriptsErr(e?.message || 'Failed to load transcripts');
            }
          })());
        }
        promises.push(getSessions(guid).then((s) => {
          if (alive) setSessions(s.sessions || []);
        }).catch(() => { if (alive) setSessions([]); }));
        promises.push(listBmServers().then((s) => {
          if (alive) setServers(s.servers);
        }).catch(() => {}));
        if (guid && canBans) {
          promises.push(getBanHistory(guid).then((h) => {
            if (!alive) return;
            setBanHistory(h.history || []);
            setBanHistoryErr(h.error || null);
          }).catch((e: any) => {
            if (alive) setBanHistoryErr(e?.message || 'Failed to load ban history');
          }));
        }
        if (guid && canViewAlts) {
          promises.push(getIpAlts(guid).then((a) => {
            if (alive) setIpAlts(a);
          }).catch(() => {}));
        }
        await Promise.all(promises);
      } catch (e: any) {
        if (alive) setErr(e?.message || 'Failed to load player');
      }
    }
    load();
    return () => { alive = false; };
  }, [guidParam, bmId, canBans, canViewAlts]);

  if (err) {
    return <div className="page" style={{ padding: 24 }}><div className="bmError">{err}</div></div>;
  }
  if (!player) {
    return <div className="page" style={{ padding: 24 }}>Loading…</div>;
  }

  const firstSeen = overview?.profile?.firstSeen
    ?? overview?.archive?.servers.reduce<number | null>((m, s) => (s.firstSeenMs && (!m || s.firstSeenMs < m) ? s.firstSeenMs : m), null)
    ?? null;
  const lastSeen = overview?.profile?.lastSeen
    ?? overview?.archive?.names[0]?.lastSeenMs
    ?? null;
  const currentBan = (overview?.ban || null) as null | { reason?: string; bannedBy?: string; timestamp?: number; duration?: number; active?: boolean };

  async function toggleFlag(flag: string, on: boolean) {
    if (!player?.guid || !flag.trim()) return;
    try {
      const out = on ? await addFlag(player.guid, flag.trim()) : await removeFlag(player.guid, flag);
      setOverview((o) => (o ? { ...o, flags: out.flags } : o));
      setFlagDraft('');
    } catch (e: any) {
      window.alert(e?.message || 'Failed to change the flag');
    }
  }
  // Steam IDs, mobile device IDs, and hardware IDs are now part of viewPlayers
  // (basic). Only IPs are gated behind viewIps.
  const identifiersForPii = canViewIps
    ? player.identifiers
    : player.identifiers.filter((i) => i.type !== 'ip');

  function goBack() {
    // Prefer browser back if there's history; fall back to /moderation?tab=players.
    if (window.history.length > 1) nav(-1);
    else nav('/moderation?tab=players');
  }

  return (
    <div className="bmProfile">
      <div className="bmProfile-backRow">
        <button className="btn" onClick={goBack}>← Back</button>
      </div>
      <header className="bmProfile-header">
        <DiscordAvatar
          name={player.name}
          guid={player.guid}
          avatarUrl={linkage?.discordAvatarUrl}
          size={64}
        />
        <div className="bmProfile-headerText">
          <h1>{player.name || '(unknown)'}</h1>
          <div className="bmProfile-meta">
            {player.guid ? <code>{player.guid}</code> : <em>no guid</em>}
            {linkage?.discordUsername ? (
              <span> · Discord: <strong>{linkage.discordUsername}</strong>
                {linkage.discordId ? <span className="muted"> ({linkage.discordId})</span> : null}
              </span>
            ) : null}
          </div>
          <div className="bmProfile-meta">
            {firstSeen ? <span>First seen {new Date(firstSeen).toLocaleDateString()}</span> : null}
            {lastSeen ? <span> · Last seen {new Date(lastSeen).toLocaleString()}</span> : null}
            {(overview?.flags || []).map((f) => (
              <span key={f.id} className="bmBadge" style={{ marginLeft: 6 }} title={`by ${f.addedBy || '?'}`}>{f.flag}</span>
            ))}
          </div>
          <div className="bmProfile-actions">
            {canBan ? (
              <button className="btn btn-danger" onClick={() => setBanFormOpen(true)}>Ban</button>
            ) : null}
            {canIngameBan && player.guid ? (
              <button className="btn btn-danger" onClick={() => setIngameAction('bans')}>In-game ban</button>
            ) : null}
            {canIngameMute && player.guid ? (
              <button className="btn btn-danger" onClick={() => setIngameAction('mutes')}>Mute</button>
            ) : null}
          </div>
        </div>
      </header>

      <section className="bmProfile-section">
        <h2>Identifiers</h2>
        {identifiersForPii.length === 0 ? <div className="muted">No identifiers visible.</div> : (
          <ul className="bmProfile-idList">
            {identifiersForPii.map((i, idx) => (
              <li key={idx}><strong>{i.type}</strong>: <code>{i.identifier}</code></li>
            ))}
          </ul>
        )}
        {!canViewIps ? <div className="muted">IP addresses are hidden — requires <strong>moderation.viewIps</strong>.</div> : null}
      </section>

      {canBans ? (
        <section className="bmProfile-section">
          <h2>Current ban</h2>
          {/* What the servers actually enforce: the ReforgedZBans.json files our ban controller keeps in sync. */}
          {currentBan && currentBan.active ? (
            <div>
              <strong>Banned</strong>{currentBan.duration ? ' (temporary)' : ' (permanent)'}
              {currentBan.reason ? <> - {currentBan.reason}</> : null}
              <div className="muted">
                by {currentBan.bannedBy || '?'}
                {currentBan.timestamp ? ` · ${new Date(currentBan.timestamp * 1000).toLocaleString()}` : ''}
              </div>
            </div>
          ) : (
            <div className="muted">Not banned.</div>
          )}
        </section>
      ) : null}

      {canBans && (overview?.archive?.bans?.length || 0) > 0 ? (
        <section className="bmProfile-section">
          <h2>BattleMetrics ban history ({overview!.archive!.bans.length})</h2>
          <div className="muted">Bans BattleMetrics recorded before 2026-09-28 (archived, read-only). Enforcement is the ban above.</div>
          <table className="bmTable">
            <thead><tr><th>Reason</th><th>Expires</th><th>Created</th><th>By</th></tr></thead>
            <tbody>
              {overview!.archive!.bans.map((b) => (
                <tr key={b.id}>
                  <td>{renderBanReason(b.reason || '', b.expiresMs ? new Date(b.expiresMs).toISOString() : null,
                    b.bannedMs ? new Date(b.bannedMs).toISOString() : null)}</td>
                  <td>{b.expiresMs ? new Date(b.expiresMs).toLocaleString() : 'Permanent'}</td>
                  <td>{b.bannedMs ? new Date(b.bannedMs).toLocaleString() : ''}</td>
                  <td>{b.admin || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      <section className="bmProfile-section">
        <h2>Sessions{sessions ? ` (${sessions.length})` : ''}</h2>
        {sessions === null ? <div className="muted">Loading…</div> : sessions.length === 0 ? (
          <div className="muted">No sessions recorded yet.</div>
        ) : (
          <table className="bmTable">
            <thead><tr><th>Server</th><th>Joined</th><th>Left</th><th>Length</th><th>Name</th><th></th></tr></thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={`${s.source}-${s.joinedMs}-${i}`}>
                  <td>{s.serverId}</td>
                  <td>{s.joinedMs ? new Date(s.joinedMs).toLocaleString() : ''}</td>
                  <td>{s.leftMs ? new Date(s.leftMs).toLocaleString() : <em>online</em>}</td>
                  <td>{fmtDuration(s.joinedMs && s.leftMs ? s.leftMs - s.joinedMs : null)}</td>
                  <td>{s.name || ''}</td>
                  <td className="muted">{s.source === 'battlemetrics' ? 'archive' : s.endReason === 'restart' ? 'ended by restart' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="bmProfile-section">
        <h2>Flags</h2>
        {(overview?.flags || []).length === 0 && !(overview?.archive?.flags || []).length ? <div className="muted">No flags.</div> : null}
        <div>
          {(overview?.flags || []).map((f) => (
            <span key={f.id} className="bmBadge" style={{ marginRight: 6 }} title={`added by ${f.addedBy || '?'} ${new Date(f.addedMs).toLocaleString()}`}>
              {f.flag}
              {canWriteNotes ? (
                <button className="btn btn-sm" style={{ marginLeft: 4 }} onClick={() => toggleFlag(f.flag, false)} title="Remove">×</button>
              ) : null}
            </span>
          ))}
          {(overview?.archive?.flags || []).filter((f) => !f.removedMs).map((f, i) => (
            <span key={`a${i}`} className="bmBadge" style={{ marginRight: 6, opacity: 0.7 }} title="From BattleMetrics (archived)">{f.flag}</span>
          ))}
        </div>
        {canWriteNotes ? (
          <div className="bmNotes-add" style={{ marginTop: 8 }}>
            <input value={flagDraft} onChange={(e) => setFlagDraft(e.target.value)} placeholder="Add a flag, e.g. Streamer" maxLength={40} />
            <button className="btn" onClick={() => toggleFlag(flagDraft, true)} disabled={!flagDraft.trim()}>Add flag</button>
          </div>
        ) : null}
      </section>

      {canBans && player.guid ? (
        <section className="bmProfile-section">
          <h2>Ban history ({banHistory?.length ?? 0})</h2>
          {/* Bans that were lifted. A released player keeps what they were banned for, who
              lifted it and why - so the next admin sees a decision they can revisit, not a
              clean record. */}
          {banHistoryErr === 'ipban_controller_not_configured' ? (
            <div className="muted">The ban controller is not configured on this admin server.</div>
          ) : banHistoryErr ? (
            <div className="bmError">Failed to load ban history: {banHistoryErr}</div>
          ) : banHistory === null ? (
            <div className="muted">Loading…</div>
          ) : banHistory.length === 0 ? (
            <div className="muted">No lifted bans on record.</div>
          ) : (
            <table className="bmTable">
              <thead>
                <tr><th>Ban</th><th>Original reason</th><th>Set by</th><th>Lifted by</th><th>Why it was lifted</th></tr>
              </thead>
              <tbody>
                {banHistory.map((h) => (
                  <tr key={h.id}>
                    <td>{h.kind === 'ip' ? (h.ip ? <>IP ban <code>{h.ip}</code></> : 'IP ban') : 'Account ban'}</td>
                    <td>{h.reason || <span className="muted">(none recorded)</span>}</td>
                    <td>{h.bannedBy || '?'}</td>
                    <td>
                      {h.liftedBy || '?'}
                      {h.liftedAt ? <div className="muted">{formatControllerTime(h.liftedAt)}</div> : null}
                    </td>
                    <td>{h.note || <span className="muted">(no reason recorded)</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      ) : null}

      <section className="bmProfile-section">
        <h2>Notes</h2>
        {player.guid ? <PlayerNotesPanel guid={player.guid} canWrite={canWriteNotes} /> : null}
      </section>

      <section className="bmProfile-section">
        <h2>Transcripts ({transcripts.length})</h2>
        {transcriptsErr ? <div className="bmError">Failed to load transcripts: {transcriptsErr}</div> : null}
        {transcripts.length === 0 && !transcriptsErr ? <div className="muted">No transcripts matching this player.</div> : (
          <ul className="bmProfile-transcriptList">
            {transcripts.map((t) => (
              <li key={t.id} className="bmTranscriptRow">
                <a
                  className="bmTranscriptTicket"
                  href={`https://transcripts.reforgedz.net/t/${t.id}`}
                  target="_blank"
                  rel="noreferrer"
                  title={t.channelName || ''}
                >
                  #{t.ticketId || '?'}
                </a>
                {t.category ? <span className="bmTranscriptCat">{t.category}</span> : null}
                {t.restricted ? <span className="bmBadge bmBadge-warn">restricted</span> : null}
                <span className="bmTranscriptDate">
                  {t.closedAt ? new Date(t.closedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '—'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {canViewAlts && ipAlts ? (
        <section className="bmProfile-section">
          <h2>{canViewIps ? 'Ingame-log IPs & Associated Accounts' : 'Associated Accounts'}</h2>
          {ipAlts.error === 'forbidden' ? (
            <div className="muted">Forbidden.</div>
          ) : ipAlts.error === 'ipban_controller_not_configured' ? (
            <div className="muted">IpBan controller is not configured on this admin server.</div>
          ) : ipAlts.records.length === 0 ? (
            <div className="muted">No in-game log records for this player yet.</div>
          ) : (
            <>
              {canViewIps ? (
                <div className="bmIpList">
                  <strong>IPs:</strong>{' '}
                  {(ipAlts.ips || []).map((ip) => {
                    const banned = (ipAlts.ip_bans || []).some((b) => b.ip === ip);
                    return <code key={ip} className={`bmIpChip ${banned ? 'banned' : ''}`}>{ip}{banned ? ' (banned)' : ''}</code>;
                  })}
                </div>
              ) : null}
              <p className="muted" style={{ marginTop: 4 }}>
                Seen on {ipAlts.records.length} session{ipAlts.records.length === 1 ? '' : 's'} across {new Set((ipAlts.records || []).map((r) => r.server_name)).size} servers.
              </p>
              <h3 style={{ marginTop: 14, fontSize: '.85rem' }}>
                Associated accounts ({ipAlts.alts.length})
              </h3>
              {ipAlts.alts.length === 0 ? (
                <div className="muted">{canViewIps ? 'No other accounts seen on these IPs.' : 'No associated accounts found.'}</div>
              ) : (
                <table className="bmTable">
                  <thead><tr><th>Name</th><th>GUID</th>{canViewIps ? <th>IP</th> : null}<th>Server</th><th>Last seen</th></tr></thead>
                  <tbody>
                    {ipAlts.alts.map((a, i) => (
                      <tr key={canViewIps ? `${a.be_guid}-${a.ip}` : `${a.be_guid}-${i}`}>
                        <td><Link to={`/player/${a.be_guid}`}>{a.username}</Link></td>
                        <td><Link to={`/player/${a.be_guid}`} className="bmGuid">{a.be_guid}</Link></td>
                        {canViewIps ? <td><code>{a.ip}</code></td> : null}
                        <td>{a.server_name}</td>
                        <td>{a.last_seen ? new Date(a.last_seen * 1000).toLocaleString() : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </section>
      ) : null}

      {canViewLogs && player.guid ? (
        <section className="bmProfile-section">
          <h2>In-game logs</h2>
          <BMLogs
            guid={player.guid}
            extraNames={collectPlayerNames(player)}
            pageSize={50}
          />
        </section>
      ) : null}

      {canViewLogs && player.guid ? (
        <section className="bmProfile-section">
          <h2>Stats</h2>
          <BMPlayerStats guid={player.guid} names={collectPlayerNames(player)} />
        </section>
      ) : null}

      {banFormOpen ? (
        <BMBanForm
          player={{ bmPlayerId: player.bmPlayerId, name: player.name, guid: player.guid }}
          servers={servers}
          onClose={() => setBanFormOpen(false)}
          onCreated={() => setBanFormOpen(false)}
        />
      ) : null}

      {ingameAction && player.guid ? (
        <IngameActionForm
          kind={ingameAction}
          player={{ uid: player.guid, name: player.name }}
          servers={servers.map((s) => s.tag).filter((t): t is string => !!t && t !== 'NA3' && t !== 'EU3')}
          onClose={() => setIngameAction(null)}
          onCreated={() => setIngameAction(null)}
        />
      ) : null}
    </div>
  );
}

// All known names for this BM player — current display name plus every
// historical `name` identifier from their BM profile. The log query ORs
// these onto the GUID match so chat / kill / etc rows whose names were
// never linked to a UID still surface on the profile.
function collectPlayerNames(player: ResolvedPlayer): string[] {
  const out = new Set<string>();
  if (player.name) out.add(player.name);
  for (const id of player.identifiers || []) {
    if (id.type === 'name' && id.identifier) out.add(id.identifier);
  }
  return Array.from(out);
}

// The player as our own data knows them: every name the replay index recorded, then the names the
// BattleMetrics archive recorded, newest first. The GUID is the identity; names are display only.
function resolveFromOverview(ov: PlayerOverview): ResolvedPlayer {
  const names: string[] = [];
  const add = (n?: string | null) => { if (n && !names.includes(n)) names.push(n); };
  add(ov.profile?.displayName);
  for (const n of ov.profile?.alsoKnownAs || []) add(n);
  for (const n of ov.archive?.names || []) add(n.name);
  return {
    bmPlayerId: '',
    name: names[0] || '',
    guid: ov.identityId,
    identifiers: [
      { type: 'reforgerUUID', identifier: ov.identityId },
      ...names.map((n) => ({ type: 'name', identifier: n })),
    ],
  };
}
