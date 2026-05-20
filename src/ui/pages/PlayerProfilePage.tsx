import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getIpAlts,
  getPlayer,
  getPlayerBans,
  getPlayerByGuid,
  linkageByDiscordId,
  linkageByGuid,
  listBmServers,
  type BmDashServer,
  type IpAltsResponse,
  type Linkage,
  type TranscriptRef,
} from '../../util/bmApi';
import { hasBmPerm } from '../../util/session';
import { renderBanReason } from '../../util/banFormat';
import { DiscordAvatar } from '../components/DiscordAvatar';
import { BMNotesPanel } from '../components/BMNotesPanel';
import { BMBanForm } from '../components/BMBanForm';
import { BMLogs } from '../components/BMLogs';

type ResolvedPlayer = {
  bmPlayerId: string;
  name: string;
  guid: string | null;
  attributes: any;
  identifiers: Array<{ type: string; identifier: string }>;
};

export function PlayerProfilePage() {
  const { guid: guidParam, bmId } = useParams();
  const [player, setPlayer] = useState<ResolvedPlayer | null>(null);
  const [linkage, setLinkage] = useState<Linkage | null>(null);
  const [transcripts, setTranscripts] = useState<TranscriptRef[]>([]);
  const [bans, setBans] = useState<any[]>([]);
  const [servers, setServers] = useState<BmDashServer[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [transcriptsErr, setTranscriptsErr] = useState<string | null>(null);
  const [bansErr, setBansErr] = useState<string | null>(null);
  const [banFormOpen, setBanFormOpen] = useState(false);
  const [ipAlts, setIpAlts] = useState<IpAltsResponse | null>(null);
  const nav = useNavigate();

  // viewIps is the single PII gate now — covers BM IPs + in-game-log IPs +
  // IP-ban CRUD. Steam/hardware IDs come under viewPlayers (basic profile).
  const canViewIps = hasBmPerm('viewIps');
  const canBans = hasBmPerm('viewBans');
  const canWriteNotes = hasBmPerm('writeNotes');
  const canBan = hasBmPerm('ban');
  const canViewLogs = hasBmPerm('viewActivity');

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        let resolved: ResolvedPlayer | null = null;
        let guid: string | null = null;

        if (guidParam) {
          guid = guidParam.toLowerCase();
          // Resolve GUID -> BM player id
          const out = await getPlayerByGuid(guid).catch(() => null);
          if (out?.player) {
            // Then fetch the full profile.
            const full = await getPlayer(out.player.id);
            resolved = pickPlayer(full, guid);
          }
        } else if (bmId) {
          const full = await getPlayer(bmId);
          resolved = pickPlayer(full, null);
          guid = resolved?.guid || null;
        }

        if (!alive) return;
        if (!resolved) {
          setErr('Player not found.');
          return;
        }
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
        if (canBans) promises.push(getPlayerBans(resolved!.bmPlayerId).then((b) => {
          if (alive) setBans(b.bans);
        }).catch((e: any) => {
          if (alive) setBansErr(e?.message || 'Failed to load bans');
        }));
        promises.push(listBmServers().then((s) => {
          if (alive) setServers(s.servers);
        }).catch(() => {}));
        if (guid && canViewIps) {
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
  }, [guidParam, bmId, canBans, canViewIps]);

  if (err) {
    return <div className="page" style={{ padding: 24 }}><div className="bmError">{err}</div></div>;
  }
  if (!player) {
    return <div className="page" style={{ padding: 24 }}>Loading…</div>;
  }

  const bmUrl = `https://www.battlemetrics.com/players/${player.bmPlayerId}`;
  // Steam IDs, mobile device IDs, and hardware IDs are now part of viewPlayers
  // (basic). Only IPs are gated behind viewIps.
  const identifiersForPii = canViewIps
    ? player.identifiers
    : player.identifiers.filter((i) => i.type !== 'ip');

  function goBack() {
    // Prefer browser back if there's history; fall back to /battlemetrics?tab=players.
    if (window.history.length > 1) nav(-1);
    else nav('/battlemetrics?tab=players');
  }

  return (
    <div className="bmProfile">
      <div className="bmProfile-backRow">
        <button className="btn" onClick={goBack}>← Back</button>
      </div>
      <header className="bmProfile-header">
        <DiscordAvatar name={player.name} guid={player.guid} size={64} />
        <div className="bmProfile-headerText">
          <h1>{player.name || '(unknown)'}</h1>
          <div className="bmProfile-meta">
            {player.guid ? <code>{player.guid}</code> : <em>no guid</em>}
            {linkage?.discordUsername ? <span> · Discord: <strong>{linkage.discordUsername}</strong></span> : null}
          </div>
          <div className="bmProfile-actions">
            <a className="btn" href={bmUrl} target="_blank" rel="noreferrer">View on BattleMetrics</a>
            {canBan ? (
              <button className="btn btn-danger" onClick={() => setBanFormOpen(true)}>Ban</button>
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
        {!canViewIps ? <div className="muted">IP addresses are hidden — requires <strong>battlemetrics.viewIps</strong>.</div> : null}
      </section>

      {canBans ? (
        <section className="bmProfile-section">
          <h2>Bans ({bans.length})</h2>
          {bansErr ? <div className="bmError">Failed to load bans: {bansErr}</div> : null}
          {bans.length === 0 && !bansErr ? <div className="muted">No bans on record.</div> : (
            <table className="bmTable">
              <thead><tr><th>Reason</th><th>Expires</th><th>Created</th><th></th></tr></thead>
              <tbody>
                {bans.map((b) => {
                  const a = b.attributes || {};
                  return (
                    <tr key={b.id}>
                      <td>{renderBanReason(a.reason, a.expires, a.createdAt)}</td>
                      <td>{a.expires ? new Date(a.expires).toLocaleString() : 'Permanent'}</td>
                      <td>{a.createdAt ? new Date(a.createdAt).toLocaleString() : ''}</td>
                      <td><a className="btn btn-sm" target="_blank" rel="noreferrer" href={`https://www.battlemetrics.com/rcon/bans/${b.id}`}>View</a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>
      ) : null}

      <section className="bmProfile-section">
        <h2>Notes</h2>
        <BMNotesPanel bmPlayerId={player.bmPlayerId} canWrite={canWriteNotes} />
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

      {canViewIps && ipAlts ? (
        <section className="bmProfile-section">
          <h2>Ingame-log IPs &amp; Associated Accounts</h2>
          {ipAlts.error === 'forbidden' ? (
            <div className="muted">Forbidden.</div>
          ) : ipAlts.error === 'ipban_controller_not_configured' ? (
            <div className="muted">IpBan controller is not configured on this admin server.</div>
          ) : ipAlts.records.length === 0 ? (
            <div className="muted">No in-game log records for this player yet.</div>
          ) : (
            <>
              <div className="bmIpList">
                <strong>IPs:</strong>{' '}
                {(ipAlts.ips || []).map((ip) => {
                  const banned = (ipAlts.ip_bans || []).some((b) => b.ip === ip);
                  return <code key={ip} className={`bmIpChip ${banned ? 'banned' : ''}`}>{ip}{banned ? ' (banned)' : ''}</code>;
                })}
              </div>
              <p className="muted" style={{ marginTop: 4 }}>
                Seen on {ipAlts.records.length} session{ipAlts.records.length === 1 ? '' : 's'} across {new Set((ipAlts.records || []).map((r) => r.server_name)).size} servers.
              </p>
              <h3 style={{ marginTop: 14, fontSize: '.85rem' }}>
                Associated accounts ({ipAlts.alts.length})
              </h3>
              {ipAlts.alts.length === 0 ? (
                <div className="muted">No other accounts seen on these IPs.</div>
              ) : (
                <table className="bmTable">
                  <thead><tr><th>Name</th><th>GUID</th><th>IP</th><th>Server</th><th>Last seen</th></tr></thead>
                  <tbody>
                    {ipAlts.alts.map((a) => (
                      <tr key={`${a.be_guid}-${a.ip}`}>
                        <td><Link to={`/player/${a.be_guid}`}>{a.username}</Link></td>
                        <td><Link to={`/player/${a.be_guid}`} className="bmGuid">{a.be_guid}</Link></td>
                        <td><code>{a.ip}</code></td>
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
          <BMLogs guid={player.guid} pageSize={50} />
        </section>
      ) : null}

      {/* Slot for future stats merge. */}
      <section className="bmProfile-section bmProfile-slot">
        <h2>Stats <span className="bmBadge">future</span></h2>
        <div className="muted">Will surface kills / playtime / shop activity once the stats module lands.</div>
      </section>

      {banFormOpen ? (
        <BMBanForm
          player={{ bmPlayerId: player.bmPlayerId, name: player.name, guid: player.guid }}
          servers={servers}
          onClose={() => setBanFormOpen(false)}
          onCreated={() => setBanFormOpen(false)}
        />
      ) : null}
    </div>
  );
}

function pickPlayer(json: any, hintGuid: string | null): ResolvedPlayer | null {
  const data = json?.data;
  if (!data) return null;
  // Group included identifiers by player id (BM back-references from the
  // identifier side, not the other way around).
  const ids: Array<{ type: string; identifier: string; lastSeen?: string }> = [];
  for (const inc of json?.included || []) {
    if (inc.type !== 'identifier') continue;
    const pid = inc.relationships?.player?.data?.id;
    if (pid !== data.id) continue;
    const t = inc.attributes?.type;
    const v = inc.attributes?.identifier;
    if (!t || !v) continue;
    ids.push({ type: t, identifier: v, lastSeen: inc.attributes?.lastSeen });
  }
  // De-dupe identifiers by (type, identifier).
  const seen = new Set<string>();
  const dedup = ids.filter((i) => {
    const k = `${i.type}::${i.identifier}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  // Pick the most-recently-seen reforgerUUID as the player's current GUID.
  const guidIds = dedup.filter((i) => i.type === 'reforgerUUID');
  guidIds.sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''));
  return {
    bmPlayerId: data.id,
    name: data.attributes?.name || '',
    guid: guidIds[0]?.identifier || hintGuid || null,
    attributes: data.attributes,
    identifiers: dedup,
  };
}
