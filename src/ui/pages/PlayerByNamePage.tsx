import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { searchPlayers } from '../../util/bmApi';

// Resolver page: given a name, search BM + local PII and redirect to the
// canonical /player/:guid (or /player/by-bm/:id) profile. When multiple
// matches come back we show a picker so the admin can pick the right one.
export function PlayerByNamePage() {
  const { name = '' } = useParams();
  const nav = useNavigate();
  const [results, setResults] = useState<any[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setResults(null);
    setErr(null);
    searchPlayers(name).then((out) => {
      if (!alive) return;
      const players = out.players || [];
      // Exact-name hits win — if there's exactly one, jump straight there.
      const exact = players.filter((p) => p.name.toLowerCase() === name.toLowerCase());
      if (exact.length === 1) {
        const p = exact[0];
        if (p.guid) nav(`/player/${p.guid}`, { replace: true });
        else if (p.bmPlayerId) nav(`/player/by-bm/${p.bmPlayerId}`, { replace: true });
        else setResults(players);
        return;
      }
      if (players.length === 1) {
        const p = players[0];
        if (p.guid) nav(`/player/${p.guid}`, { replace: true });
        else if (p.bmPlayerId) nav(`/player/by-bm/${p.bmPlayerId}`, { replace: true });
        else setResults(players);
        return;
      }
      setResults(players);
    }).catch((e) => {
      if (alive) setErr(e?.message || 'Search failed');
    });
    return () => { alive = false; };
  }, [name, nav]);

  if (err) {
    return <div className="page" style={{ padding: 24 }}>
      <h2>Couldn't resolve "{name}"</h2>
      <div className="bmError">{err}</div>
    </div>;
  }
  if (results === null) {
    return <div className="page" style={{ padding: 24 }}>Looking up "{name}"…</div>;
  }
  if (!results.length) {
    return <div className="page" style={{ padding: 24 }}>
      <h2>No player named "{name}"</h2>
      <div className="muted">BattleMetrics has no record matching this name, and they don't appear in local PII either.</div>
    </div>;
  }
  return (
    <div className="page" style={{ padding: 24 }}>
      <h2>Multiple matches for "{name}"</h2>
      <ul className="bmProfile-transcriptList">
        {results.map((p, i) => (
          <li key={i} className="bmTranscriptRow">
            <Link
              className="bmTranscriptTicket"
              to={p.guid ? `/player/${p.guid}` : `/player/by-bm/${p.bmPlayerId}`}
            >
              {p.name}
            </Link>
            <span className="bmTranscriptCat">{p.source}</span>
            {p.guid ? <code className="bmGuid">{p.guid}</code> : <span className="muted">no guid</span>}
            <span className="bmTranscriptDate">
              {p.lastSeen ? new Date(p.lastSeen).toLocaleDateString() : ''}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
