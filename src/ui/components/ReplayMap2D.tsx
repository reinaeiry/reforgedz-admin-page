import { useEffect, useRef } from 'react';
import type {
  NameTagOptions,
  PlayerMarker,
  TerrainGrid,
  TownLabel,
  Trail,
  VehicleMarker,
} from './ReplayMap3D';

export type { NameTagOptions, PlayerMarker, TerrainGrid, TownLabel, Trail, VehicleMarker };

// World bounds the background image is georeferenced to. The image covers
// [originX .. originX + size] east and [originZ .. originZ + size] north, with
// north at the top of the image.
export type WorldBounds = {
  originX: number;
  originZ: number;
  size: number;
};

export type ReplayMap2DProps = {
  players: PlayerMarker[];
  focusTarget: { x: number; y: number; z: number } | null;
  focusNonce: number;
  followPlayerId?: number | null;
  nameTags?: NameTagOptions;
  showAimLines?: boolean;
  trail?: Trail | null;
  deathMarkers?: Array<{ x: number; y: number; z: number }>;
  pingMarkers?: Array<{ x: number; y: number; z: number }>;
  vehicleMarkers?: VehicleMarker[];
  onVehicleClick?: (entityId: string) => void;
  // Right-click on the map: world position (x east, z north) + screen point for menu placement.
  onMapContextMenu?: (world: { x: number; z: number }, screen: { x: number; y: number }) => void;
  // Drag a player marker to a new spot to teleport them (live only). When unset, markers don't drag.
  onTeleportPlayer?: (playerId: number, world: { x: number; z: number }) => void;
  // Anticheat hits to flag with a warning triangle (time-gated upstream).
  acMarkers?: Array<{ x: number; y: number; z: number; severity?: string; name?: string }>;
  terrain?: TerrainGrid | null;
  towns?: TownLabel[];
  // 2D-specific: tacops map id (for streaming native tiles) + world bounds.
  mapId?: string | null;
  world?: WorldBounds | null;
};

// tacops native tiling: 256px tiles, tilesPerSide = 2^(MAX_NATIVE_ZOOM - z).
const TILE_SIZE = 256;
const MAX_NATIVE_ZOOM = 9;
const BASE_TILE_ZOOM = 6;   // whole map = 8x8 tiles; always-loaded base layer
const DEEPEST_TILE_ZOOM = 2; // deepest detail we request (tilesPerSide 128)

function clamp(v: number, min: number, max: number): number {
  if (v < min) return min;
  if (v > max) return max;
  return v;
}

const COLORS = {
  bg: '#0b0f19',
  normal: '#f9bc59',
  vehicleState: '#ffb24a',
  dead: '#8a93a6',
  killer: '#2aa7ff',
  victim: '#b455ff',
  trail: 'rgba(249,188,89,0.55)',
  death: '#ff4a4a',
  ping: '#f9bc59',
  veh: '#4adeff',
  vehDestroyed: 'rgba(74,222,255,0.35)',
  town: 'rgba(230,237,243,0.92)',
};

function markerColor(p: PlayerMarker): string {
  if (p.highlight === 'killer') return COLORS.killer;
  if (p.highlight === 'victim') return COLORS.victim;
  if (p.isDead) return COLORS.dead;
  if (p.inVehicle) return COLORS.vehicleState;
  return COLORS.normal;
}

// Build a shaded top-down raster from a terrain heightmap for servers that have
// no dedicated map image. Returns a canvas covering the terrain bounds (north up).
function buildTerrainRaster(t: TerrainGrid): { canvas: HTMLCanvasElement; bounds: WorldBounds } | null {
  const w = Math.max(2, Math.floor(t.gridW));
  const h = Math.max(2, Math.floor(t.gridH));
  if (!Array.isArray(t.heights) || t.heights.length < w * h) return null;

  const sizeX = t.bbMax.x - t.bbMin.x;
  const sizeZ = t.bbMax.z - t.bbMin.z;
  if (!Number.isFinite(sizeX) || !Number.isFinite(sizeZ) || sizeX <= 0 || sizeZ <= 0) return null;

  let minH = Infinity;
  let maxH = -Infinity;
  for (let k = 0; k < w * h; k++) {
    const hv = t.heights[k];
    if (typeof hv !== 'number' || !Number.isFinite(hv)) continue;
    if (hv < minH) minH = hv;
    if (hv > maxH) maxH = hv;
  }
  if (!Number.isFinite(minH) || !Number.isFinite(maxH) || maxH - minH < 0.001) {
    minH = 0;
    maxH = 1;
  }
  const span = maxH - minH;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const img = ctx.createImageData(w, h);

  for (let j = 0; j < h; j++) {
    // Terrain rows run south->north; image rows run top(north)->bottom, so flip.
    const srcRow = j;
    const dstRow = h - 1 - j;
    for (let i = 0; i < w; i++) {
      const hv = t.heights[i + w * srcRow];
      let tt = (hv - minH) / span;
      if (!Number.isFinite(tt)) tt = 0;
      tt = Math.pow(clamp(tt, 0, 1), 0.65);

      let r: number;
      let g: number;
      let b: number;
      if (Number.isFinite(hv) && hv < 0) {
        // Water tint below sea level.
        r = 18; g = 58; b = 100;
      } else {
        r = Math.round(28 + tt * 90);
        g = Math.round(36 + tt * 90);
        b = Math.round(56 + tt * 80);
      }
      const o = (i + w * dstRow) * 4;
      img.data[o] = r;
      img.data[o + 1] = g;
      img.data[o + 2] = b;
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  return {
    canvas,
    bounds: { originX: t.bbMin.x, originZ: t.bbMin.z, size: Math.max(sizeX, sizeZ) },
  };
}

const isFallbackTypeLabel = (name: string) => /^type:\s*\d+\s*$/i.test(name.trim());
const cleanPlaceName = (name: string) => {
  let s = (name || '').trim();
  s = s.replace(/^#AR-MapLocation_/i, '');
  s = s.replace(/_/g, ' ').trim();
  return s;
};

export function ReplayMap2D(props: ReplayMap2DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const playersRef = useRef<PlayerMarker[]>([]);
  const focusTargetRef = useRef<{ x: number; y: number; z: number } | null>(null);
  const focusNonceRef = useRef<number>(0);
  const followPlayerIdRef = useRef<number | null>(null);
  const nameTagsRef = useRef<NameTagOptions>({ enabled: true, scale: 1, background: true });
  const showAimLinesRef = useRef<boolean>(true);
  const trailRef = useRef<Trail | null>(null);
  const deathMarkersRef = useRef<Array<{ x: number; y: number; z: number }>>([]);
  const pingMarkersRef = useRef<Array<{ x: number; y: number; z: number }>>([]);
  const vehicleMarkersRef = useRef<VehicleMarker[]>([]);
  const onVehicleClickRef = useRef<((entityId: string) => void) | null>(null);
  const onMapContextMenuRef = useRef<((world: { x: number; z: number }, screen: { x: number; y: number }) => void) | null>(null);
  const onTeleportPlayerRef = useRef<((playerId: number, world: { x: number; z: number }) => void) | null>(null);
  const acMarkersRef = useRef<Array<{ x: number; y: number; z: number; severity?: string; name?: string }>>([]);
  const terrainRef = useRef<TerrainGrid | null>(null);
  const townsRef = useRef<TownLabel[]>([]);
  const worldRef = useRef<WorldBounds | null>(null);

  // Streamed map tiles (tacops imagery served by our /api/replay/maptile proxy).
  const mapIdRef = useRef<string | null>(null);
  // key `${z}/${x}/${y}` -> { img, state: 'loading'|'ready'|'empty' }
  const tileCacheRef = useRef<Map<string, { img: HTMLImageElement | null; state: 'loading' | 'ready' | 'empty' }>>(new Map());

  // Cached terrain fallback raster.
  const terrainRasterRef = useRef<{ canvas: HTMLCanvasElement; bounds: WorldBounds } | null>(null);
  const terrainRasterKeyRef = useRef<string>('');

  useEffect(() => { playersRef.current = props.players; }, [props.players]);
  useEffect(() => { focusTargetRef.current = props.focusTarget; }, [props.focusTarget]);
  useEffect(() => { focusNonceRef.current = props.focusNonce; }, [props.focusNonce]);
  useEffect(() => {
    followPlayerIdRef.current = (typeof props.followPlayerId === 'number') ? props.followPlayerId : null;
  }, [props.followPlayerId]);
  useEffect(() => {
    nameTagsRef.current = props.nameTags || { enabled: true, scale: 1, background: true };
  }, [props.nameTags]);
  useEffect(() => { showAimLinesRef.current = props.showAimLines !== false; }, [props.showAimLines]);
  useEffect(() => { trailRef.current = props.trail || null; }, [props.trail]);
  useEffect(() => {
    deathMarkersRef.current = Array.isArray(props.deathMarkers) ? props.deathMarkers : [];
  }, [props.deathMarkers]);
  useEffect(() => {
    pingMarkersRef.current = Array.isArray(props.pingMarkers) ? props.pingMarkers : [];
  }, [props.pingMarkers]);
  useEffect(() => {
    vehicleMarkersRef.current = Array.isArray(props.vehicleMarkers) ? props.vehicleMarkers : [];
  }, [props.vehicleMarkers]);
  useEffect(() => { onVehicleClickRef.current = props.onVehicleClick || null; }, [props.onVehicleClick]);
  useEffect(() => { onMapContextMenuRef.current = props.onMapContextMenu || null; }, [props.onMapContextMenu]);
  useEffect(() => { onTeleportPlayerRef.current = props.onTeleportPlayer || null; }, [props.onTeleportPlayer]);
  useEffect(() => { acMarkersRef.current = Array.isArray(props.acMarkers) ? props.acMarkers : []; }, [props.acMarkers]);
  useEffect(() => { terrainRef.current = props.terrain || null; }, [props.terrain]);
  useEffect(() => {
    townsRef.current = Array.isArray(props.towns) ? props.towns : [];
  }, [props.towns]);
  useEffect(() => { worldRef.current = props.world || null; }, [props.world]);

  // Reset the tile cache when the map changes.
  useEffect(() => {
    const id = props.mapId || null;
    if (id === mapIdRef.current) return;
    mapIdRef.current = id;
    tileCacheRef.current = new Map();
  }, [props.mapId]);

  useEffect(() => {
    const canvasElRaw = canvasRef.current;
    if (!canvasElRaw) return;
    const canvasEl: HTMLCanvasElement = canvasElRaw;
    const ctxRaw = canvasEl.getContext('2d');
    if (!ctxRaw) return;
    const ctx: CanvasRenderingContext2D = ctxRaw;

    // View state: world point at screen centre + zoom (screen px per world metre).
    const view = { cx: 6400, cz: 6400, scale: 0.05, initialized: false };
    let lastAppliedFocusNonce = 0;
    let lastFollowId: number | null = null;

    const drag = { active: false, lastX: 0, lastY: 0, moved: false };
    // Player drag-to-teleport state (screen-space).
    const playerDrag = { active: false, playerId: -1, ox: 0, oy: 0, sx: 0, sy: 0, moved: false };
    let suppressClick = false;

    let dpr = 1;
    let cssW = 0;
    let cssH = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = canvasEl.clientWidth;
      cssH = canvasEl.clientHeight;
      canvasEl.width = Math.max(1, Math.round(cssW * dpr));
      canvasEl.height = Math.max(1, Math.round(cssH * dpr));
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvasEl);
    resize();

    // Get (and lazily request) a streamed map tile.
    function getTile(mapId: string, z: number, x: number, y: number): HTMLImageElement | null {
      const cache = tileCacheRef.current;
      const key = `${z}/${x}/${y}`;
      const entry = cache.get(key);
      if (entry) return entry.state === 'ready' ? entry.img : null;
      const rec: { img: HTMLImageElement | null; state: 'loading' | 'ready' | 'empty' } = { img: null, state: 'loading' };
      cache.set(key, rec);
      const img = new Image();
      img.onload = () => { rec.img = img; rec.state = 'ready'; };
      img.onerror = () => { rec.state = 'empty'; };
      img.src = `/api/replay/maptile/${mapId}/${z}/${x}/${y}.webp`;
      return null;
    }

    // Draw one tile zoom level over the visible area. Returns true if every
    // visible tile at this level is ready (so a finer level fully covers it).
    function drawTileLevel(mapId: string, size: number, z: number): boolean {
      const n = 1 << (MAX_NATIVE_ZOOM - z);   // tiles per side
      const tileWS = size / n;                 // world metres per tile
      const leftX = view.cx - (cssW / 2) / view.scale;
      const rightX = view.cx + (cssW / 2) / view.scale;
      const botZ = view.cz - (cssH / 2) / view.scale;
      const topZ = view.cz + (cssH / 2) / view.scale;
      const x0 = clamp(Math.floor(leftX / tileWS), 0, n - 1);
      const x1 = clamp(Math.floor(rightX / tileWS), 0, n - 1);
      const y0 = clamp(Math.floor(botZ / tileWS), 0, n - 1);   // y increases north
      const y1 = clamp(Math.floor(topZ / tileWS), 0, n - 1);
      let allReady = true;
      for (let x = x0; x <= x1; x++) {
        for (let y = y0; y <= y1; y++) {
          const img = getTile(mapId, z, x, y);
          if (!img) {
            const e = tileCacheRef.current.get(`${z}/${x}/${y}`);
            if (!e || e.state !== 'empty') allReady = false;
            continue;
          }
          const sxL = worldToScreenX(x * tileWS);
          const syT = worldToScreenY((y + 1) * tileWS); // north edge -> top
          const w = (x + 1) * tileWS * view.scale - x * tileWS * view.scale;
          const h = (y + 1) * tileWS * view.scale - y * tileWS * view.scale;
          // +1px to hide hairline seams between tiles.
          ctx.drawImage(img, sxL, syT, w + 1, h + 1);
        }
      }
      return allReady;
    }

    // Pick the native tile zoom whose resolution best matches the display scale.
    function pickTileZoom(size: number): number {
      // native px-per-metre at zoom z = (TILE_SIZE * 2^(MAX-z)) / size
      // choose z so that >= view.scale (slightly oversampled => crisp).
      const target = view.scale * size / TILE_SIZE; // = 2^(MAX-z)
      const z = Math.round(MAX_NATIVE_ZOOM - Math.log2(Math.max(1e-6, target)));
      return clamp(z, DEEPEST_TILE_ZOOM, BASE_TILE_ZOOM);
    }

    function drawTerrainFallback(): { src: CanvasImageSource; bounds: WorldBounds } | null {
      const t = terrainRef.current;
      if (!t) return null;
      const key = `${t.gridW}x${t.gridH}|${t.bbMin.x},${t.bbMin.z}|${t.bbMax.x},${t.bbMax.z}|${t.heights.length}`;
      if (key !== terrainRasterKeyRef.current) {
        terrainRasterKeyRef.current = key;
        terrainRasterRef.current = buildTerrainRaster(t);
      }
      if (terrainRasterRef.current) {
        return { src: terrainRasterRef.current.canvas, bounds: terrainRasterRef.current.bounds };
      }
      return null;
    }

    function effectiveBounds(): WorldBounds {
      if (worldRef.current) return worldRef.current;
      const t = terrainRef.current;
      if (t) {
        const sizeX = t.bbMax.x - t.bbMin.x;
        const sizeZ = t.bbMax.z - t.bbMin.z;
        return { originX: t.bbMin.x, originZ: t.bbMin.z, size: Math.max(sizeX, sizeZ) || 12800 };
      }
      return { originX: 0, originZ: 0, size: 12800 };
    }

    function fitView() {
      const b = effectiveBounds();
      view.cx = b.originX + b.size / 2;
      view.cz = b.originZ + b.size / 2;
      const minDim = Math.min(cssW, cssH) || 600;
      view.scale = (minDim / b.size) * 0.96;
      view.initialized = true;
    }

    // World -> screen (north is up, so +Z maps to -screenY).
    function worldToScreenX(x: number): number {
      return cssW / 2 + (x - view.cx) * view.scale;
    }
    function worldToScreenY(z: number): number {
      return cssH / 2 - (z - view.cz) * view.scale;
    }
    function screenToWorldX(sx: number): number {
      return view.cx + (sx - cssW / 2) / view.scale;
    }
    function screenToWorldZ(sy: number): number {
      return view.cz - (sy - cssH / 2) / view.scale;
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const rect = canvasEl.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      const wx = screenToWorldX(sx);
      const wz = screenToWorldZ(sy);
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      view.scale = clamp(view.scale * factor, 0.004, 4);
      // Keep the cursor anchored to the same world point.
      view.cx = wx - (sx - cssW / 2) / view.scale;
      view.cz = wz + (sy - cssH / 2) / view.scale;
    }

    function hitTestPlayer(sx: number, sy: number): PlayerMarker | null {
      let best: PlayerMarker | null = null;
      let bestDist = 11; // px hit radius
      for (const p of playersRef.current) {
        if (typeof p.playerId !== 'number') continue;
        const px = worldToScreenX(p.pos.x);
        const py = worldToScreenY(p.pos.z);
        const d = Math.hypot(px - sx, py - sy);
        if (d < bestDist) { bestDist = d; best = p; }
      }
      return best;
    }

    function onMouseDown(e: MouseEvent) {
      if (e.button !== 0) return;
      // If teleport is enabled and we grabbed a player marker, start a player drag
      // instead of panning the view.
      if (onTeleportPlayerRef.current) {
        const rect = canvasEl.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        const hit = hitTestPlayer(sx, sy);
        if (hit && typeof hit.playerId === 'number') {
          playerDrag.active = true;
          playerDrag.playerId = hit.playerId;
          playerDrag.ox = worldToScreenX(hit.pos.x);
          playerDrag.oy = worldToScreenY(hit.pos.z);
          playerDrag.sx = sx;
          playerDrag.sy = sy;
          playerDrag.moved = false;
          canvasEl.style.cursor = 'grabbing';
          return;
        }
      }
      drag.active = true;
      drag.moved = false;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
    }
    function onMouseMove(e: MouseEvent) {
      if (playerDrag.active) {
        const rect = canvasEl.getBoundingClientRect();
        playerDrag.sx = e.clientX - rect.left;
        playerDrag.sy = e.clientY - rect.top;
        if (Math.hypot(playerDrag.sx - playerDrag.ox, playerDrag.sy - playerDrag.oy) > 5) playerDrag.moved = true;
        return;
      }
      if (!drag.active) return;
      const dx = e.clientX - drag.lastX;
      const dy = e.clientY - drag.lastY;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true;
      // Dragging pans the view; follow mode is cancelled implicitly by panning.
      view.cx -= dx / view.scale;
      view.cz += dy / view.scale;
    }
    function onMouseUp(e: MouseEvent) {
      if (playerDrag.active) {
        const cb = onTeleportPlayerRef.current;
        const wasMoved = playerDrag.moved;
        const pid = playerDrag.playerId;
        const rect = canvasEl.getBoundingClientRect();
        const wx = screenToWorldX(e.clientX - rect.left);
        const wz = screenToWorldZ(e.clientY - rect.top);
        playerDrag.active = false;
        suppressClick = true;
        canvasEl.style.cursor = 'grab';
        if (cb && wasMoved && pid >= 0) cb(pid, { x: wx, z: wz });
        return;
      }
      drag.active = false;
    }

    function onClick(e: MouseEvent) {
      if (suppressClick) { suppressClick = false; return; }
      if (drag.moved) return;
      const cb = onVehicleClickRef.current;
      if (!cb) return;
      const rect = canvasEl.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      let bestKey: string | null = null;
      let bestDist = 12; // px hit radius
      for (const v of vehicleMarkersRef.current) {
        const vx = worldToScreenX(v.pos.x);
        const vy = worldToScreenY(v.pos.z);
        const d = Math.hypot(vx - sx, vy - sy);
        if (d < bestDist) { bestDist = d; bestKey = v.entityId; }
      }
      if (bestKey) cb(bestKey);
    }

    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
      const cb = onMapContextMenuRef.current;
      if (!cb) return;
      const rect = canvasEl.getBoundingClientRect();
      const wx = screenToWorldX(e.clientX - rect.left);
      const wz = screenToWorldZ(e.clientY - rect.top);
      cb({ x: wx, z: wz }, { x: e.clientX, y: e.clientY });
    }

    canvasEl.addEventListener('contextmenu', onContextMenu);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });
    canvasEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvasEl.addEventListener('click', onClick);

    function drawMarkerLabel(text: string, sx: number, sy: number, opts: NameTagOptions) {
      if (!opts.enabled || !text) return;
      const fontPx = Math.round(11 * (opts.scale || 1));
      ctx.font = `600 ${fontPx}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx.textBaseline = 'middle';
      const tw = ctx.measureText(text).width;
      const padX = 5;
      const padY = 3;
      const bx = sx + 7;
      const by = sy - fontPx / 2 - padY;
      if (opts.background) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.beginPath();
        const r = 4;
        const w = tw + padX * 2;
        const h = fontPx + padY * 2;
        ctx.moveTo(bx + r, by);
        ctx.arcTo(bx + w, by, bx + w, by + h, r);
        ctx.arcTo(bx + w, by + h, bx, by + h, r);
        ctx.arcTo(bx, by + h, bx, by, r);
        ctx.arcTo(bx, by, bx + w, by, r);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.fillText(text, bx + padX, sy);
    }

    function drawCross(sx: number, sy: number, size: number, color: string, lineWidth: number) {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(sx - size, sy - size);
      ctx.lineTo(sx + size, sy + size);
      ctx.moveTo(sx - size, sy + size);
      ctx.lineTo(sx + size, sy - size);
      ctx.stroke();
    }

    function render() {
      if (!view.initialized && (cssW > 0 && cssH > 0)) fitView();

      // Follow selected player (keep view centred on them).
      const followId = followPlayerIdRef.current;
      if (typeof followId === 'number' && !drag.active) {
        const p = playersRef.current.find((x) => x && x.playerId === followId);
        if (p) {
          if (followId !== lastFollowId) {
            // Zoom in a bit when first attaching.
            view.scale = clamp(Math.max(view.scale, (Math.min(cssW, cssH) || 600) / 900), 0.004, 4);
            lastFollowId = followId;
          }
          view.cx = p.pos.x;
          view.cz = p.pos.z;
        }
      } else if (typeof followId !== 'number') {
        lastFollowId = null;
      }

      // One-shot focus.
      const focusNonce = focusNonceRef.current;
      if (typeof followId !== 'number' && focusNonce !== lastAppliedFocusNonce) {
        lastAppliedFocusNonce = focusNonce;
        const t = focusTargetRef.current;
        if (t) {
          view.cx = t.x;
          view.cz = t.z;
          view.scale = clamp(Math.max(view.scale, (Math.min(cssW, cssH) || 600) / 1100), 0.004, 4);
        }
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, cssW, cssH);

      // Background map.
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      const mapId = mapIdRef.current;
      const world = worldRef.current;
      if (mapId && world) {
        // Always draw the coarse base layer first (instant context), then the
        // detail level on top so finer tiles sharpen the view as they stream in.
        drawTileLevel(mapId, world.size, BASE_TILE_ZOOM);
        const z = pickTileZoom(world.size);
        if (z < BASE_TILE_ZOOM) drawTileLevel(mapId, world.size, z);
      } else {
        const bg = drawTerrainFallback();
        if (bg) {
          const b = bg.bounds;
          const x0 = worldToScreenX(b.originX);
          const yTop = worldToScreenY(b.originZ + b.size);
          const wPx = b.size * view.scale;
          try { ctx.drawImage(bg.src, x0, yTop, wPx, wPx); } catch { /* ignore */ }
        }
      }

      // Town labels.
      const nameTags = nameTagsRef.current;
      const towns = townsRef.current;
      if (towns && towns.length) {
        ctx.font = `600 ${Math.round(12)}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        for (const t of towns) {
          if (!t || typeof t.name !== 'string') continue;
          const label = cleanPlaceName(t.name);
          if (!label || isFallbackTypeLabel(label)) continue;
          const p = t.pos;
          if (!p || !Number.isFinite(p.x) || !Number.isFinite(p.z)) continue;
          const sx = worldToScreenX(p.x);
          const sy = worldToScreenY(p.z);
          if (sx < -50 || sx > cssW + 50 || sy < -20 || sy > cssH + 20) continue;
          ctx.fillStyle = 'rgba(0,0,0,0.55)';
          ctx.fillText(label, sx + 1, sy + 1);
          ctx.fillStyle = COLORS.town;
          ctx.fillText(label, sx, sy);
        }
        ctx.textAlign = 'left';
      }

      // Trail.
      const trail = trailRef.current;
      if (trail && Array.isArray(trail.points) && trail.points.length >= 2) {
        ctx.strokeStyle = COLORS.trail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < trail.points.length; i++) {
          const pt = trail.points[i];
          const sx = worldToScreenX(pt.x);
          const sy = worldToScreenY(pt.z);
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      // Vehicles (diamonds + labels).
      const vehicles = vehicleMarkersRef.current;
      for (const v of vehicles) {
        const sx = worldToScreenX(v.pos.x);
        const sy = worldToScreenY(v.pos.z);
        if (sx < -30 || sx > cssW + 30 || sy < -30 || sy > cssH + 30) continue;
        const s = 5;
        ctx.strokeStyle = v.destroyed ? COLORS.vehDestroyed : COLORS.veh;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(sx, sy - s);
        ctx.lineTo(sx + s, sy);
        ctx.lineTo(sx, sy + s);
        ctx.lineTo(sx - s, sy);
        ctx.closePath();
        ctx.stroke();
        if (v.name) {
          ctx.font = `600 9px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'rgba(0,0,0,0.55)';
          ctx.fillText(v.name, sx + 8 + 1, sy + 1);
          ctx.fillStyle = 'rgba(180,240,255,0.9)';
          ctx.fillText(v.name, sx + 8, sy);
        }
      }

      // Death markers.
      for (const d of deathMarkersRef.current) {
        const sx = worldToScreenX(d.x);
        const sy = worldToScreenY(d.z);
        drawCross(sx, sy, 5, COLORS.death, 2);
      }

      // Ping markers.
      for (const pmk of pingMarkersRef.current) {
        const sx = worldToScreenX(pmk.x);
        const sy = worldToScreenY(pmk.z);
        drawCross(sx, sy, 8, COLORS.ping, 2);
      }

      // Anticheat warning triangles.
      for (const m of acMarkersRef.current) {
        const sx = worldToScreenX(m.x);
        const sy = worldToScreenY(m.z);
        if (sx < -40 || sx > cssW + 40 || sy < -40 || sy > cssH + 40) continue;
        const crit = String(m.severity || '').toUpperCase() === 'CRITICAL';
        const col = crit ? '#ff4a4a' : '#ffcc33';
        const r = 9;
        ctx.beginPath();
        ctx.moveTo(sx, sy - r);
        ctx.lineTo(sx - r * 0.92, sy + r * 0.72);
        ctx.lineTo(sx + r * 0.92, sy + r * 0.72);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fill();
        ctx.strokeStyle = col;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = col;
        ctx.font = 'bold 11px system-ui, -apple-system, Segoe UI, Roboto, Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('!', sx, sy + 2);
        ctx.textAlign = 'start';
        if (m.name) drawMarkerLabel(m.name, sx, sy + r + 9, { enabled: true, scale: 0.9, background: true });
      }

      // Players.
      const showAimLines = showAimLinesRef.current;
      for (const p of playersRef.current) {
        const sx = worldToScreenX(p.pos.x);
        const sy = worldToScreenY(p.pos.z);
        if (sx < -40 || sx > cssW + 40 || sy < -40 || sy > cssH + 40) continue;
        const color = markerColor(p);
        const isHl = p.highlight === 'killer' || p.highlight === 'victim';
        const radius = isHl ? 6 : 4;

        // Aim line (projected onto the ground plane).
        if (showAimLines && p.aimDir) {
          const dx = p.aimDir.x;
          const dz = p.aimDir.z;
          const len = Math.hypot(dx, dz);
          if (len > 0.0001) {
            const lineLen = isHl ? 20 : 14;
            const ex = sx + (dx / len) * lineLen;
            const ey = sy - (dz / len) * lineLen;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        if (isHl) {
          ctx.strokeStyle = 'rgba(255,255,255,0.9)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        drawMarkerLabel(p.label || String(p.playerId), sx, sy, nameTags);
      }

      // Teleport drag indicator: dashed line from the player to the drop point.
      if (playerDrag.active) {
        ctx.strokeStyle = 'rgba(74,222,255,0.85)';
        ctx.setLineDash([5, 4]);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(playerDrag.ox, playerDrag.oy);
        ctx.lineTo(playerDrag.sx, playerDrag.sy);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(playerDrag.sx, playerDrag.sy, 7, 0, Math.PI * 2);
        ctx.strokeStyle = '#4adeff';
        ctx.lineWidth = 2;
        ctx.stroke();
        drawCross(playerDrag.sx, playerDrag.sy, 9, '#4adeff', 1.5);
        if (playerDrag.moved) drawMarkerLabel('Teleport here', playerDrag.sx, playerDrag.sy - 14, { enabled: true, scale: 1, background: true });
      }

      raf = window.requestAnimationFrame(render);
    }

    let raf = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      canvasEl.removeEventListener('contextmenu', onContextMenu);
      canvasEl.removeEventListener('wheel', onWheel);
      canvasEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvasEl.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: 400, position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block', borderRadius: 8, cursor: 'grab' }}
      />
    </div>
  );
}
