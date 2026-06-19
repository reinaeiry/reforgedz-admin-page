import { useMemo, useState } from 'react';
import type { ItemCatalogEntry } from '../../util/api';

type Props = {
  items: ItemCatalogEntry[];
  onSpawn: (prefab: string, count: number) => void;
  busy?: boolean;
};

function prefabShort(prefab: string): string {
  const s = prefab.split('/').pop() || prefab;
  return s.replace(/\.et$/i, '');
}

// Give-item picker shown on a selected player/vehicle in live replay.
export function ItemSpawnControl({ items, onSpawn, busy }: Props) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [count, setCount] = useState(1);

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

  return (
    <div className="stack" style={{ gap: 6, marginTop: 6, paddingTop: 6, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
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
            ) : filtered.map((it) => (
              <button
                key={it.prefab}
                type="button"
                className="button"
                title={`${it.name || prefabShort(it.prefab)}\n${it.prefab}`}
                style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '4px 7px', fontSize: 11,
                  borderRadius: 5,
                  border: selected === it.prefab ? '1px solid rgba(74,222,255,0.6)' : '1px solid rgba(255,255,255,0.08)',
                  background: selected === it.prefab ? 'rgba(74,222,255,0.16)' : 'rgba(255,255,255,0.03)',
                }}
                onClick={() => setSelected(it.prefab)}
              >
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name || prefabShort(it.prefab)}</div>
              </button>
            ))}
          </div>
          <div className="row" style={{ gap: 6, alignItems: 'center' }}>
            <span className="muted" style={{ fontSize: 10 }}>Qty</span>
            <input
              className="input"
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(50, parseInt(e.target.value, 10) || 1)))}
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
    </div>
  );
}
