// Static 2D map backgrounds (stitched from tacops.gg tiles) and the logic that
// decides which one a server is running, based on the world file reported in the
// replay data with the captured terrain size as a fallback.

export type MapDef = {
  id: string;
  name: string;
  // Background image covering world bounds [origin .. origin + worldSize] on both axes.
  image: string;
  // World extent in metres (square terrains).
  worldSize: number;
};

export const MAP_DEFS: Record<string, MapDef> = {
  everon: {
    id: 'everon',
    name: 'Everon',
    image: '/maps/everon.jpg',
    worldSize: 12802,
  },
  chernarus: {
    id: 'chernarus',
    name: 'Chernarus',
    image: '/maps/chernarus.jpg',
    worldSize: 15362,
  },
};

// Match the world file string a server reports to a known map.
function matchByWorldFile(worldFile: string): string | null {
  const s = (worldFile || '').toLowerCase();
  if (!s) return null;
  if (s.includes('chern')) return 'chernarus';
  // Everon's vanilla world is internally named "Eden".
  if (s.includes('everon') || s.includes('eden')) return 'everon';
  return null;
}

// Fall back to the captured terrain size when the world file is unknown.
function matchByWorldSize(worldSize: number | null | undefined): string | null {
  if (typeof worldSize !== 'number' || !Number.isFinite(worldSize) || worldSize <= 0) return null;
  let best: string | null = null;
  let bestDelta = Infinity;
  for (const def of Object.values(MAP_DEFS)) {
    const delta = Math.abs(def.worldSize - worldSize);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = def.id;
    }
  }
  // Only accept a size match when it's reasonably close (within ~500m).
  return bestDelta <= 500 ? best : null;
}

export function resolveMapId(worldFile: string | null | undefined, worldSize: number | null | undefined): string | null {
  return matchByWorldFile(worldFile || '') || matchByWorldSize(worldSize);
}

export function getMapDef(id: string | null | undefined): MapDef | null {
  if (!id) return null;
  return MAP_DEFS[id] || null;
}
