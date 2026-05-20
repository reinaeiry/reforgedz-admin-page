import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getPlayer,
  getPlayerBans,
  getPlayerByGuid,
  linkageByGuid,
  listBmServers,
  type BmDashServer,
  type Linkage,
  type TranscriptRef,
} from '../../util/bmApi';
import { hasBmPerm } from '../../util/session';
import { DiscordAvatar } from '../components/DiscordAvatar';
import { BMNotesPanel } from '../components/BMNotesPanel';
import { BMBanForm } from '../components/BMBanForm';

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
  const [banFormOpen, setBanFormOpen] = useState(false);

  const canSessions = hasBmPerm('viewSessions');
  const canBans = hasBmPerm('viewBans');
  const canWriteNotes = hasBmPerm('writeNotes');
  const canBan = hasBmPerm('ban');

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
        if (guid) promises.push(linkageByGuid(guid).then((l) => {
          if (!alive) return;
          setLinkage(l.linkage);
          setTranscripts(l.transcripts || []);
        }).catch(() => {}));
        if (canBans) promises.push(getPlayerBans(resolved!.bmPlayerId).then((b) => {
          if (alive) setBans(b.bans);
        }).catch(() => {}));
        promises.push(listBmServers().then((s) => {
          if (alive) setServers(s.servers);
        }).catch(() => {}));
        await Promise.all(promises);
      } catch (e: any) {
        if (alive) setErr(e?.message || 'Failed to load player');
      }
    }
    load();
    return () => { alive = false; };
  }, [guidParam, bmId, canBans]);

  if (err) {
    return <div className="page" style={{ padding: 24 }}><div className="bmError">{err}</div></div>;
  }
  if (!player) {
    return <div className="page" style={{ padding: 24 }}>Loading…</div>;
  }

  const bmUrl = `https://www.battlemetrics.com/players/${player.bmPlayerId}`;
  const identifiersForPii = canSessions
    ? player.identifiers
    : player.identifiers.filter((i) => !['ip', 'steamID', 'mobileDeviceID', 'hwid'].includes(i.type));

  return (
    <div className="bmProfile">
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
            {player.guid ? (
              <Link className="btn" to={`/replay?focus=${player.guid}`}>View in Replay</Link>
            ) : null}
            {player.guid ? (
              <Link className="btn" to={`/admins?guid=${player.guid}`}>GM Management</Link>
            ) : null}
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
        {!canSessions ? <div className="muted">Some identifiers (IPs, Steam, hardware) are hidden — requires <strong>battlemetrics.viewSessions</strong>.</div> : null}
      </section>

      {canBans ? (
        <section className="bmProfile-section">
          <h2>Bans ({bans.length})</h2>
          {bans.length === 0 ? <div className="muted">No bans on record.</div> : (
            <table className="bmTable">
              <thead><tr><th>Reason</th><th>Expires</th><th>Created</th><th></th></tr></thead>
              <tbody>
                {bans.map((b) => {
                  const a = b.attributes || {};
                  return (
                    <tr key={b.id}>
                      <td>{a.reason || ''}</td>
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
        {transcripts.length === 0 ? <div className="muted">No transcripts matching this player.</div> : (
          <ul className="bmProfile-transcriptList">
            {transcripts.map((t) => (
              <li key={t.id}>
                <a href={`https://transcripts.reforgedz.net/t/${t.id}`} target="_blank" rel="noreferrer">
                  #{t.ticketId || '?'} {t.channelName || ''}
                </a>
                {' '}<span className="muted">{t.category || ''} · {t.closedAt ? new Date(t.closedAt).toLocaleDateString() : ''}</span>
                {t.restricted ? <span className="bmBadge">restricted</span> : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Slots for future ingame logs + stats merges. Always rendered as
          placeholders so the page shape stays stable. */}
      <section className="bmProfile-section bmProfile-slot">
        <h2>Ingame logs <span className="bmBadge">future</span></h2>
        <div className="muted">Will surface replay events for this player when the ingame-logs merge ships. Gated by <code>admin.viewIngameIps</code> for IPs.</div>
      </section>
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
  const idsById: Record<string, any> = {};
  for (const inc of json?.included || []) {
    if (inc.type === 'identifier') idsById[inc.id] = inc;
  }
  const ids = (data.relationships?.identifier?.data || [])
    .map((r: any) => idsById[r.id])
    .filter(Boolean)
    .map((i: any) => ({ type: i.attributes?.type, identifier: i.attributes?.identifier }));
  const guidFromIds = ids.find((i: any) => i.type === 'reforgerUUID')?.identifier || null;
  return {
    bmPlayerId: data.id,
    name: data.attributes?.name || '',
    guid: guidFromIds || hintGuid || null,
    attributes: data.attributes,
    identifiers: ids,
  };
}
