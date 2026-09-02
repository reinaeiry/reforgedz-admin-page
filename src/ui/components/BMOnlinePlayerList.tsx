import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOnlinePlayers, type BmDashServer, type OnlineServer } from '../../util/bmApi';

type Props = {
  server: BmDashServer;
  pollMs?: number;
};

type Row = { key: string; name: string; ip: string | null };

/**
 * Who is on this server.
 *
 * This used to ask BattleMetrics, which cannot answer: BM has the player COUNT from the
 * game query protocol but needs RCON to enumerate players, and RCON has been dead since
 * 1.8. The result was "No players online." on servers holding 45 people - worse than an
 * error, because an admin reasonably reads it as an empty server.
 *
 * The list now comes from each server's own console log, where BattlEye prints a line per
 * join and leave. The engine's own slot count is returned alongside so a disagreement is
 * shown rather than silently under-reporting.
 *
 * Kick is deliberately gone. It created a 10-second BattleMetrics ban, which reaches the
 * game over the same dead RCON - so the button never removed anyone. Showing a control
 * that quietly does nothing is how an admin ends up believing a cheater was dealt with.
 */
export function BMOnlinePlayerList({ server, pollMs = 30_000 }: Props) {
  const [entry, setEntry] = useState<OnlineServer | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setBusy(true);
        const out = await getOnlinePlayers();
        if (!alive) return;
        const tag = String(server.tag || '').toLowerCase();
        const mine = (out.servers || []).find(
          (s) => String(s.server || '').toLowerCase() === tag,
        );
        setEntry(mine || null);
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
  }, [server.tag, pollMs]);

  const rows: Row[] = (entry?.players || []).map((p) => ({
    key: `${p.slot}:${p.name}`,
    name: p.name || '(unknown)',
    ip: p.ip,
  }));

  // Distinguish the three states that all used to render as "No players online.":
  // genuinely empty, not readable, and readable but disagreeing with the engine.
  let emptyNote: React.ReactNode = null;
  if (busy && !entry) {
    emptyNote = <div className="muted">Loading…</div>;
  } else if (entry && !entry.ok) {
    emptyNote = (
      <div className="bmError">
        Could not read this server&apos;s log{entry.error ? `: ${entry.error}` : '.'} The
        player list is unavailable — this does <strong>not</strong> mean the server is empty.
      </div>
    );
  } else if (rows.length === 0) {
    emptyNote = <div className="muted">No players online.</div>;
  }

  return (
    <div className="bmOnlineList">
      {err ? <div className="bmError">{err}</div> : null}
      {entry && entry.ok && entry.consistent === false ? (
        <div className="bmNotice">
          Showing {rows.length} of {entry.slots?.used ?? '?'} reported by the server. The log
          was rotated or truncated mid-session, so some players may be missing.
        </div>
      ) : null}
      {emptyNote}
      {rows.length > 0 ? (
        <table className="bmTable">
          <thead>
            <tr><th>Name</th>{rows.some((r) => r.ip) ? <th>Address</th> : null}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <td>
                  <div className="bmOnlinePlayerCell">
                    <Link className="name" to={`/players?q=${encodeURIComponent(r.name)}`}>
                      {r.name}
                    </Link>
                  </div>
                </td>
                {rows.some((x) => x.ip) ? <td className="muted">{r.ip || '—'}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
