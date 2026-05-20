import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPlayers, type BmSearchResult } from '../../util/bmApi';
import { DiscordAvatar } from './DiscordAvatar';

type Props = {
  serverIds?: string[];
  onPick?: (player: BmSearchResult) => void;
  /** Auto-navigate to /player/:guid on click (default true). */
  navigateOnPick?: boolean;
};

export function BMPlayerSearch({ serverIds, onPick, navigateOnPick = true }: Props) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<BmSearchResult[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();
  const seqRef = useRef(0);

  useEffect(() => {
    const v = q.trim();
    if (v.length < 2) { setResults([]); setError(null); return; }
    const mySeq = ++seqRef.current;
    const t = setTimeout(async () => {
      setBusy(true);
      try {
        const out = await searchPlayers(v, serverIds);
        if (mySeq === seqRef.current) {
          setResults(out.players);
          setError(null);
        }
      } catch (e: any) {
        if (mySeq === seqRef.current) setError(e?.message || 'Search failed');
      } finally {
        if (mySeq === seqRef.current) setBusy(false);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [q, JSON.stringify(serverIds || [])]);

  function pick(p: BmSearchResult) {
    if (onPick) onPick(p);
    if (!navigateOnPick) return;
    if (p.guid) nav(`/player/${p.guid}`);
    else if (p.bmPlayerId) nav(`/player/by-bm/${p.bmPlayerId}`);
  }

  return (
    <div className="bmSearch">
      <input
        className="bmSearch-input"
        type="search"
        placeholder="Search by name, GUID, Steam ID, IP…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
        autoFocus
      />
      <div className="bmSearch-status">
        {busy ? 'Searching…' : error ? <span className="bmError">{error}</span> : results.length ? `${results.length} match${results.length === 1 ? '' : 'es'}` : (q.trim().length >= 2 ? 'No results' : 'Type at least 2 characters')}
      </div>
      <div className="bmSearch-results">
        {results.map((p) => (
          <button
            key={(p.bmPlayerId || '') + (p.guid || '') + p.name}
            type="button"
            className="bmSearch-row"
            onClick={() => pick(p)}
          >
            <DiscordAvatar name={p.name} guid={p.guid} size={32} />
            <div className="bmSearch-rowText">
              <div className="bmSearch-name">{p.name || '(no name)'}</div>
              <div className="bmSearch-meta">
                {p.guid ? <code>{p.guid.slice(0, 8)}…</code> : <em>no guid</em>}
                {p.lastSeen ? <span> · seen {new Date(p.lastSeen).toLocaleDateString()}</span> : null}
              </div>
            </div>
            <div className="bmSearch-source">{p.source}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
