import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getReplayEvents,
  getReplayMapTerrain,
  getReplayMapDescriptors,
  getReplayRange,
  getReplayStatusAll,
  listReplayPlayers,
  listServers,
  exportReplayEventToDiscord,
  sendReplayGmPing,
  type IngestRecord,
  type MapDescriptors,
  type MapTerrain,
  type ReplayStatus,
  type ReplayPlayer,
  type ServerInfo,
} from '../../util/api';
import { ReplayMap3D, type NameTagOptions, type PlayerMarker, type TerrainGrid, type TownLabel, type Trail } from '../components/ReplayMap3D';

function coerceVec3(v: any): { x: number; y: number; z: number } | null {
  if (!v) return null;

  if (typeof v === 'object') {
    if (Array.isArray(v)) {
      if (v.length < 3) return null;
      const x = v[0];
      const y = v[1];
      const z = v[2];
      if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return null;
      return { x, y, z };
    }

    const x = (v as any).x;
    const y = (v as any).y;
    const z = (v as any).z;
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return null;
    return { x, y, z };
  }

  if (typeof v === 'string') {
    // Common Enfusion vector stringify is "x y z".
    const parts = v.trim().split(/\s+/g);
    if (parts.length < 3) return null;
    const x = Number(parts[0]);
    const y = Number(parts[1]);
    const z = Number(parts[2]);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
    return { x, y, z };
  }

  return null;
}

function isNearOriginXZ(pos: { x: number; y: number; z: number } | null, bound = 30): boolean {
  if (!pos) return true;
  if (typeof pos.x !== 'number' || typeof pos.z !== 'number') return true;
  return Math.abs(pos.x) <= bound && Math.abs(pos.z) <= bound;
}

function coerceTerrainGrid(t: MapTerrain | null): TerrainGrid | null {
  if (!t) return null;
  const bbMin = coerceVec3((t as any).bbMin);
  const bbMax = coerceVec3((t as any).bbMax);
  const gridW = typeof (t as any).gridW === 'number' ? (t as any).gridW : 0;
  const gridH = typeof (t as any).gridH === 'number' ? (t as any).gridH : 0;
  const heights = Array.isArray((t as any).heights)
    ? ((t as any).heights as any[]).filter((x) => typeof x === 'number') as number[]
    : [];
  if (bbMin && bbMax && gridW >= 2 && gridH >= 2 && heights.length >= gridW * gridH) {
    return { bbMin, bbMax, gridW, gridH, heights };
  }
  return null;
}

function coerceTownLabels(t: MapDescriptors | null): TownLabel[] | null {
  if (!t) return null;
  const items = Array.isArray((t as any).descriptors)
    ? ((t as any).descriptors as any[])
    : (Array.isArray((t as any).towns) ? ((t as any).towns as any[]) : []);
  if (items.length === 0) return null;

  const out: TownLabel[] = [];
  for (const it of items) {
    if (!it) continue;
    const rawName = typeof it.name === 'string' ? it.name.trim() : '';
    const rawType = typeof it.type === 'string' ? it.type.trim() : '';
    const baseType = typeof it.baseType === 'number' ? it.baseType : null;
    const name = rawName || rawType || (baseType !== null ? `type:${baseType}` : 'descriptor');
    const pos = coerceVec3(it.pos);
    if (!pos) continue;
    out.push({ name, pos });
  }

  if (out.length === 0) return null;
  return out;
}

function sampleTerrainY(t: TerrainGrid | null, x: number, z: number): number | null {
  if (!t) return null;
  if (!t.bbMin || !t.bbMax) return null;
  if (!Array.isArray(t.heights)) return null;
  const w = Math.floor(t.gridW);
  const h = Math.floor(t.gridH);
  if (w < 2 || h < 2) return null;
  if (t.heights.length < w * h) return null;

  const minX = t.bbMin.x;
  const maxX = t.bbMax.x;
  const minZ = t.bbMin.z;
  const maxZ = t.bbMax.z;
  const spanX = maxX - minX;
  const spanZ = maxZ - minZ;
  if (!Number.isFinite(spanX) || !Number.isFinite(spanZ) || spanX <= 0 || spanZ <= 0) return null;

  const u = (x - minX) / spanX;
  const v = (z - minZ) / spanZ;
  if (!Number.isFinite(u) || !Number.isFinite(v)) return null;
  if (u < 0 || u > 1 || v < 0 || v > 1) return null;

  // Terrain grid is aligned with world axes (east = +X, north = +Z).
  const fx = u * (w - 1);
  const fz = v * (h - 1);
  const x0 = Math.floor(fx);
  const z0 = Math.floor(fz);
  const x1 = Math.min(w - 1, x0 + 1);
  const z1 = Math.min(h - 1, z0 + 1);
  const tx = fx - x0;
  const tz = fz - z0;

  const idx00 = x0 + w * z0;
  const idx10 = x1 + w * z0;
  const idx01 = x0 + w * z1;
  const idx11 = x1 + w * z1;

  const y00 = t.heights[idx00];
  const y10 = t.heights[idx10];
  const y01 = t.heights[idx01];
  const y11 = t.heights[idx11];
  if (![y00, y10, y01, y11].every((q) => typeof q === 'number' && Number.isFinite(q))) return null;

  const ya = y00 * (1 - tx) + y10 * tx;
  const yb = y01 * (1 - tx) + y11 * tx;
  return ya * (1 - tz) + yb * tz;
}

function useQueryParam(name: string): string | null {
  const location = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(location.search);
    const value = params.get(name);
    if (!value) {
      return null;
    }
    return value;
  }, [location.search, name]);
}

function formatElapsedMs(ms: number): string {
  const safe = Number.isFinite(ms) ? Math.max(0, Math.floor(ms)) : 0;
  const totalSeconds = Math.floor(safe / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

function formatClockTime(tsMs: number | null | undefined): string {
  if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return '—';
  try {
    return new Date(tsMs).toLocaleString();
  } catch {
    return '—';
  }
}

function formatDurationMs(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return '—';
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours >= 48 && hours % 24 === 0) return `${Math.floor(hours / 24)}d`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function groupByName(items: any[] | null | undefined, getName: (it: any) => string): Array<{ name: string; count: number }> {
  if (!Array.isArray(items) || items.length === 0) return [];
  const map = new Map<string, number>();
  for (const it of items) {
    const name = getName(it).trim();
    if (!name) continue;
    map.set(name, (map.get(name) || 0) + 1);
  }
  const out = Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  out.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  return out;
}

function getRecordTsMs(rec: IngestRecord): number | null {
  const p: any = (rec as any).payload;
  return p && typeof p.tsMs === 'number' ? p.tsMs : null;
}

function getRecordKey(rec: IngestRecord): string {
  const p: any = (rec as any).payload;
  return `${rec.receivedAt}|${p && p.tsMs}|${p && p.type}`;
}

function trimEventsToCap(list: IngestRecord[], cap: number, targetTsMs: number | null): IngestRecord[] {
  if (!Number.isFinite(cap) || cap <= 0) return [];
  if (list.length <= cap) return list;
  if (typeof targetTsMs !== 'number' || !Number.isFinite(targetTsMs)) {
    // Default: keep the newest data.
    return list.slice(list.length - cap);
  }

  const firstTs = getRecordTsMs(list[0]);
  const lastTs = getRecordTsMs(list[list.length - 1]);
  if (typeof firstTs !== 'number' || typeof lastTs !== 'number') {
    return list.slice(list.length - cap);
  }

  const distToFirst = Math.abs(targetTsMs - firstTs);
  const distToLast = Math.abs(lastTs - targetTsMs);
  const drop = list.length - cap;

  // Keep the side closer to the target time.
  if (distToFirst > distToLast) {
    return list.slice(drop);
  }
  return list.slice(0, list.length - drop);
}

export function ReplayToolPage() {
  const serverIdFromQuery = useQueryParam('serverId');

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [selectedServerId, setSelectedServerId] = useState<string>('');
  const [serverStatuses, setServerStatuses] = useState<ReplayStatus[] | null>(null);
  const [serverStatusesError, setServerStatusesError] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const [live, setLive] = useState(true);
  const [range, setRange] = useState<{ minTsMs: number | null; maxTsMs: number | null }>({ minTsMs: null, maxTsMs: null });
  const [currentTsMs, setCurrentTsMs] = useState<number | null>(null);
  const [terrain, setTerrain] = useState<TerrainGrid | null>(null);
  const [towns, setTowns] = useState<TownLabel[] | null>(null);

  const [players, setPlayers] = useState<ReplayPlayer[]>([]);
  const [playerSearch, setPlayerSearch] = useState('');
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const [focusTarget, setFocusTarget] = useState<{ x: number; y: number; z: number } | null>(null);
  const [focusNonce, setFocusNonce] = useState(0);

  const [playersPanelOpen, setPlayersPanelOpen] = useState(true);
  const [leftPanelTab, setLeftPanelTab] = useState<'players' | 'events'>('players');
  const [nameTagOptionsOpen, setNameTagOptionsOpen] = useState(false);

  const [showEventTimeline, setShowEventTimeline] = useState(true);
  const [hoveredEventDot, setHoveredEventDot] = useState<null | {
    tsMs: number;
    type: 'kill' | 'death' | 'aiKill' | 'join' | 'disconnect' | 'restart' | 'gmPing';
    title: string;
    subtitle: string;
    leftPct: number;
  }>(null);
  const [selectedEventKey, setSelectedEventKey] = useState<string | null>(null);
  const eventCardRefs = useRef<Map<string, HTMLElement>>(new Map());

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const currentTsMsRef = useRef<number | null>(null);

  const [nameTagsEnabled, setNameTagsEnabled] = useState(true);
  const [nameTagScale, setNameTagScale] = useState(1.0);
  const [nameTagBackground, setNameTagBackground] = useState(true);
  const [showVehicleInTags, setShowVehicleInTags] = useState(true);
  const [showAimLines, setShowAimLines] = useState(true);
  const [showDeathMarkers, setShowDeathMarkers] = useState(true);
  const [enableTrails, setEnableTrails] = useState(true);
  const [trailSeconds, setTrailSeconds] = useState(20);
  const [toasts, setToasts] = useState<Array<{ id: string; kind: 'kill' | 'event'; title: string; subtitle: string; visible: boolean }>>([]);
  const lastToastReceivedAtRef = useRef<number>(0);

  const [eventClickOffsetSeconds, setEventClickOffsetSeconds] = useState<number>(() => {
    try {
      const raw = window.localStorage.getItem('replay.eventClickOffsetSeconds');
      const n = raw !== null ? Number(raw) : 5;
      if (!Number.isFinite(n)) return 5;
      return Math.max(0, Math.min(60, Math.floor(n)));
    } catch {
      return 5;
    }
  });

  const [eventPlayerFilterId, setEventPlayerFilterId] = useState<number | null>(null);

  const [attachedPlayerId, setAttachedPlayerId] = useState<number | null>(null);

  const [events, setEvents] = useState<IngestRecord[]>([]);
  const lastFetchedTsMsRef = useRef<number | null>(null);
  const backfillInFlightRef = useRef(false);
  const autoBackfillStoppedForServerRef = useRef<string | null>(null);
  const autoBackfillNoProgressRef = useRef(0);
  const autoBackfillLastAttemptAtRef = useRef(0);
  const terrainFetchInFlightRef = useRef(false);
  const townsFetchInFlightRef = useRef(false);

  const equipmentCacheRef = useRef<Map<number, {
    invTsMs: number;
    hotbarTsMs: number;
    weaponTsMs: number;
    inventory?: any[];
    attachments?: any[];
    weapon?: any;
  }>>(new Map());

  useEffect(() => {
    if (serverIdFromQuery && serverIdFromQuery.length > 0) {
      setSelectedServerId(serverIdFromQuery);
    }
  }, [serverIdFromQuery]);

  useEffect(() => {
    currentTsMsRef.current = currentTsMs;
  }, [currentTsMs]);

  useEffect(() => {
    // Reset auto-backfill guards when switching servers.
    autoBackfillStoppedForServerRef.current = null;
    autoBackfillNoProgressRef.current = 0;
    autoBackfillLastAttemptAtRef.current = 0;
  }, [selectedServerId]);

  useEffect(() => {
    try {
      window.localStorage.setItem('replay.eventClickOffsetSeconds', String(eventClickOffsetSeconds));
    } catch {
      // ignore
    }
  }, [eventClickOffsetSeconds]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.code !== 'KeyF') return;
      if (attachedPlayerId === null) return;
      setAttachedPlayerId(null);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [attachedPlayerId]);

  useEffect(() => {
    let cancelled = false;

    async function loadServers() {
      try {
        const data = await listServers();
        if (cancelled) return;
        setServers(data);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : 'Failed to load servers';
        setError(message);
      }
    }

    loadServers();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadStatuses() {
      try {
        const data = await getReplayStatusAll();
        if (cancelled) return;
        setServerStatuses(data);
        setServerStatusesError(null);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : 'Failed to load server status';
        setServerStatusesError(message);
      }
    }

    loadStatuses();
    const t = window.setInterval(loadStatuses, 15_000);
    return () => {
      cancelled = true;
      window.clearInterval(t);
    };
  }, []);

  const serverId = selectedServerId.length > 0 ? selectedServerId : null;

  useEffect(() => {
    setTerrain(null);
    setTowns(null);
  }, [serverId]);

  useEffect(() => {
    if (!serverId) {
      return;
    }

    const serverIdValue = serverId;

    let cancelled = false;

    async function loadBootstrap() {
      setBusy(true);
      setError(null);
      try {
        const [r, p, t, tw] = await Promise.all([
          getReplayRange(serverIdValue),
          listReplayPlayers(serverIdValue),
          getReplayMapTerrain(serverIdValue).catch(() => null as MapTerrain | null),
          getReplayMapDescriptors(serverIdValue).catch(() => null as MapDescriptors | null),
        ]);
        if (cancelled) {
          return;
        }
        setRange({ minTsMs: r.minTsMs, maxTsMs: r.maxTsMs });
        setPlayers(p);

        const tg = coerceTerrainGrid(t);
        if (tg) setTerrain(tg);

        const townLabels = coerceTownLabels(tw);
        if (townLabels) setTowns(townLabels);

        if (typeof r.maxTsMs === 'number') {
          setCurrentTsMs(r.maxTsMs);

          // Pull a recent tail window so the tool immediately has context and the
          // user can scrub backwards (without waiting for live polling to catch up).
          const initial = await getReplayEvents({
            serverId: serverIdValue,
            untilTsMs: r.maxTsMs,
            limit: 5000,
            tail: true,
          }).catch(() => [] as IngestRecord[]);
          if (!cancelled) {
            setEvents(initial);

            // Advance cursor to newest loaded event (fallback: a bit behind max)
            let lastTs: number | null = null;
            for (const e of initial) {
              const p: any = (e as any).payload;
              if (p && typeof p.tsMs === 'number') {
                if (lastTs === null || p.tsMs > lastTs) lastTs = p.tsMs;
              }
            }
            lastFetchedTsMsRef.current = (lastTs !== null) ? lastTs : Math.max(0, r.maxTsMs - 15000);
          }
        }

        // Avoid showing a burst of historical popups on initial load.
        lastToastReceivedAtRef.current = Date.now();

        // Default to paused when switching servers until the user hits Play.
        setIsPlaying(false);
      } catch (err) {
        if (cancelled) {
          return;
        }
        const message = err instanceof Error ? err.message : 'Failed to load replay data';
        setError(message);
      } finally {
        if (!cancelled) {
          setBusy(false);
        }
      }
    }

    loadBootstrap();

    return () => {
      cancelled = true;
    };
  }, [serverId]);

  useEffect(() => {
    if (!serverId) return;
    if (terrain) return;
    if (terrainFetchInFlightRef.current) return;

    const hasSignal = events.some((rec) => {
      const p: any = rec.payload;
      return p && (p.type === 'map' || p.type === 'terrain');
    });
    if (!hasSignal) return;

    let cancelled = false;
    terrainFetchInFlightRef.current = true;
    getReplayMapTerrain(serverId)
      .then((t) => {
        if (cancelled) return;
        const tg = coerceTerrainGrid(t);
        if (tg) setTerrain(tg);
      })
      .catch(() => {
        // ignore
      })
      .finally(() => {
        terrainFetchInFlightRef.current = false;
      });

    return () => {
      cancelled = true;
    };
  }, [events, serverId, terrain]);

  useEffect(() => {
    if (!serverId) return;
    if (towns) return;
    if (townsFetchInFlightRef.current) return;

    const hasSignal = events.some((rec) => {
      const p: any = rec.payload;
      return p && (p.type === 'map' || p.type === 'terrain' || p.type === 'towns' || p.type === 'descriptors');
    });
    if (!hasSignal) return;

    let cancelled = false;
    townsFetchInFlightRef.current = true;
    getReplayMapDescriptors(serverId)
      .then((t) => {
        if (cancelled) return;
        const townLabels = coerceTownLabels(t);
        if (townLabels) setTowns(townLabels);
      })
      .catch(() => {
        // ignore
      })
      .finally(() => {
        townsFetchInFlightRef.current = false;
      });

    return () => {
      cancelled = true;
    };
  }, [events, serverId, towns]);

  // Replay playback (advances scrubber time while paused from Live)
  useEffect(() => {
    if (!serverId) return;
    if (live) return;
    if (!isPlaying) return;
    if (typeof range.maxTsMs !== 'number') return;

    let raf = 0;
    let last = performance.now();

    function tick(now: number) {
      const dtMs = Math.min(250, Math.max(0, now - last));
      last = now;

      const cur = currentTsMsRef.current;
      if (typeof cur === 'number') {
        const max = range.maxTsMs as number;
        let next = cur + dtMs * playbackSpeed;
        if (next >= max) {
          next = max;
          setIsPlaying(false);
        }
        currentTsMsRef.current = next;
        setCurrentTsMs(next);
      }

      raf = window.requestAnimationFrame(tick);
    }

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [isPlaying, live, playbackSpeed, range.maxTsMs, serverId]);

  // Keep player list fresh in live mode (new joins won't show up otherwise).
  useEffect(() => {
    if (!serverId) return;
    const serverIdValue = serverId;

    let cancelled = false;
    let timer: number | null = null;

    async function pollPlayers() {
      try {
        const p = await listReplayPlayers(serverIdValue);
        if (!cancelled) setPlayers(p);
      } catch {
        // ignore
      }

      if (!cancelled) {
        timer = window.setTimeout(pollPlayers, live ? 3000 : 5000);
      }
    }

    pollPlayers();
    return () => {
      cancelled = true;
      if (timer !== null) window.clearTimeout(timer);
    };
  }, [live, serverId]);

  useEffect(() => {
    if (!serverId) return;
    const serverIdValue = serverId;

    let cancelled = false;
    let timer: number | null = null;

    async function poll() {
      try {
        const r = await getReplayRange(serverIdValue);
        if (cancelled) return;

        // If history was cleared server-side, range will jump backwards.
        // Reset client cursors so we don't keep requesting from a future tsMs.
        const prevFetched = lastFetchedTsMsRef.current;
        if (typeof prevFetched === 'number' && typeof r.maxTsMs === 'number' && r.maxTsMs + 1000 < prevFetched) {
          lastFetchedTsMsRef.current = null;
          lastToastReceivedAtRef.current = Date.now();
          setEvents([{
            receivedAt: Date.now(),
            payload: {
              type: 'restart',
              tsMs: r.maxTsMs,
              event: { reason: 'server_restart_or_history_cleared' },
            },
          } as any]);
          setToasts([]);
          setIsPlaying(false);

          // Keep current terrain so the map doesn't disappear, but refetch in case the
          // server restarted onto a different map.
          terrainFetchInFlightRef.current = false;
          getReplayMapTerrain(serverIdValue)
            .then((t) => {
              if (cancelled) return;
              const tg = coerceTerrainGrid(t);
              if (tg) setTerrain(tg);
            })
            .catch(() => {
              // ignore
            });

          townsFetchInFlightRef.current = false;
          getReplayMapDescriptors(serverIdValue)
            .then((t) => {
              if (cancelled) return;
              const townLabels = coerceTownLabels(t);
              if (townLabels) setTowns(townLabels);
            })
            .catch(() => {
              // ignore
            });
        }

        setRange({ minTsMs: r.minTsMs, maxTsMs: r.maxTsMs });

        if (live && typeof r.maxTsMs === 'number') {
          setCurrentTsMs(r.maxTsMs);
        }
      } catch {
        // ignore; range is optional
      }

      if (!cancelled) timer = window.setTimeout(poll, live ? 2000 : 3000);
    }

    poll();

    return () => {
      cancelled = true;
      if (timer !== null) window.clearTimeout(timer);
    };
  }, [live, serverId]);

  useEffect(() => {
    if (!serverId) return;
    const serverIdValue = serverId;

    let cancelled = false;
    let timer: number | null = null;

    async function fetchEvents() {
      const maxTsMs = range.maxTsMs;
      if (typeof maxTsMs !== 'number') {
        if (!cancelled) timer = window.setTimeout(fetchEvents, 1000);
        return;
      }

      const since = lastFetchedTsMsRef.current;
      // When starting live, only grab a small recent window; older history can be pulled via backfill.
      const sinceTsMs = typeof since === 'number' ? (since + 1) : Math.max(0, maxTsMs - 8000);

      try {
        // Avoid huge multi-batch transfers over remote links; keep polling cheap.
        const LIMIT = 1500;
        const MAX_BATCHES = 2;

        let cursorSince = sinceTsMs;
        const allItems: IngestRecord[] = [];

        let lastTs: number | null = (typeof lastFetchedTsMsRef.current === 'number') ? lastFetchedTsMsRef.current : null;

        for (let i = 0; i < MAX_BATCHES; i++) {
          const batch = await getReplayEvents({
            serverId: serverIdValue,
            sinceTsMs: cursorSince,
            untilTsMs: maxTsMs,
            limit: LIMIT,
          });

          allItems.push(...batch);

          let batchMaxTs: number | null = null;
          for (const e of batch) {
            const ts = getRecordTsMs(e);
            if (ts === null) continue;
            if (batchMaxTs === null || ts > batchMaxTs) batchMaxTs = ts;
            if (lastTs === null || ts > lastTs) lastTs = ts;
          }

          // No more data, or we can't advance a cursor.
          if (batch.length < LIMIT || batchMaxTs === null) break;
          if (batchMaxTs >= maxTsMs) break;

          cursorSince = batchMaxTs + 1;
        }

        if (cancelled) return;

        if (allItems.length > 0) {
          setEvents((prev) => {
            const recent = prev.slice(-500);
            const seen = new Set<string>();
            for (const e of recent) {
              seen.add(getRecordKey(e));
            }

            const next = prev.slice();
            for (const e of allItems) {
              const k = getRecordKey(e);
              if (seen.has(k)) continue;
              next.push(e);
            }

            return trimEventsToCap(next, 250000, currentTsMsRef.current);
          });
        }

        if (typeof lastTs === 'number') lastFetchedTsMsRef.current = lastTs;
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Failed to fetch replay events';
          setError(message);
        }
      }

      if (!cancelled) {
        timer = window.setTimeout(fetchEvents, live ? 1000 : 1500);
      }
    }

    fetchEvents();

    return () => {
      cancelled = true;
      if (timer !== null) window.clearTimeout(timer);
    };
  }, [live, range.maxTsMs, serverId]);

  const loadedEventRange = useMemo(() => {
    let minTs: number | null = null;
    let maxTs: number | null = null;
    for (const e of events) {
      const p: any = (e as any).payload;
      const ts = p && typeof p.tsMs === 'number' ? p.tsMs : null;
      if (ts === null) continue;
      if (minTs === null || ts < minTs) minTs = ts;
      if (maxTs === null || ts > maxTs) maxTs = ts;
    }
    return { minTsMs: minTs, maxTsMs: maxTs };
  }, [events]);

  // Backfill older history on demand when the user scrubs backwards.
  useEffect(() => {
    if (!serverId) return;
    const serverIdValue = serverId;

    const cur = currentTsMs;
    const loadedMin = loadedEventRange.minTsMs;
    const absoluteMin = range.minTsMs;

    if (typeof cur !== 'number') return;
    if (typeof loadedMin !== 'number') return;
    if (typeof absoluteMin !== 'number') return;
    if (loadedMin <= absoluteMin + 1) return;

    // Only backfill when the user is near the earliest loaded timestamp.
    const backfillThresholdMs = 2000;
    if (cur > loadedMin + backfillThresholdMs) return;
    if (backfillInFlightRef.current) return;

    backfillInFlightRef.current = true;
    const untilTsMs = Math.max(0, Math.floor(loadedMin) - 1);

    getReplayEvents({
      serverId: serverIdValue,
      untilTsMs,
      limit: 5000,
      tail: true,
    })
      .then((items) => {
        if (items.length === 0) return;

        setEvents((prev) => {
          const head = prev.slice(0, 800);
          const seen = new Set<string>();
          for (const e of head) {
            seen.add(getRecordKey(e));
          }

          const nextItems: IngestRecord[] = [];
          for (const e of items) {
            const k = getRecordKey(e);
            if (seen.has(k)) continue;
            nextItems.push(e);
          }

          const next = nextItems.concat(prev);
          return trimEventsToCap(next, 250000, currentTsMsRef.current);
        });
      })
      .catch(() => {
        // ignore
      })
      .finally(() => {
        backfillInFlightRef.current = false;
      });
  }, [currentTsMs, loadedEventRange.minTsMs, range.minTsMs, serverId]);

  // Auto-backfill older history in the background so a refresh doesn't look like we only retained
  // a few minutes (initial load intentionally pulls a tail window).
  useEffect(() => {
    if (!serverId) return;
    const serverIdValue = serverId;

    if (autoBackfillStoppedForServerRef.current === serverIdValue) return;

    const loadedMin = loadedEventRange.minTsMs;
    const absoluteMin = range.minTsMs;
    if (typeof loadedMin !== 'number') return;
    if (typeof absoluteMin !== 'number') return;

    // Nothing left to warm.
    if (loadedMin <= absoluteMin + 1) return;

    // Don't churn if we're already at the in-memory cap.
    const CAP = 250000;
    if (events.length >= CAP - 5000) {
      autoBackfillStoppedForServerRef.current = serverIdValue;
      return;
    }

    // Avoid rapid-fire retries (especially on slow links).
    const now = Date.now();
    if (now - autoBackfillLastAttemptAtRef.current < 400) return;
    if (backfillInFlightRef.current) return;

    autoBackfillLastAttemptAtRef.current = now;
    backfillInFlightRef.current = true;

    const untilTsMs = Math.max(0, Math.floor(loadedMin) - 1);

    getReplayEvents({
      serverId: serverIdValue,
      untilTsMs,
      limit: 5000,
      tail: true,
    })
      .then((items) => {
        if (items.length === 0) {
          autoBackfillNoProgressRef.current += 1;
          if (autoBackfillNoProgressRef.current >= 3) {
            autoBackfillStoppedForServerRef.current = serverIdValue;
          }
          return;
        }

        autoBackfillNoProgressRef.current = 0;

        setEvents((prev) => {
          const head = prev.slice(0, 800);
          const seen = new Set<string>();
          for (const e of head) {
            seen.add(getRecordKey(e));
          }

          const nextItems: IngestRecord[] = [];
          for (const e of items) {
            const k = getRecordKey(e);
            if (seen.has(k)) continue;
            nextItems.push(e);
          }

          const next = nextItems.concat(prev);
          return trimEventsToCap(next, CAP, currentTsMsRef.current);
        });
      })
      .catch(() => {
        // ignore
      })
      .finally(() => {
        backfillInFlightRef.current = false;
      });
  }, [events.length, loadedEventRange.minTsMs, range.minTsMs, serverId]);

  const snapshots = useMemo(() => {
    const out: Array<{ tsMs: number; players: any[] }> = [];
    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'snapshot') continue;
      if (typeof p.tsMs !== 'number') continue;
      if (!Array.isArray(p.players)) continue;
      out.push({ tsMs: p.tsMs, players: p.players });
    }
    out.sort((a, b) => a.tsMs - b.tsMs);
    return out;
  }, [events]);

  const knownPlayers = useMemo((): ReplayPlayer[] => {
    const map = new Map<number, string>();

    // Seed from server-reported (latest) players.
    for (const p of players) {
      if (!p || typeof p.playerId !== 'number') continue;
      const name = typeof p.name === 'string' && p.name.trim().length > 0 ? p.name.trim() : String(p.playerId);
      map.set(p.playerId, name);
    }

    // Add names from join/disconnect events.
    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'join' && p.type !== 'disconnect') continue;
      const ev: any = (p as any).event;
      const id = ev && typeof ev.playerId === 'number' ? ev.playerId : null;
      if (id === null) continue;
      const nm = ev && typeof ev.name === 'string' && ev.name.trim().length > 0 ? ev.name.trim() : '';
      if (nm) map.set(id, nm);
      else if (!map.has(id)) map.set(id, String(id));
    }

    // Add names from snapshots (historical timeline truth).
    for (const s of snapshots) {
      for (const pj of s.players) {
        if (!pj || typeof pj !== 'object') continue;
        const id = (pj as any).playerId;
        if (typeof id !== 'number') continue;
        const nm = typeof (pj as any).name === 'string' && (pj as any).name.trim().length > 0 ? (pj as any).name.trim() : '';
        if (nm) map.set(id, nm);
        else if (!map.has(id)) map.set(id, String(id));
      }
    }

    const out = Array.from(map.entries()).map(([playerId, name]) => ({ playerId, name }));
    out.sort((a, b) => a.name.localeCompare(b.name) || a.playerId - b.playerId);
    return out;
  }, [events, players, snapshots]);

  const playerSeriesById = useMemo(() => {
    // Some snapshots are partial (often only one player). Build a per-player series
    // so we can reconstruct state at time t.
    const map = new Map<number, Array<{ tsMs: number; player: any }>>();
    for (const s of snapshots) {
      const ts = s.tsMs;
      for (const pj of s.players) {
        if (!pj || typeof pj !== 'object') continue;
        const id = (pj as any).playerId;
        if (typeof id !== 'number') continue;
        let arr = map.get(id);
        if (!arr) {
          arr = [];
          map.set(id, arr);
        }
        arr.push({ tsMs: ts, player: pj });
      }
    }
    return map;
  }, [snapshots]);

  const presenceSeriesById = useMemo(() => {
    const map = new Map<number, Array<{ tsMs: number; type: 'join' | 'disconnect' }>>();
    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'join' && p.type !== 'disconnect') continue;
      if (typeof p.tsMs !== 'number') continue;
      const ev: any = (p as any).event;
      const id = ev && typeof ev.playerId === 'number' ? ev.playerId : null;
      if (id === null) continue;
      let arr = map.get(id);
      if (!arr) {
        arr = [];
        map.set(id, arr);
      }
      arr.push({ tsMs: p.tsMs, type: p.type });
    }
    for (const arr of map.values()) arr.sort((a, b) => a.tsMs - b.tsMs);
    return map;
  }, [events]);

  const findPlayerStateAt = useMemo(() => {
    return (playerId: number, tsMs: number): { tsMs: number; player: any } | null => {
      const series = playerSeriesById.get(playerId);
      if (!series || series.length === 0) return null;

      // Last entry with ts <= tsMs.
      let lo = 0;
      let hi = series.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const v = series[mid].tsMs;
        if (v <= tsMs) {
          idx = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      if (idx < 0) return null;
      return series[idx];
    };
  }, [playerSeriesById]);

  const findPlayerEquipSampleAtOrBefore = useMemo(() => {
    return (playerId: number, tsMs: number, maxAgeMs: number): { tsMs: number; inventory?: any[]; attachments?: any[]; weapon?: any } | null => {
      const series = playerSeriesById.get(playerId);
      if (!series || series.length === 0) return null;

      // Start from the last entry <= tsMs.
      let lo = 0;
      let hi = series.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const v = series[mid].tsMs;
        if (v <= tsMs) {
          idx = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      if (idx < 0) return null;

      for (let i = idx; i >= 0; i--) {
        const rec = series[i];
        const age = tsMs - rec.tsMs;
        if (age < 0) continue;
        if (age > maxAgeMs) break;
        const pj: any = rec.player;
        if (!pj || typeof pj !== 'object') continue;

        const inv = pj.inventory;
        const att = pj.attachments;
        const w = pj.weapon;

        const out: any = { tsMs: rec.tsMs };
        if (Array.isArray(inv)) out.inventory = inv;
        if (Array.isArray(att)) out.attachments = att;
        if (w && typeof w === 'object' && typeof w.name === 'string' && w.name.length > 0) out.weapon = w;

        if ('inventory' in out || 'attachments' in out || 'weapon' in out) return out;
      }

      return null;
    };
  }, [playerSeriesById]);

  const isConnectedAt = useMemo(() => {
    return (playerId: number, tsMs: number): boolean | null => {
      const series = presenceSeriesById.get(playerId);
      if (!series || series.length === 0) return null;

      // Last presence event <= tsMs.
      let lo = 0;
      let hi = series.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const v = series[mid].tsMs;
        if (v <= tsMs) {
          idx = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      if (idx < 0) return null;
      return series[idx].type === 'join';
    };
  }, [presenceSeriesById]);

  const findFirstNonOriginPosAfter = useMemo(() => {
    // Best-effort: join/login snapshots can report 0,*,0 briefly. Find the first position after `tsMs`
    // that is not within the origin XZ box.
    return (playerId: number, tsMs: number, maxWindowMs = 60000): { x: number; y: number; z: number } | null => {
      if (typeof playerId !== 'number' || playerId < 0) return null;
      if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return null;
      if (snapshots.length === 0) return null;

      const until = tsMs + Math.max(1000, Math.min(5 * 60 * 1000, Math.floor(maxWindowMs)));

      // First snapshot with ts >= tsMs.
      let lo = 0;
      let hi = snapshots.length - 1;
      let idx = snapshots.length;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (snapshots[mid].tsMs >= tsMs) {
          idx = mid;
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      }

      for (let i = idx; i < snapshots.length; i++) {
        const s = snapshots[i];
        if (s.tsMs > until) break;
        const pj = s.players.find((p) => p && typeof p === 'object' && (p as any).playerId === playerId);
        if (!pj) continue;
        const pos = coerceVec3((pj as any).pos);
        if (!pos) continue;
        if (isNearOriginXZ(pos, 30)) continue;
        return pos;
      }
      return null;
    };
  }, [snapshots]);

  const findLastNonOriginPosBefore = useMemo(() => {
    // Best-effort: disconnect events often don't include a reliable position.
    // Find the last position at/before `tsMs` that is not within the origin XZ box.
    return (playerId: number, tsMs: number, maxWindowMs = 60000): { x: number; y: number; z: number } | null => {
      if (typeof playerId !== 'number' || playerId < 0) return null;
      if (typeof tsMs !== 'number' || !Number.isFinite(tsMs)) return null;
      if (snapshots.length === 0) return null;

      const since = tsMs - Math.max(1000, Math.min(5 * 60 * 1000, Math.floor(maxWindowMs)));

      // Last snapshot with ts <= tsMs.
      let lo = 0;
      let hi = snapshots.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (snapshots[mid].tsMs <= tsMs) {
          idx = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }

      for (let i = idx; i >= 0; i--) {
        const s = snapshots[i];
        if (s.tsMs < since) break;
        const pj = s.players.find((p) => p && typeof p === 'object' && (p as any).playerId === playerId);
        if (!pj) continue;
        const pos = coerceVec3((pj as any).pos);
        if (!pos) continue;
        if (isNearOriginXZ(pos, 30)) continue;
        return pos;
      }

      return null;
    };
  }, [snapshots]);

  const deadUntilByPlayerId = useMemo(() => {
    // Best-effort: mark victims as "dead" for a short window after a death event.
    // (We don't currently receive an explicit respawn event.)
    const map = new Map<number, number>();
    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'kill' && p.type !== 'death') continue;
      if (typeof p.tsMs !== 'number') continue;
      const ev: any = (p as any).event;
      const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
      if (victimId === null) continue;

      const until = p.tsMs + 30000;
      const prev = map.get(victimId) || 0;
      if (until > prev) map.set(victimId, until);
    }
    return map;
  }, [events]);

  const nameTagOptions: NameTagOptions = useMemo(() => ({
    enabled: nameTagsEnabled,
    scale: Math.min(2, Math.max(0.5, nameTagScale)),
    background: nameTagBackground,
  }), [nameTagBackground, nameTagScale, nameTagsEnabled]);

  const playerMarkers = useMemo((): PlayerMarker[] => {
    const t = currentTsMs;
    if (typeof t !== 'number') return [];
    if (playerSeriesById.size === 0) return [];

    const nameById = new Map<number, string>();
    for (const p of knownPlayers) nameById.set(p.playerId, p.name);

    const unknownPresenceMaxAgeMs = 30_000;

    const out: PlayerMarker[] = [];
    for (const p of knownPlayers) {
      const playerId = p.playerId;
      const st = findPlayerStateAt(playerId, t);
      if (!st) continue;

      const connected = isConnectedAt(playerId, t);
      if (connected === false) continue;
      if (connected === null && (t - st.tsMs) > unknownPresenceMaxAgeMs) continue;

      const pj = st.player;

      const pos = coerceVec3((pj as any).pos);
      if (!pos) continue;

      const inVehicle = !!(pj as any).inVehicle;

      const terrainY = sampleTerrainY(terrain, pos.x, pos.z);

      // Only snap to terrain when we're plausibly on-foot near the ground.
      // This keeps markers consistent with trails and avoids "ground-snapping" helicopters/vehicles.
      const shouldSnapToTerrain = !inVehicle
        && (typeof terrainY === 'number' && Number.isFinite(terrainY))
        && (typeof pos.y === 'number' && Number.isFinite(pos.y))
        && Math.abs(pos.y - terrainY) <= 3.5;

      const snappedPos = shouldSnapToTerrain ? { ...pos, y: terrainY + 0.35 } : pos;

      const aimDir = coerceVec3((pj as any).aimDir);
      const vehicleName = (pj as any).vehicle && typeof (pj as any).vehicle.name === 'string' ? String((pj as any).vehicle.name) : '';

      const snapTsMs = st.tsMs;
      const deadUntil = deadUntilByPlayerId.get(playerId) || 0;
      const isDead = typeof snapTsMs === 'number' ? deadUntil > snapTsMs : false;

      let label = nameById.get(playerId) || String(playerId);
      if (showVehicleInTags && inVehicle && vehicleName) label = `${label} (${vehicleName})`;

      out.push({
        playerId,
        label,
        pos: snappedPos,
        aimDir,
        inVehicle,
        isDead,
      });
    }
    return out;
  }, [currentTsMs, deadUntilByPlayerId, findPlayerStateAt, isConnectedAt, knownPlayers, playerSeriesById, showVehicleInTags, terrain]);

  const focusedTrail = useMemo((): Trail | null => {
    if (!enableTrails) return null;
    if (selectedPlayerId === null) return null;
    if (typeof currentTsMs !== 'number') return null;
    if (snapshots.length === 0) return null;

    const windowMs = Math.max(5000, Math.min(60000, Math.floor(trailSeconds * 1000)));
    const startTs = currentTsMs - windowMs;

    const pts: Array<{ x: number; y: number; z: number }> = [];
    let lastEntityId: string | null = null;
    for (const s of snapshots) {
      if (s.tsMs < startTs) continue;
      if (s.tsMs > currentTsMs) break;
      const pj = s.players.find((p) => p && typeof p === 'object' && (p as any).playerId === selectedPlayerId);
      if (!pj) continue;

      const inVehicle = !!(pj as any).inVehicle;

      const entityId = (pj as any).entityId;
      const ent = typeof entityId === 'string' && entityId.length > 0 ? entityId : null;
      if (ent && lastEntityId && ent !== lastEntityId) {
        // Respawn typically results in a new character entityId;
        // don't draw a trail segment across the teleport.
        pts.length = 0;
      }
      if (ent) lastEntityId = ent;

      const pos = coerceVec3((pj as any).pos);
      if (!pos) continue;

      // Ignore bogus origin-space points; they create misleading trails and jumps.
      if (isNearOriginXZ(pos, 30)) continue;

      const terrainY = sampleTerrainY(terrain, pos.x, pos.z);
      const shouldSnapToTerrain = !inVehicle
        && (typeof terrainY === 'number' && Number.isFinite(terrainY))
        && (typeof pos.y === 'number' && Number.isFinite(pos.y))
        && Math.abs(pos.y - terrainY) <= 3.5;

      // Keep trail close to terrain when on-foot; renderer adds a small +Y lift.
      pts.push(shouldSnapToTerrain ? { ...pos, y: terrainY } : pos);
    }

    if (pts.length < 2) return null;
    const maxPoints = 200;
    if (pts.length > maxPoints) {
      const stride = Math.ceil(pts.length / maxPoints);
      const down: Array<{ x: number; y: number; z: number }> = [];
      for (let i = 0; i < pts.length; i += stride) down.push(pts[i]);
      return { points: down };
    }
    return { points: pts };
  }, [currentTsMs, enableTrails, selectedPlayerId, snapshots, terrain, trailSeconds]);

  const visibleDeathMarkers = useMemo(() => {
    if (!showDeathMarkers) return [] as Array<{ x: number; y: number; z: number }>;
    const t = currentTsMs;
    if (typeof t !== 'number') return [];

    const out: Array<{ x: number; y: number; z: number }> = [];
    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'kill' && p.type !== 'death') continue;
      if (typeof p.tsMs !== 'number') continue;
      if (t < p.tsMs || t > p.tsMs + 3000) continue;

      const ev: any = (p as any).event;
      const victimPos = ev ? coerceVec3(ev.victimPos) : null;
      if (!victimPos) continue;
      out.push(victimPos);
      if (out.length >= 40) break;
    }
    return out;
  }, [currentTsMs, events, showDeathMarkers]);

  const scrubber = useMemo(() => {
    const min = range.minTsMs;
    const max = range.maxTsMs;
    const cur = currentTsMs;
    if (typeof min !== 'number' || typeof max !== 'number' || typeof cur !== 'number') {
      return { min: 0, max: 100, value: 0, disabled: true };
    }
    if (max <= min) {
      return { min, max: min + 1, value: min, disabled: false };
    }

    return { min, max, value: Math.min(Math.max(cur, min), max), disabled: false };
  }, [currentTsMs, range.maxTsMs, range.minTsMs]);

  const wallClockAnchor = useMemo(() => {
    let bestTs = -Infinity;
    let bestReceivedAt = 0;
    for (const rec of events) {
      if (!rec || typeof rec.receivedAt !== 'number') continue;
      const ts = getRecordTsMs(rec);
      if (ts === null) continue;
      if (ts > bestTs) {
        bestTs = ts;
        bestReceivedAt = rec.receivedAt;
      }
    }
    if (!Number.isFinite(bestTs) || bestTs < 0 || !Number.isFinite(bestReceivedAt) || bestReceivedAt <= 0) return null;
    return { tsMs: bestTs, receivedAt: bestReceivedAt };
  }, [events]);

  const formatWallClock = useMemo(() => {
    if (!wallClockAnchor) return null;
    const anchor = wallClockAnchor;
    return (tsMs: number) => {
      const epochMs = anchor.receivedAt + (tsMs - anchor.tsMs);
      if (!Number.isFinite(epochMs)) return '';
      return new Date(epochMs).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
  }, [wallClockAnchor]);

  const attachedPlayerName = useMemo(() => {
    if (attachedPlayerId === null) return null;
    const p = knownPlayers.find((x) => x.playerId === attachedPlayerId);
    return p ? p.name : String(attachedPlayerId);
  }, [attachedPlayerId, knownPlayers]);

  const playersAtTime = useMemo((): ReplayPlayer[] => {
    const t = currentTsMs;
    if (typeof t !== 'number' || !Number.isFinite(t)) return [];

    // Primary signal: join/disconnect presence timeline.
    // Fallback: if presence is unknown (no join/disconnect seen), include only if we have a recent
    // player snapshot at-or-before t (prevents listing hundreds of historical players).
    const unknownPresenceMaxAgeMs = 30_000;

    const out: ReplayPlayer[] = [];
    for (const p of knownPlayers) {
      const pid = p.playerId;
      const connected = isConnectedAt(pid, t);
      if (connected === true) {
        out.push(p);
        continue;
      }
      if (connected === false) continue;

      const st = findPlayerStateAt(pid, t);
      if (!st) continue;
      if ((t - st.tsMs) <= unknownPresenceMaxAgeMs) out.push(p);
    }

    out.sort((a, b) => a.name.localeCompare(b.name) || a.playerId - b.playerId);
    return out;
  }, [currentTsMs, findPlayerStateAt, isConnectedAt, knownPlayers]);

  function jumpToEventTs(tsMs: number) {
    const offsetMs = Math.max(0, Math.floor(eventClickOffsetSeconds * 1000));
    const min = scrubber.disabled ? 0 : scrubber.min;
    const max = scrubber.disabled ? tsMs : scrubber.max;
    const next = Math.min(max, Math.max(min, tsMs - offsetMs));
    setCurrentTsMs(next);
  }

  const filteredPlayers = useMemo((): ReplayPlayer[] => {
    const q = playerSearch.trim().toLowerCase();
    const base = Array.isArray(playersAtTime) ? playersAtTime : [];
    if (!q) return base;
    return base.filter((p) => {
      const name = (p.name || '').toLowerCase();
      return name.includes(q) || String(p.playerId).includes(q);
    });
  }, [playerSearch, playersAtTime]);

  const selectedPlayerState = useMemo((): { snapTsMs: number; player: any } | null => {
    if (selectedPlayerId === null) return null;
    const t = currentTsMs;
    if (typeof t !== 'number') return null;
    const st = findPlayerStateAt(selectedPlayerId, t);
    if (!st) return null;
    return { snapTsMs: st.tsMs, player: st.player };
  }, [currentTsMs, findPlayerStateAt, selectedPlayerId]);

  const selectedPlayerStateWithEquipmentCache = useMemo(() => {
    const t = currentTsMs;
    if (typeof t !== 'number') return selectedPlayerState;
    const st = selectedPlayerState;
    if (!st || !st.player || typeof st.player !== 'object') return st;

    const raw: any = st.player as any;
    const snapTs = st.snapTsMs;
    const pid = typeof raw.playerId === 'number' ? raw.playerId : null;
    if (pid === null) return st;

    // Exporter samples inventory/hotbar on a cadence; snapshots between samples omit fields.
    // Prefer the most recent sample at-or-before the selected time; never use future samples.
    const maxAgeMs = 5 * 60_000;
    const cache = equipmentCacheRef.current.get(pid) || {
      invTsMs: -1,
      hotbarTsMs: -1,
      weaponTsMs: -1,
    };

    const rawInv = raw.inventory;
    // Treat an empty array as a real update (player can have empty inventory).
    // Only use the cache when the field is missing from the snapshot.
    if (Array.isArray(rawInv)) {
      cache.inventory = rawInv;
      cache.invTsMs = snapTs;
    }

    const rawHotbar = raw.attachments;
    if (Array.isArray(rawHotbar)) {
      cache.attachments = rawHotbar;
      cache.hotbarTsMs = snapTs;
    }

    const rawWeapon = raw.weapon;
    if (rawWeapon && typeof rawWeapon === 'object' && typeof rawWeapon.name === 'string' && rawWeapon.name.length > 0) {
      cache.weapon = rawWeapon;
      cache.weaponTsMs = snapTs;
    }

    equipmentCacheRef.current.set(pid, cache);

    const invIsMissingSignal = !Array.isArray(rawInv);
    const hotbarIsMissingSignal = !Array.isArray(rawHotbar);
    const weaponIsEmptySignal = !rawWeapon || !rawWeapon.name;

    const needsBackfill = invIsMissingSignal || hotbarIsMissingSignal || weaponIsEmptySignal;
    const sample = needsBackfill ? findPlayerEquipSampleAtOrBefore(pid, t, maxAgeMs) : null;

    if (sample && sample.inventory && (!('inventory' in cache) || cache.invTsMs > t || (t - cache.invTsMs) > maxAgeMs)) {
      cache.inventory = sample.inventory;
      cache.invTsMs = sample.tsMs;
    }
    if (sample && sample.attachments && (!('attachments' in cache) || cache.hotbarTsMs > t || (t - cache.hotbarTsMs) > maxAgeMs)) {
      cache.attachments = sample.attachments;
      cache.hotbarTsMs = sample.tsMs;
    }
    if (sample && sample.weapon && (!cache.weapon || cache.weaponTsMs > t || (t - cache.weaponTsMs) > maxAgeMs)) {
      cache.weapon = sample.weapon;
      cache.weaponTsMs = sample.tsMs;
    }

    const invAge = t - cache.invTsMs;
    const hotbarAge = t - cache.hotbarTsMs;
    const weaponAge = t - cache.weaponTsMs;

    const useCachedInv = ('inventory' in cache)
      && cache.invTsMs <= t
      && invAge >= 0
      && invAge <= maxAgeMs
      && invIsMissingSignal;

    const useCachedHotbar = ('attachments' in cache)
      && cache.hotbarTsMs <= t
      && hotbarAge >= 0
      && hotbarAge <= maxAgeMs
      && hotbarIsMissingSignal;

    const useCachedWeapon = !!cache.weapon
      && cache.weaponTsMs <= t
      && weaponAge >= 0
      && weaponAge <= maxAgeMs
      && weaponIsEmptySignal;

    return {
      ...raw,
      inventory: useCachedInv ? cache.inventory : rawInv,
      attachments: useCachedHotbar ? cache.attachments : rawHotbar,
      weapon: useCachedWeapon ? cache.weapon : rawWeapon,
      __snapTsMs: snapTs,
    };
  }, [currentTsMs, findPlayerEquipSampleAtOrBefore, selectedPlayerState]);

  const timelineEvents = useMemo(() => {
    const out: Array<{
      tsMs: number;
      type: string;
      title: string;
      subtitle: string;
      focusPos: { x: number; y: number; z: number } | null;
      focusPlayerId: number | null;
      playerIds: number[];
    }> = [];

    for (const e of events) {
      const p: any = e.payload;
      if (!p || typeof p !== 'object') continue;
      if (typeof p.tsMs !== 'number') continue;
      if (p.type === 'snapshot') continue;
      if (p.type !== 'kill' && p.type !== 'death' && p.type !== 'aiKill' && p.type !== 'join' && p.type !== 'disconnect' && p.type !== 'restart' && p.type !== 'gmPing') continue;

      const ev: any = (p as any).event;

      if (p.type === 'kill') {
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;
        const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        out.push({
          tsMs: p.tsMs,
          type: 'kill',
          title: `${killerName} → ${victimName}`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: victimId,
          playerIds: [killerId, victimId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'death') {
        // If this death is attributable to another player, it will also have a corresponding `kill` event.
        // Avoid double-reporting in the timeline by skipping those.
        const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;
        if (victimId !== null && killerId !== null && killerId >= 0 && killerId !== victimId) continue;

        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        out.push({
          tsMs: p.tsMs,
          type: 'death',
          title: `${victimName} died`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: victimId,
          playerIds: [victimId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'aiKill') {
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        out.push({
          tsMs: p.tsMs,
          type: 'aiKill',
          title: `${killerName} → AI: ${victimName}`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: killerId,
          playerIds: [killerId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'gmPing') {
        const by = ev && typeof ev.by === 'string' && ev.by.length > 0 ? ev.by : '';
        const target = ev && typeof ev.title === 'string' && ev.title.length > 0 ? ev.title : 'event';
        const pos = ev ? coerceVec3(ev.pos) : null;
        const msg = by ? `(${by} sent a GM ping to ${target})` : `GM ping to ${target}`;
        out.push({
          tsMs: p.tsMs,
          type: 'gmPing',
          title: msg,
          subtitle: '',
          focusPos: pos,
          focusPlayerId: null,
          playerIds: [],
        });
      } else {
        if (p.type === 'restart') {
          out.push({
            tsMs: p.tsMs,
            type: 'restart',
            title: 'Server restarted',
            subtitle: 'restart / history cleared',
            focusPos: null,
            focusPlayerId: null,
            playerIds: [],
          });
          continue;
        }
        const name = ev && typeof ev.name === 'string' ? ev.name : String(ev && ev.playerId ? ev.playerId : 'player');
        const id = ev && typeof ev.playerId === 'number' ? ev.playerId : null;

        const joinFocusPos = (p.type === 'join' && typeof id === 'number')
          ? findFirstNonOriginPosAfter(id, p.tsMs, 90_000)
          : null;

        const disconnectFocusPos = (p.type === 'disconnect' && typeof id === 'number')
          ? findLastNonOriginPosBefore(id, p.tsMs, 90_000)
          : null;

        out.push({
          tsMs: p.tsMs,
          type: String(p.type),
          title: `${p.type === 'join' ? 'Join' : 'Disconnect'}: ${name}`,
          subtitle: p.type === 'disconnect' && ev && typeof ev.kickCause === 'string' && ev.kickCause ? `cause: ${ev.kickCause}` : '',
          focusPos: joinFocusPos || disconnectFocusPos,
          focusPlayerId: id,
          playerIds: [id].filter((x): x is number => typeof x === 'number'),
        });
      }
    }

    out.sort((a, b) => a.tsMs - b.tsMs);

    const t = currentTsMs;
    const filterId = eventPlayerFilterId;

    let visible = out;
    if (typeof t === 'number') {
      visible = visible.filter((x) => x.tsMs <= t);
    }
    if (typeof filterId === 'number') {
      visible = visible.filter((x) => x.playerIds.includes(filterId));
    }
    return visible.slice(-200);
  }, [currentTsMs, eventPlayerFilterId, events, findFirstNonOriginPosAfter]);

  useEffect(() => {
    if (!selectedEventKey) return;

    const t = window.setTimeout(() => {
      const el = eventCardRefs.current.get(selectedEventKey);
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 0);

    return () => window.clearTimeout(t);
  }, [selectedEventKey, leftPanelTab]);

  const eventDots = useMemo(() => {
    const min = range.minTsMs;
    const max = range.maxTsMs;
    if (typeof min !== 'number' || typeof max !== 'number') return [] as Array<{
      tsMs: number;
      type: 'kill' | 'death' | 'aiKill' | 'join' | 'disconnect' | 'restart' | 'gmPing';
      title: string;
      subtitle: string;
      focusPos: { x: number; y: number; z: number } | null;
      focusPlayerId: number | null;
      playerIds: number[];
    }>;

    let out: Array<{
      tsMs: number;
      type: 'kill' | 'death' | 'aiKill' | 'join' | 'disconnect' | 'restart' | 'gmPing';
      title: string;
      subtitle: string;
      focusPos: { x: number; y: number; z: number } | null;
      focusPlayerId: number | null;
      playerIds: number[];
    }> = [];

    for (const rec of events) {
      const p: any = (rec as any).payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type !== 'kill' && p.type !== 'death' && p.type !== 'aiKill' && p.type !== 'join' && p.type !== 'disconnect' && p.type !== 'restart' && p.type !== 'gmPing') continue;
      if (typeof p.tsMs !== 'number') continue;
      if (p.tsMs < min || p.tsMs > max) continue;

      const ev: any = (p as any).event;
      if (p.type === 'kill') {
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;
        const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;
        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);
        out.push({
          tsMs: p.tsMs,
          type: 'kill',
          title: `${killerName} → ${victimName}`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: victimId,
          playerIds: [killerId, victimId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'death') {
        // Avoid double-reporting attributed kills.
        const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;
        if (victimId !== null && killerId !== null && killerId >= 0 && killerId !== victimId) continue;

        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;
        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);
        out.push({
          tsMs: p.tsMs,
          type: 'death',
          title: `${victimName} died`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: victimId,
          playerIds: [victimId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'aiKill') {
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';
        const victimPos = ev ? coerceVec3(ev.victimPos) : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;
        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);
        out.push({
          tsMs: p.tsMs,
          type: 'aiKill',
          title: `${killerName} → AI: ${victimName}`,
          subtitle: subtitleParts.join(' • '),
          focusPos: victimPos,
          focusPlayerId: killerId,
          playerIds: [killerId].filter((x): x is number => typeof x === 'number'),
        });
      } else if (p.type === 'gmPing') {
        const by = ev && typeof ev.by === 'string' && ev.by.length > 0 ? ev.by : '';
        const target = ev && typeof ev.title === 'string' && ev.title.length > 0 ? ev.title : 'event';
        const pos = ev ? coerceVec3(ev.pos) : null;
        const msg = by ? `(${by} sent a GM ping to ${target})` : `GM ping to ${target}`;
        out.push({
          tsMs: p.tsMs,
          type: 'gmPing',
          title: msg,
          subtitle: '',
          focusPos: pos,
          focusPlayerId: null,
          playerIds: [],
        });
      } else if (p.type === 'restart') {
        const reason = ev && typeof ev.reason === 'string' ? ev.reason : '';
        const subtitle = reason === 'session_start'
          ? 'server restart'
          : (reason === 'server_restart_or_history_cleared' ? 'restart / history cleared' : (reason || 'restart'));
        out.push({
          tsMs: p.tsMs,
          type: 'restart',
          title: 'Server restarted',
          subtitle,
          focusPos: null,
          focusPlayerId: null,
          playerIds: [],
        });
      } else {
        const name = ev && typeof ev.name === 'string' ? ev.name : String(ev && ev.playerId ? ev.playerId : 'player');
        const id = ev && typeof ev.playerId === 'number' ? ev.playerId : null;

        const joinFocusPos = (p.type === 'join' && typeof id === 'number')
          ? findFirstNonOriginPosAfter(id, p.tsMs, 90_000)
          : null;

        out.push({
          tsMs: p.tsMs,
          type: p.type,
          title: `${p.type === 'join' ? 'Join' : 'Disconnect'}: ${name}`,
          subtitle: p.type === 'disconnect' && ev && typeof ev.kickCause === 'string' && ev.kickCause ? `cause: ${ev.kickCause}` : '',
          focusPos: joinFocusPos,
          focusPlayerId: id,
          playerIds: [id].filter((x): x is number => typeof x === 'number'),
        });
      }
    }

    out.sort((a, b) => a.tsMs - b.tsMs);

    const filterId = eventPlayerFilterId;
    if (typeof filterId === 'number') {
      out = out.filter((x) => x.playerIds.includes(filterId));
    }

    // Cap dots to keep UI snappy.
    const maxDots = 420;
    if (out.length > maxDots) {
      const stride = Math.ceil(out.length / maxDots);
      const down: typeof out = [];
      for (let i = 0; i < out.length; i += stride) down.push(out[i]);
      return down;
    }

    return out;
  }, [eventPlayerFilterId, events, findFirstNonOriginPosAfter, range.maxTsMs, range.minTsMs]);

  function pushToast(t: { kind: 'kill' | 'event'; title: string; subtitle: string }) {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [{ id, ...t, visible: false }, ...prev].slice(0, 5));
    // Fade in
    window.setTimeout(() => {
      setToasts((prev) => prev.map((x) => (x.id === id ? { ...x, visible: true } : x)));
    }, 10);
    // Fade out
    window.setTimeout(() => {
      setToasts((prev) => prev.map((x) => (x.id === id ? { ...x, visible: false } : x)));
    }, 4500);
    // Remove
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 5200);
  }

  useEffect(() => {
    if (!live) return;
    if (events.length === 0) return;

    const lastSeen = lastToastReceivedAtRef.current;
    let maxSeen = lastSeen;

    const newlyReceived: Array<{ receivedAt: number; payload: any }> = [];
    for (const rec of events) {
      if (!rec || typeof rec.receivedAt !== 'number') continue;
      if (rec.receivedAt <= lastSeen) continue;
      if (rec.receivedAt > maxSeen) maxSeen = rec.receivedAt;
      newlyReceived.push({ receivedAt: rec.receivedAt, payload: (rec as any).payload });
    }

    newlyReceived.sort((a, b) => a.receivedAt - b.receivedAt);

    for (const item of newlyReceived) {
      const p: any = item.payload;
      if (!p || typeof p !== 'object') continue;
      if (p.type === 'snapshot') continue;

      if (p.type === 'gmPing') {
        const ev: any = (p as any).event;
        const by = ev && typeof ev.by === 'string' && ev.by.length > 0 ? ev.by : '';
        const title = ev && typeof ev.title === 'string' && ev.title.length > 0 ? ev.title : 'Ping';
        pushToast({
          kind: 'event',
          title: 'GM ping',
          subtitle: by ? `${by} • ${title}` : title,
        });
        continue;
      }

      if (p.type === 'kill') {
        const ev: any = (p as any).event;
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' && ev.weaponName.length > 0 ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        pushToast({
          kind: 'kill',
          title: `${killerName} → ${victimName}`,
          subtitle: subtitleParts.length > 0 ? subtitleParts.join(' • ') : 'Kill',
        });
      } else if (p.type === 'death') {
        const ev: any = (p as any).event;
        const victimId = ev && typeof ev.victimPlayerId === 'number' ? ev.victimPlayerId : null;
        const killerId = ev && typeof ev.killerPlayerId === 'number' ? ev.killerPlayerId : null;
        if (victimId !== null && killerId !== null && killerId >= 0 && killerId !== victimId) continue;

        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' && ev.weaponName.length > 0 ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        pushToast({
          kind: 'event',
          title: `${victimName} died`,
          subtitle: subtitleParts.length > 0 ? subtitleParts.join(' • ') : 'Death',
        });
      } else if (p.type === 'aiKill') {
        const ev: any = (p as any).event;
        const killerName = ev && typeof ev.killerName === 'string' ? ev.killerName : 'Unknown';
        const victimName = ev && typeof ev.victimName === 'string' ? ev.victimName : 'Unknown';
        const weaponName = ev && typeof ev.weaponName === 'string' && ev.weaponName.length > 0 ? ev.weaponName : '';
        const distanceM = ev && typeof ev.distanceM === 'number' ? ev.distanceM : null;
        const distText = (typeof distanceM === 'number' && Number.isFinite(distanceM)) ? `${Math.round(distanceM)}m` : '';

        const subtitleParts = [] as string[];
        if (weaponName) subtitleParts.push(weaponName);
        if (distText) subtitleParts.push(distText);

        pushToast({
          kind: 'kill',
          title: `${killerName} → AI: ${victimName}`,
          subtitle: subtitleParts.length > 0 ? subtitleParts.join(' • ') : 'AI kill',
        });
      }
    }

    if (maxSeen > lastSeen) lastToastReceivedAtRef.current = maxSeen;
  }, [events, live]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div className="row" style={{ gap: 12, padding: 12, alignItems: 'center' }}>
        <div style={{ minWidth: 240, maxWidth: 520, flex: 1 }}>
          <select
            className="input"
            value={selectedServerId}
            onChange={(e) => {
              setSelectedServerId(e.target.value);

              // reset tool state when switching servers
              setPlayers([]);
              setSelectedPlayerId(null);
              setFocusTarget(null);
              setEvents([]);
              setRange({ minTsMs: null, maxTsMs: null });
              setCurrentTsMs(null);
              lastFetchedTsMsRef.current = null;
              lastToastReceivedAtRef.current = 0;
              setToasts([]);
            }}
          >
            <option value="">Select a server…</option>
            {servers.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.id})
              </option>
            ))}
          </select>
          {servers.length === 0 ? (
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              No servers returned yet.
            </div>
          ) : null}
        </div>

        {serverId ? null : (
          <button
            className="button"
            onClick={() => {
              setServerStatusesError(null);
              getReplayStatusAll()
                .then((data) => setServerStatuses(data))
                .catch((err) => {
                  const message = err instanceof Error ? err.message : 'Failed to load server status';
                  setServerStatusesError(message);
                });
            }}
          >
            Refresh overview
          </button>
        )}

        {busy ? <div className="muted" style={{ fontSize: 12 }}>Loading…</div> : null}
        {error ? <div className="error" style={{ flex: 1 }}>{error}</div> : null}
      </div>

      {serverId ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'calc(100vh - 72px)',
            padding: 12,
            boxSizing: 'border-box',
          }}
        >
          <div className="card" style={{ width: '100%', height: '100%', padding: 0, overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <ReplayMap3D
                players={playerMarkers}
                focusTarget={focusTarget}
                focusNonce={focusNonce}
                followPlayerId={attachedPlayerId}
                nameTags={nameTagOptions}
                showAimLines={showAimLines}
                trail={focusedTrail}
                deathMarkers={visibleDeathMarkers}
                terrain={terrain}
                towns={towns || undefined}
              />

              {attachedPlayerId !== null && attachedPlayerName ? (
                <div style={{ position: 'absolute', left: 12, right: 12, bottom: 132, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
                  <div className="card" style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.14)' }}>
                    <div style={{ fontWeight: 800, fontSize: 12 }}>
                      Attached to {attachedPlayerName}, press F to unattach
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Top-right toast popups */}
              <div style={{ position: 'absolute', top: 12, right: 12, width: 340, display: 'flex', flexDirection: 'column', gap: 8, pointerEvents: 'none' }}>
                {toasts.map((t) => (
                  <div
                    key={t.id}
                    style={{
                      pointerEvents: 'none',
                      padding: '10px 12px',
                      borderRadius: 10,
                      background: 'rgba(0,0,0,0.55)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      opacity: t.visible ? 1 : 0,
                      transform: t.visible ? 'translateY(0px)' : 'translateY(-6px)',
                      transition: 'opacity 250ms ease, transform 250ms ease',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{t.title}</div>
                    {t.subtitle ? <div className="muted" style={{ fontSize: 12 }}>{t.subtitle}</div> : null}
                  </div>
                ))}
              </div>

              {/* Floating Players panel */}
              <div style={{ position: 'absolute', top: 12, left: 12, width: playersPanelOpen ? 360 : 'auto' }}>
                <div className="card" style={{ padding: 10, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'nowrap' }}>
                    <div className="row" style={{ gap: 8, flexWrap: 'nowrap' }}>
                      <button
                        type="button"
                        className="button"
                        style={{
                          padding: '6px 10px',
                          background: leftPanelTab === 'players' ? 'rgba(249,188,89,0.22)' : 'rgba(255,255,255,0.10)',
                          borderColor: leftPanelTab === 'players' ? 'rgba(249,188,89,0.40)' : 'rgba(255,255,255,0.14)',
                        }}
                        onClick={() => setLeftPanelTab('players')}
                      >
                        Players
                      </button>
                      <button
                        type="button"
                        className="button"
                        style={{
                          padding: '6px 10px',
                          background: leftPanelTab === 'events' ? 'rgba(249,188,89,0.22)' : 'rgba(255,255,255,0.10)',
                          borderColor: leftPanelTab === 'events' ? 'rgba(249,188,89,0.40)' : 'rgba(255,255,255,0.14)',
                        }}
                        onClick={() => setLeftPanelTab('events')}
                      >
                        Events
                      </button>
                    </div>

                    <div className="row" style={{ gap: 8, flexWrap: 'nowrap' }}>
                      {leftPanelTab === 'players' ? (
                        <button
                          type="button"
                          className="button"
                          title="Nametag options"
                          style={{ padding: '6px 10px' }}
                          onClick={() => setNameTagOptionsOpen((v) => !v)}
                        >
                          ⚙
                        </button>
                      ) : null}

                      <button
                        type="button"
                        className="button"
                        style={{ padding: '6px 10px' }}
                        onClick={() => setPlayersPanelOpen((v) => !v)}
                      >
                        {playersPanelOpen ? '−' : '+'}
                      </button>
                    </div>
                  </div>

                  {playersPanelOpen ? (
                    <div className="stack" style={{ marginTop: 10 }}>
                      {leftPanelTab === 'players' ? (
                        <>
                          {nameTagOptionsOpen ? (
                            <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10, padding: 10 }}>
                              <div className="label" style={{ marginBottom: 8 }}>Nametags</div>

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={nameTagsEnabled} onChange={(e) => setNameTagsEnabled(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Show nametags</span>
                              </label>

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={nameTagBackground} onChange={(e) => setNameTagBackground(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Background</span>
                              </label>

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={showVehicleInTags} onChange={(e) => setShowVehicleInTags(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Include vehicle in label</span>
                              </label>

                              <div className="label" style={{ marginBottom: 6 }}>Nametag size</div>
                              <input
                                style={{ width: '100%' }}
                                type="range"
                                min={0.6}
                                max={1.6}
                                step={0.1}
                                value={nameTagScale}
                                onChange={(e) => setNameTagScale(Number(e.target.value))}
                              />
                              <div className="muted" style={{ fontSize: 12 }}>
                                {nameTagScale.toFixed(1)}×
                              </div>

                              <div style={{ height: 8 }} />

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={showAimLines} onChange={(e) => setShowAimLines(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Aim direction line</span>
                              </label>

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={showDeathMarkers} onChange={(e) => setShowDeathMarkers(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Death markers</span>
                              </label>

                              <label className="row" style={{ gap: 8, marginBottom: 8 }}>
                                <input type="checkbox" checked={enableTrails} onChange={(e) => setEnableTrails(e.target.checked)} />
                                <span className="muted" style={{ fontSize: 12 }}>Trails (focused player)</span>
                              </label>

                              {enableTrails ? (
                                <>
                                  <div className="label" style={{ marginBottom: 6 }}>Trail window (seconds)</div>
                                  <input
                                    style={{ width: '100%' }}
                                    type="range"
                                    min={5}
                                    max={60}
                                    step={5}
                                    value={trailSeconds}
                                    onChange={(e) => setTrailSeconds(Number(e.target.value))}
                                  />
                                  <div className="muted" style={{ fontSize: 12 }}>{trailSeconds}s</div>
                                </>
                              ) : null}
                            </div>
                          ) : null}

                          <input
                            className="input"
                            placeholder="Search players…"
                            value={playerSearch}
                            onChange={(e) => setPlayerSearch(e.target.value)}
                          />
                        </>
                      ) : null}

                      {leftPanelTab === 'players' ? (
                        <div className="scroll" style={{ maxHeight: 240, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
                          {filteredPlayers.length === 0 ? (
                            <div className="muted" style={{ padding: 10, fontSize: 12 }}>No players.</div>
                          ) : (
                            filteredPlayers.map((p) => {
                              const isSelected = selectedPlayerId === p.playerId;
                              return (
                                <button
                                  key={p.playerId}
                                  type="button"
                                  onClick={() => {
                                    setLeftPanelTab('players');
                                    setSelectedPlayerId(p.playerId);
                                    setAttachedPlayerId(p.playerId);

                                    const marker = playerMarkers.find((m) => m.playerId === p.playerId);
                                    if (marker) {
                                      setFocusTarget(marker.pos);
                                      setFocusNonce((n) => n + 1);
                                    }
                                  }}
                                  className="button"
                                  style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    borderRadius: 0,
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                    background: isSelected ? 'rgba(255,255,255,0.08)' : 'transparent',
                                    padding: '8px 10px',
                                  }}
                                >
                                  <div style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</div>
                                  <div className="muted" style={{ fontSize: 11 }}>#{p.playerId}</div>
                                </button>
                              );
                            })
                          )}
                        </div>
                      ) : (
                        <div className="stack" style={{ gap: 8 }}>
                          <div className="row" style={{ justifyContent: 'space-between', gap: 10 }}>
                            <div className="muted" style={{ fontSize: 12 }}>Event click offset</div>
                            <div className="row" style={{ gap: 8 }}>
                              <input
                                className="input"
                                style={{ width: 90, padding: '6px 10px' }}
                                type="number"
                                min={0}
                                max={60}
                                step={1}
                                value={eventClickOffsetSeconds}
                                onChange={(e) => setEventClickOffsetSeconds(Math.max(0, Math.min(60, Math.floor(Number(e.target.value) || 0))))}
                                title="Jump this many seconds before an event"
                              />
                              <div className="muted" style={{ fontSize: 12 }}>sec</div>
                            </div>
                          </div>

                          <div className="scroll" style={{ maxWidth: 340, overflowX: 'auto', overflowY: 'hidden', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10, padding: 10 }}>
                            {timelineEvents.length === 0 ? (
                              <div className="muted" style={{ fontSize: 12 }}>No events in buffer yet.</div>
                            ) : (
                              <div style={{ display: 'flex', gap: 10 }}>
                                {timelineEvents.slice().reverse().map((ev, idx) => {
                                  const key = `${ev.tsMs}|${ev.type}|${ev.title}|${ev.subtitle || ''}`;
                                  const isSelected = selectedEventKey === key;
                                  const canPing = !!serverId && ev.type !== 'gmPing' && !!ev.focusPos;
                                  const pingTitle = ev.subtitle ? `${ev.title} • ${ev.subtitle}` : ev.title;
                                  return (
                                    <div
                                      key={`${ev.tsMs}-${idx}`}
                                      ref={(el) => {
                                        if (el) eventCardRefs.current.set(key, el);
                                        else eventCardRefs.current.delete(key);
                                      }}
                                      className="button"
                                      style={{
                                        minWidth: 220,
                                        textAlign: 'left',
                                        borderRadius: 10,
                                        border: isSelected ? '1px solid rgba(255,255,255,0.35)' : '1px solid rgba(255,255,255,0.10)',
                                        background: isSelected ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
                                        padding: '8px 10px',
                                        position: 'relative',
                                      }}
                                      role="button"
                                      tabIndex={0}
                                      onClick={() => {
                                        setSelectedEventKey(key);
                                        setIsPlaying(false);
                                        setLive(false);
                                        jumpToEventTs(ev.tsMs);
                                        if (typeof ev.focusPlayerId === 'number') setSelectedPlayerId(ev.focusPlayerId);
                                        if (ev.focusPos) {
                                          setFocusTarget(ev.focusPos);
                                          setFocusNonce((n) => n + 1);
                                        }
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key !== 'Enter' && e.key !== ' ') return;
                                        e.preventDefault();
                                        setSelectedEventKey(key);
                                        setIsPlaying(false);
                                        setLive(false);
                                        jumpToEventTs(ev.tsMs);
                                        if (typeof ev.focusPlayerId === 'number') setSelectedPlayerId(ev.focusPlayerId);
                                        if (ev.focusPos) {
                                          setFocusTarget(ev.focusPos);
                                          setFocusNonce((n) => n + 1);
                                        }
                                      }}
                                    >
                                      <button
                                        type="button"
                                        className="button"
                                        style={{
                                          position: 'absolute',
                                          top: 8,
                                          right: 8,
                                          padding: '4px 8px',
                                          fontSize: 11,
                                          opacity: canPing ? 1 : 0.4,
                                        }}
                                        title={canPing ? 'Send GM ping to this event location' : 'No position for this event'}
                                        disabled={!canPing}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!serverId) return;
                                          const pingPos = ev.focusPos;
                                          if (!pingPos) return;

                                          const reporterPlayerId = (typeof ev.focusPlayerId === 'number')
                                            ? ev.focusPlayerId
                                            : (Array.isArray(ev.playerIds) && ev.playerIds.length > 0 ? ev.playerIds[0] : null);

                                          void sendReplayGmPing({
                                            serverId,
                                            tsMs: ev.tsMs,
                                            pos: pingPos,
                                            title: pingTitle,
                                            reporterPlayerId,
                                          });
                                        }}
                                      >
                                        GM ping
                                      </button>

                                      <button
                                        type="button"
                                        className="button"
                                        style={{
                                          position: 'absolute',
                                          top: 34,
                                          right: 8,
                                          padding: '4px 8px',
                                          fontSize: 11,
                                          opacity: canPing ? 1 : 0.4,
                                        }}
                                        title={canPing ? 'Export 5s before/after as a GIF to Discord' : 'No position for this event'}
                                        disabled={!canPing}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!serverId) return;
                                          const exportPos = ev.focusPos;
                                          if (!exportPos) return;

                                          void (async () => {
                                            try {
                                              await exportReplayEventToDiscord({
                                                serverId,
                                                tsMs: ev.tsMs,
                                                title: ev.title,
                                                pos: exportPos,
                                                focusPlayerId: (typeof ev.focusPlayerId === 'number') ? ev.focusPlayerId : null,
                                                playerIds: Array.isArray(ev.playerIds) ? ev.playerIds : null,
                                              });
                                              pushToast({ kind: 'event', title: 'Discord export', subtitle: 'Sent' });
                                            } catch (err) {
                                              setError(err instanceof Error ? err.message : 'Failed to export to Discord');
                                            }
                                          })();
                                        }}
                                      >
                                        Export
                                      </button>
                                      <div style={{ fontWeight: 800, fontSize: 12 }}>{ev.title}</div>
                                      <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>
                                        +{formatElapsedMs(ev.tsMs - scrubber.min)}{formatWallClock ? ` • ${formatWallClock(ev.tsMs)}` : ''}{ev.subtitle ? ` • ${ev.subtitle}` : ''}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="label">Selected</div>
                        {selectedPlayerId === null ? (
                          <div className="muted" style={{ fontSize: 12 }}>Click a player to view equipment.</div>
                        ) : selectedPlayerStateWithEquipmentCache ? (
                          <div style={{ fontSize: 12 }}>
                            <div className="muted" style={{ marginBottom: 6 }}>
                              pos: {JSON.stringify((selectedPlayerStateWithEquipmentCache as any).pos)}
                            </div>

                            <details open>
                              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Weapon</summary>
                              <div className="muted" style={{ marginTop: 6 }}>
                                {((selectedPlayerStateWithEquipmentCache as any).weapon && (selectedPlayerStateWithEquipmentCache as any).weapon.name) ? (selectedPlayerStateWithEquipmentCache as any).weapon.name : 'None'}
                              </div>
                            </details>

                            <div style={{ height: 6 }} />

                            <details>
                              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
                                Inventory ({Array.isArray((selectedPlayerStateWithEquipmentCache as any).inventory) ? (selectedPlayerStateWithEquipmentCache as any).inventory.length : 0})
                              </summary>
                              <div className="scroll" style={{ marginTop: 6, maxHeight: 170, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
                                {(() => {
                                  const grouped = groupByName((selectedPlayerStateWithEquipmentCache as any).inventory, (it) => (it && it.name) ? String(it.name) : 'Item');
                                  if (grouped.length === 0) {
                                    return <div className="muted" style={{ padding: 10, fontSize: 12 }}>No inventory data in this snapshot.</div>;
                                  }
                                  return grouped.slice(0, 80).map((g, idx) => (
                                    <div key={idx} style={{ padding: '7px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                      <div style={{ fontSize: 12 }}>{g.name}{g.count > 1 ? ` ×${g.count}` : ''}</div>
                                    </div>
                                  ));
                                })()}
                              </div>
                            </details>

                            <div style={{ height: 6 }} />

                            <details>
                              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
                                Hotbar ({Array.isArray((selectedPlayerStateWithEquipmentCache as any).attachments) ? (selectedPlayerStateWithEquipmentCache as any).attachments.length : 0})
                              </summary>
                              <div className="scroll" style={{ marginTop: 6, maxHeight: 170, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
                                {Array.isArray((selectedPlayerStateWithEquipmentCache as any).attachments) && (selectedPlayerStateWithEquipmentCache as any).attachments.length > 0 ? (
                                  (selectedPlayerStateWithEquipmentCache as any).attachments.map((at: any, idx: number) => (
                                    <div key={idx} style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                      <div style={{ fontSize: 12 }}>
                                        {at && at.slot ? <span className="muted" style={{ fontSize: 11 }}>{String(at.slot)}:</span> : null}
                                        {' '}
                                        {at && at.name ? String(at.name) : 'Item'}
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="muted" style={{ padding: 10, fontSize: 12 }}>No attachments data in this snapshot.</div>
                                )}
                              </div>
                            </details>

                            <div style={{ height: 8 }} />

                            <div>
                              <div className="muted" style={{ fontSize: 12, marginBottom: 6 }}>Filter events by player</div>
                              <select
                                className="input"
                                style={{ width: '100%', padding: '6px 10px' }}
                                value={eventPlayerFilterId === null ? '' : String(eventPlayerFilterId)}
                                onChange={(e) => {
                                  const raw = String(e.target.value || '');
                                  if (!raw) {
                                    setEventPlayerFilterId(null);
                                    return;
                                  }
                                  const id = Number(raw);
                                  setEventPlayerFilterId(Number.isFinite(id) ? id : null);
                                }}
                                title="Filter events by player"
                              >
                                <option value="">All players</option>
                                {playersAtTime.map((p) => (
                                  <option key={p.playerId} value={String(p.playerId)}>
                                    {p.name} (#{p.playerId})
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div className="muted" style={{ fontSize: 12 }}>No snapshot data for this player at the current time.</div>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Floating scrubber */}
              <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', justifyContent: 'center' }}>
                <div className="card" style={{ width: 'min(980px, 100%)', padding: 10, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <div>
                      <div className="label">Replay time</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        +{formatElapsedMs(scrubber.value - scrubber.min)} of +{formatElapsedMs(scrubber.max - scrubber.min)}{formatWallClock ? ` • ${formatWallClock(scrubber.value)}` : ''}
                      </div>
                    </div>

                    <div className="row" style={{ gap: 10, alignItems: 'center' }}>
                      <button
                        type="button"
                        className="button"
                        style={{ padding: '6px 10px' }}
                        onClick={() => {
                          if (live) setLive(false);
                          setIsPlaying((v) => !v);
                        }}
                        disabled={scrubber.disabled}
                      >
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>

                      <select
                        className="input"
                        style={{ width: 110, padding: '6px 10px' }}
                        value={String(playbackSpeed)}
                        onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                        disabled={scrubber.disabled}
                        title="Playback speed"
                      >
                        <option value="0.25">0.25×</option>
                        <option value="0.5">0.5×</option>
                        <option value="1">1×</option>
                        <option value="2">2×</option>
                        <option value="4">4×</option>
                      </select>

                      <label className="row" style={{ gap: 8, userSelect: 'none' }}>
                        <input
                          type="checkbox"
                          checked={showEventTimeline}
                          onChange={(e) => setShowEventTimeline(e.target.checked)}
                        />
                        <span className="muted" style={{ fontSize: 12 }}>Events</span>
                      </label>

                      <label className="row" style={{ gap: 8, userSelect: 'none' }}>
                        <input
                          type="checkbox"
                          checked={live}
                          onChange={(e) => {
                            const next = e.target.checked;
                            setLive(next);
                            if (next) setIsPlaying(false);
                          }}
                        />
                        <span className="muted" style={{ fontSize: 12 }}>Live</span>
                      </label>
                    </div>
                  </div>

                  {showEventTimeline ? (
                    <div style={{ position: 'relative', height: 18, marginTop: 6, marginBottom: 4 }}>
                      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, height: 2, background: 'rgba(255,255,255,0.10)' }} />
                      {hoveredEventDot ? (
                        <div
                          style={{
                            position: 'absolute',
                            left: `${hoveredEventDot.leftPct}%`,
                            top: 0,
                            transform: 'translate(-50%, -110%)',
                            zIndex: 10,
                            pointerEvents: 'none',
                            maxWidth: 320,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.10)',
                            borderRadius: 10,
                            padding: '6px 8px',
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: 12, lineHeight: 1.2 }}>{hoveredEventDot.title}</div>
                          <div className="muted" style={{ fontSize: 11, marginTop: 2, lineHeight: 1.2 }}>{hoveredEventDot.subtitle}</div>
                        </div>
                      ) : null}
                      {(() => {
                        const min = scrubber.min;
                        const max = scrubber.max;
                        const span = Math.max(1, max - min);
                        return eventDots.map((ev, idx) => {
                          const pct = (ev.tsMs - min) / span;
                          const leftPct = Math.min(1, Math.max(0, pct)) * 100;
                          const baseColor = (ev.type === 'kill' || ev.type === 'death' || ev.type === 'aiKill')
                            ? 'rgba(255,74,74,0.95)'
                            : ev.type === 'restart'
                              ? 'rgba(255,217,102,0.95)'
                              : 'rgba(183,247,200,0.95)';
                          const filter = ev.type === 'disconnect' ? 'brightness(0.65) saturate(1.1)' : undefined;
                          const tooltipSubtitle = `+${formatElapsedMs(ev.tsMs - min)}${formatWallClock ? ` • ${formatWallClock(ev.tsMs)}` : ''}${ev.subtitle ? ` • ${ev.subtitle}` : ''}`;
                          const key = `${ev.tsMs}|${ev.type}|${ev.title}|${ev.subtitle || ''}`;
                          return (
                            <button
                              key={`${ev.tsMs}-${idx}-${ev.type}`}
                              type="button"
                              className="button"
                              style={{
                                position: 'absolute',
                                left: `calc(${leftPct}% - 4px)`,
                                top: 4,
                                width: 8,
                                height: 8,
                                borderRadius: 999,
                                padding: 0,
                                border: '1px solid rgba(0,0,0,0.35)',
                                background: baseColor,
                                filter,
                              }}
                              onMouseEnter={() => {
                                setHoveredEventDot({
                                  tsMs: ev.tsMs,
                                  type: ev.type,
                                  title: ev.title,
                                  subtitle: tooltipSubtitle,
                                  leftPct,
                                });
                              }}
                              onMouseLeave={() => setHoveredEventDot(null)}
                              onClick={() => {
                                setIsPlaying(false);
                                setLive(false);
                                jumpToEventTs(ev.tsMs);
                                if (typeof ev.focusPlayerId === 'number') setSelectedPlayerId(ev.focusPlayerId);
                                if (ev.focusPos) {
                                  setFocusTarget(ev.focusPos);
                                  setFocusNonce((n) => n + 1);
                                }

                                setLeftPanelTab('events');
                                setSelectedEventKey(key);
                                setHoveredEventDot(null);
                              }}
                            />
                          );
                        });
                      })()}
                    </div>
                  ) : null}

                  <input
                    style={{ width: '100%' }}
                    type="range"
                    min={scrubber.min}
                    max={scrubber.max}
                    value={scrubber.value}
                    disabled={scrubber.disabled}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      if (!Number.isFinite(v)) return;
                      if (live) setLive(false);
                      if (isPlaying) setIsPlaying(false);
                      setCurrentTsMs(v);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!serverId ? (
        <div style={{ padding: 12, height: 'calc(100vh - 72px)', boxSizing: 'border-box', overflow: 'auto' }}>
          <div className="card" style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>Server overview</div>
            <div style={{ marginTop: 4, fontSize: 13 }}>
              Pick a server to open the replay viewer. Times are shown in your local clock.
            </div>
            {serverStatusesError ? (
              <div className="error" style={{ marginTop: 10 }}>{serverStatusesError}</div>
            ) : null}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
            {(serverStatuses && serverStatuses.length > 0 ? serverStatuses : servers.map((s) => ({
              serverId: s.id,
              name: s.name,
              lastIngestTsMs: null,
              minTsMs: null,
              maxTsMs: null,
              firstReceivedAt: null,
              lastReceivedAt: null,
              storedEvents: null,
              totalEvents: null,
              retentionMs: 0,
              mapId: null,
            } as ReplayStatus))).map((st) => {
              const retentionMs = typeof st.retentionMs === 'number' ? st.retentionMs : 0;
              const bufferEnd = typeof st.lastReceivedAt === 'number' ? st.lastReceivedAt : null;
              const computedStart = (retentionMs > 0 && bufferEnd !== null) ? (bufferEnd - retentionMs) : null;
              const bufferStart = (typeof st.firstReceivedAt === 'number')
                ? (computedStart !== null ? Math.max(st.firstReceivedAt, computedStart) : st.firstReceivedAt)
                : computedStart;

              return (
                <button
                  key={st.serverId}
                  className="card"
                  style={{ textAlign: 'left', cursor: 'pointer', border: 'none' }}
                  onClick={() => {
                    setSelectedServerId(st.serverId);

                    setPlayers([]);
                    setSelectedPlayerId(null);
                    setFocusTarget(null);
                    setEvents([]);
                    setRange({ minTsMs: null, maxTsMs: null });
                    setCurrentTsMs(null);
                    lastFetchedTsMsRef.current = null;
                    lastToastReceivedAtRef.current = 0;
                    setToasts([]);
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                    <div style={{ fontWeight: 900 }}>{st.name}</div>
                    <div className="muted" style={{ fontSize: 12 }}>{st.serverId}</div>
                  </div>

                  <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                      <div className="muted" style={{ fontSize: 12 }}>Events</div>
                      <div style={{ fontWeight: 800 }}>{typeof st.storedEvents === 'number' ? `${st.storedEvents} events` : '—'}</div>
                      {typeof st.totalEvents === 'number' && typeof st.storedEvents === 'number' && st.totalEvents !== st.storedEvents ? (
                        <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>All-time: {st.totalEvents} events</div>
                      ) : null}
                    </div>
                    <div>
                      <div className="muted" style={{ fontSize: 12 }}>Retention</div>
                      <div style={{ fontWeight: 800 }}>{retentionMs > 0 ? formatDurationMs(retentionMs) : '∞'}</div>
                    </div>
                    <div style={{ gridColumn: '1 / span 2' }}>
                      <div className="muted" style={{ fontSize: 12 }}>Buffer window</div>
                      <div style={{ fontWeight: 800, fontSize: 13 }}>
                        {formatClockTime(bufferStart)} → {formatClockTime(bufferEnd)}
                      </div>
                    </div>
                    <div style={{ gridColumn: '1 / span 2' }}>
                      <div className="muted" style={{ fontSize: 12 }}>Last ingest</div>
                      <div style={{ fontWeight: 800, fontSize: 13 }}>{formatClockTime(st.lastReceivedAt)}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {(!serverStatuses || serverStatuses.length === 0) && servers.length === 0 ? (
            <div style={{ marginTop: 12 }}>
              No servers yet — add one in the Dev page, then come back here.
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
