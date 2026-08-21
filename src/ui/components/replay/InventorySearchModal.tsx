import React, { useEffect, useState } from 'react';
import { searchReplayInventory, type InventorySighting } from '../../../util/api';

type Props = {
  serverId: string;
  range: { minTsMs: number | null; maxTsMs: number | null };
  onJump: (tsMs: number) => void;
  onClose: () => void;
};

// "Search 'Cap', see every instance, click to jump to that point in the
// timeline." Backed by the permanent inventory_sightings index
// (playerIndex.js) - all-time, all-players, not scoped to whoever's
// currently selected. A result can be older than the raw log's retention
// window (the index outlives it, same as kills/deaths already do) - in that
// case the underlying snapshot/position data is already gone and there's
// nothing to scrub to, so those rows show as non-jumpable rather than
// pretending every hit is equally actionable.
export function InventorySearchModal({ serverId, range, onJump, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<InventorySighting[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim().length < 2) { setResults(null); setErr(null); return; }
    setLoading(true);
    setErr(null);
    const handle = setTimeout(() => {
      searchReplayInventory(serverId, query.trim())
        .then((r) => setResults(r))
        .catch((e) => setErr(e instanceof Error ? e.message : 'Search failed'))
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(handle);
  }, [serverId, query]);

  function isJumpable(s: InventorySighting): boolean {
    return typeof range.minTsMs === 'number' && typeof range.maxTsMs === 'number'
      && s.lastTsMs >= range.minTsMs && s.firstTsMs <= range.maxTsMs;
  }

  return (
    <div className="replayInvSearch-backdrop" onClick={onClose}>
      <div className="replayInvSearch-modal" onClick={(e) => e.stopPropagation()}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontWeight: 800, fontSize: 14 }}>Search item history</div>
          <button type="button" className="button" style={{ padding: '2px 8px' }} onClick={onClose}>✕</button>
        </div>
        <input
          className="input"
          autoFocus
          placeholder="Search an item, e.g. 'Cap'…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        {err ? <div className="bmError">{err}</div> : null}
        <div className="replayInvSearch-results">
          {query.trim().length < 2 ? (
            <div className="muted" style={{ fontSize: 12 }}>Type at least 2 characters to search.</div>
          ) : loading && !results ? (
            <div className="muted" style={{ fontSize: 12 }}>Searching…</div>
          ) : !results || results.length === 0 ? (
            <div className="muted" style={{ fontSize: 12 }}>No matches.</div>
          ) : (
            results.map((s, idx) => {
              const jumpable = isJumpable(s);
              return (
                <div key={`${s.identityId}-${s.itemPrefab}-${s.firstTsMs}-${idx}`} className={jumpable ? 'replayInvSearch-row replayInvSearch-row-jumpable' : 'replayInvSearch-row'}>
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <strong>{s.displayName || s.identityId}</strong>
                    <span className="muted"> had {s.itemName || s.itemPrefab.split('/').pop()}{s.count > 1 ? ` ×${s.count}` : ''}</span>
                  </span>
                  <span className="muted" style={{ fontSize: 11, flexShrink: 0 }}>
                    {new Date(s.firstTsMs).toLocaleString()}{s.lastTsMs !== s.firstTsMs ? ` – ${new Date(s.lastTsMs).toLocaleTimeString()}` : ''}
                  </span>
                  <button
                    type="button"
                    className="button"
                    style={{ padding: '2px 8px', fontSize: 11, flexShrink: 0 }}
                    disabled={!jumpable}
                    title={jumpable ? 'Jump to this moment' : 'Outside the currently loaded buffer - not jumpable'}
                    onClick={() => { onJump(s.firstTsMs); onClose(); }}
                  >
                    Jump
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
