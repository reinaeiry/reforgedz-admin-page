// Harness for ReplayMap2D's touch support (one-finger pan, two-finger pinch,
// long-press -> GM menu). No tiles are requested: markers on the grid are enough
// to see the view move. The counters are what the automated checks read.
//   npx vite  ->  http://localhost:5199/dev/map-harness.html
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReplayMap2D } from '../src/ui/components/ReplayMap2D';
import type { PlayerMarker } from '../src/ui/components/ReplayMap2D';
import '../src/ui/styles.css';

function Harness() {
  const [ctxMenus, setCtxMenus] = useState<{ x: number; z: number }[]>([]);
  const [vehicleClicks, setVehicleClicks] = useState(0);

  const players = useMemo<PlayerMarker[]>(() => {
    const out: PlayerMarker[] = [];
    for (let i = 0; i < 24; i += 1) {
      const a = (i / 24) * Math.PI * 2;
      out.push({
        playerId: i,
        name: `Player${i}`,
        pos: { x: 6000 + Math.cos(a) * 2200, y: 0, z: 6000 + Math.sin(a) * 2200 },
        yaw: 0,
      } as PlayerMarker);
    }
    return out;
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0e13', color: '#e8ecf3' }}>
      <div id="stats" style={{ padding: 8, fontSize: 12, fontFamily: 'ui-monospace, monospace' }}>
        contextMenus: {ctxMenus.length} · lastWorld: {ctxMenus.length ? `${Math.round(ctxMenus[ctxMenus.length - 1].x)},${Math.round(ctxMenus[ctxMenus.length - 1].z)}` : '—'} · vehicleClicks: {vehicleClicks}
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReplayMap2D
          players={players}
          focusTarget={null}
          focusNonce={0}
          vehicleMarkers={[{ entityId: 'veh-1', name: 'Truck', pos: { x: 6000, y: 0, z: 6000 } } as never]}
          onVehicleClick={() => setVehicleClicks((n) => n + 1)}
          onMapContextMenu={(world) => setCtxMenus((prev) => [...prev, world])}
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Harness />);
