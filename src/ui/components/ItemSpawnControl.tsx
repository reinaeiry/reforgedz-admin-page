import { useMemo, useState } from 'react';
import type { ItemCatalogEntry } from '../../util/api';

export type CopiedInventoryItem = { prefab: string; name: string; count: number };
export type CopiedInventory = { sourcePlayerId: number; sourcePlayerName: string; capturedAtTsMs: number; items: CopiedInventoryItem[] };

export type SpawnCopiedProgress = { done: number; total: number; failed: string[] };

type Props = {
  items: ItemCatalogEntry[];
  onSpawn: (prefab: string, count: number) => void;
  busy?: boolean;
  copiedInventory?: CopiedInventory | null;
  onSpawnCopied?: (items: CopiedInventoryItem[]) => void;
  spawnCopiedProgress?: SpawnCopiedProgress | null;
};

function prefabShort(prefab: string): string {
  const s = prefab.split('/').pop() || prefab;
  return s.replace(/\.et$/i, '');
}

// Give-item picker shown on a selected player/vehicle in live replay. Also
// renders a "spawn the copied inventory" section when a clipboard is passed
// in - a sibling action to the catalog picker below it, not a replacement,
// since "give me one specific item" and "restore this whole loadout" are
// both things an admin reaches for here.
const ITEM_BTN: React.CSSProperties = {
  display: 'block', width: '100%', textAlign: 'left', padding: '4px 7px', fontSize: 11,
  borderRadius: 5,
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.03)',
};
const ITEM_BTN_SELECTED: React.CSSProperties = {
  ...ITEM_BTN,
  border: '1px solid rgba(74,222,255,0.6)',
  background: 'rgba(74,222,255,0.16)',
};

export function ItemSpawnControl({ items, onSpawn, busy, copiedInventory, onSpawnCopied, spawnCopiedProgress }: Props) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [count, setCount] = useState(1);
  const [rawPrefab, setRawPrefab] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    const out: ItemCatalogEntry[] = [];
    for (const it of items) {
      if ((it.name && it.name.toLowerCase().includes(q)) || it.prefab.toLowerCase().includes(q)) {
        out.push(it);
      }
    }
    return out;
  }, [items, query]);

  // The Reforger catalog runs to thousands of entries and the whole filtered set
  // was rendered as buttons - unwindowed, with a fresh inline style object per
  // item per render. Showing a page of it keeps an unfiltered open from building
  // thousands of nodes; the count tells you to narrow the search.
  const RENDER_CAP = 200;
  const shown = filtered.length > RENDER_CAP ? filtered.slice(0, RENDER_CAP) : filtered;
  const hiddenCount = filtered.length - shown.length;

  return (
    <div className="stack" style={{ gap: 6, marginTop: 6, paddingTop: 6, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
      {copiedInventory ? (
        <div className="stack" style={{ gap: 4, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 11 }}>📋 Copied from {copiedInventory.sourcePlayerName}</div>
            <div className="muted" style={{ fontSize: 10 }}>{copiedInventory.items.length} item(s)</div>
          </div>
          {spawnCopiedProgress ? (
            <div className="muted" style={{ fontSize: 10 }}>
              Spawning… {spawnCopiedProgress.done}/{spawnCopiedProgress.total}
              {spawnCopiedProgress.failed.length ? ` — failed: ${spawnCopiedProgress.failed.join(', ')}` : ''}
            </div>
          ) : (
            <button
              type="button"
              className="button buttonPrimary"
              style={{ fontSize: 11, padding: '5px 8px' }}
              disabled={busy || !onSpawnCopied || copiedInventory.items.length === 0}
              onClick={() => onSpawnCopied && onSpawnCopied(copiedInventory.items)}
            >
              Spawn copied inventory ({copiedInventory.items.length})
            </button>
          )}
        </div>
      ) : null}

      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 11 }}>Give item</div>
        {items.length > 0 && (
          <div className="muted" style={{ fontSize: 10 }}>{filtered.length} / {items.length}</div>
        )}
      </div>
      {items.length === 0 ? (
        <div className="muted" style={{ fontSize: 10 }}>No item catalog yet (the server sends it on startup).</div>
      ) : (
        <>
          <input
            className="input"
            style={{ fontSize: 11, padding: '4px 6px' }}
            placeholder="Search items…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Drag the bottom-right corner to resize: wider = more items per row. */}
          <div
            className="scroll"
            style={{
              resize: 'both',
              overflow: 'auto',
              height: 220,
              minHeight: 120,
              maxHeight: 640,
              minWidth: 200,
              maxWidth: '100%',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 6,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
              gridAutoRows: 'min-content',
              alignContent: 'start',
              gap: 4,
              padding: 4,
            }}
          >
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 6, fontSize: 10, gridColumn: '1 / -1' }}>No matches.</div>
            ) : shown.map((it) => (
              <button
                key={it.prefab}
                type="button"
                className="button"
                title={`${it.name || prefabShort(it.prefab)}\n${it.prefab}`}
                style={selected === it.prefab ? ITEM_BTN_SELECTED : ITEM_BTN}
                onClick={() => setSelected(it.prefab)}
              >
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name || prefabShort(it.prefab)}</div>
              </button>
            ))}
            {hiddenCount > 0 ? (
              <div className="muted" style={{ padding: 6, fontSize: 10, gridColumn: '1 / -1' }}>
                +{hiddenCount} more — refine the search to narrow it down.
              </div>
            ) : null}
          </div>
          <div className="row" style={{ gap: 6, alignItems: 'center' }}>
            <span className="muted" style={{ fontSize: 10 }}>Qty</span>
            <input
              className="input"
              type="number"
              min={1}
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
              style={{ width: 56, fontSize: 11, padding: '4px 6px' }}
            />
            <button
              type="button"
              className="button buttonPrimary"
              style={{ flex: 1, padding: '5px 8px', fontSize: 11 }}
              disabled={!selected || busy}
              onClick={() => { if (selected) onSpawn(selected, count); }}
            >
              {busy ? 'Giving…' : 'Give'}
            </button>
          </div>
        </>
      )}

      {/* Give any item (incl. modded/non-catalog items like a Pickaxe) by prefab path. */}
      <div className="row" style={{ gap: 6, alignItems: 'center', marginTop: 4, paddingTop: 6, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
        <input
          className="input"
          style={{ flex: 1, fontSize: 11, padding: '4px 6px' }}
          placeholder="…or paste a prefab path"
          value={rawPrefab}
          onChange={(e) => setRawPrefab(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && rawPrefab.trim()) onSpawn(rawPrefab.trim(), count); }}
        />
        <button
          type="button"
          className="button"
          style={{ padding: '5px 8px', fontSize: 11 }}
          disabled={!rawPrefab.trim() || busy}
          onClick={() => { const p = rawPrefab.trim(); if (p) onSpawn(p, count); }}
        >Give</button>
      </div>
    </div>
  );
}
