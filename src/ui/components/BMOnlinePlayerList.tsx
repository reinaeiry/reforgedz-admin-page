import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServerPlayers, kick, type BmDashServer } from '../../util/bmApi';
import { hasBmPerm } from '../../util/session';
import { ConfirmModal } from './ConfirmModal';

type Props = {
  server: BmDashServer;
  pollMs?: number;
};

type Row = { id: string; name: string; guid: string | null };

export function BMOnlinePlayerList({ server, pollMs = 30_000 }: Props) {
  const [rows, setRows] = useState<Row[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [pendingKick, setPendingKick] = useState<Row | null>(null);
  const canKick = hasBmPerm('kick');

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setBusy(true);
        const out = await getServerPlayers(server.bmServerId);
        if (!alive) return;
        const mapped: Row[] = (out.players || []).map((p: any) => ({
          id: p.id,
          name: p.name || p.attributes?.name || '(unknown)',
          guid: p.guid || null,
        }));
        setRows(mapped);
        setErr(null);
      } catch (e: any) {
        if (alive) setErr(e?.message || 'Failed to load');
      } finally {
        if (alive) setBusy(false);
      }
    }
    load();
    const t = setInterval(load, pollMs);
    return () => { alive = false; clearInterval(t); };
  }, [server.bmServerId, pollMs]);

  async function doKick(row: Row) {
    setBusy(true);
    try {
      await kick({ serverId: server.bmServerId, playerId: row.id, reason: 'Kicked by admin' });
      setPendingKick(null);
    } catch (e: any) {
      setErr(e?.message || 'Kick failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bmOnlineList">
      {err ? <div className="bmError">{err}</div> : null}
      {rows.length === 0 ? (
        <div className="muted">{busy ? 'Loading…' : 'No players online.'}</div>
      ) : (
        <table className="bmTable">
          <thead><tr><th>Name</th><th></th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className="bmOnlinePlayerCell">
                    <Link className="name" to={r.guid ? `/player/${r.guid}` : `/player/by-bm/${r.id}`}>{r.name}</Link>
                    {r.guid ? <span className="guid">{r.guid.slice(0, 8)}…{r.guid.slice(-4)}</span> : null}
                  </div>
                </td>
                <td>
                  {canKick ? (
                    <button className="btn btn-sm btn-danger" onClick={() => setPendingKick(r)}>Kick</button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {pendingKick ? (
        <ConfirmModal
          title={`Kick ${pendingKick.name}?`}
          body={<p>Kick this player from {server.tag || server.name}.</p>}
          danger
          busy={busy}
          confirmLabel="Kick"
          onConfirm={() => doKick(pendingKick)}
          onCancel={() => setPendingKick(null)}
        />
      ) : null}
    </div>
  );
}
