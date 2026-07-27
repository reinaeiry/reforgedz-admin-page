import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import { createReadStream } from 'node:fs';

import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { Client as SshClient } from 'ssh2';

import { createRzAuth } from './lib/rz-auth.js';
import * as bmClient from './lib/battlemetrics.js';
import { buildBmRouter } from './routes/bm.js';
import bmWebhookRouter from './routes/bm-webhook.js';
import { buildTicketsRouter } from './routes/tickets.js';
import * as ticketEventRelay from './lib/ticketEventRelay.js';
import { buildBmSseRouter } from './routes/bm-sse.js';
import { postAuditEvent, ctxFromReq } from './lib/bmAudit.js';

import { createCanvas, loadImage } from '@napi-rs/canvas';
import gifenc from 'gifenc';

const { GIFEncoder, quantize, applyPalette } = gifenc;

dotenv.config();

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(compression());

// ---- Security headers ----
// Hand-rolled (no new dependency) so it can't crash on a missing module and
// applies to every response including the built SPA. script-src/style-src keep
// 'unsafe-inline' (Vite's bootstrap + inline styles); the known external hosts
// the SPA actually uses (Google Fonts, Discord/BattleMetrics/medal avatars,
// YouTube/medal embeds) are allowlisted. Everything else is 'self'.
const IS_PROD = process.env.NODE_ENV === 'production';
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://auth.reforgedz.net",
  "media-src 'self' https:",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://medal.tv",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ');
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', CONTENT_SECURITY_POLICY);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  if (IS_PROD) res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// ---- Minimal in-memory rate limiter (dependency-free) ----
// Guards the unauthenticated key/signature endpoints (ingest, BM webhook,
// internal) against volumetric brute-forcing — the constant-time compares stop
// timing attacks but not sheer guessing volume. Fixed-window per IP+path.
function rateLimiter({ windowMs, max }) {
  const hits = new Map();
  setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }, windowMs).unref?.();
  return (req, res, next) => {
    const key = `${req.ip}|${req.baseUrl || req.path}`;
    const now = Date.now();
    let e = hits.get(key);
    if (!e || e.resetAt <= now) { e = { count: 0, resetAt: now + windowMs }; hits.set(key, e); }
    e.count++;
    if (e.count > max) {
      res.setHeader('Retry-After', Math.ceil((e.resetAt - now) / 1000));
      return res.status(429).json({ error: 'rate_limited' });
    }
    next();
  };
}
app.use('/api/replay/ingest', rateLimiter({ windowMs: 60_000, max: 240 }));
app.use('/api/bm/webhook', rateLimiter({ windowMs: 60_000, max: 240 }));
app.use('/api/internal', rateLimiter({ windowMs: 60_000, max: 120 }));

// BM webhook needs the raw request body so HMAC verifies against the exact
// bytes BM signed — mount it BEFORE express.json() consumes the stream.
app.use('/api/bm/webhook', express.raw({ type: '*/*', limit: '256kb' }), bmWebhookRouter);

const JSON_LIMIT = process.env.JSON_LIMIT || '10mb';
app.use(express.json({ limit: JSON_LIMIT }));
app.use(cookieParser());

const PORT = parseInt(process.env.PORT || '3000', 10);

const AUTH_BASE = process.env.AUTH_BASE || 'https://auth.reforgedz.net';
const AUTH_PUBLIC_KEY_PEM = process.env.AUTH_PUBLIC_KEY_PEM || '';
const AUTH_PUBLIC_KEY_PATH = process.env.AUTH_PUBLIC_KEY_PATH || '';
const AUTH_PUBLIC_KEY_URL = process.env.AUTH_PUBLIC_KEY_URL || `${AUTH_BASE.replace(/\/+$/, '')}/api/auth/public-key`;

const rzAuth = createRzAuth({
  publicKeyPem: AUTH_PUBLIC_KEY_PEM || undefined,
  publicKeyPath: AUTH_PUBLIC_KEY_PATH || undefined,
  publicKeyUrl: AUTH_PUBLIC_KEY_PEM ? undefined : AUTH_PUBLIC_KEY_URL,
  authBase: AUTH_BASE,
  loginUrl: `${AUTH_BASE.replace(/\/+$/, '')}/login`,
  cookieName: process.env.COOKIE_NAME || 'rz_session',
  // Opt-in hardening (default off so a stray SSO config can't lock admins out).
  // Enable once the SSO issuer is confirmed to set `exp`: AUTH_REQUIRE_EXP=1,
  // AUTH_REVOCATION_FAIL_CLOSED=1.
  requireExp: process.env.AUTH_REQUIRE_EXP === '1',
  revocationFailClosed: process.env.AUTH_REVOCATION_FAIL_CLOSED === '1'
});
await rzAuth.ready();
app.use(rzAuth.attachSession);

// Comma-separated mapping: "serverId=serverKey,serverId2=serverKey2"
const INGEST_KEYS = process.env.INGEST_KEYS || '';

const DATA_DIR = process.env.DATA_DIR || 'data';

// Rolling retention for events.ndjson.
// - Set RETENTION_MS=0 to disable compaction entirely.
// - Default is 24 hours.
const DEFAULT_RETENTION_MS = 24 * 60 * 60 * 1000;
const RETENTION_MS = (() => {
  const raw = process.env.RETENTION_MS;
  if (raw === undefined || raw === null || String(raw).trim() === '') return DEFAULT_RETENTION_MS;
  const n = Number(raw);
  if (!Number.isFinite(n)) return DEFAULT_RETENTION_MS;
  return Math.max(0, Math.floor(n));
})();

function timingSafeEqualString(a, b) {
  const aBuf = Buffer.from(String(a));
  const bBuf = Buffer.from(String(b));
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function parseIngestKeyMap(value) {
  /** @type {Map<string,string>} */
  const map = new Map();

  const trimmed = String(value || '').trim();
  if (!trimmed) return map;

  for (const part of trimmed.split(',')) {
    const p = part.trim();
    if (!p) continue;

    const eq = p.indexOf('=');
    if (eq <= 0) continue;

    const serverId = p.slice(0, eq).trim();
    const key = p.slice(eq + 1).trim();
    if (!serverId || !key) continue;

    map.set(serverId, key);
  }

  return map;
}

const ingestKeyMap = parseIngestKeyMap(INGEST_KEYS);

const INGEST_KEYS_PATH = path.join(DATA_DIR, 'ingestKeys.json');
const MAPS_DIR = path.join(DATA_DIR, 'maps');
const SETTINGS_PATH = path.join(DATA_DIR, 'settings.json');

/** @type {Map<string,{ key: string, name?: string }>} */
const dynamicIngestKeys = new Map();

/** @type {Map<string, Promise<void>>} */
const ingestLocks = new Map();

function withIngestLock(lockKey, fn) {
  const prev = ingestLocks.get(lockKey) || Promise.resolve();
  const next = prev.then(fn, fn);
  ingestLocks.set(lockKey, next);
  // IMPORTANT: .finally() returns a new promise. If we drop it and `next` rejects,
  // Node will treat that as an unhandled rejection and can crash the process.
  next.finally(() => {
    if (ingestLocks.get(lockKey) === next) ingestLocks.delete(lockKey);
  }).catch(() => {
    // ignore
  });
  return next;
}

async function loadDynamicIngestKeys() {
  const obj = await readJsonOrNull(INGEST_KEYS_PATH);
  dynamicIngestKeys.clear();

  if (!obj || typeof obj !== 'object') return;
  const servers = obj.servers && typeof obj.servers === 'object' && !Array.isArray(obj.servers) ? obj.servers : null;
  if (!servers) return;

  for (const [serverId, v] of Object.entries(servers)) {
    if (!serverId) continue;
    if (!v || typeof v !== 'object') continue;
    const key = typeof v.key === 'string' ? v.key : '';
    if (!key) continue;
    const name = typeof v.name === 'string' ? v.name : undefined;
    dynamicIngestKeys.set(serverId, { key, name });
  }
}

async function readSettings() {
  await ensureDir(DATA_DIR);
  const obj = (await readJsonOrNull(SETTINGS_PATH)) || {};
  return (obj && typeof obj === 'object') ? obj : {};
}

async function writeSettings(next) {
  await ensureDir(DATA_DIR);
  await writeJsonAtomic(SETTINGS_PATH, next);
}

function maskSecretUrl(url) {
  const s = String(url || '').trim();
  if (!s) return '';
  if (s.length <= 16) return '***';
  return `${s.slice(0, 8)}…${s.slice(-6)}`;
}

async function getDiscordWebhookUrl() {
  const st = await readSettings();
  const url = st.discordWebhookUrl;
  return (typeof url === 'string' && url.trim().length > 0) ? url.trim() : '';
}

function coerceVec3(v) {
  if (!v) return null;
  if (typeof v === 'object') {
    if (Array.isArray(v)) {
      if (v.length < 3) return null;
      const x = Number(v[0]);
      const y = Number(v[1]);
      const z = Number(v[2]);
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
      return { x, y, z };
    }
    const x = Number(v.x);
    const y = Number(v.y);
    const z = Number(v.z);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
    return { x, y, z };
  }
  if (typeof v === 'string') {
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

function vSub(a, b) {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function vDot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function vLen(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}

function vAvg(points) {
  if (!points || points.length === 0) return null;
  let sx = 0;
  let sy = 0;
  let sz = 0;
  let n = 0;
  for (const p of points) {
    if (!p) continue;
    sx += p.x;
    sy += p.y;
    sz += p.z;
    n++;
  }
  if (n === 0) return null;
  return { x: sx / n, y: sy / n, z: sz / n };
}

function formatReplayClock(ms) {
  const safe = Number.isFinite(ms) ? Math.max(0, Math.floor(ms)) : 0;
  const totalSeconds = Math.floor(safe / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  return `${m}:${s}`;
}

// ─── PII tracking ─────────────────────────────────────────────────────────
// Persistent per-server player database: { [uid]: { uid, names: [str], ips: [str], firstSeen, lastSeen, sessionCount } }
const piiCaches = new Map(); // safeId -> { data, dirty, writeTimer }

async function loadPii(serverDir) {
  const piiPath = path.join(serverDir, 'pii.json');
  const raw = await readJsonOrNull(piiPath);
  return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
}

async function savePii(serverDir, data) {
  const piiPath = path.join(serverDir, 'pii.json');
  await writeJsonAtomic(piiPath, data);
}

function getPiiCache(safeId, serverDir) {
  if (piiCaches.has(safeId)) return piiCaches.get(safeId);
  const entry = { data: null, dirty: false, writeTimer: null, serverDir };
  piiCaches.set(safeId, entry);
  return entry;
}

async function ensurePiiLoaded(safeId, serverDir) {
  const cache = getPiiCache(safeId, serverDir);
  if (!cache.data) {
    cache.data = await loadPii(serverDir);
  }
  return cache;
}

function schedulePiiWrite(safeId) {
  const cache = piiCaches.get(safeId);
  if (!cache || cache.writeTimer) return;
  cache.writeTimer = setTimeout(async () => {
    cache.writeTimer = null;
    if (cache.dirty && cache.data) {
      cache.dirty = false;
      try { await savePii(cache.serverDir, cache.data); }
      catch (e) { console.error('[pii] write error', e); cache.dirty = true; }
    }
  }, 5000);
}

function recordPiiPlayer(cache, uid, name, ip, tsMs) {
  if (!uid) return;
  const data = cache.data;
  if (!data[uid]) {
    data[uid] = { uid, names: [], ips: [], firstSeen: tsMs, lastSeen: tsMs, sessionCount: 0 };
  }
  const rec = data[uid];
  if (name && !rec.names.includes(name)) rec.names.push(name);
  if (ip && !rec.ips.includes(ip)) rec.ips.push(ip);
  if (tsMs > rec.lastSeen) rec.lastSeen = tsMs;
  cache.dirty = true;
}

async function updatePiiFromPayload(serverDir, payload, receivedAt) {
  if (!payload) return;
  const safeId = path.basename(serverDir);
  const cache = await ensurePiiLoaded(safeId, serverDir);
  const tsMs = receivedAt;

  if (payload.type === 'join' && payload.event) {
    const ev = payload.event;
    const uid = typeof ev.identityId === 'string' ? ev.identityId : '';
    const name = typeof ev.name === 'string' ? ev.name : '';
    const ip = typeof ev.ip === 'string' ? ev.ip : '';
    if (uid) {
      recordPiiPlayer(cache, uid, name, ip, tsMs);
      if (cache.data[uid]) cache.data[uid].sessionCount = (cache.data[uid].sessionCount || 0) + 1;
    }
  }

  if (payload.type === 'snapshot' && Array.isArray(payload.players)) {
    for (const p of payload.players) {
      if (!p) continue;
      const uid = typeof p.identityId === 'string' ? p.identityId : '';
      const name = typeof p.name === 'string' ? p.name : '';
      if (uid) recordPiiPlayer(cache, uid, name, '', tsMs);
    }
  }

  if (cache.dirty) schedulePiiWrite(safeId);
}

function coerceTerrainGrid(t) {
  if (!t || typeof t !== 'object') return null;
  const bbMin = coerceVec3(t.bbMin);
  const bbMax = coerceVec3(t.bbMax);
  const gridW = Number(t.gridW);
  const gridH = Number(t.gridH);
  const heights = Array.isArray(t.heights)
    ? t.heights.filter((x) => typeof x === 'number' && Number.isFinite(x))
    : [];

  if (!bbMin || !bbMax) return null;
  if (!Number.isFinite(gridW) || !Number.isFinite(gridH)) return null;
  if (gridW < 2 || gridH < 2) return null;
  if (heights.length < gridW * gridH) return null;

  return {
    bbMin,
    bbMax,
    gridW: Math.floor(gridW),
    gridH: Math.floor(gridH),
    heights,
  };
}

function sampleTerrainY(t, x, z) {
  if (!t) return null;
  const w = t.gridW;
  const h = t.gridH;
  if (!Array.isArray(t.heights) || t.heights.length < w * h) return null;

  const minX = t.bbMin.x;
  const maxX = t.bbMax.x;
  const minZ = t.bbMin.z;
  const maxZ = t.bbMax.z;
  const dx = maxX - minX;
  const dz = maxZ - minZ;
  if (!Number.isFinite(dx) || !Number.isFinite(dz) || Math.abs(dx) < 1e-6 || Math.abs(dz) < 1e-6) return null;

  const nx = (x - minX) / dx;
  const nz = (z - minZ) / dz;
  if (!Number.isFinite(nx) || !Number.isFinite(nz)) return null;
  if (nx < 0 || nx > 1 || nz < 0 || nz > 1) return null;

  const gx = nx * (w - 1);
  const gz = nz * (h - 1);
  const x0 = Math.floor(gx);
  const z0 = Math.floor(gz);
  const x1 = Math.min(w - 1, x0 + 1);
  const z1 = Math.min(h - 1, z0 + 1);
  const tx = gx - x0;
  const tz = gz - z0;

  const idx00 = z0 * w + x0;
  const idx10 = z0 * w + x1;
  const idx01 = z1 * w + x0;
  const idx11 = z1 * w + x1;
  const y00 = t.heights[idx00];
  const y10 = t.heights[idx10];
  const y01 = t.heights[idx01];
  const y11 = t.heights[idx11];
  if (![y00, y10, y01, y11].every((n) => typeof n === 'number' && Number.isFinite(n))) return null;

  const y0 = y00 * (1 - tx) + y10 * tx;
  const y1 = y01 * (1 - tx) + y11 * tx;
  return y0 * (1 - tz) + y1 * tz;
}

// ─── 2D map backgrounds (tacops imagery) ────────────────────────────────────
// Mirrors src/util/maps.ts: pick the map a server runs from its world file (or
// the captured terrain size) and georeference the stitched background image.
const TOPDOWN_MAP_DEFS = {
  everon: { id: 'everon', image: 'everon.jpg', worldSize: 12802 },
  chernarus: { id: 'chernarus', image: 'chernarus.jpg', worldSize: 15362 },
};

function resolveTopDownMapId(worldFile, worldSize) {
  const s = (worldFile || '').toLowerCase();
  if (s.includes('chern')) return 'chernarus';
  if (s.includes('everon') || s.includes('eden')) return 'everon';
  if (typeof worldSize === 'number' && Number.isFinite(worldSize) && worldSize > 0) {
    let best = null;
    let bestDelta = Infinity;
    for (const def of Object.values(TOPDOWN_MAP_DEFS)) {
      const d = Math.abs(def.worldSize - worldSize);
      if (d < bestDelta) { bestDelta = d; best = def.id; }
    }
    if (bestDelta <= 500) return best;
  }
  return null;
}

const mapImageCache = new Map(); // id -> { img } | { img: null }

async function loadTopDownMapImage(id) {
  if (!id) return null;
  if (mapImageCache.has(id)) return mapImageCache.get(id).img;
  const def = TOPDOWN_MAP_DEFS[id];
  if (!def) { mapImageCache.set(id, { img: null }); return null; }
  // Prefer the built asset (dist/maps), fall back to the source (public/maps).
  const candidates = [path.resolve('dist', 'maps', def.image), path.resolve('public', 'maps', def.image)];
  for (const file of candidates) {
    try {
      const img = await loadImage(file);
      mapImageCache.set(id, { img });
      return img;
    } catch {
      // try next
    }
  }
  mapImageCache.set(id, { img: null });
  return null;
}

function drawReplayTopDownFrame(ctx, opts) {
  const {
    w, h, title, serverId, relMs, absTsMs, wallClockAbsMs, requester,
    view, mapImage, world, tileLayer, deathXs, trails, playerNow, focusId,
  } = opts;

  // World -> screen (north up: +Z maps to -screenY).
  const sx = (x) => w / 2 + (x - view.cx) * view.ppm;
  const sy = (z) => h / 2 - (z - view.cz) * view.ppm;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0b0f19';
  ctx.fillRect(0, 0, w, h);

  // Background map image, georeferenced to its world bounds (north at top).
  if (mapImage && world) {
    const x0 = sx(world.originX);
    const yTop = sy(world.originZ + world.size);
    const wp = world.size * view.ppm;
    try {
      ctx.drawImage(mapImage, x0, yTop, wp, wp);
    } catch {
      // ignore
    }
  }

  // Sharp native tile overlay (much crisper than the flattened base when zoomed in).
  if (tileLayer && tileLayer.tileMap && tileLayer.worldSize > 0) {
    const size = tileLayer.worldSize;
    const drawLevel = (z) => {
      const n = 1 << (9 - z);
      const tileWS = size / n;
      const lX = view.cx - (w / 2) / view.ppm;
      const rX = view.cx + (w / 2) / view.ppm;
      const bZ = view.cz - (h / 2) / view.ppm;
      const tZ = view.cz + (h / 2) / view.ppm;
      const x0 = Math.max(0, Math.floor(lX / tileWS));
      const x1 = Math.min(n - 1, Math.floor(rX / tileWS));
      const y0 = Math.max(0, Math.floor(bZ / tileWS));
      const y1 = Math.min(n - 1, Math.floor(tZ / tileWS));
      for (let x = x0; x <= x1; x++) {
        for (let y = y0; y <= y1; y++) {
          const img = tileLayer.tileMap.get(`${z}/${x}/${y}`);
          if (!img) continue;
          const sxL = sx(x * tileWS);
          const syT = sy((y + 1) * tileWS); // north edge -> top
          const wpx = tileWS * view.ppm;
          try { ctx.drawImage(img, sxL, syT, wpx + 1, wpx + 1); } catch { /* ignore */ }
        }
      }
    };
    drawLevel(6);
    const dz = pickTileZoomServer(view.ppm, size);
    if (dz < 6) drawLevel(dz);
  }

  // Faint world-aligned grid for scale (every 250 m).
  const gridStep = 250;
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  const leftX = view.cx - (w / 2) / view.ppm;
  const rightX = view.cx + (w / 2) / view.ppm;
  const botZ = view.cz - (h / 2) / view.ppm;
  const topZ = view.cz + (h / 2) / view.ppm;
  for (let x = Math.ceil(leftX / gridStep) * gridStep; x <= rightX; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(sx(x), 0);
    ctx.lineTo(sx(x), h);
    ctx.stroke();
  }
  for (let z = Math.ceil(botZ / gridStep) * gridStep; z <= topZ; z += gridStep) {
    ctx.beginPath();
    ctx.moveTo(0, sy(z));
    ctx.lineTo(w, sy(z));
    ctx.stroke();
  }

  // Trails.
  for (const t of trails) {
    const { id, points, color, alpha } = t;
    if (!points || points.length < 2) continue;
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = (id === focusId) ? 2.5 : 2;
    ctx.beginPath();
    ctx.moveTo(sx(points[0].x), sy(points[0].z));
    for (let i = 1; i < points.length; i++) ctx.lineTo(sx(points[i].x), sy(points[i].z));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Death markers (red X).
  if (Array.isArray(deathXs) && deathXs.length > 0) {
    ctx.strokeStyle = 'rgba(255,74,74,0.9)';
    ctx.lineWidth = 2;
    const s = 6;
    for (const d of deathXs) {
      if (!d || !d.pos) continue;
      const x = sx(d.pos.x);
      const y = sy(d.pos.z);
      ctx.beginPath();
      ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s);
      ctx.moveTo(x - s, y + s); ctx.lineTo(x + s, y - s);
      ctx.stroke();
    }
  }

  // Players.
  for (const p of playerNow) {
    if (!p || !p.pos) continue;
    const isFocus = p.id === focusId;
    const x = sx(p.pos.x);
    const y = sy(p.pos.z);
    const r = isFocus ? 5 : 4;
    ctx.fillStyle = isFocus ? '#f9bc59' : 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.45)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Name labels.
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  for (const p of playerNow) {
    if (!p || !p.pos) continue;
    const name = typeof p.name === 'string' ? p.name.trim() : '';
    if (!name) continue;
    const label = name.length > 18 ? `${name.slice(0, 17)}…` : name;
    const isFocus = p.id === focusId;
    const x = sx(p.pos.x) + (isFocus ? 5 : 4) + 6;
    const y = sy(p.pos.z);
    ctx.font = isFocus ? 'bold 12px sans-serif' : '11px sans-serif';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0,0,0,0.82)';
    ctx.strokeText(label, x, y);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.fillText(label, x, y);
  }

  // Overlays (header/footer match the previous renderer).
  const relS = (relMs / 1000).toFixed(1);
  const absText = (typeof wallClockAbsMs === 'number' && Number.isFinite(wallClockAbsMs) && wallClockAbsMs > 0)
    ? new Date(wallClockAbsMs).toISOString().replace('T', ' ').replace('Z', 'Z')
    : `replay ${formatReplayClock(absTsMs)}`;

  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillRect(0, 0, w, 54);
  ctx.fillRect(0, h - 34, w, 34);

  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(serverId, 10, 18);
  ctx.font = '12px sans-serif';
  ctx.fillText(title, 10, 36);

  ctx.textAlign = 'right';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText(`t${relMs >= 0 ? '+' : ''}${relS}s`, w - 10, 18);
  ctx.font = '12px sans-serif';
  ctx.fillText(absText, w - 10, 36);

  ctx.textAlign = 'left';
  ctx.font = '11px sans-serif';
  const who = (typeof requester === 'string' && requester.trim().length > 0) ? requester.trim() : 'unknown';
  ctx.fillText(`requested by: ${who}`, 10, h - 14);
}

// Pick the native tile zoom whose resolution matches a top-down ppm (px/metre).
function pickTileZoomServer(ppm, worldSize) {
  const target = ppm * worldSize / 256; // = 2^(MAX-z)
  const z = Math.round(TACOPS_MAX_NATIVE_ZOOM - Math.log2(Math.max(1e-6, target)));
  return Math.max(2, Math.min(6, z));
}

// Tile (x,y) range visible in a GIF frame view, at native zoom z.
function gifTileRange(view, w, h, worldSize, z) {
  const n = 1 << (TACOPS_MAX_NATIVE_ZOOM - z);
  const tileWS = worldSize / n;
  const leftX = view.cx - (w / 2) / view.ppm;
  const rightX = view.cx + (w / 2) / view.ppm;
  const botZ = view.cz - (h / 2) / view.ppm;
  const topZ = view.cz + (h / 2) / view.ppm;
  const x0 = Math.max(0, Math.floor(leftX / tileWS));
  const x1 = Math.min(n - 1, Math.floor(rightX / tileWS));
  const y0 = Math.max(0, Math.floor(botZ / tileWS));   // y increases north
  const y1 = Math.min(n - 1, Math.floor(topZ / tileWS));
  return { n, tileWS, x0, x1, y0, y1 };
}

// Decode a cached tile (fetching+caching from tacops on miss) to a napi Image.
async function getMapTileNapi(map, z, x, y) {
  const cachePath = path.join(MAPTILES_DIR, map, String(z), String(x), `${y}.webp`);
  try {
    return await loadImage(cachePath);
  } catch { /* miss */ }
  try {
    const buf = await fetchTacopsTile(map, z, x, y);
    await ensureDir(path.dirname(cachePath));
    await fs.writeFile(cachePath, buf);
    return await loadImage(buf);
  } catch {
    return null;
  }
}

async function buildReplayEventGif({ safeId, serverId, tsMs, title, pos, focusPlayerId, playerIds, wallClockAtMs, requester }) {
  const fromTsMs = tsMs - 5_000;
  const toTsMs = tsMs + 5_000;

  // Best-effort terrain grid for the server's current map.
  let terrain = null;
  let worldFile = '';
  try {
    const { mapId, idx } = await getOrInferServerMapId(safeId);
    if (idx && typeof idx.mapWorldFile === 'string') worldFile = idx.mapWorldFile;
    if (mapId) {
      const terrainPath = path.join(MAPS_DIR, `${mapId}.terrain.json`);
      terrain = coerceTerrainGrid(await readJsonOrNull(terrainPath));
    }
  } catch {
    // ignore
  }

  // Resolve the tacops background map (image base + native tile streaming).
  let mapImage = null;
  let mapWorld = null;
  let tacopsMapId = null;   // for streaming sharp native tiles
  let tilesWorldSize = null;
  try {
    let worldSize = null;
    if (terrain && terrain.bbMin && terrain.bbMax) {
      const sizeX = terrain.bbMax.x - terrain.bbMin.x;
      const sizeZ = terrain.bbMax.z - terrain.bbMin.z;
      if (Number.isFinite(sizeX) && Number.isFinite(sizeZ) && sizeX > 0 && sizeZ > 0) {
        worldSize = Math.max(sizeX, sizeZ);
      }
    }
    const topDownMapId = resolveTopDownMapId(worldFile, worldSize);
    const def = topDownMapId ? TOPDOWN_MAP_DEFS[topDownMapId] : null;
    if (def) {
      mapImage = await loadTopDownMapImage(topDownMapId);
      // The base image + tiles both cover the full tacops map at origin (0,0).
      mapWorld = { originX: 0, originZ: 0, size: def.worldSize };
      tacopsMapId = def.id;
      tilesWorldSize = def.worldSize;
    }
  } catch {
    // ignore
  }

  const eventsPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');
  const windowItems = await readNdjsonWindow(eventsPath, {
    sinceTsMs: fromTsMs,
    untilTsMs: toTsMs,
    limit: 20000,
    tail: false,
  });

  const snapshots = [];
  for (const rec of windowItems) {
    const p = rec && rec.payload;
    if (!p || typeof p !== 'object') continue;
    if (p.type !== 'snapshot') continue;
    if (typeof p.tsMs !== 'number') continue;
    const players = Array.isArray(p.players) ? p.players : [];
    snapshots.push({ tsMs: p.tsMs, players });
  }
  snapshots.sort((a, b) => a.tsMs - b.tsMs);

  // Death events for timed "X" markers (5s after death).
  const deathEvents = [];
  for (const rec of windowItems) {
    const p = rec && rec.payload;
    if (!p || typeof p !== 'object') continue;
    if (p.type !== 'kill' && p.type !== 'death') continue;
    if (typeof p.tsMs !== 'number') continue;
    const ev = (p.event && typeof p.event === 'object') ? p.event : null;
    const vp = coerceVec3(ev ? ev.victimPos : null) || coerceVec3(p.victimPos);
    if (!vp) continue;
    deathEvents.push({ tsMs: p.tsMs, pos: vp });
  }

  const focusId = (typeof focusPlayerId === 'number' && Number.isFinite(focusPlayerId) && focusPlayerId >= 0)
    ? Math.floor(focusPlayerId)
    : null;

  const trackedIds = [];
  if (Array.isArray(playerIds)) {
    for (const v of playerIds) {
      if (typeof v !== 'number' || !Number.isFinite(v) || v < 0) continue;
      const id = Math.floor(v);
      if (trackedIds.includes(id)) continue;
      trackedIds.push(id);
      if (trackedIds.length >= 2) break;
    }
  }
  if (trackedIds.length === 0 && focusId !== null) trackedIds.push(focusId);

  const eventPoint = coerceVec3(pos);
  const lastById = new Map();
  for (const id of trackedIds) lastById.set(id, eventPoint);

  /** @type {Map<number, string>} */
  const lastNameById = new Map();

  // Build per-player time series from snapshots (snapshots can be partial).
  /** @type {Map<number, Array<{tsMs:number, pos:{x:number,y:number,z:number}, name:string}>>} */
  const seriesById = new Map();
  for (const s of snapshots) {
    const t = s.tsMs;
    for (const pl of s.players) {
      if (!pl || typeof pl !== 'object') continue;
      const id = pl.playerId;
      if (typeof id !== 'number' || !Number.isFinite(id) || id < 0) continue;
      const pos = coerceVec3(pl.pos);
      if (!pos) continue;
      const name = (typeof pl.name === 'string' && pl.name.trim().length > 0) ? pl.name.trim() : '';
      let arr = seriesById.get(id);
      if (!arr) {
        arr = [];
        seriesById.set(id, arr);
      }
      arr.push({ tsMs: t, pos, name });
    }
  }
  for (const arr of seriesById.values()) arr.sort((a, b) => a.tsMs - b.tsMs);

  function findAtOrBefore(series, t) {
    if (!series || series.length === 0) return null;
    let lo = 0;
    let hi = series.length - 1;
    let idx = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const v = series[mid].tsMs;
      if (v <= t) {
        idx = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return idx >= 0 ? series[idx] : null;
  }

  const fps = 2;
  const stepMs = 1000 / fps;
  const frameCount = Math.floor((toTsMs - fromTsMs) / stepMs) + 1;

  /** @type {Map<number, Array<{x:number,y:number,z:number}>>} */
  const trailsById = new Map();
  for (const id of trackedIds) trailsById.set(id, []);

  const w = 600;
  const h = 338;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const gif = GIFEncoder();
  let palette = null;
  const frames = [];

  for (let fi = 0; fi < frameCount; fi++) {
    const absTsMs = fromTsMs + fi * stepMs;
    const relMs = absTsMs - tsMs;
    const t = absTsMs;

    const playerNow = [];
    for (const id of trackedIds) {
      let pt = null;
      let name = lastNameById.get(id) || '';
      const series = seriesById.get(id);
      const rec = findAtOrBefore(series, t);
      if (rec && rec.pos) {
        pt = rec.pos;
        if (rec.name) {
          name = rec.name;
          lastNameById.set(id, name);
        }
      }
      if (!pt) pt = lastById.get(id) || null;
      if (!pt) pt = eventPoint;
      if (pt) {
        lastById.set(id, pt);
        playerNow.push({ id, pos: pt, name });
        const tr = trailsById.get(id);
        if (tr) tr.push(pt);
      }
    }

    const pointsNow = playerNow.map((p) => p.pos).filter(Boolean);
    let target = vAvg(pointsNow) || eventPoint || { x: 0, y: 0, z: 0 };

    // Follow the focus player when available.
    // For kills, the UI sets focusPlayerId to the victim.
    if (focusId !== null) {
      const fp = playerNow.find((p) => p && p.id === focusId);
      if (fp && fp.pos) target = fp.pos;
    }

    // Death X markers visible at this frame (for 3s after death).
    const deathXs = [];
    for (const d of deathEvents) {
      if (t < d.tsMs) continue;
      if (t > d.tsMs + 3_000) continue;
      deathXs.push(d);
    }

    // Top-down view: centre on the focus/target and zoom to fit tracked players,
    // with a baseline zoom so a lone player isn't over-magnified, and a floor so
    // far-apart players still fit.
    const fitPoints = pointsNow.length > 0 ? pointsNow : (eventPoint ? [eventPoint] : []);
    const safePad = 18;
    const halfW = (w - safePad * 2) / 2;
    const halfH = Math.min(h / 2 - (54 + safePad), (h - 34 - safePad) - h / 2);
    const marginM = 14;
    let maxDx = 0;
    let maxDz = 0;
    for (const p of fitPoints) {
      maxDx = Math.max(maxDx, Math.abs(p.x - target.x));
      maxDz = Math.max(maxDz, Math.abs(p.z - target.z));
    }
    const ppmBaseline = halfH / 90;  // ~180 m tall baseline window
    const ppmFloor = halfH / 800;    // never wider than ~1600 m
    let ppm = ppmBaseline;
    if (maxDx > 0) ppm = Math.min(ppm, halfW / (maxDx + marginM));
    if (maxDz > 0) ppm = Math.min(ppm, halfH / (maxDz + marginM));
    ppm = Math.max(ppmFloor, ppm);
    const view = { cx: target.x, cz: target.z, ppm };

    const trails = [];
    for (const id of trackedIds) {
      const pts = trailsById.get(id) || [];
      trails.push({
        id,
        points: pts.slice(),   // snapshot — trails keep growing across frames
        color: id === focusId ? '#f9bc59' : 'rgba(255,255,255,0.9)',
        alpha: id === focusId ? 0.95 : 0.55,
      });
    }

    const absWallClockMs = (typeof wallClockAtMs === 'number' && Number.isFinite(wallClockAtMs) && wallClockAtMs > 0)
      ? (wallClockAtMs + relMs)
      : null;

    frames.push({ absTsMs, relMs, view, deathXs, trails, playerNow, absWallClockMs });
  }

  // Stream the sharp native tiles needed across all frames (cached after first use).
  const tileMap = new Map();
  if (tacopsMapId && tilesWorldSize) {
    const needed = new Set();
    const collect = (view, z) => {
      const r = gifTileRange(view, w, h, tilesWorldSize, z);
      for (let x = r.x0; x <= r.x1; x++) for (let y = r.y0; y <= r.y1; y++) needed.add(`${z}/${x}/${y}`);
    };
    for (const f of frames) {
      collect(f.view, 6);
      const z = pickTileZoomServer(f.view.ppm, tilesWorldSize);
      if (z < 6) collect(f.view, z);
    }
    await Promise.all([...needed].map(async (key) => {
      const [z, x, y] = key.split('/').map(Number);
      const tImg = await getMapTileNapi(tacopsMapId, z, x, y);
      if (tImg) tileMap.set(key, tImg);
    }));
  }
  const tileLayer = (tacopsMapId && tilesWorldSize) ? { tileMap, worldSize: tilesWorldSize } : null;

  for (let fi = 0; fi < frames.length; fi++) {
    const f = frames[fi];
    drawReplayTopDownFrame(ctx, {
      w,
      h,
      title,
      serverId,
      relMs: f.relMs,
      absTsMs: f.absTsMs,
      wallClockAbsMs: f.absWallClockMs,
      requester,
      view: f.view,
      mapImage,
      world: mapWorld,
      tileLayer,
      deathXs: f.deathXs,
      trails: f.trails,
      playerNow: f.playerNow,
      focusId,
    });

    const img = ctx.getImageData(0, 0, w, h);
    const rgba = img.data;
    if (!palette) palette = quantize(rgba, 256);
    const index = applyPalette(rgba, palette);

    gif.writeFrame(index, w, h, fi === 0 ? { palette, delay: 500, repeat: 0 } : { delay: 500 });
  }

  gif.finish();
  return Buffer.from(gif.bytes());
}

function getExpectedIngestKey(serverId, safeId) {
  // Priority: dynamic config -> env map.
  const d1 = dynamicIngestKeys.get(serverId);
  if (d1 && d1.key) return d1.key;
  const d2 = dynamicIngestKeys.get(safeId);
  if (d2 && d2.key) return d2.key;

  return ingestKeyMap.get(serverId) || ingestKeyMap.get(safeId) || null;
}

// requireAuth / requireTool — backed by the SSO cookie verified in attachSession.
// req.user keeps the legacy shape ({ sub, tools }) so the rest of the file is untouched.
function requireAuth(req, res, next) {
  if (!req.rzUser) {
    res.status(401).send('Unauthorized');
    return;
  }
  const adminPerms = (req.rzUser.perms && req.rzUser.perms.admin) || {};
  req.user = { sub: req.rzUser.username, tools: adminPerms };
  next();
}

function requireTool(tool) {
  return (req, res, next) => {
    if (!req.rzUser) {
      res.status(401).send('Unauthorized');
      return;
    }
    const adminPerms = (req.rzUser.perms && req.rzUser.perms.admin) || {};
    if (adminPerms[tool] === true) return next();
    res.status(403).send('Forbidden');
  };
}

// Per-server replay scoping. perms.admin.replayServers is an allowlist of
// server ids (lowercase). Empty/absent = all servers (no restriction).
function allowedReplayServers(req) {
  const adminPerms = (req.rzUser && req.rzUser.perms && req.rzUser.perms.admin) || {};
  const list = adminPerms.replayServers;
  if (!Array.isArray(list) || list.length === 0) return null;
  const set = new Set();
  for (const s of list) {
    if (typeof s === 'string' && s.trim()) set.add(s.trim().toLowerCase());
  }
  return set.size > 0 ? set : null;
}

function isServerAllowed(req, serverId) {
  const allowed = allowedReplayServers(req);
  if (!allowed) return true;
  return allowed.has(sanitizeServerId(serverId).toLowerCase());
}

// Gate a server-scoped replay route by the caller's per-server allowlist. Reads
// the serverId from the query (GET) or body (POST); passes through when absent
// (non-server-scoped routes such as the catalogs or aggregate status filter
// their own output instead).
function requireServerAccess(req, res, next) {
  const serverId = (req.query && typeof req.query.serverId === 'string' && req.query.serverId)
    || (req.body && typeof req.body === 'object' && typeof req.body.serverId === 'string' && req.body.serverId)
    || '';
  if (!serverId) return next();
  if (isServerAllowed(req, serverId)) return next();
  return res.status(403).send('Forbidden (server not permitted)');
}

// Fire-and-forget audit entry for a replay admin action. Posts to the central
// auth audit log (category 'replay'); the action string is the subcategory.
function auditReplay(req, action, detail) {
  postAuditEvent({
    actorUsername: (req.rzUser && req.rzUser.username) || (req.user && req.user.sub) || null,
    action,
    detail: detail || null,
    ctx: ctxFromReq(req),
  });
}

// requireBmPerm — closure factory for the Moderation dashboard router.
// Chained behind attachSession; returns 401 if no session, 403 if missing perm.
// Reads from perms.moderation, falling back to perms.battlemetrics for any
// JWTs still on the legacy shape.
function requireBmPerm(flag) {
  // Accept a single flag or an array of flags (any-of grants access).
  const flags = Array.isArray(flag) ? flag : [flag];
  return (req, res, next) => {
    if (!req.rzUser) return res.status(401).json({ error: 'unauthorized' });
    const mod = (req.rzUser.perms && (req.rzUser.perms.moderation || req.rzUser.perms.battlemetrics)) || {};
    if (flags.some((f) => mod[f] === true)) return next();
    return res.status(403).json({ error: 'forbidden', required: `moderation.${flags.join('|')}` });
  };
}

function asyncRoute(handler) {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeServerId(serverId) {
  // Keep it filesystem-safe.
  return String(serverId || '').replace(/[^a-zA-Z0-9._-]/g, '_');
}

async function readJsonOrNull(filePath) {
  try {
    const text = await fs.readFile(filePath, 'utf8');
    const clean = text && text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text;
    return JSON.parse(clean);
  } catch {
    return null;
  }
}

async function writeJsonAtomic(filePath, obj) {
  const dir = path.dirname(filePath);
  await ensureDir(dir);

  const tmp = `${filePath}.tmp-${crypto.randomBytes(6).toString('hex')}`;

  const jsonText = JSON.stringify(obj, null, 2);
  await fs.writeFile(tmp, jsonText, 'utf8');

  // Windows can throw EPERM if the destination file is momentarily locked (AV, editor, concurrent read).
  // Retry a few times, then fall back to non-atomic copy+unlink.
  const maxAttempts = 8;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await fs.rename(tmp, filePath);
      return;
    } catch (err) {
      const code = err && typeof err === 'object' ? err.code : null;

      if ((code === 'EPERM' || code === 'EACCES') && attempt < maxAttempts) {
        await sleep(25 * attempt);
        continue;
      }

      try {
        await fs.copyFile(tmp, filePath);
        await fs.unlink(tmp);
        return;
      } catch {
        // Last resort: write directly (non-atomic) and try to clean up tmp.
        await fs.writeFile(filePath, jsonText, 'utf8');
        try {
          await fs.unlink(tmp);
        } catch {
          // ignore
        }
        return;
      }
    }
  }
}

async function getOrInferServerMapId(safeId) {
  const idxPath = path.join(DATA_DIR, 'servers', safeId, 'index.json');
  const idx = await readJsonOrNull(idxPath);
  const existingMapId = idx && typeof idx.mapId === 'string' ? idx.mapId : '';
  if (existingMapId) return { mapId: existingMapId, idx };

  const existingWorldFile = idx && typeof idx.mapWorldFile === 'string' ? idx.mapWorldFile : '';
  if (existingWorldFile) {
    const mapId = crypto.createHash('sha256').update(existingWorldFile, 'utf8').digest('hex').slice(0, 16);
    const nextIdx = { ...(idx && typeof idx === 'object' ? idx : {}), id: safeId, mapId, mapWorldFile: existingWorldFile };
    await writeJsonAtomic(idxPath, nextIdx);
    return { mapId, idx: nextIdx };
  }

  // Fallback: pick the most recently updated cached map artifact.
  // This is primarily to recover from a manual/dev clear that wiped index.json.
  try {
    await ensureDir(MAPS_DIR);
    const entries = await fs.readdir(MAPS_DIR);
    const candidates = entries
      .filter((n) => n.endsWith('.descriptors.json') || n.endsWith('.towns.json') || n.endsWith('.terrain.json'))
      .map((name) => ({ name, full: path.join(MAPS_DIR, name) }));

    let best = null;
    for (const c of candidates) {
      try {
        const st = await fs.stat(c.full);
        const mtimeMs = st && typeof st.mtimeMs === 'number' ? st.mtimeMs : 0;
        if (!best || mtimeMs > best.mtimeMs) best = { ...c, mtimeMs };
      } catch {
        // ignore
      }
    }

    if (best) {
      const mapId = String(best.name).split('.')[0];
      const cached = await readJsonOrNull(best.full);
      const worldFile = cached && typeof cached.worldFile === 'string' ? cached.worldFile : '';
      const nextIdx = {
        ...(idx && typeof idx === 'object' ? idx : {}),
        id: safeId,
        mapId,
        ...(worldFile ? { mapWorldFile: worldFile } : {}),
      };
      await writeJsonAtomic(idxPath, nextIdx);
      return { mapId, idx: nextIdx };
    }
  } catch {
    // ignore
  }

  return { mapId: '', idx: idx || null };
}

async function readNdjsonWindow(filePath, opts) {
  const sinceTsMs = (opts && typeof opts.sinceTsMs === 'number') ? opts.sinceTsMs : null;
  const untilTsMs = (opts && typeof opts.untilTsMs === 'number') ? opts.untilTsMs : null;
  const limit = (opts && typeof opts.limit === 'number') ? opts.limit : 5000;
  const tail = !!(opts && opts.tail);
  const types = (opts && opts.types instanceof Set && opts.types.size > 0) ? opts.types : null;
  // Downsampling: skip snapshot records closer than sampleIntervalMs to the last emitted snapshot.
  const sampleIntervalMs = (opts && typeof opts.sampleIntervalMs === 'number' && opts.sampleIntervalMs > 0) ? opts.sampleIntervalMs : 0;
  let lastSnapshotTsMs = -Infinity;
  // Slim mode: project heavy snapshot records down to just what the map/playback
  // needs (positions), dropping per-player identity/orientation and per-snapshot
  // session metadata. Snapshots dominate the payload (tens of KB each), so this
  // cuts the historical transfer + client parse cost dramatically.
  const slim = !!(opts && opts.slim);
  // In slim/history mode these record types are dropped entirely: they are large
  // and the client either loads them from their own endpoints (terrain/catalogs),
  // doesn't use them for playback (serverHealth), or only needs them in the recent
  // full-res window (vehicleIndex — there can be hundreds of vehicles per record, so
  // carrying 24h of them would dwarf everything else; the recent window still has
  // them so vehicle markers stay time-aware for live/recent playback).
  const SLIM_DROP_TYPES = new Set(['vehicleIndex', 'serverHealth', 'itemCatalog', 'spawnCatalog']);

  // Returns the slimmed record, or null to drop it. Only snapshots are projected;
  // sparse events (join/death/kill/disconnect/...) are kept as-is for the timeline.
  function slimRecord(obj) {
    const p = obj && obj.payload;
    if (!p) return null;
    const type = typeof p.type === 'string' ? p.type : '';
    if (SLIM_DROP_TYPES.has(type)) return null;
    if (type !== 'snapshot') return obj;
    const players = Array.isArray(p.players) ? p.players : [];
    const slimPlayers = new Array(players.length);
    for (let i = 0; i < players.length; i++) {
      const pl = players[i] || {};
      slimPlayers[i] = {
        playerId: pl.playerId,
        name: pl.name,
        entityId: pl.entityId,
        pos: pl.pos,
        aimDir: pl.aimDir,
        inVehicle: pl.inVehicle,
      };
    }
    return { receivedAt: obj.receivedAt, payload: { type: 'snapshot', tsMs: p.tsMs, players: slimPlayers } };
  }

  const out = [];

  let stat;
  try {
    stat = await fs.stat(filePath);
  } catch {
    return out;
  }

  if (!stat || stat.size <= 0) return out;

  const stream = createReadStream(filePath, { encoding: 'utf8' });
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  async function cleanup() {
    try {
      rl.close();
    } catch {
      // ignore
    }
    try {
      stream.destroy();
    } catch {
      // ignore
    }
  }

  // Cheap pre-skip for downsampling: when a snapshot line would be dropped by
  // the sample interval, decide that from the raw text and skip JSON.parse
  // entirely. Snapshots dominate the file (~1 per 100ms) and we keep ~1 per
  // interval, so this avoids parsing the vast majority of lines. Only snapshot
  // lines are short-circuited; sparse events (kills/joins/...) always fall
  // through to the full parse below, so nothing is dropped.
  function downsampleSkip(line) {
    if (sampleIntervalMs <= 0) return false;
    if (line.indexOf('"type":"snapshot"') === -1) return false;
    const ti = line.indexOf('"tsMs":');
    if (ti === -1) return false;
    const ts = parseInt(line.slice(ti + 7), 10);
    return Number.isFinite(ts) && (ts - lastSnapshotTsMs) < sampleIntervalMs;
  }

  if (!tail) {
    try {
      for await (const line of rl) {
        if (!line) continue;
        if (downsampleSkip(line)) continue;

        let obj;
        try {
          obj = JSON.parse(line);
        } catch {
          continue;
        }

        const payload = obj && obj.payload;
        const tsMs = payload && typeof payload.tsMs === 'number' ? payload.tsMs : null;
        if (tsMs === null) continue;

        if (sinceTsMs !== null && tsMs < sinceTsMs) continue;
        if (untilTsMs !== null && tsMs > untilTsMs) continue;
        if (types && !types.has(typeof payload.type === 'string' ? payload.type : '')) continue;
        if (sampleIntervalMs > 0 && typeof payload.type === 'string' && payload.type === 'snapshot') {
          if (tsMs - lastSnapshotTsMs < sampleIntervalMs) continue;
          lastSnapshotTsMs = tsMs;
        }

        if (slim) {
          const s = slimRecord(obj);
          if (!s) continue;
          out.push(s);
        } else {
          out.push(obj);
        }
        if (out.length >= limit) break;
      }

      return out;
    } finally {
      await cleanup();
    }
  }

  // Tail mode: return the last `limit` matching records in the window.
  const ring = new Array(limit);
  let count = 0;
  let start = 0;

  try {
    for await (const line of rl) {
      if (!line) continue;
      if (downsampleSkip(line)) continue;

      let obj;
      try {
        obj = JSON.parse(line);
      } catch {
        continue;
      }

      const payload = obj && obj.payload;
      const tsMs = payload && typeof payload.tsMs === 'number' ? payload.tsMs : null;
      if (tsMs === null) continue;

      if (sinceTsMs !== null && tsMs < sinceTsMs) continue;
      if (untilTsMs !== null && tsMs > untilTsMs) continue;
      if (types && !types.has(typeof payload.type === 'string' ? payload.type : '')) continue;
      if (sampleIntervalMs > 0 && typeof payload.type === 'string' && payload.type === 'snapshot') {
        if (tsMs - lastSnapshotTsMs < sampleIntervalMs) continue;
        lastSnapshotTsMs = tsMs;
      }

      let rec = obj;
      if (slim) {
        rec = slimRecord(obj);
        if (!rec) continue;
      }
      if (count < limit) {
        ring[count] = rec;
        count++;
      } else {
        ring[start] = rec;
        start = (start + 1) % limit;
      }
    }
  } finally {
    await cleanup();
  }

  if (count <= 0) return [];
  if (count < limit) return ring.slice(0, count);
  return ring.slice(start).concat(ring.slice(0, start));
}

async function readFirstNdjsonObject(filePath) {
  let stat;
  try {
    stat = await fs.stat(filePath);
  } catch {
    return null;
  }
  if (!stat || stat.size <= 0) return null;

  let handle;
  try {
    handle = await fs.open(filePath, 'r');
    const maxBytes = Math.min(stat.size, 1024 * 1024);
    const buf = Buffer.allocUnsafe(Math.min(maxBytes, 64 * 1024));
    let offset = 0;
    let text = '';

    while (offset < maxBytes) {
      const toRead = Math.min(buf.length, maxBytes - offset);
      const { bytesRead } = await handle.read(buf, 0, toRead, offset);
      if (!bytesRead) break;
      text += buf.subarray(0, bytesRead).toString('utf8');
      const nl = text.indexOf('\n');
      if (nl !== -1) {
        const line = text.slice(0, nl).trim();
        if (!line) return null;
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      }
      offset += bytesRead;
    }

    // File had no newline within maxBytes.
    const line = text.trim();
    if (!line) return null;
    try {
      return JSON.parse(line);
    } catch {
      return null;
    }
  } catch {
    return null;
  } finally {
    try {
      if (handle) await handle.close();
    } catch {
      // ignore
    }
  }
}

async function ensureIndexHasFirstReceivedAt(serverDir, idxPath, idx) {
  const existing = idx && typeof idx.firstReceivedAt === 'number' ? idx.firstReceivedAt : null;
  if (existing !== null) return { idx, firstReceivedAt: existing };

  // Prefer inferring from session metadata if available (fast and reliable).
  const sessions = idx && idx.sessions && typeof idx.sessions === 'object' ? idx.sessions : null;
  if (sessions) {
    let minSessionReceivedAt = null;
    for (const k of Object.keys(sessions)) {
      const s = sessions[k];
      const v = s && typeof s.firstReceivedAt === 'number' ? s.firstReceivedAt : null;
      if (v === null) continue;
      if (minSessionReceivedAt === null || v < minSessionReceivedAt) minSessionReceivedAt = v;
    }
    if (minSessionReceivedAt !== null) {
      const nextIdx = { ...(idx && typeof idx === 'object' ? idx : {}), firstReceivedAt: minSessionReceivedAt };
      try {
        await writeJsonAtomic(idxPath, nextIdx);
      } catch {
        // ignore (best-effort)
      }
      return { idx: nextIdx, firstReceivedAt: minSessionReceivedAt };
    }
  }

  const eventsPath = path.join(serverDir, 'events.ndjson');
  const firstObj = await readFirstNdjsonObject(eventsPath);
  const inferred = firstObj && typeof firstObj.receivedAt === 'number' ? firstObj.receivedAt : null;
  if (inferred === null) return { idx, firstReceivedAt: null };

  const nextIdx = { ...(idx && typeof idx === 'object' ? idx : {}), firstReceivedAt: inferred };
  try {
    await writeJsonAtomic(idxPath, nextIdx);
  } catch {
    // ignore (best-effort)
  }
  return { idx: nextIdx, firstReceivedAt: inferred };
}

async function compactNdjsonToRetention(filePath, cutoffReceivedAt) {
  let stat;
  try {
    stat = await fs.stat(filePath);
  } catch {
    return { kept: 0, dropped: 0, minTsMs: null };
  }
  if (!stat || stat.size <= 0) return { kept: 0, dropped: 0, minTsMs: null };

  const dir = path.dirname(filePath);
  await ensureDir(dir);
  const tmp = `${filePath}.tmp-${crypto.randomBytes(6).toString('hex')}`;

  const replaceFileWithRetries = async (tmpPath, destPath) => {
    const maxAttempts = 10;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await fs.rename(tmpPath, destPath);
        return;
      } catch (err) {
        const code = err && typeof err === 'object' ? err.code : null;
        if ((code === 'EPERM' || code === 'EACCES') && attempt < maxAttempts) {
          await sleep(30 * attempt);
          continue;
        }

        try {
          await fs.copyFile(tmpPath, destPath);
          await fs.unlink(tmpPath);
          return;
        } catch {
          const text = await fs.readFile(tmpPath, 'utf8');
          await fs.writeFile(destPath, text, 'utf8');
          try { await fs.unlink(tmpPath); } catch { /* ignore */ }
          return;
        }
      }
    }
  };

  const input = createReadStream(filePath, { encoding: 'utf8' });
  const rl = readline.createInterface({
    input,
    crlfDelay: Infinity,
  });

  const outHandle = await fs.open(tmp, 'w');
  let kept = 0;
  let dropped = 0;
  let minTsMs = null;
  let minReceivedAt = null;
  let maxReceivedAt = null;

  try {
    for await (const line of rl) {
      if (!line) continue;
      let obj;
      try {
        obj = JSON.parse(line);
      } catch {
        continue;
      }

      const receivedAt = obj && typeof obj.receivedAt === 'number' ? obj.receivedAt : null;
      if (typeof cutoffReceivedAt === 'number' && receivedAt !== null && receivedAt < cutoffReceivedAt) {
        dropped++;
        continue;
      }

      if (receivedAt !== null) {
        if (minReceivedAt === null || receivedAt < minReceivedAt) minReceivedAt = receivedAt;
        if (maxReceivedAt === null || receivedAt > maxReceivedAt) maxReceivedAt = receivedAt;
      }

      const payload = obj && obj.payload;
      const tsMs = payload && typeof payload.tsMs === 'number' ? payload.tsMs : null;
      if (tsMs === null) continue;

      if (minTsMs === null || tsMs < minTsMs) minTsMs = tsMs;
      kept++;
      await outHandle.write(`${JSON.stringify(obj)}\n`);
    }
  } finally {
    try { rl.close(); } catch { /* ignore */ }
    try { input.destroy(); } catch { /* ignore */ }
    // Best-effort wait for the file handle to be released (Windows rename needs it).
    await new Promise((resolve) => {
      if (input.destroyed || input.closed) return resolve();
      const done = () => resolve();
      input.once('close', done);
      input.once('error', done);
    });
    await outHandle.close();
  }

  await replaceFileWithRetries(tmp, filePath);
  return { kept, dropped, minTsMs, minReceivedAt, maxReceivedAt };
}

async function maybeCompactServerEvents(serverDir, idx, nowTsMs) {
  // Compact at most every 60s per server.
  const last = idx && typeof idx.lastCompactionAt === 'number' ? idx.lastCompactionAt : 0;
  if (Date.now() - last < 60_000) return idx;

  if (RETENTION_MS <= 0) return idx;

  // Retention is based on wall-clock time (receivedAt), not the exporter timeline.
  const cutoff = Date.now() - RETENTION_MS;

  const eventsPath = path.join(serverDir, 'events.ndjson');
  const { kept, dropped, minTsMs, minReceivedAt, maxReceivedAt } = await compactNdjsonToRetention(eventsPath, cutoff);
  if (dropped <= 0) {
    return { ...idx, lastCompactionAt: Date.now() };
  }

  const next = {
    ...idx,
    minTsMs: minTsMs,
    storedEvents: kept,
    firstReceivedAt: (typeof minReceivedAt === 'number') ? minReceivedAt : (typeof idx.firstReceivedAt === 'number' ? idx.firstReceivedAt : undefined),
    lastReceivedAt: (typeof maxReceivedAt === 'number') ? maxReceivedAt : (typeof idx.lastReceivedAt === 'number' ? idx.lastReceivedAt : undefined),
    lastCompactionAt: Date.now(),
    lastCompactionDropped: dropped,
    lastCompactionKept: kept,
    retentionMs: RETENTION_MS,
  };
  return next;
}

await ensureDir(DATA_DIR);
await loadDynamicIngestKeys();

// Replay events are stored as NDJSON on disk. Reading a time window by scanning the file
// can get expensive as the file grows. Keep a small in-memory tail for fast live polling.
const REPLAY_RECENT_CACHE_MAX = Math.max(50, Math.min(20000, Number(process.env.REPLAY_RECENT_CACHE_MAX || 4000)));

/** @type {Map<string, { items: any[], minTsMs: number|null, maxTsMs: number|null }>} */
const replayRecentByServer = new Map();

function getPayloadTsMs(rec) {
  const p = rec && rec.payload;
  return p && typeof p.tsMs === 'number' ? p.tsMs : null;
}

function pushReplayRecent(safeId, rec) {
  if (!safeId || !rec) return;
  let entry = replayRecentByServer.get(safeId);
  if (!entry) {
    entry = { items: [], minTsMs: null, maxTsMs: null };
    replayRecentByServer.set(safeId, entry);
  }

  entry.items.push(rec);
  const ts = getPayloadTsMs(rec);
  if (typeof ts === 'number') {
    if (entry.minTsMs === null || ts < entry.minTsMs) entry.minTsMs = ts;
    if (entry.maxTsMs === null || ts > entry.maxTsMs) entry.maxTsMs = ts;
  }

  while (entry.items.length > REPLAY_RECENT_CACHE_MAX) {
    entry.items.shift();
  }

  // If we dropped items, minTsMs might be stale; recompute cheaply.
  if (entry.items.length > 0) {
    const first = getPayloadTsMs(entry.items[0]);
    if (typeof first === 'number' && entry.minTsMs !== null && first > entry.minTsMs) {
      let min = null;
      let max = null;
      for (const it of entry.items) {
        const t = getPayloadTsMs(it);
        if (typeof t !== 'number') continue;
        if (min === null || t < min) min = t;
        if (max === null || t > max) max = t;
      }
      entry.minTsMs = min;
      entry.maxTsMs = max;
    }
  } else {
    entry.minTsMs = null;
    entry.maxTsMs = null;
  }
}

function tryReadReplayEventsFromCache(safeId, opts) {
  const entry = replayRecentByServer.get(safeId);
  if (!entry || !Array.isArray(entry.items) || entry.items.length === 0) return null;

  const sinceTsMs = (opts && typeof opts.sinceTsMs === 'number') ? opts.sinceTsMs : null;
  const untilTsMs = (opts && typeof opts.untilTsMs === 'number') ? opts.untilTsMs : null;
  const limit = (opts && typeof opts.limit === 'number') ? opts.limit : 5000;
  const tail = !!(opts && opts.tail);

  // Only answer from cache when we can be confident it covers the requested window.
  if (sinceTsMs !== null && entry.minTsMs !== null && sinceTsMs < entry.minTsMs) return null;

  const effectiveUntil = (untilTsMs !== null && entry.maxTsMs !== null) ? Math.min(untilTsMs, entry.maxTsMs) : untilTsMs;

  const filtered = [];
  for (const rec of entry.items) {
    const ts = getPayloadTsMs(rec);
    if (typeof ts !== 'number') continue;
    if (sinceTsMs !== null && ts < sinceTsMs) continue;
    if (effectiveUntil !== null && ts > effectiveUntil) continue;
    filtered.push(rec);
  }

  if (tail) {
    if (filtered.length <= limit) return filtered;
    return filtered.slice(filtered.length - limit);
  }

  if (filtered.length <= limit) return filtered;
  return filtered.slice(0, limit);
}

// Warm the in-memory recent cache from the end of the event log so live loads are
// instant right after a restart (instead of scanning the whole multi-GB file for
// the recent window). Reads only the file tail.
async function warmRecentCacheFromTail(safeId, filePath) {
  let st;
  try { st = await fs.stat(filePath); } catch { return; }
  if (!st || st.size <= 0) return;
  const TAIL_BYTES = 128 << 20; // 128MB tail is plenty for thousands of recent records
  const start = Math.max(0, st.size - TAIL_BYTES);
  const recs = [];
  const stream = createReadStream(filePath, { encoding: 'utf8', start });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  let skipFirst = start > 0;
  try {
    for await (const line of rl) {
      if (skipFirst) { skipFirst = false; continue; }
      if (!line) continue;
      let o;
      try { o = JSON.parse(line); } catch { continue; }
      if (o && o.payload) recs.push(o);
    }
  } finally {
    try { rl.close(); } catch { /* ignore */ }
    try { stream.destroy(); } catch { /* ignore */ }
  }
  const tail = recs.length > REPLAY_RECENT_CACHE_MAX ? recs.slice(recs.length - REPLAY_RECENT_CACHE_MAX) : recs;
  if (tail.length === 0) return;
  // Only seed if ingest hasn't already filled the cache for this server.
  const existing = replayRecentByServer.get(safeId);
  if (existing && Array.isArray(existing.items) && existing.items.length >= tail.length) return;
  let minTsMs = null;
  let maxTsMs = null;
  for (const r of tail) {
    const t = getPayloadTsMs(r);
    if (typeof t !== 'number') continue;
    if (minTsMs === null || t < minTsMs) minTsMs = t;
    if (maxTsMs === null || t > maxTsMs) maxTsMs = t;
  }
  replayRecentByServer.set(safeId, { items: tail, minTsMs, maxTsMs });
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Authentication, user CRUD, and password management live at auth.reforgedz.net.
// The cookie is verified via attachSession + requireAuth above; this app no longer issues tokens.
app.get('/api/me', requireAuth, (req, res) => {
  res.json({ username: req.user.sub, tools: req.user.tools, perms: req.rzUser.perms });
});

// ─── BattleMetrics dashboard ────────────────────────────────────────────────
// Each route in the bm router is individually permission-gated. The webhook
// has its own HMAC scheme and is mounted at the top of the file (raw body).

const bmRouter = buildBmRouter({
  requirePerm: requireBmPerm,
  asyncRoute,
  getPteroServers: async () => {
    if (!ADMIN_MGR_PTERO_URL || !ADMIN_MGR_PTERO_KEY) return [];
    return await listReforgerServersCached();
  }
});
const bmSseRouter = buildBmSseRouter({ requirePerm: requireBmPerm });
// SSE mounted under /api/bm/events — must be registered BEFORE /api/bm so it
// matches first (otherwise the bmRouter catches /events as a sub-path).
app.use('/api/bm/events', bmSseRouter);
app.use('/api/bm', bmRouter);

const ticketsRouter = buildTicketsRouter({ requireAuth, asyncRoute });
app.use('/api/tickets', ticketsRouter);

// Tail the ticket-bot's SSE stream so events flow into our shared eventBus
// (which bmSseRouter pipes to admin SPA clients over /api/bm/events).
ticketEventRelay.start();

// Note: the /api/ingame/* routes (in-game bans + mutes) are mounted at the
// bottom of this file, after their helper functions and SSH-related consts
// are initialised. See `mountIngameBansMutes` below.

// List all servers (id + name) on disk, no per-user filtering. Used by the
// helper below and the internal endpoint.
async function listAllServers() {
  const serversDir = path.join(DATA_DIR, 'servers');
  await ensureDir(serversDir);
  let entries = [];
  try {
    entries = await fs.readdir(serversDir, { withFileTypes: true });
  } catch {
    // ignore
  }
  const out = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const id = e.name;
    const idx = await readJsonOrNull(path.join(serversDir, id, 'index.json'));
    out.push({ id, name: (idx && typeof idx.name === 'string' && idx.name.length > 0) ? idx.name : id });
  }
  out.sort((a, b) => a.id.localeCompare(b.id));
  return out;
}

// Internal: the auth service auto-fetches the server list from here (Bearer
// INTERNAL_AUDIT_KEY) to populate the per-server replay permission picker.
function checkInternalBearer(req) {
  const expected = process.env.INTERNAL_AUDIT_KEY || '';
  if (!expected) return false;
  const header = String(req.headers.authorization || '');
  const prefix = 'Bearer ';
  if (!header.startsWith(prefix)) return false;
  const got = Buffer.from(header.slice(prefix.length));
  const exp = Buffer.from(expected);
  return got.length === exp.length && crypto.timingSafeEqual(got, exp);
}

app.get('/api/internal/servers', asyncRoute(async (req, res) => {
  if (!checkInternalBearer(req)) { res.status(401).json({ error: 'unauthorized' }); return; }
  const servers = await listAllServers();
  res.json({ servers });
}));

app.get('/api/servers', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const out = await listAllServers();
  const allowed = allowedReplayServers(req);
  const filtered = allowed ? out.filter((s) => allowed.has(sanitizeServerId(s.id).toLowerCase())) : out;
  res.json(filtered);
}));

app.get('/api/replay/status', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const idxPath = path.join(DATA_DIR, 'servers', safeId, 'index.json');
  let idx = await readJsonOrNull(idxPath);
  const ensured = await ensureIndexHasFirstReceivedAt(path.join(DATA_DIR, 'servers', safeId), idxPath, idx);
  idx = ensured.idx;

  const lastIngestTsMs = (idx && typeof idx.lastIngestTsMs === 'number') ? idx.lastIngestTsMs : null;
  const minTsMs = (idx && typeof idx.minTsMs === 'number') ? idx.minTsMs : null;
  const maxTsMs = (idx && typeof idx.maxTsMs === 'number') ? idx.maxTsMs : null;
  const lastReceivedAt = (idx && typeof idx.lastReceivedAt === 'number') ? idx.lastReceivedAt : null;
  const firstReceivedAt = (idx && typeof idx.firstReceivedAt === 'number') ? idx.firstReceivedAt : null;
  const storedEvents = (idx && typeof idx.storedEvents === 'number')
    ? idx.storedEvents
    : ((idx && typeof idx.lastCompactionKept === 'number') ? idx.lastCompactionKept : ((idx && typeof idx.totalEvents === 'number') ? idx.totalEvents : null));
  const totalEvents = (idx && typeof idx.totalEvents === 'number') ? idx.totalEvents : null;
  const retentionMs = RETENTION_MS > 0 ? RETENTION_MS : 0;

  res.json({
    serverId: safeId,
    name: (idx && typeof idx.name === 'string') ? idx.name : safeId,
    lastIngestTsMs,
    minTsMs,
    maxTsMs,
    firstReceivedAt,
    lastReceivedAt,
    storedEvents,
    totalEvents,
    retentionMs,
    mapId: (idx && typeof idx.mapId === 'string') ? idx.mapId : null,
  });
}));

app.get('/api/replay/statusAll', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serversDir = path.join(DATA_DIR, 'servers');
  await ensureDir(serversDir);

  let entries = [];
  try {
    entries = await fs.readdir(serversDir, { withFileTypes: true });
  } catch {
    // ignore
  }

  const out = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const safeId = e.name;
    const idxPath = path.join(serversDir, safeId, 'index.json');
    let idx = await readJsonOrNull(idxPath);
    const ensured = await ensureIndexHasFirstReceivedAt(path.join(serversDir, safeId), idxPath, idx);
    idx = ensured.idx;

    const lastIngestTsMs = (idx && typeof idx.lastIngestTsMs === 'number') ? idx.lastIngestTsMs : null;
    const minTsMs = (idx && typeof idx.minTsMs === 'number') ? idx.minTsMs : null;
    const maxTsMs = (idx && typeof idx.maxTsMs === 'number') ? idx.maxTsMs : null;
    const lastReceivedAt = (idx && typeof idx.lastReceivedAt === 'number') ? idx.lastReceivedAt : null;
    const firstReceivedAt = (idx && typeof idx.firstReceivedAt === 'number') ? idx.firstReceivedAt : null;
    const storedEvents = (idx && typeof idx.storedEvents === 'number')
      ? idx.storedEvents
      : ((idx && typeof idx.lastCompactionKept === 'number') ? idx.lastCompactionKept : ((idx && typeof idx.totalEvents === 'number') ? idx.totalEvents : null));
    const totalEvents = (idx && typeof idx.totalEvents === 'number') ? idx.totalEvents : null;
    const retentionMs = RETENTION_MS > 0 ? RETENTION_MS : 0;

    out.push({
      serverId: safeId,
      name: (idx && typeof idx.name === 'string') ? idx.name : safeId,
      lastIngestTsMs,
      minTsMs,
      maxTsMs,
      firstReceivedAt,
      lastReceivedAt,
      storedEvents,
      totalEvents,
      retentionMs,
      mapId: (idx && typeof idx.mapId === 'string') ? idx.mapId : null,
    });
  }

  out.sort((a, b) => String(a.serverId).localeCompare(String(b.serverId)));
  const allowedAll = allowedReplayServers(req);
  const filteredAll = allowedAll ? out.filter((s) => allowedAll.has(sanitizeServerId(s.serverId).toLowerCase())) : out;
  res.json(filteredAll);
}));

// ─── Map tile proxy (tacops imagery) ────────────────────────────────────────
// Tiles are fetched from tacops at most ONCE each, cached to disk, then served
// from our own disk forever after — so the replay map streams native-resolution
// imagery (crisp at any zoom) without repeatedly hitting tacops.
const MAPTILES_DIR = path.join(DATA_DIR, 'maptiles');
const TACOPS_MAPS = new Set(['everon', 'chernarus']);
const TACOPS_MAX_NATIVE_ZOOM = 9;

let tacopsToken = null; // { token, expires }
async function getTacopsToken() {
  const now = Date.now() / 1000;
  if (tacopsToken && tacopsToken.expires - now > 15) return tacopsToken;
  const r = await fetch('https://app.tacops.gg/api/tile-token');
  if (!r.ok) throw new Error('tile-token ' + r.status);
  const j = await r.json();
  tacopsToken = { token: j.token, expires: j.expires };
  return tacopsToken;
}

// Cap concurrent tacops fetches: Leaflet uses ~6 and gets correct tiles, while
// large bursts make tacops return wrong "fallback" tiles.
let tacopsInFlight = 0;
const tacopsWaiters = [];
function tacopsAcquire() {
  return new Promise((resolve) => {
    if (tacopsInFlight < 5) { tacopsInFlight++; resolve(); }
    else tacopsWaiters.push(resolve);
  });
}
function tacopsRelease() {
  tacopsInFlight--;
  const next = tacopsWaiters.shift();
  if (next) { tacopsInFlight++; next(); }
}

const tileInflight = new Map(); // key -> Promise<Buffer>
async function fetchTacopsTile(map, z, x, y) {
  const key = `${map}/${z}/${x}/${y}`;
  const existing = tileInflight.get(key);
  if (existing) return existing;
  const p = (async () => {
    await tacopsAcquire();
    try {
      const tok = await getTacopsToken();
      const url = `https://tiles.tacops.gg/${map}/${z}/${x}/${y}/tile.webp?v=11&token=${tok.token}&expires=${tok.expires}`;
      const r = await fetch(url);
      if (!r.ok) throw new Error('tile ' + r.status);
      const ct = r.headers.get('content-type') || '';
      const buf = Buffer.from(await r.arrayBuffer());
      // tacops returns a tiny placeholder for empty / out-of-range tiles.
      if (!ct.includes('image') || buf.length < 200) {
        const e = new Error('empty'); e.empty = true; throw e;
      }
      return buf;
    } finally {
      tacopsRelease();
    }
  })();
  tileInflight.set(key, p);
  try { return await p; } finally { tileInflight.delete(key); }
}

app.get('/api/replay/maptile/:map/:z/:x/:y', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const map = String(req.params.map || '').toLowerCase();
  const z = parseInt(req.params.z, 10);
  const x = parseInt(req.params.x, 10);
  const y = parseInt(String(req.params.y || '').replace(/\.webp$/i, ''), 10);
  if (!TACOPS_MAPS.has(map) || ![z, x, y].every(Number.isInteger) || z < 0 || z > TACOPS_MAX_NATIVE_ZOOM) {
    res.status(400).send('bad tile');
    return;
  }
  const n = 1 << (TACOPS_MAX_NATIVE_ZOOM - z);
  if (x < 0 || y < 0 || x >= n || y >= n) {
    res.status(400).send('range');
    return;
  }

  const cacheDir = path.join(MAPTILES_DIR, map, String(z), String(x));
  const cachePath = path.join(cacheDir, `${y}.webp`);
  const sendBuf = (buf) => {
    res.set('Content-Type', 'image/webp');
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(buf);
  };

  try {
    sendBuf(await fs.readFile(cachePath));
    return;
  } catch { /* cache miss */ }

  try {
    const buf = await fetchTacopsTile(map, z, x, y);
    await ensureDir(cacheDir);
    await fs.writeFile(cachePath, buf);
    sendBuf(buf);
  } catch (err) {
    if (err && err.empty) { res.status(204).end(); return; }
    res.status(502).send('tile fetch failed');
  }
}));

app.get('/api/replay/mapTerrain', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const { mapId } = await getOrInferServerMapId(safeId);

  console.log(`[mapTerrain] serverId=${serverId}, safeId=${safeId}, mapId=${mapId || 'null'}`);

  if (!mapId) {
    res.status(404).send('No mapId for server');
    return;
  }

  const terrainPath = path.join(MAPS_DIR, `${mapId}.terrain.json`);
  const terrain = await readJsonOrNull(terrainPath);
  console.log(`[mapTerrain] terrainPath=${terrainPath}, found=${!!terrain}, hasHeights=${terrain && Array.isArray(terrain.heights) ? terrain.heights.length : 0}`);
  if (!terrain) {
    res.status(404).send('No terrain cached for map');
    return;
  }

  res.json(terrain);
}));

app.get('/api/replay/mapTowns', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const { mapId } = await getOrInferServerMapId(safeId);

  if (!mapId) {
    res.status(404).send('No mapId for server');
    return;
  }

  const townsPath = path.join(MAPS_DIR, `${mapId}.towns.json`);
  const towns = await readJsonOrNull(townsPath);
  if (!towns) {
    res.status(404).send('No towns cached for map');
    return;
  }

  res.json(towns);
}));

app.get('/api/replay/mapDescriptors', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const { mapId } = await getOrInferServerMapId(safeId);

  if (!mapId) {
    res.status(404).send('No mapId for server');
    return;
  }

  const descriptorsPath = path.join(MAPS_DIR, `${mapId}.descriptors.json`);
  const descriptors = await readJsonOrNull(descriptorsPath);
  if (descriptors) {
    res.json(descriptors);
    return;
  }

  // Back-compat: older exporters only send `towns`.
  const townsPath = path.join(MAPS_DIR, `${mapId}.towns.json`);
  const towns = await readJsonOrNull(townsPath);
  if (towns) {
    res.json(towns);
    return;
  }

  res.status(404).send('No descriptors cached for map');
}));

app.get('/api/replay/range', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const idxPath = path.join(DATA_DIR, 'servers', safeId, 'index.json');
  const idx = await readJsonOrNull(idxPath);

  const minTsMs = (idx && typeof idx.minTsMs === 'number') ? idx.minTsMs : null;
  const maxTsMs = (idx && typeof idx.maxTsMs === 'number') ? idx.maxTsMs : null;

  res.json({ serverId: safeId, minTsMs, maxTsMs });
}));

app.get('/api/replay/players', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const snapPath = path.join(DATA_DIR, 'servers', safeId, 'latestSnapshot.json');
  const snap = await readJsonOrNull(snapPath);
  const players = (snap && Array.isArray(snap.players)) ? snap.players : [];

  const out = [];
  for (const p of players) {
    if (!p || typeof p !== 'object') continue;
    if (typeof p.playerId !== 'number') continue;
    out.push({
      playerId: p.playerId,
      name: typeof p.name === 'string' ? p.name : String(p.playerId),
    });
  }

  out.sort((a, b) => a.playerId - b.playerId);
  res.json(out);
}));

// ─── Incremental slim-history cache ────────────────────────────────────────
// The full slim-history scan reads the entire events.ndjson, which can be
// multiple GB and take several seconds. Cache the slim records per server and,
// on later requests, scan only the bytes appended since the last scan, so repeat
// loads are near-instant. If the file shrinks (compaction) the cache rebuilds.
const SLIM_HISTORY_DROP_TYPES = new Set(['vehicleIndex', 'serverHealth', 'itemCatalog', 'spawnCatalog']);
// Sampling interval for the cached 24h overview. Kept coarse so the overview stays
// light (live re-derives over it every poll); fine detail comes from on-demand
// full-resolution window reads when paused/scrubbing.
const SLIM_HISTORY_INTERVAL_MS = 15000;
const slimHistoryCache = new Map(); // safeId -> { intervalMs, size, records, lastSnapshotTsMs }

async function scanSlimSlice(filePath, startByte, sampleIntervalMs, lastSnapshotTsMs) {
  const records = [];
  let lastSnap = lastSnapshotTsMs;
  const stream = createReadStream(filePath, { encoding: 'utf8', start: startByte });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  let scanned = 0;
  try {
    for await (const line of rl) {
      // Yield to the event loop periodically so a multi-GB scan never stalls live
      // polling for other requests.
      if ((++scanned & 0x1fff) === 0) await new Promise((r) => setImmediate(r));
      if (!line) continue;
      // Cheap pre-skip: drop downsampled snapshots without JSON.parse.
      if (line.indexOf('"type":"snapshot"') !== -1) {
        const ti = line.indexOf('"tsMs":');
        if (ti !== -1) {
          const ts = parseInt(line.slice(ti + 7), 10);
          if (Number.isFinite(ts) && ts - lastSnap < sampleIntervalMs) continue;
        }
      }
      let obj;
      try { obj = JSON.parse(line); } catch { continue; }
      const p = obj && obj.payload;
      if (!p) continue;
      const type = typeof p.type === 'string' ? p.type : '';
      if (SLIM_HISTORY_DROP_TYPES.has(type)) continue;
      if (type === 'snapshot') {
        const tsMs = typeof p.tsMs === 'number' ? p.tsMs : null;
        if (tsMs === null) continue;
        if (tsMs - lastSnap < sampleIntervalMs) continue;
        lastSnap = tsMs;
        const players = Array.isArray(p.players) ? p.players : [];
        const sp = new Array(players.length);
        for (let i = 0; i < players.length; i++) {
          const pl = players[i] || {};
          sp[i] = { playerId: pl.playerId, name: pl.name, entityId: pl.entityId, pos: pl.pos, aimDir: pl.aimDir, inVehicle: pl.inVehicle };
        }
        records.push({ receivedAt: obj.receivedAt, payload: { type: 'snapshot', tsMs, players: sp } });
      } else {
        records.push(obj);
      }
    }
  } finally {
    try { rl.close(); } catch { /* ignore */ }
    try { stream.destroy(); } catch { /* ignore */ }
  }
  return { records, lastSnapshotTsMs: lastSnap };
}

async function getSlimHistory(safeId, filePath, sampleIntervalMs, limit) {
  let stat;
  try { stat = await fs.stat(filePath); } catch { return []; }
  if (!stat || stat.size <= 0) return [];

  let c = slimHistoryCache.get(safeId);
  if (c && c.intervalMs === sampleIntervalMs && stat.size >= c.size) {
    if (stat.size > c.size) {
      const slice = await scanSlimSlice(filePath, c.size, sampleIntervalMs, c.lastSnapshotTsMs);
      if (slice.records.length) c.records = c.records.concat(slice.records);
      c.lastSnapshotTsMs = slice.lastSnapshotTsMs;
      c.size = stat.size;
    }
  } else {
    const full = await scanSlimSlice(filePath, 0, sampleIntervalMs, -Infinity);
    c = { intervalMs: sampleIntervalMs, size: stat.size, records: full.records, lastSnapshotTsMs: full.lastSnapshotTsMs };
    slimHistoryCache.set(safeId, c);
  }

  return c.records.length > limit ? c.records.slice(c.records.length - limit) : c.records;
}

// Fast windowed read for the large, time-ordered (monotonic tsMs) append-only log:
// binary-search the byte offset of sinceTsMs, then stream forward collecting the
// window. The [since,until] filter guarantees correctness regardless of where the
// search lands; the search just keeps it fast. Mid-based search cannot infinite-loop.
async function readNdjsonByteWindow(filePath, sinceTsMs, untilTsMs, limit, types) {
  let fh;
  try { fh = await fs.open(filePath, 'r'); } catch { return []; }
  try {
    const st = await fh.stat();
    const size = st.size;
    if (!size) return [];
    const CHUNK = 1 << 18; // 256KB > any single line
    const tmp = Buffer.allocUnsafe(CHUNK);

    // tsMs of the first complete line at/after byte `off`, or null.
    async function tsAtOffset(off) {
      let lineStart = off;
      if (off > 0) {
        const r = await fh.read(tmp, 0, CHUNK, off);
        if (!r.bytesRead) return null;
        const nl = tmp.indexOf(0x0a, 0);
        if (nl === -1) return null;
        lineStart = off + nl + 1;
      }
      if (lineStart >= size) return null;
      const r = await fh.read(tmp, 0, CHUNK, lineStart);
      if (!r.bytesRead) return null;
      let nl = tmp.indexOf(0x0a, 0);
      if (nl === -1) nl = r.bytesRead;
      try {
        const o = JSON.parse(tmp.toString('utf8', 0, nl));
        return o && o.payload && typeof o.payload.tsMs === 'number' ? o.payload.tsMs : null;
      } catch { return null; }
    }

    let lo = 0;
    if (typeof sinceTsMs === 'number') {
      let hi = size;
      while (lo < hi) {
        // Math.floor, not >>1: byte offsets exceed 2^31 in multi-GB files and the
        // 32-bit bitwise shift would overflow.
        const mid = Math.floor((lo + hi) / 2);
        const ts = await tsAtOffset(mid);
        if (ts === null) { hi = mid; continue; }
        if (ts < sinceTsMs) lo = mid + 1; else hi = mid;
      }
    }
    const startByte = Math.max(0, lo - (4 << 20)); // 4MB margin back for safety

    const out = [];
    const stream = createReadStream(filePath, { encoding: 'utf8', start: startByte });
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
    let skipFirst = startByte > 0;
    const SLACK = 60000;
    try {
      for await (const line of rl) {
        if (skipFirst) { skipFirst = false; continue; }
        if (!line) continue;
        let o; try { o = JSON.parse(line); } catch { continue; }
        const p = o && o.payload;
        const ts = p && typeof p.tsMs === 'number' ? p.tsMs : null;
        if (ts === null) continue;
        if (typeof sinceTsMs === 'number' && ts < sinceTsMs) continue;
        if (typeof untilTsMs === 'number' && ts > untilTsMs) {
          if (ts > untilTsMs + SLACK) break;
          continue;
        }
        if (types && !types.has(typeof p.type === 'string' ? p.type : '')) continue;
        out.push(o);
        if (out.length >= limit) break;
      }
    } finally {
      try { rl.close(); } catch { /* ignore */ }
      try { stream.destroy(); } catch { /* ignore */ }
    }
    return out;
  } finally {
    try { await fh.close(); } catch { /* ignore */ }
  }
}

app.get('/api/replay/events', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const sinceTsMs = req.query.sinceTsMs ? Number(req.query.sinceTsMs) : null;
  const untilTsMs = req.query.untilTsMs ? Number(req.query.untilTsMs) : null;
  const limit = req.query.limit ? Number(req.query.limit) : 5000;
  const tail = String(req.query.tail || '') === '1' || String(req.query.tail || '') === 'true';
  const types = typeof req.query.types === 'string' && req.query.types.trim()
    ? new Set(req.query.types.split(',').map((t) => t.trim()).filter(Boolean))
    : null;

  const sampleIntervalMs = req.query.sampleIntervalMs ? Number(req.query.sampleIntervalMs) : 0;
  const slim = String(req.query.slim || '') === '1' || String(req.query.slim || '') === 'true';

  const opts = {
    sinceTsMs: (sinceTsMs !== null && Number.isFinite(sinceTsMs)) ? sinceTsMs : null,
    untilTsMs: (untilTsMs !== null && Number.isFinite(untilTsMs)) ? untilTsMs : null,
    limit: (Number.isFinite(limit) && limit > 0) ? Math.min(limit, sampleIntervalMs > 0 ? 200000 : 20000) : 5000,
    tail,
    types,
    sampleIntervalMs: (Number.isFinite(sampleIntervalMs) && sampleIntervalMs > 0) ? sampleIntervalMs : 0,
    slim,
  };

  // Slim full-history (the playback bootstrap): served from an incremental cache
  // so repeat loads don't re-scan the whole (multi-GB) event log.
  if (slim && opts.sampleIntervalMs > 0 && tail && opts.sinceTsMs === null && opts.untilTsMs === null && !types) {
    const histPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');
    const records = await getSlimHistory(safeId, histPath, opts.sampleIntervalMs, opts.limit);
    res.json(records);
    return;
  }

  // Fast path: skip cache when downsampling or type-filtering.
  if (!types && !sampleIntervalMs) {
    const cached = tryReadReplayEventsFromCache(safeId, opts);
    if (cached) {
      res.json(cached);
      return;
    }
  }

  const eventsPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');

  // Full-resolution time window (e.g. the on-demand window the client loads around
  // the scrub point): serve via a byte-range read so it doesn't scan the whole log.
  if (!opts.slim && !opts.sampleIntervalMs && opts.sinceTsMs !== null) {
    const items = await readNdjsonByteWindow(eventsPath, opts.sinceTsMs, opts.untilTsMs, opts.limit, opts.types);
    res.json(items);
    return;
  }

  const items = await readNdjsonWindow(eventsPath, opts);
  res.json(items);
}));

app.get('/api/replay/vehicles', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) { res.status(400).send('Missing serverId'); return; }

  const safeId = sanitizeServerId(serverId);
  const serverDir = path.join(DATA_DIR, 'servers', safeId);
  const data = await readJsonOrNull(path.join(serverDir, 'latestVehicles.json'));
  res.json(data || { vehicles: [], tsMs: 0, updatedAt: 0 });
}));

app.post('/api/replay/vehicleDetail', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const { serverId, entityId } = (req.body && typeof req.body === 'object') ? req.body : {};
  if (typeof serverId !== 'string' || !serverId) { res.status(400).send('Missing serverId'); return; }
  if (typeof entityId !== 'string' || !entityId) { res.status(400).send('Missing entityId'); return; }

  const safeId = sanitizeServerId(serverId);
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const serverDir = path.join(DATA_DIR, 'servers', safeId);

  await withIngestLock(safeId, async () => {
    await ensureDir(serverDir);
    const idxPath = path.join(serverDir, 'index.json');
    const idx = (await readJsonOrNull(idxPath)) || {};
    const pending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
      ? { ...idx.pendingCommands }
      : {};

    const existing = Array.isArray(pending.vehicleDetail) ? pending.vehicleDetail : [];
    existing.push({ entityId, requestId });
    pending.vehicleDetail = existing;

    await writeJsonAtomic(idxPath, { ...idx, pendingCommands: pending });
  });

  res.json({ ok: true, requestId });
}));

app.get('/api/replay/vehicleDetail', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  const requestId = String(req.query.requestId || '');
  if (!serverId || !requestId) { res.status(400).send('Missing serverId or requestId'); return; }

  const safeId = sanitizeServerId(serverId);
  const detailPath = path.join(DATA_DIR, 'servers', safeId, `vehicleDetail-${requestId}.json`);
  const data = await readJsonOrNull(detailPath);
  if (!data) { res.json({ pending: true }); return; }

  // Clean up after read
  try { await fs.unlink(detailPath); } catch { /* ignore */ }
  res.json(data);
}));

// Carryable-item catalog (sent by the exporter at startup) for the item-spawn picker.
app.get('/api/replay/itemCatalog', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const data = await readJsonOrNull(path.join(DATA_DIR, 'itemCatalog.json'));
  res.json({
    items: (data && Array.isArray(data.items)) ? data.items : [],
    updatedAt: (data && typeof data.updatedAt === 'number') ? data.updatedAt : null,
  });
}));

app.get('/api/replay/spawnCatalog', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const data = await readJsonOrNull(path.join(DATA_DIR, 'spawnCatalog.json'));
  res.json({
    items: (data && Array.isArray(data.items)) ? data.items : [],
    updatedAt: (data && typeof data.updatedAt === 'number') ? data.updatedAt : null,
  });
}));

// Queue a spawn-item command for the exporter to execute in-game (live).
app.post('/api/replay/spawnItem', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const { serverId, target, key, prefab, count } = (req.body && typeof req.body === 'object') ? req.body : {};
  if (typeof serverId !== 'string' || !serverId) { res.status(400).send('Missing serverId'); return; }
  if (typeof key !== 'string' || !key) { res.status(400).send('Missing target key'); return; }
  if (typeof prefab !== 'string' || !prefab) { res.status(400).send('Missing prefab'); return; }
  const tgt = (target === 'vehicle') ? 'vehicle' : 'player';
  const n = (typeof count === 'number' && Number.isFinite(count)) ? Math.max(1, Math.min(50, Math.floor(count))) : 1;

  const safeId = sanitizeServerId(serverId);
  await withIngestLock(safeId, async () => {
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    await ensureDir(serverDir);
    const idxPath = path.join(serverDir, 'index.json');
    const idx = (await readJsonOrNull(idxPath)) || {};
    const prevPending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
      ? idx.pendingCommands : {};
    const prev = Array.isArray(prevPending.spawnItem) ? prevPending.spawnItem : [];
    const nextArr = prev.slice(-49);
    nextArr.push({ target: tgt, key, prefab, count: n });
    const nextIdx = { ...idx, id: safeId, pendingCommands: { ...prevPending, spawnItem: nextArr } };
    await writeJsonAtomic(idxPath, nextIdx);
  });
  auditReplay(req, 'replay.item.give', { serverId: safeId, target: tgt, targetKey: key, prefab, count: n });
  res.json({ ok: true });
}));

app.post('/api/replay/teleport', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const { serverId, playerId, pos } = (req.body && typeof req.body === 'object') ? req.body : {};
  if (typeof serverId !== 'string' || !serverId) { res.status(400).send('Missing serverId'); return; }
  const pid = (typeof playerId === 'number' && Number.isFinite(playerId)) ? Math.floor(playerId) : null;
  if (pid === null || pid <= 0) { res.status(400).send('Invalid playerId'); return; }

  const p = pos && typeof pos === 'object' ? pos : null;
  const x = p && typeof p.x === 'number' && Number.isFinite(p.x) ? p.x : null;
  const z = p && typeof p.z === 'number' && Number.isFinite(p.z) ? p.z : null;
  const y = p && typeof p.y === 'number' && Number.isFinite(p.y) ? p.y : 0;
  if (x === null || z === null) { res.status(400).send('Invalid pos'); return; }

  const safeId = sanitizeServerId(serverId);
  await withIngestLock(safeId, async () => {
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    await ensureDir(serverDir);
    const idxPath = path.join(serverDir, 'index.json');
    const idx = (await readJsonOrNull(idxPath)) || {};
    const prevPending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
      ? idx.pendingCommands : {};
    const prev = Array.isArray(prevPending.teleport) ? prevPending.teleport : [];
    const nextArr = prev.slice(-19);
    nextArr.push({ playerId: pid, pos: { x, y, z } });
    const nextIdx = { ...idx, id: safeId, pendingCommands: { ...prevPending, teleport: nextArr } };
    await writeJsonAtomic(idxPath, nextIdx);
  });
  auditReplay(req, 'replay.teleport', { serverId: safeId, playerId: pid, pos: { x: Math.round(x), y: Math.round(y), z: Math.round(z) } });
  res.json({ ok: true });
}));

// Generic GM command channel. Queues one entry under pendingCommands[type], which the
// in-game exporter consumes via the ingest response. Type is whitelisted.
const REPLAY_GM_COMMANDS = new Set(['playerAction', 'vehicleAction', 'spawnEntity', 'stripInventory', 'setTime', 'removeItem', 'message']);
app.post('/api/replay/command', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const { serverId, type, data } = (req.body && typeof req.body === 'object') ? req.body : {};
  if (typeof serverId !== 'string' || !serverId) { res.status(400).send('Missing serverId'); return; }
  if (typeof type !== 'string' || !REPLAY_GM_COMMANDS.has(type)) { res.status(400).send('Invalid command type'); return; }
  if (!data || typeof data !== 'object' || Array.isArray(data)) { res.status(400).send('Invalid data'); return; }

  const safeId = sanitizeServerId(serverId);
  await withIngestLock(safeId, async () => {
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    await ensureDir(serverDir);
    const idxPath = path.join(serverDir, 'index.json');
    const idx = (await readJsonOrNull(idxPath)) || {};
    const prevPending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
      ? idx.pendingCommands : {};
    const prev = Array.isArray(prevPending[type]) ? prevPending[type] : [];
    const nextArr = prev.slice(-19);
    nextArr.push(data);
    const nextIdx = { ...idx, id: safeId, pendingCommands: { ...prevPending, [type]: nextArr } };
    await writeJsonAtomic(idxPath, nextIdx);
  });

  // Map the command to a readable audit subcategory and carry its context.
  const sub = String((data && typeof data.action === 'string') ? data.action : '').toLowerCase();
  let auditAction = `replay.${type.toLowerCase()}`;
  if (type === 'playerAction') auditAction = `replay.player.${sub || 'action'}`;
  else if (type === 'vehicleAction') auditAction = `replay.vehicle.${sub || 'action'}`;
  else if (type === 'spawnEntity') auditAction = 'replay.entity.spawn';
  else if (type === 'stripInventory') auditAction = 'replay.player.strip';
  else if (type === 'removeItem') auditAction = 'replay.item.remove';
  else if (type === 'message') auditAction = 'replay.message';
  else if (type === 'setTime') auditAction = 'replay.settime';
  auditReplay(req, auditAction.slice(0, 64), { serverId: safeId, ...data });

  res.json({ ok: true });
}));

app.post('/api/replay/gmPing', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const { serverId, tsMs, pos, title, reporterPlayerId } = (req.body && typeof req.body === 'object') ? req.body : {};
  if (typeof serverId !== 'string' || !serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const t = typeof tsMs === 'number' ? tsMs : null;
  if (t === null || !Number.isFinite(t) || t < 0) {
    res.status(400).send('Invalid tsMs');
    return;
  }

  const p = pos && typeof pos === 'object' ? pos : null;
  const x = p && typeof p.x === 'number' ? p.x : null;
  const y = p && typeof p.y === 'number' ? p.y : null;
  const z = p && typeof p.z === 'number' ? p.z : null;
  if (x === null || y === null || z === null || !Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
    res.status(400).send('Invalid pos');
    return;
  }

  const by = req.user && typeof req.user.sub === 'string' ? req.user.sub : '';
  const cleanTitle = typeof title === 'string' ? title.trim().slice(0, 140) : '';
  const reporterId = (typeof reporterPlayerId === 'number' && Number.isFinite(reporterPlayerId) && reporterPlayerId >= 0)
    ? Math.floor(reporterPlayerId)
    : null;

  await withIngestLock(safeId, async () => {
    const receivedAt = Date.now();
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    await ensureDir(serverDir);

    // Queue a best-effort one-shot command for the in-game exporter to execute.
    // This uses the existing ingest response channel: { ok: true, commands: pendingCommands }.
    const idxPath = path.join(serverDir, 'index.json');
    const idx = (await readJsonOrNull(idxPath)) || {};
    const prevPending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
      ? idx.pendingCommands
      : {};
    const prevPings = Array.isArray(prevPending.gmPing) ? prevPending.gmPing : [];
    const nextPings = prevPings.slice(-49);
    nextPings.push({ tsMs: t, pos: { x, y, z }, by, title: cleanTitle, reporterPlayerId: reporterId, receivedAt });
    const nextIdx = {
      ...idx,
      id: safeId,
      name: typeof idx.name === 'string' ? idx.name : safeId,
      pendingCommands: {
        ...prevPending,
        gmPing: nextPings,
      },
    };
    await writeJsonAtomic(idxPath, nextIdx);

    const record = {
      receivedAt,
      remoteAddr: req.ip,
      payload: {
        type: 'gmPing',
        tsMs: t,
        event: {
          pos: { x, y, z },
          by,
          title: cleanTitle,
          reporterPlayerId: reporterId,
        },
      },
    };

    const eventsPath = path.join(serverDir, 'events.ndjson');
    await fs.appendFile(eventsPath, `${JSON.stringify(record)}\n`, 'utf8');

    // Also keep it in the in-memory tail for fast live polling.
    pushReplayRecent(safeId, record);
  });

  auditReplay(req, 'replay.gmping', { serverId: safeId, pos: { x: Math.round(x), y: Math.round(y), z: Math.round(z) }, title: cleanTitle || undefined, reporterPlayerId: reporterId });
  res.json({ ok: true });
}));

app.post('/api/replay/exportDiscord', requireAuth, requireTool('replay'), requireServerAccess, asyncRoute(async (req, res) => {
  const body = (req.body && typeof req.body === 'object') ? req.body : {};
  const { serverId, tsMs, title, pos, focusPlayerId, playerIds } = body;

  if (typeof serverId !== 'string' || serverId.trim().length === 0) {
    res.status(400).send('Invalid serverId');
    return;
  }
  if (typeof tsMs !== 'number' || !Number.isFinite(tsMs) || tsMs < 0) {
    res.status(400).send('Invalid tsMs');
    return;
  }
  if (typeof title !== 'string' || title.trim().length === 0) {
    res.status(400).send('Invalid title');
    return;
  }

  const eventPos = coerceVec3(pos);
  if (!eventPos) {
    res.status(400).send('Invalid pos');
    return;
  }

  const url = await getDiscordWebhookUrl();
  if (!url) {
    res.status(400).send('Discord webhook not configured');
    return;
  }

  const id = serverId.trim();
  const safeId = sanitizeServerId(id);
  const fp = (typeof focusPlayerId === 'number' && Number.isFinite(focusPlayerId) && focusPlayerId >= 0)
    ? Math.floor(focusPlayerId)
    : undefined;

  // `tsMs` is replay-relative time. Discord <t:...> expects UNIX epoch seconds.
  // Best-effort mapping: use the latest ingest anchors from index.json.
  const idxPath = path.join(DATA_DIR, 'servers', safeId, 'index.json');
  const idx = await readJsonOrNull(idxPath);
  const lastIngestTsMs = (idx && typeof idx.lastIngestTsMs === 'number') ? idx.lastIngestTsMs : null;
  const lastReceivedAt = (idx && typeof idx.lastReceivedAt === 'number') ? idx.lastReceivedAt : null;

  const wallClockAtMs = (typeof lastIngestTsMs === 'number' && Number.isFinite(lastIngestTsMs)
    && typeof lastReceivedAt === 'number' && Number.isFinite(lastReceivedAt) && lastReceivedAt > 0)
    ? (lastReceivedAt - (lastIngestTsMs - tsMs))
    : null;

  const requester = (req.user && typeof req.user.sub === 'string' && req.user.sub.trim().length > 0)
    ? req.user.sub.trim()
    : '';

  const gifBuf = await buildReplayEventGif({
    safeId,
    serverId: id,
    tsMs,
    title: title.trim().slice(0, 140),
    pos: eventPos,
    focusPlayerId: fp,
    playerIds: Array.isArray(playerIds) ? playerIds : null,
    wallClockAtMs,
    requester,
  });

  const wallClockFromMs = (wallClockAtMs !== null) ? (wallClockAtMs - 5_000) : null;
  const wallClockToMs = (wallClockAtMs !== null) ? (wallClockAtMs + 5_000) : null;

  const whenUnix = (typeof wallClockAtMs === 'number' && Number.isFinite(wallClockAtMs) && wallClockAtMs > 0)
    ? Math.floor(wallClockAtMs / 1000)
    : null;

  const atLine = whenUnix !== null
    ? `At: <t:${whenUnix}:f>`
    : `At (replay): ${(tsMs / 1000).toFixed(1)}s`;
  const requesterLine = requester
    ? `Requester: **${requester}**`
    : 'Requester: **unknown**';

  const content = [
    `Server: **${id}**`,
    `Event: **${title.trim().slice(0, 140)}**`,
    atLine,
    requesterLine,
  ].join('\n');

  const form = new FormData();
  form.append('payload_json', JSON.stringify({ content }));
  form.append('file', new Blob([gifBuf], { type: 'image/gif' }), `replay-${safeId}-${tsMs}.gif`);

  let resp;
  try {
    resp = await fetch(url, { method: 'POST', body: form });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'fetch failed';
    const cause = err && typeof err === 'object' && err.cause ? String(err.cause) : '';
    res.status(502).send(cause ? `${msg}: ${cause}` : msg);
    return;
  }

  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    res.status(502).send(text || `Discord webhook returned ${resp.status}`);
    return;
  }

  auditReplay(req, 'replay.export_discord', { serverId: safeId, title: title.trim().slice(0, 140), tsMs, focusPlayerId: fp });
  res.json({ ok: true });
}));

// User CRUD has moved to auth.reforgedz.net. Use the manager UI there.

// ============================================================
// Admin Manager
//   Centralised UI for adding/removing Reforger admin GUIDs
//   across every Pterodactyl game server (one config file per
//   server). Auto-discovers servers from Pterodactyl, edits the
//   game.admins list via SSH, and backfills display names from
//   local PII / snapshot caches.
// ============================================================

const ADMIN_MGR_PTERO_URL = (process.env.PTERODACTYL_PANEL_URL || '').replace(/\/+$/, '');
const ADMIN_MGR_PTERO_KEY = process.env.PTERODACTYL_CLIENT_API_KEY || '';
const ADMIN_MGR_CONFIG_BASENAME = process.env.ADMIN_MANAGER_CONFIG_BASENAME || 'config.json';
const ADMIN_MGR_CONFIG_FIELD = process.env.ADMIN_MANAGER_CONFIG_FIELD || 'game.admins';
const ADMIN_MGR_VOLUMES_ROOT = (process.env.ADMIN_MANAGER_VOLUMES_ROOT || '/var/lib/pterodactyl/volumes').replace(/\/+$/, '');
const ADMIN_MGR_STATE_PATH = path.join(DATA_DIR, 'adminManager.json');
// Last-known-good set of priority-queue GUIDs, persisted so a transient shop
// outage doesn't cause every PQ buyer to leak into the admin list.
const ADMIN_MGR_PQ_CACHE_PATH = path.join(DATA_DIR, 'adminManagerPqCache.json');
const ADMIN_MGR_BM_TOKEN = process.env.BATTLEMETRICS_API_KEY || '';
// Reforger errors on a config with more than this many entries in game.admins.
// GMs and priority-queue holders share the same allowance. Mirrors ADMIN_CEILING
// in the shop, which squeezes PQ stock so PQ + GMs can never exceed it.
const ADMIN_MGR_SLOT_LIMIT = parseInt(process.env.ADMIN_CEILING || '50', 10);
const ADMIN_MGR_CACHE_TTL_MS = 5 * 60 * 1000;

// NA box is not directly reachable; SSH connects to EU box and bounces over.
// Mirrors the pattern in reforgedz-dotnet/sync.js.
const ADMIN_MGR_NA_VIA_EU = process.env.ADMIN_MANAGER_NA_VIA_EU !== '0';
// reforgedz-dotnet shop (Priority Queue tab proxies through to it)
const SHOP_BASE_URL = (process.env.SHOP_BASE_URL || 'https://reforgedz.net').replace(/\/+$/, '');
const SHOP_ADMIN_API_KEY = process.env.SHOP_ADMIN_API_KEY || '';

function adminMgrIsDryRun() {
  return process.env.ADMIN_MANAGER_DRY_RUN === '1';
}

function adminMgrSshHostForRegion(region) {
  if (region === 'EU' || (region === 'NA' && ADMIN_MGR_NA_VIA_EU)) {
    return {
      host: process.env.GAME_SERVER_EU_HOST || '',
      port: parseInt(process.env.GAME_SERVER_EU_PORT || '22', 10),
      user: process.env.GAME_SERVER_EU_USER || 'root',
    };
  }
  if (region === 'NA') {
    return {
      host: process.env.GAME_SERVER_NA_HOST || '',
      port: parseInt(process.env.GAME_SERVER_NA_PORT || '22', 10),
      user: process.env.GAME_SERVER_NA_USER || 'root',
    };
  }
  return null;
}

function adminMgrWrapForRegion(region, command) {
  if (region === 'NA' && ADMIN_MGR_NA_VIA_EU) {
    const naHost = process.env.GAME_SERVER_NA_HOST || '';
    const naPort = parseInt(process.env.GAME_SERVER_NA_PORT || '22', 10);
    const naUser = process.env.GAME_SERVER_NA_USER || 'root';
    if (!naHost) throw new Error('na_host_not_configured');
    const innerEscaped = String(command).replace(/'/g, `'\\''`);
    return `ssh -o StrictHostKeyChecking=${ADMIN_MGR_SSH_STRICT} -o ConnectTimeout=10 -p ${naPort} ${naUser}@${naHost} '${innerEscaped}'`;
  }
  return command;
}

// Resolve the SSH connect target + command wrapper for a server.
// Post-OVH-migration ALL EU instances (EU1, EU2, EU Dev) live on the one EU box
// (162.19.127.130), so EU2 is reached directly like EU1. The old "EU2 on a
// separate GER2 node via a nested SSH hop" path is kept for the day the boxes are
// split again, but it is now OPT-IN via ADMIN_MANAGER_EU2_VIA_HOP=1 — otherwise a
// leftover GAME_SERVER_EU2_HOST in .env would silently misroute EU2's config.json
// writes to the wrong/dead box (which reads as "GM changes on EU2 do nothing").
// Returns { conn, wrap }.
function adminMgrConnAndWrap(server) {
  const region = server?.region;
  const node = server?.node || '';
  const eu2ViaHop = process.env.ADMIN_MANAGER_EU2_VIA_HOP === '1';
  const eu2Host = process.env.GAME_SERVER_EU2_HOST || '';
  const eu2Node = process.env.GAME_SERVER_EU2_NODE || '';
  if (eu2ViaHop && region === 'EU' && eu2Host && eu2Node && node === eu2Node) {
    const conn = {
      host: process.env.GAME_SERVER_EU_HOST || '',
      port: parseInt(process.env.GAME_SERVER_EU_PORT || '22', 10),
      user: process.env.GAME_SERVER_EU_USER || 'root',
    };
    const eu2Port = parseInt(process.env.GAME_SERVER_EU2_PORT || '22', 10);
    const eu2User = process.env.GAME_SERVER_EU2_USER || 'root';
    return {
      conn,
      wrap: (inner) => {
        const innerEscaped = String(inner).replace(/'/g, `'\\''`);
        return `ssh -o StrictHostKeyChecking=${ADMIN_MGR_SSH_STRICT} -o ConnectTimeout=10 -p ${eu2Port} ${eu2User}@${eu2Host} '${innerEscaped}'`;
      },
    };
  }
  return {
    conn: adminMgrSshHostForRegion(region),
    wrap: (inner) => adminMgrWrapForRegion(region, inner),
  };
}

async function pteroFetch(endpoint) {
  if (!ADMIN_MGR_PTERO_URL || !ADMIN_MGR_PTERO_KEY) {
    throw new Error('pterodactyl_not_configured');
  }
  const url = endpoint.startsWith('http') ? endpoint : `${ADMIN_MGR_PTERO_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${ADMIN_MGR_PTERO_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`pterodactyl_${res.status}`);
  return res.json();
}

function isReforgerGameServer(name) {
  const n = String(name || '');
  if (!n) return false;
  if (n.includes('.net') || n.includes('.com')) return false;
  // Accepts a bare [DEV], suffixed forms like [DEV-1]/[DEV_X], and region-prefixed
  // dev tags such as [EU-DEV] / [NA Dev] so renaming one in the panel can't make
  // the server silently disappear from GM management.
  return /\[(EU\d+|NA\d+|(?:EU|NA)[-_ ]?DEV\d*|DEV(?:[-_][A-Z0-9]+)?)\]/i.test(n);
}

function adminMgrRegionFor(name, node) {
  const m = String(name || '').match(/\[([A-Z]+)/i);
  if (m) {
    const tag = m[1].toUpperCase();
    if (tag === 'EU') return 'EU';
    if (tag === 'NA') return 'NA';
    // [DEV] carries no region of its own — fall through and use the node.
  }
  // Node names are the OVH ones now (OVH-EU / OVH-NA); the ger*/nj* prefixes are
  // the pre-migration Hetzner/InterServer nodes, kept so old names still resolve.
  const nd = String(node || '').toLowerCase();
  if (/(^|[-_])eu\d*$/.test(nd) || nd.startsWith('ger')) return 'EU';
  if (/(^|[-_])na\d*$/.test(nd) || nd.startsWith('nj')) return 'NA';
  return 'unknown';
}

function adminMgrShortTag(name) {
  const m = String(name || '').match(/\[([^\]]+)\]/);
  return m ? m[1] : '';
}

async function listReforgerServers() {
  const out = [];
  let endpoint = '/api/client?per_page=50';
  let safety = 10;
  while (endpoint && safety-- > 0) {
    const data = await pteroFetch(endpoint);
    const items = Array.isArray(data?.data) ? data.data : [];
    for (const srv of items) {
      const a = srv?.attributes;
      if (!a) continue;
      if (!isReforgerGameServer(a.name)) continue;
      const region = adminMgrRegionFor(a.name, a.node);
      if (region === 'unknown') continue;
      const allocs = a.relationships?.allocations?.data || [];
      const def = allocs.find((x) => x.attributes?.is_default) || allocs[0];
      const ip = def
        ? `${def.attributes.ip_alias || def.attributes.ip}:${def.attributes.port}`
        : null;
      out.push({
        pteroId: a.identifier,
        volumeUuid: a.uuid,
        name: a.name,
        tag: adminMgrShortTag(a.name),
        node: a.node,
        region,
        ip,
      });
    }
    const nextLink = data?.links?.next || data?.meta?.pagination?.links?.next || null;
    if (!nextLink) break;
    try {
      const u = new URL(nextLink);
      endpoint = u.pathname + u.search;
    } catch {
      break;
    }
  }
  out.sort((a, b) => (a.tag || a.name).localeCompare(b.tag || b.name));
  return out;
}

async function readAdminMgrState() {
  const obj = await readJsonOrNull(ADMIN_MGR_STATE_PATH);
  const admins = obj && typeof obj === 'object' && obj.admins && typeof obj.admins === 'object'
    ? obj.admins : {};
  const overrides = obj && typeof obj === 'object' && obj.configOverrides && typeof obj.configOverrides === 'object'
    ? obj.configOverrides : {};
  return {
    admins,
    configOverrides: overrides,
    lastBackfillAt: typeof obj?.lastBackfillAt === 'number' ? obj.lastBackfillAt : null,
    lastSyncAt: typeof obj?.lastSyncAt === 'number' ? obj.lastSyncAt : null,
  };
}

async function writeAdminMgrState(state) {
  await writeJsonAtomic(ADMIN_MGR_STATE_PATH, state);
}

function configPathFor(server, overrides) {
  const override = overrides && typeof overrides === 'object' ? overrides[server.pteroId] : null;
  const basename = (typeof override === 'string' && override) || ADMIN_MGR_CONFIG_BASENAME;
  return `${ADMIN_MGR_VOLUMES_ROOT}/${server.volumeUuid}/${basename}`;
}

function adminMgrShellEscape(s) {
  return `'${String(s).replace(/'/g, "'\\''")}'`;
}

function adminMgrGetPrivateKey() {
  const b64 = process.env.SSH_PRIVATE_KEY_B64 || '';
  if (!b64) return null;
  try { return Buffer.from(b64, 'base64'); }
  catch { return null; }
}

// SSH host-key pinning. When GAME_SERVER_HOST_FINGERPRINTS is set (comma-separated
// base64 SHA-256 fingerprints), a host key must match one or the connection is
// refused (blocks MITM on these root sessions). Unset → log the fingerprint and
// accept (trust-on-first-use), so pinning rolls out without breaking anything.
const ADMIN_MGR_PINNED_FPS = (process.env.GAME_SERVER_HOST_FINGERPRINTS || '')
  .split(',').map((s) => s.trim()).filter(Boolean);

function adminMgrVerifyHostKey(keyBuf) {
  const fp = crypto.createHash('sha256').update(keyBuf).digest('base64').replace(/=+$/, '');
  if (ADMIN_MGR_PINNED_FPS.length === 0) {
    console.warn(`[adminmgr] SSH host key SHA256:${fp} accepted (no GAME_SERVER_HOST_FINGERPRINTS set — set it to pin).`);
    return true;
  }
  const ok = ADMIN_MGR_PINNED_FPS.includes(fp);
  if (!ok) console.error(`[adminmgr] SSH host key SHA256:${fp} REJECTED — not in GAME_SERVER_HOST_FINGERPRINTS.`);
  return ok;
}

// For the shelled-out nested hops (NA-via-EU, EU2): accept-new (TOFU, records the
// key on first use then pins) instead of the old blanket StrictHostKeyChecking=no.
// Set GAME_SERVER_STRICT_HOSTKEYS=1 once a known_hosts is provisioned to require
// an already-trusted key.
const ADMIN_MGR_SSH_STRICT = process.env.GAME_SERVER_STRICT_HOSTKEYS === '1' ? 'yes' : 'accept-new';

function adminMgrGetAtPath(obj, dotPath) {
  if (!obj || !dotPath) return undefined;
  return String(dotPath).split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

function adminMgrSetAtPath(obj, dotPath, value) {
  const keys = String(dotPath).split('.');
  const last = keys.pop();
  let cur = obj;
  for (const k of keys) {
    if (cur[k] == null || typeof cur[k] !== 'object' || Array.isArray(cur[k])) cur[k] = {};
    cur = cur[k];
  }
  cur[last] = value;
}

function sshExecCapture(host, port, user, command) {
  return new Promise((resolve, reject) => {
    const key = adminMgrGetPrivateKey();
    if (!key) return reject(new Error('ssh_key_missing'));
    if (!host) return reject(new Error('ssh_host_missing'));
    const conn = new SshClient();
    let settled = false;
    const finish = (err, val) => {
      if (settled) return;
      settled = true;
      try { conn.end(); } catch { /* ignore */ }
      if (err) reject(err); else resolve(val);
    };
    const timer = setTimeout(() => finish(new Error('ssh_timeout')), 30000);
    conn.on('ready', () => {
      conn.exec(command, (err, stream) => {
        if (err) { clearTimeout(timer); return finish(err); }
        let stdout = '';
        let stderr = '';
        stream.on('close', (code) => {
          clearTimeout(timer);
          if (code === 0) finish(null, stdout);
          else finish(new Error(`ssh_exit_${code}: ${stderr.trim().slice(0, 200) || 'no stderr'}`));
        });
        stream.on('data', (d) => { stdout += d.toString('utf8'); });
        stream.stderr.on('data', (d) => { stderr += d.toString('utf8'); });
      });
    });
    conn.on('error', (err) => { clearTimeout(timer); finish(err); });
    conn.connect({
      host,
      port,
      username: user,
      privateKey: key,
      readyTimeout: 10000,
      hostVerifier: adminMgrVerifyHostKey,
    });
  });
}

async function sshReadFile(server, remotePath) {
  const { conn, wrap } = adminMgrConnAndWrap(server);
  if (!conn?.host) throw new Error('ssh_host_not_configured');
  const inner = `if [ -f ${adminMgrShellEscape(remotePath)} ]; then base64 ${adminMgrShellEscape(remotePath)}; fi`;
  const cmd = wrap(inner);
  const stdout = await sshExecCapture(conn.host, conn.port, conn.user, cmd);
  if (!stdout || !stdout.trim()) return null;
  let text;
  try {
    text = Buffer.from(stdout, 'base64').toString('utf8');
  } catch {
    throw new Error('config_b64_decode_failed');
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('config_parse_failed');
  }
}

async function sshWriteFile(server, remotePath, jsonObj) {
  const { conn, wrap } = adminMgrConnAndWrap(server);
  if (!conn?.host) throw new Error('ssh_host_not_configured');
  const jsonText = JSON.stringify(jsonObj, null, 2);
  const b64 = Buffer.from(jsonText, 'utf8').toString('base64');
  if (adminMgrIsDryRun()) {
    console.log(`[adminmgr DRY RUN] ${server?.tag || server?.region}: would write ${remotePath} (${jsonText.length} bytes)`);
    return;
  }
  const dir = remotePath.replace(/\/[^/]+$/, '');
  const tmp = `${remotePath}.tmp.adminmgr`;
  const inner = [
    `mkdir -p ${adminMgrShellEscape(dir)}`,
    `printf %s ${adminMgrShellEscape(b64)} | base64 -d > ${adminMgrShellEscape(tmp)}`,
    `mv ${adminMgrShellEscape(tmp)} ${adminMgrShellEscape(remotePath)}`,
  ].join(' && ');
  const cmd = wrap(inner);
  await sshExecCapture(conn.host, conn.port, conn.user, cmd);
}

// Read config.json AND its on-disk SHA-256 in one shot, so a later write can
// verify the file hasn't changed since (compare-and-swap). Returns {config,hash}.
async function sshReadFileWithHash(server, remotePath) {
  const { conn, wrap } = adminMgrConnAndWrap(server);
  if (!conn?.host) throw new Error('ssh_host_not_configured');
  const p = adminMgrShellEscape(remotePath);
  const inner = `if [ -f ${p} ]; then sha256sum ${p} | cut -d' ' -f1; base64 ${p}; fi`;
  const stdout = await sshExecCapture(conn.host, conn.port, conn.user, wrap(inner));
  if (!stdout || !stdout.trim()) return null;
  const nl = stdout.indexOf('\n');
  if (nl < 0) throw new Error('config_read_malformed');
  const hash = stdout.slice(0, nl).trim();
  if (!/^[0-9a-f]{64}$/i.test(hash)) throw new Error('config_hash_malformed');
  let text;
  try { text = Buffer.from(stdout.slice(nl + 1), 'base64').toString('utf8'); }
  catch { throw new Error('config_b64_decode_failed'); }
  let config;
  try { config = JSON.parse(text); }
  catch { throw new Error('config_parse_failed'); }
  return { config, hash };
}

// Atomic read-modify-write of config.json, immune to the cross-process race with
// the shop's game.admins sync. Each attempt: read the file + its hash, run
// mutateFn on the PARSED object, then write back under an flock on
// <config>.lock ONLY IF the on-disk hash still matches what we read (CAS). A
// concurrent write (from the shop or another admin action) is detected and the
// whole cycle retries against the fresh file, so no change is ever clobbered.
// tmp+mv keeps config.json whole; any failure aborts without a partial write.
// mutateFn(config) mutates in place and returns an outcome object with a
// `changed` boolean; when changed is false we skip the write entirely.
async function atomicMutateConfig(server, remotePath, mutateFn, attempts = 5) {
  const { conn, wrap } = adminMgrConnAndWrap(server);
  if (!conn?.host) throw new Error('ssh_host_not_configured');
  let lastErr = null;
  for (let i = 0; i < attempts; i++) {
    const read = await sshReadFileWithHash(server, remotePath);
    if (!read) throw new Error('config_not_found');
    const outcome = mutateFn(read.config) || { changed: false };
    if (!outcome.changed) return outcome;

    const jsonText = JSON.stringify(read.config, null, 2);
    if (adminMgrIsDryRun()) {
      console.log(`[adminmgr DRY RUN] ${server?.tag || server?.region}: would CAS-write ${remotePath} (${jsonText.length} bytes)`);
      return outcome;
    }
    const b64 = Buffer.from(jsonText, 'utf8').toString('base64');
    const tmp = `${remotePath}.tmp.adminmgr`;
    const lock = `${remotePath}.lock`;
    const inner = [
      `exec 9>${adminMgrShellEscape(lock)} || exit 20`,
      `flock -w 15 9 || exit 21`,
      `CUR=$(sha256sum ${adminMgrShellEscape(remotePath)} 2>/dev/null | cut -d' ' -f1)`,
      `if [ "$CUR" != ${adminMgrShellEscape(read.hash)} ]; then echo STALE; exit 0; fi`,
      `printf %s ${adminMgrShellEscape(b64)} | base64 -d > ${adminMgrShellEscape(tmp)} || exit 24`,
      `mv ${adminMgrShellEscape(tmp)} ${adminMgrShellEscape(remotePath)} || exit 25`,
      `echo OK`,
    ].join('\n');
    const out = (await sshExecCapture(conn.host, conn.port, conn.user, wrap(inner))).trim();
    if (/(^|\n)OK$/.test(out) || out === 'OK') return outcome;
    if (out.includes('STALE')) { lastErr = new Error('config_changed_concurrently'); continue; }
    throw new Error(`cas_write_unexpected: ${out.slice(0, 80)}`);
  }
  throw lastErr || new Error('cas_write_conflict');
}

function adminMgrIsValidGuid(s) {
  return typeof s === 'string' && /^[0-9a-fA-F-]{36}$/.test(s);
}

function adminMgrIsValidPteroId(s) {
  return typeof s === 'string' && /^[a-f0-9]{1,32}$/i.test(s);
}

async function adminMgrFetchBmName(guid) {
  // Thin wrapper over the unified BM client (lib/battlemetrics.js).
  // Keeps cache + rate-limit behaviour consistent with the dashboard.
  if (!bmClient.isEnabled()) return null;
  try {
    const player = await bmClient.matchPlayerByGuid(guid);
    const name = player?.attributes?.name;
    return typeof name === 'string' && name ? name : null;
  } catch {
    return null;
  }
}

function adminMgrBmAvailable() {
  return !!ADMIN_MGR_BM_TOKEN;
}

let adminsCache = { data: null, builtAt: 0, version: 0, building: null };

let serversListCache = { data: null, builtAt: 0 };
const SERVERS_LIST_TTL_MS = 5 * 60 * 1000;

async function listReforgerServersCached(force = false) {
  const now = Date.now();
  if (!force && serversListCache.data && (now - serversListCache.builtAt) < SERVERS_LIST_TTL_MS) {
    return serversListCache.data;
  }
  const data = await listReforgerServers();
  serversListCache = { data, builtAt: now };
  return data;
}

function invalidateAdminsCache() {
  adminsCache = { ...adminsCache, builtAt: 0 };
}

function bumpAdminsCacheVersion() {
  adminsCache.builtAt = Date.now();
  adminsCache.version = adminsCache.version + 1;
}

function applyCacheToggle(pteroId, guid, present) {
  if (!adminsCache.data) return;
  let changed = false;
  const admins = adminsCache.data.admins.map((a) => {
    if (a.guid !== guid) return a;
    if (!!a.presence[pteroId] === present) return a;
    changed = true;
    return { ...a, presence: { ...a.presence, [pteroId]: present } };
  });
  if (!changed) return;
  adminsCache.data = { ...adminsCache.data, admins, lastSyncAt: Date.now() };
  bumpAdminsCacheVersion();
}

function applyCacheUpsertAdmin(guid, fields) {
  if (!adminsCache.data) return;
  const idx = adminsCache.data.admins.findIndex((a) => a.guid === guid);
  let admins;
  if (idx === -1) {
    admins = [
      {
        guid,
        displayName: fields.displayName || '?',
        source: fields.source || 'unknown',
        presence: {},
      },
      ...adminsCache.data.admins,
    ];
  } else {
    admins = adminsCache.data.admins.map((a, i) => (i === idx ? { ...a, ...fields } : a));
  }
  adminsCache.data = { ...adminsCache.data, admins };
  bumpAdminsCacheVersion();
}

function applyCacheDeleteAdmin(guid) {
  if (!adminsCache.data) return;
  const before = adminsCache.data.admins.length;
  const admins = adminsCache.data.admins.filter((a) => a.guid !== guid);
  if (admins.length === before) return;
  adminsCache.data = { ...adminsCache.data, admins, lastSyncAt: Date.now() };
  bumpAdminsCacheVersion();
}

function applyCacheNameResolutions(updates) {
  if (!adminsCache.data || updates.size === 0) return;
  let changed = false;
  const admins = adminsCache.data.admins.map((a) => {
    const u = updates.get(a.guid);
    if (!u) return a;
    if (u.displayName === a.displayName && u.source === a.source) return a;
    changed = true;
    return { ...a, ...u };
  });
  if (!changed) return;
  adminsCache.data = { ...adminsCache.data, admins, lastBackfillAt: Date.now() };
  bumpAdminsCacheVersion();
}

async function loadPqGuidCache() {
  const obj = await readJsonOrNull(ADMIN_MGR_PQ_CACHE_PATH);
  return obj && Array.isArray(obj.guids) ? obj.guids.filter((g) => typeof g === 'string') : [];
}

async function savePqGuidCache(guids) {
  try {
    await writeJsonAtomic(ADMIN_MGR_PQ_CACHE_PATH, { guids, updatedAt: Date.now() });
  } catch (e) {
    console.warn('[adminmgr] failed to persist PQ guid cache:', e.message);
  }
}

async function buildAdminsSnapshot() {
  const servers = await listReforgerServersCached();
  const state = await readAdminMgrState();

  const reads = await Promise.all(
    servers.map(async (s) => ({ server: s, ...(await readServerAdmins(s, state.configOverrides)) }))
  );

  // Priority-queue buyers are auto-injected into game.admins for queue-skip, but
  // they aren't real GMs, so hide them from this view. Two guards:
  //  1. A GUID explicitly registered as a GM (state source 'manual') is ALWAYS
  //     shown, even if that person also holds a PQ entry — otherwise a real admin
  //     who bought priority queue silently disappears from the list.
  //  2. On a shop/PQ fetch failure we reuse the last-known-good PQ set instead of
  //     showing an unfiltered list (which would dump every PQ buyer in as a fake
  //     "admin"). With no cache at all we fail closed on unclassified entries.
  let pqGuids = new Set();
  let pqSource = 'live';
  try {
    const pq = await shopFetchProxy('/api/shop/admin/priority-queue');
    if (pq.status >= 200 && pq.status < 300 && pq.body && Array.isArray(pq.body.entries)) {
      for (const e of pq.body.entries) {
        const g = typeof e?.guid === 'string' ? e.guid.toLowerCase() : '';
        if (g) pqGuids.add(g);
      }
      await savePqGuidCache([...pqGuids]);
    } else {
      throw new Error(`pq_http_${pq.status}`);
    }
  } catch (e) {
    const cached = await loadPqGuidCache();
    if (cached.length) {
      pqGuids = new Set(cached);
      pqSource = 'cached';
      console.warn(`[adminmgr] priority-queue fetch failed; reusing ${cached.length} cached PQ guids:`, e.message);
    } else {
      pqSource = 'none';
      console.warn('[adminmgr] priority-queue fetch failed with no cache; hiding unclassified config entries:', e.message);
    }
  }

  const isRegisteredGm = (guid) => (state.admins[guid] && state.admins[guid].source === 'manual');
  const hideAsPq = (guid) => {
    if (isRegisteredGm(guid)) return false;
    if (pqGuids.has(String(guid).toLowerCase())) return true;
    // No PQ data at all (shop unreachable AND no cached set — rare once the cache
    // has ever populated). Previously this hid EVERY unclassified entry, which
    // blanked the whole roster of legacy/non-manual GMs during a shop outage.
    // Show them instead: real GMs vanishing is worse than a PQ buyer briefly
    // appearing until the shop is reachable again. Registered GMs (source
    // 'manual') are always shown regardless via the short-circuit above.
    return false;
  };

  const guidMap = new Map();
  for (const r of reads) {
    for (const guid of r.admins) {
      if (hideAsPq(guid)) continue;
      let entry = guidMap.get(guid);
      if (!entry) {
        const cached = state.admins[guid] || {};
        entry = {
          guid,
          displayName: typeof cached.displayName === 'string' && cached.displayName ? cached.displayName : '?',
          source: cached.source || 'unknown',
          presence: {},
        };
        guidMap.set(guid, entry);
      }
      entry.presence[r.server.pteroId] = true;
    }
  }
  for (const [guid, c] of Object.entries(state.admins || {})) {
    // state.admins doubles as the display-name cache and the backfill writes an
    // entry for EVERY guid it encounters, priority-queue buyers included. Only a
    // guid registered through the GM tab ('manual') is actually a GM — treating
    // the cache as a roster made queue holders appear here the moment they were
    // removed from the queue and stopped being filtered out.
    if (c.source !== 'manual') continue;
    if (hideAsPq(guid)) continue;
    if (!guidMap.has(guid)) {
      guidMap.set(guid, {
        guid,
        displayName: typeof c.displayName === 'string' && c.displayName ? c.displayName : '?',
        source: c.source || 'manual',
        presence: {},
      });
    }
  }

  const admins = Array.from(guidMap.values()).sort((a, b) => {
    const aKey = (a.displayName === '?' ? 'zzz' : '') + a.displayName.toLowerCase();
    const bKey = (b.displayName === '?' ? 'zzz' : '') + b.displayName.toLowerCase();
    return aKey.localeCompare(bKey);
  });

  const enriched = servers.map((s) => ({
    ...s,
    configPath: configPathFor(s, state.configOverrides),
    sshConfigured: !!adminMgrSshHostForRegion(s.region)?.host,
  }));

  const errors = reads
    .filter((r) => !r.ok)
    .map((r) => ({ pteroId: r.server.pteroId, tag: r.server.tag, error: r.error }));

  // Slot usage straight off each server's real game.admins array — GMs and PQ
  // holders draw on the same allowance, so this is what actually fills up.
  const capacity = {};
  for (const r of reads) {
    if (!r.ok) { capacity[r.server.pteroId] = null; continue; }
    const total = r.admins.length;
    let pq = 0;
    for (const g of r.admins) if (pqGuids.has(String(g).toLowerCase())) pq++;
    capacity[r.server.pteroId] = {
      tag: r.server.tag,
      total,
      pq,
      gms: total - pq,
      limit: ADMIN_MGR_SLOT_LIMIT,
      remaining: Math.max(0, ADMIN_MGR_SLOT_LIMIT - total),
    };
  }

  return {
    servers: enriched,
    admins,
    errors,
    capacity,
    pqFilter: { source: pqSource, count: pqGuids.size },
    lastBackfillAt: state.lastBackfillAt,
    lastSyncAt: state.lastSyncAt,
    dryRun: adminMgrIsDryRun(),
    bmAvailable: adminMgrBmAvailable(),
  };
}

async function getAdminsSnapshot({ force = false } = {}) {
  const now = Date.now();
  if (!force && adminsCache.data && (now - adminsCache.builtAt) < ADMIN_MGR_CACHE_TTL_MS) {
    return { data: adminsCache.data, builtAt: adminsCache.builtAt, version: adminsCache.version, fromCache: true };
  }
  if (adminsCache.building) {
    const data = await adminsCache.building;
    return { data, builtAt: adminsCache.builtAt, version: adminsCache.version, fromCache: false };
  }
  adminsCache.building = buildAdminsSnapshot()
    .then((data) => {
      adminsCache = { data, builtAt: Date.now(), version: adminsCache.version + 1, building: null };
      // Kick off auto-backfill in the background if we found unknowns and BM is available.
      const hasUnknowns = data.admins.some((a) => !a.displayName || a.displayName === '?');
      if (hasUnknowns) maybeAutoBackfill();
      return data;
    })
    .catch((err) => {
      adminsCache.building = null;
      throw err;
    });
  const data = await adminsCache.building;
  return { data, builtAt: adminsCache.builtAt, version: adminsCache.version, fromCache: false };
}

let autoBackfillInFlight = false;
let autoBackfillLastRunAt = 0;
const AUTO_BACKFILL_MIN_INTERVAL_MS = 10 * 60 * 1000;

async function runBackfillCascade(useBattleMetrics) {
  const servers = await listReforgerServersCached();
  const state = await readAdminMgrState();
  const reads = await Promise.all(servers.map((s) => readServerAdmins(s, state.configOverrides)));
  const allGuids = new Set();
  for (const r of reads) for (const g of r.admins) allGuids.add(g);
  for (const g of Object.keys(state.admins || {})) allGuids.add(g);

  const { piiByGuid, snapByGuid } = await adminMgrLoadLocalNameSources();

  let resolved = 0;
  let unknown = 0;
  const cacheUpdates = new Map();

  for (const guid of allGuids) {
    const existing = state.admins[guid];
    if (existing && existing.displayName && existing.displayName !== '?' && existing.source === 'manual') {
      continue;
    }
    let name = '';
    let source = 'unknown';
    if (piiByGuid.has(guid)) { name = piiByGuid.get(guid).name; source = 'pii'; }
    else if (snapByGuid.has(guid)) { name = snapByGuid.get(guid); source = 'snapshot'; }
    else if (useBattleMetrics) {
      const r = await adminMgrFetchBmName(guid);
      if (r) { name = r; source = 'battlemetrics'; }
    }
    if (name) {
      state.admins[guid] = { ...(existing || {}), displayName: name, source, updatedAt: Date.now() };
      cacheUpdates.set(guid, { displayName: name, source });
      resolved++;
    } else {
      state.admins[guid] = { ...(existing || {}), displayName: existing?.displayName || '?', source: existing?.source || 'unknown', updatedAt: Date.now() };
      unknown++;
    }
  }

  state.lastBackfillAt = Date.now();
  await writeAdminMgrState(state);
  applyCacheNameResolutions(cacheUpdates);
  return { resolved, unknown, total: allGuids.size };
}

function maybeAutoBackfill() {
  if (autoBackfillInFlight) return;
  if (Date.now() - autoBackfillLastRunAt < AUTO_BACKFILL_MIN_INTERVAL_MS) return;
  autoBackfillInFlight = true;
  autoBackfillLastRunAt = Date.now();
  (async () => {
    try {
      const r = await runBackfillCascade(adminMgrBmAvailable());
      console.log(`[adminmgr] auto-backfill: resolved ${r.resolved}, unknown ${r.unknown} of ${r.total}`);
    } catch (e) {
      console.warn(`[adminmgr] auto-backfill failed: ${e.message}`);
    } finally {
      autoBackfillInFlight = false;
    }
  })();
}

async function adminMgrLoadLocalNameSources() {
  const piiByGuid = new Map();
  const snapByGuid = new Map();
  let serverDirs = [];
  try {
    serverDirs = await fs.readdir(path.join(DATA_DIR, 'servers'));
  } catch {
    return { piiByGuid, snapByGuid };
  }
  for (const safeId of serverDirs) {
    const dir = path.join(DATA_DIR, 'servers', safeId);
    const pii = await readJsonOrNull(path.join(dir, 'pii.json'));
    if (pii && typeof pii === 'object') {
      for (const [uid, rec] of Object.entries(pii)) {
        if (!rec || typeof rec !== 'object') continue;
        const names = Array.isArray(rec.names) ? rec.names : [];
        const lastName = names.length > 0 ? names[names.length - 1] : '';
        const lastSeen = typeof rec.lastSeen === 'number' ? rec.lastSeen : 0;
        if (!lastName) continue;
        const cur = piiByGuid.get(uid);
        if (!cur || lastSeen > cur.lastSeen) piiByGuid.set(uid, { name: lastName, lastSeen });
      }
    }
    const snap = await readJsonOrNull(path.join(dir, 'latestSnapshot.json'));
    const players = snap && Array.isArray(snap.players) ? snap.players : [];
    for (const p of players) {
      if (!p || typeof p !== 'object') continue;
      const uid = typeof p.identityId === 'string' ? p.identityId : '';
      const name = typeof p.name === 'string' ? p.name : '';
      if (uid && name && !snapByGuid.has(uid)) snapByGuid.set(uid, name);
    }
  }
  return { piiByGuid, snapByGuid };
}

async function readServerAdmins(server, overrides) {
  const conn = adminMgrSshHostForRegion(server.region);
  if (!conn?.host) return { ok: false, error: 'ssh_host_not_configured', admins: [] };
  const remotePath = configPathFor(server, overrides);
  // Reads can hop through a second box (NA, EU3) — retry once so a transient SSH
  // hiccup doesn't surface as a scary config_not_found and poison the cached snapshot.
  let lastErr = 'read_failed';
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const cfg = await sshReadFile(server, remotePath);
      if (cfg) {
        const list = adminMgrGetAtPath(cfg, ADMIN_MGR_CONFIG_FIELD);
        const admins = Array.isArray(list) ? list.filter((g) => typeof g === 'string' && g) : [];
        return { ok: true, admins };
      }
      lastErr = 'config_not_found';
    } catch (e) {
      lastErr = e.message || 'read_failed';
    }
    if (attempt === 0) await new Promise((r) => setTimeout(r, 600));
  }
  console.error(`[adminmgr] read failed for ${server.tag || server.pteroId} (${remotePath}): ${lastErr}`);
  return { ok: false, error: lastErr, admins: [] };
}

app.get('/api/adminmgr/servers', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  if (!ADMIN_MGR_PTERO_URL || !ADMIN_MGR_PTERO_KEY) {
    res.status(503).json({ error: 'pterodactyl_not_configured' });
    return;
  }
  const servers = await listReforgerServersCached();
  const state = await readAdminMgrState();
  const enriched = servers.map((s) => ({
    ...s,
    configPath: configPathFor(s, state.configOverrides),
    sshConfigured: !!adminMgrSshHostForRegion(s.region)?.host,
  }));
  res.json({ servers: enriched, dryRun: adminMgrIsDryRun() });
}));

app.get('/api/adminmgr/dryrun', requireAuth, requireTool('gmManagement'), (req, res) => {
  res.json({ enabled: adminMgrIsDryRun(), bmAvailable: adminMgrBmAvailable() });
});

app.get('/api/adminmgr/admins', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  if (!ADMIN_MGR_PTERO_URL || !ADMIN_MGR_PTERO_KEY) {
    res.status(503).json({ error: 'pterodactyl_not_configured' });
    return;
  }
  const force = req.query.force === '1';
  const clientVersion = parseInt(String(req.query.since || '0'), 10) || 0;
  const { data, builtAt, version, fromCache } = await getAdminsSnapshot({ force });

  if (clientVersion && clientVersion === version) {
    res.status(304).json({ unchanged: true, builtAt, version });
    return;
  }
  res.json({ ...data, builtAt, version, fromCache });
}));

app.post('/api/adminmgr/toggle', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const guid = String(req.body?.guid || '').trim();
  const pteroId = String(req.body?.pteroId || '').trim();
  const present = !!req.body?.present;

  if (!adminMgrIsValidGuid(guid)) { res.status(400).json({ error: 'invalid_guid' }); return; }
  if (!adminMgrIsValidPteroId(pteroId)) { res.status(400).json({ error: 'invalid_pteroId' }); return; }

  const servers = await listReforgerServersCached();
  const server = servers.find((s) => s.pteroId === pteroId);
  if (!server) { res.status(404).json({ error: 'server_not_found' }); return; }

  const conn = adminMgrSshHostForRegion(server.region);
  if (!conn?.host) { res.status(503).json({ error: 'ssh_host_not_configured' }); return; }

  // Optimistic cache update so revalidating clients see the change before SSH finishes.
  applyCacheToggle(pteroId, guid, present);

  const state = await readAdminMgrState();
  const remotePath = configPathFor(server, state.configOverrides);

  let result = { changed: false, present, count: 0 };
  try {
    await withIngestLock(`adminmgr:${pteroId}`, async () => {
      result = await atomicMutateConfig(server, remotePath, (cfg) => {
        const current = adminMgrGetAtPath(cfg, ADMIN_MGR_CONFIG_FIELD);
        const list = Array.isArray(current) ? current.filter((g) => typeof g === 'string') : [];
        const has = list.includes(guid);

        let nextList = list;
        let changed = false;
        if (present && !has) { nextList = [...list, guid]; changed = true; }
        else if (!present && has) { nextList = list.filter((g) => g !== guid); changed = true; }

        if (changed) adminMgrSetAtPath(cfg, ADMIN_MGR_CONFIG_FIELD, nextList);
        return { changed, present, count: nextList.length };
      });
      if (result.changed) {
        console.log(`[adminmgr] ${present ? 'added' : 'removed'} ${guid} on ${server.tag || server.pteroId}`);
      }
    });
  } catch (e) {
    // Roll the cache back so the client's next revalidation matches reality.
    applyCacheToggle(pteroId, guid, !present);
    throw e;
  }

  // Granting a GM on a server registers them as a real GM ('manual'), so the
  // roster's PQ filter never hides them and the shop's periodic sync can't make
  // them look like a lapsed priority-queue entry. Removing from one server does
  // NOT unregister them — they stay a GM (just off that server). Deleting a GM
  // entirely is the delete route's job.
  const cur = await readAdminMgrState();
  let stateChanged = false;
  if (present) {
    const existing = cur.admins[guid] || {};
    if (existing.source !== 'manual' || !existing.displayName) {
      cur.admins[guid] = {
        ...existing,
        displayName: existing.displayName || '?',
        source: 'manual',
        updatedAt: Date.now(),
      };
      stateChanged = true;
      applyCacheUpsertAdmin(guid, { source: 'manual', displayName: cur.admins[guid].displayName });
    }
  }
  if (result.changed || stateChanged) {
    cur.lastSyncAt = Date.now();
    await writeAdminMgrState(cur);
  }

  res.json({ ok: true, ...result, dryRun: adminMgrIsDryRun() });
}));

app.post('/api/adminmgr/admin', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const guid = String(req.body?.guid || '').trim();
  const displayName = typeof req.body?.displayName === 'string' ? req.body.displayName.trim().slice(0, 64) : '';
  if (!adminMgrIsValidGuid(guid)) { res.status(400).json({ error: 'invalid_guid' }); return; }

  const state = await readAdminMgrState();
  const existing = state.admins[guid] || {};
  const finalDisplayName = displayName || existing.displayName || '?';
  const finalSource = displayName ? 'manual' : (existing.source || 'manual');
  state.admins[guid] = {
    ...existing,
    displayName: finalDisplayName,
    source: finalSource,
    updatedAt: Date.now(),
  };
  await writeAdminMgrState(state);
  applyCacheUpsertAdmin(guid, { displayName: finalDisplayName, source: finalSource });
  res.json({ ok: true });
}));

app.put('/api/adminmgr/admin/:guid', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const guid = String(req.params.guid || '').trim();
  const displayName = typeof req.body?.displayName === 'string' ? req.body.displayName.trim().slice(0, 64) : '';
  if (!adminMgrIsValidGuid(guid)) { res.status(400).json({ error: 'invalid_guid' }); return; }
  if (!displayName) { res.status(400).json({ error: 'invalid_displayName' }); return; }

  const state = await readAdminMgrState();
  state.admins[guid] = {
    ...(state.admins[guid] || {}),
    displayName,
    source: 'manual',
    updatedAt: Date.now(),
  };
  await writeAdminMgrState(state);
  applyCacheUpsertAdmin(guid, { displayName, source: 'manual' });
  res.json({ ok: true });
}));

app.delete('/api/adminmgr/admin/:guid', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const guid = String(req.params.guid || '').trim();
  if (!adminMgrIsValidGuid(guid)) { res.status(400).json({ error: 'invalid_guid' }); return; }

  const servers = await listReforgerServersCached();
  const state = await readAdminMgrState();

  // Optimistically remove from cache so revalidating clients don't see the deleted admin.
  applyCacheDeleteAdmin(guid);

  const removals = await Promise.all(servers.map(async (server) => {
    const conn = adminMgrSshHostForRegion(server.region);
    if (!conn?.host) return { server, removed: false, error: 'ssh_host_not_configured' };
    const remotePath = configPathFor(server, state.configOverrides);
    try {
      let removed = false;
      await withIngestLock(`adminmgr:${server.pteroId}`, async () => {
        const r = await atomicMutateConfig(server, remotePath, (cfg) => {
          const list = adminMgrGetAtPath(cfg, ADMIN_MGR_CONFIG_FIELD);
          if (!Array.isArray(list) || !list.includes(guid)) return { changed: false };
          adminMgrSetAtPath(cfg, ADMIN_MGR_CONFIG_FIELD, list.filter((g) => g !== guid));
          return { changed: true };
        });
        removed = r.changed;
      });
      return { server, removed };
    } catch (e) {
      console.error(`[adminmgr] delete failed on ${server.tag || server.pteroId}: ${e.message}`);
      return { server, removed: false, error: e.message || 'failed' };
    }
  }));

  delete state.admins[guid];
  state.lastSyncAt = Date.now();
  await writeAdminMgrState(state);

  const summary = removals.map((r) => ({
    pteroId: r.server.pteroId,
    tag: r.server.tag,
    removed: r.removed,
    error: r.error || null,
  }));
  console.log(`[adminmgr] deleted ${guid}: removed from ${summary.filter((s) => s.removed).length}/${servers.length} servers`);
  res.json({ ok: true, results: summary, dryRun: adminMgrIsDryRun() });
}));

app.post('/api/adminmgr/backfill', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const useBattleMetrics = req.body?.useBattleMetrics === undefined ? adminMgrBmAvailable() : !!req.body.useBattleMetrics;
  const r = await runBackfillCascade(useBattleMetrics);
  res.json({ ok: true, ...r, bmAvailable: adminMgrBmAvailable() });
}));

// ─── Priority Queue (proxy to reforgedz-dotnet shop) ────────────────────────
async function shopFetchProxy(path, opts = {}) {
  if (!SHOP_ADMIN_API_KEY) {
    const err = new Error('SHOP_ADMIN_API_KEY not configured on admin page');
    err.status = 503;
    throw err;
  }
  const headers = {
    'X-Shop-Admin-Key': SHOP_ADMIN_API_KEY,
    Accept: 'application/json',
    ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
    ...(opts.headers || {})
  };
  const r = await fetch(`${SHOP_BASE_URL}${path}`, { ...opts, headers });
  const text = await r.text();
  let body = null;
  try { body = text ? JSON.parse(text) : {}; } catch { body = { error: text }; }
  return { status: r.status, body };
}

app.get('/api/priority-queue', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const { status, body } = await shopFetchProxy('/api/shop/admin/priority-queue');
  res.status(status).json(body);
}));

app.post('/api/priority-queue', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const { status, body } = await shopFetchProxy('/api/shop/admin/priority-queue', {
    method: 'POST',
    body: JSON.stringify(req.body || {})
  });
  res.status(status).json(body);
}));

app.post('/api/priority-queue/toggle', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const { status, body } = await shopFetchProxy('/api/shop/admin/priority-queue/toggle', {
    method: 'POST',
    body: JSON.stringify(req.body || {})
  });
  res.status(status).json(body);
}));

app.delete('/api/priority-queue/:guid', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const guid = encodeURIComponent(req.params.guid);
  const { status, body } = await shopFetchProxy(`/api/shop/admin/priority-queue/${guid}`, {
    method: 'DELETE'
  });
  res.status(status).json(body);
}));

app.post('/api/priority-queue/extend', requireAuth, requireTool('gmManagement'), asyncRoute(async (req, res) => {
  const { status, body } = await shopFetchProxy('/api/shop/admin/priority-queue/extend', {
    method: 'POST',
    body: JSON.stringify(req.body || {})
  });
  res.status(status).json(body);
}));


app.post('/api/replay/ingest', async (req, res) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      res.status(400).send('Invalid JSON');
      return;
    }

    const serverId = typeof payload.serverId === 'string' ? payload.serverId : '';
    const serverKey = typeof payload.serverKey === 'string' ? payload.serverKey : '';

    if (!serverId || !serverKey) {
      res.status(400).send('Missing serverId/serverKey');
      return;
    }

    const safeId = sanitizeServerId(serverId);
    const expectedKey = getExpectedIngestKey(serverId, safeId);

    if (!expectedKey || !timingSafeEqualString(serverKey, expectedKey)) {
      res.status(401).send('Invalid serverKey');
      return;
    }

    let commandsToSend = null;
    let isShutoff = false;

    await withIngestLock(safeId, async () => {
      const receivedAt = Date.now();
      const serverDir = path.join(DATA_DIR, 'servers', safeId);
      await ensureDir(serverDir);

      // Normalize timestamps so replays stay continuous across Reforger server restarts.
      // Exporter provides a per-run sessionId; we apply a stable offset per sessionId.
      const idxPath = path.join(serverDir, 'index.json');
      const prev = (await readJsonOrNull(idxPath)) || {};

      if (prev.shutoff) {
        isShutoff = true;
        return;
      }

      const normalizedPayload = { ...payload };

      const sessionId = typeof payload.sessionId === 'string' ? payload.sessionId : '';
      const sessionTsMs = (typeof payload.tsMs === 'number') ? payload.tsMs : null;

      let tsMs = sessionTsMs;
      let sessions = (prev.sessions && typeof prev.sessions === 'object' && !Array.isArray(prev.sessions)) ? prev.sessions : {};
      let sessionOffsetMs = null;
      let isNewSession = false;

      if (sessionId && sessionTsMs !== null) {
        // Ensure we don't mutate prev.sessions in-place.
        sessions = { ...sessions };

        const existing = sessions[sessionId] && typeof sessions[sessionId] === 'object' ? sessions[sessionId] : null;
        if (!existing) {
          isNewSession = true;
          const prevMax = typeof prev.maxTsMs === 'number' ? prev.maxTsMs : null;
          const offsetMs = (prevMax !== null) ? ((prevMax + 1) - sessionTsMs) : (-sessionTsMs);
          sessions[sessionId] = {
            offsetMs,
            firstReceivedAt: receivedAt,
            firstSessionTsMs: sessionTsMs,
          };
          sessionOffsetMs = offsetMs;
        } else {
          sessionOffsetMs = typeof existing.offsetMs === 'number' ? existing.offsetMs : 0;
        }

        tsMs = sessionTsMs + sessionOffsetMs;
        normalizedPayload.sessionId = sessionId;
        normalizedPayload.sessionTsMs = sessionTsMs;
        normalizedPayload.sessionOffsetMs = sessionOffsetMs;
        normalizedPayload.tsMs = tsMs;

        // Update lightweight per-session stats (best-effort)
        const info = sessions[sessionId];
        if (info && typeof info === 'object') {
          info.lastReceivedAt = receivedAt;
          info.lastSessionTsMs = sessionTsMs;
          info.lastTsMs = tsMs;
        }
      }

      const record = {
        receivedAt,
        remoteAddr: req.ip,
        payload: normalizedPayload,
      };

      const eventsPath = path.join(serverDir, 'events.ndjson');

      const appendedCount = 1 + (isNewSession && sessionId && sessionTsMs !== null && typeof tsMs === 'number' ? 1 : 0);

      if (isNewSession && sessionId && sessionTsMs !== null && typeof tsMs === 'number') {
        const restartRecord = {
          receivedAt,
          remoteAddr: req.ip,
          payload: {
            type: 'restart',
            tsMs,
            sessionId,
            sessionTsMs,
            sessionOffsetMs,
            event: { reason: 'session_start' },
          },
        };
        await fs.appendFile(eventsPath, `${JSON.stringify(restartRecord)}\n`, 'utf8');

        pushReplayRecent(safeId, restartRecord);
      }

      await fs.appendFile(eventsPath, `${JSON.stringify(record)}\n`, 'utf8');

      pushReplayRecent(safeId, record);

      let minTsMs = (typeof prev.minTsMs === 'number') ? prev.minTsMs : null;
      let maxTsMs = (typeof prev.maxTsMs === 'number') ? prev.maxTsMs : null;
      if (tsMs !== null) {
        if (minTsMs === null || tsMs < minTsMs) minTsMs = tsMs;
        if (maxTsMs === null || tsMs > maxTsMs) maxTsMs = tsMs;
      }

      let next = {
        ...prev,
        id: safeId,
        name: typeof prev.name === 'string' ? prev.name : safeId,
        firstReceivedAt: (typeof prev.firstReceivedAt === 'number') ? prev.firstReceivedAt : receivedAt,
        lastReceivedAt: receivedAt,
        lastIngestTsMs: tsMs,
        lastSessionId: sessionId || (typeof prev.lastSessionId === 'string' ? prev.lastSessionId : undefined),
        minTsMs,
        maxTsMs,
        storedEvents: (typeof prev.storedEvents === 'number' ? prev.storedEvents : (typeof prev.lastCompactionKept === 'number' ? prev.lastCompactionKept : 0)) + appendedCount,
        totalEvents: (typeof prev.totalEvents === 'number' ? prev.totalEvents : 0) + appendedCount,
        retentionMs: RETENTION_MS > 0 ? RETENTION_MS : 0,
        sessions,
      };

      // Map identity: exporter sends this once per Reforger server restart.
      if (normalizedPayload && normalizedPayload.type === 'map') {
        const wf = normalizedPayload.event && typeof normalizedPayload.event === 'object'
          ? normalizedPayload.event.worldFile
          : null;

        const worldFile = typeof wf === 'string' ? wf : '';
        if (worldFile) {
          const mapId = crypto.createHash('sha256').update(worldFile, 'utf8').digest('hex').slice(0, 16);
          next.mapId = mapId;
          next.mapWorldFile = worldFile;

          await ensureDir(MAPS_DIR);
          const mapPath = path.join(MAPS_DIR, `${mapId}.json`);
          const existingMap = await readJsonOrNull(mapPath);
          const existingWorldFile = existingMap && typeof existingMap === 'object' && typeof existingMap.worldFile === 'string'
            ? existingMap.worldFile
            : null;

          if (existingWorldFile !== worldFile) {
            await writeJsonAtomic(mapPath, {
              mapId,
              worldFile,
              createdAt: receivedAt,
              updatedAt: receivedAt,
            });
          } else {
            // Touch last-seen timestamp (best-effort).
            await writeJsonAtomic(mapPath, {
              ...existingMap,
              mapId,
              worldFile,
              updatedAt: receivedAt,
            });
          }
        }
      }

      // Terrain cache: exporter can send a height grid once per server restart.
      if (normalizedPayload && normalizedPayload.type === 'terrain') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object'
          ? normalizedPayload.event
          : null;

        const wf = ev ? ev.worldFile : null;
        const worldFile = typeof wf === 'string' ? wf : '';
        const mapId = worldFile
          ? crypto.createHash('sha256').update(worldFile, 'utf8').digest('hex').slice(0, 16)
          : (typeof next.mapId === 'string' ? next.mapId : null);

        console.log(`[terrain] Received terrain payload: mapId=${mapId}, worldFile=${worldFile}, hasEvent=${!!ev}, heightsLen=${ev && Array.isArray(ev.heights) ? ev.heights.length : 0}, gridW=${ev ? ev.gridW : '?'}, gridH=${ev ? ev.gridH : '?'}, bbMin=${JSON.stringify(ev ? ev.bbMin : null)}, bbMax=${JSON.stringify(ev ? ev.bbMax : null)}`);

        if (mapId) {
          next.mapId = mapId;
          if (worldFile) next.mapWorldFile = worldFile;

          await ensureDir(MAPS_DIR);
          const terrainPath = path.join(MAPS_DIR, `${mapId}.terrain.json`);
          const existing = await readJsonOrNull(terrainPath);
          const hasHeights = ev && Array.isArray(ev.heights) && ev.heights.length > 0;

          if (hasHeights) {
            console.log(`[terrain] Writing terrain with ${ev.heights.length} heights to ${terrainPath}`);
            await writeJsonAtomic(terrainPath, {
              mapId,
              worldFile,
              createdAt: (existing && existing.createdAt) || receivedAt,
              updatedAt: receivedAt,
              ...ev,
            });
          } else if (!existing) {
            console.log(`[terrain] Writing terrain stub (no heights) to ${terrainPath}`);
            await writeJsonAtomic(terrainPath, {
              mapId,
              worldFile,
              createdAt: receivedAt,
              updatedAt: receivedAt,
              ...ev,
            });
          } else {
            console.log(`[terrain] Skipped write: no heights and file already exists at ${terrainPath}`);
          }
        } else {
          console.log(`[terrain] No mapId could be determined, skipping terrain save`);
        }
      }

      // Town names cache: exporter can send a list of map name descriptors once per server restart.
      if (normalizedPayload && normalizedPayload.type === 'towns') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object'
          ? normalizedPayload.event
          : null;

        const wf = ev ? ev.worldFile : null;
        const worldFile = typeof wf === 'string' ? wf : '';
        const mapId = worldFile
          ? crypto.createHash('sha256').update(worldFile, 'utf8').digest('hex').slice(0, 16)
          : (typeof next.mapId === 'string' ? next.mapId : null);

        if (mapId) {
          next.mapId = mapId;
          if (worldFile) next.mapWorldFile = worldFile;

          await ensureDir(MAPS_DIR);
          const townsPath = path.join(MAPS_DIR, `${mapId}.towns.json`);
          const existing = await readJsonOrNull(townsPath);

          // Count towns with a real (non-origin) position. A town's pos is an [x,y,z] array.
          const townHasPos = (t) => {
            const p = t && t.pos;
            if (Array.isArray(p)) return Math.abs(p[0] || 0) > 1 || Math.abs(p[2] || 0) > 1;
            if (p && typeof p === 'object') return Math.abs(p.x || 0) > 1 || Math.abs(p.z || 0) > 1;
            return false;
          };
          const incomingNonZero = Array.isArray(ev.towns) ? ev.towns.filter(townHasPos).length : 0;
          const existingNonZero = (existing && Array.isArray(existing.towns)) ? existing.towns.filter(townHasPos).length : 0;

          // Write when there's nothing yet, the world changed, or the incoming data is at
          // least as good (has real positions) — so a corrected capture can replace cached
          // 0,0,0 data, but a bad all-origin capture can't clobber good data.
          const shouldWrite = !existing
            || (worldFile && typeof existing.worldFile === 'string' && existing.worldFile !== worldFile)
            || (incomingNonZero > 0 && incomingNonZero >= existingNonZero);

          if (shouldWrite) {
            await writeJsonAtomic(townsPath, {
              mapId,
              worldFile,
              createdAt: receivedAt,
              updatedAt: receivedAt,
              ...ev,
            });
          } else {
            await writeJsonAtomic(townsPath, {
              ...existing,
              mapId,
              worldFile: worldFile || (existing && existing.worldFile),
              updatedAt: receivedAt,
            });
          }
        }
      }

      // Full map descriptors cache (optional; newer exporters).
      if (normalizedPayload && normalizedPayload.type === 'descriptors') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object'
          ? normalizedPayload.event
          : null;

        const wf = ev ? ev.worldFile : null;
        const worldFile = typeof wf === 'string' ? wf : '';
        const mapId = worldFile
          ? crypto.createHash('sha256').update(worldFile, 'utf8').digest('hex').slice(0, 16)
          : (typeof next.mapId === 'string' ? next.mapId : null);

        if (mapId) {
          next.mapId = mapId;
          if (worldFile) next.mapWorldFile = worldFile;

          await ensureDir(MAPS_DIR);
          const descriptorsPath = path.join(MAPS_DIR, `${mapId}.descriptors.json`);
          const existing = await readJsonOrNull(descriptorsPath);

          const shouldWrite = !existing
            || (existing && typeof existing === 'object' && worldFile && typeof existing.worldFile === 'string' && existing.worldFile !== worldFile);

          if (shouldWrite) {
            await writeJsonAtomic(descriptorsPath, {
              mapId,
              worldFile,
              createdAt: receivedAt,
              updatedAt: receivedAt,
              ...ev,
            });
          } else {
            await writeJsonAtomic(descriptorsPath, {
              ...existing,
              mapId,
              worldFile: worldFile || (existing && existing.worldFile),
              updatedAt: receivedAt,
            });
          }
        }
      }

      // Admin bridge: persist latest health/ban/mute data.
      if (normalizedPayload && normalizedPayload.type === 'serverHealth') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        await writeJsonAtomic(path.join(serverDir, 'latestHealth.json'), {
          serverId: safeId,
          fps: typeof ev.fps === 'number' ? ev.fps : 0,
          playerCount: typeof ev.playerCount === 'number' ? ev.playerCount : 0,
          tsMs: receivedAt,
        });
      }

      if (normalizedPayload && normalizedPayload.type === 'banSync') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        await writeJsonAtomic(path.join(serverDir, 'latestBans.json'), {
          bans: Array.isArray(ev.bans) ? ev.bans : [],
          updatedAt: receivedAt,
        });
      }

      if (normalizedPayload && normalizedPayload.type === 'muteSync') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        await writeJsonAtomic(path.join(serverDir, 'latestMutes.json'), {
          mutes: Array.isArray(ev.mutes) ? ev.mutes : [],
          updatedAt: receivedAt,
        });
      }

      if (normalizedPayload && normalizedPayload.type === 'vehicleIndex') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        await writeJsonAtomic(path.join(serverDir, 'latestVehicles.json'), {
          vehicles: Array.isArray(ev.vehicles) ? ev.vehicles : [],
          tsMs: typeof tsMs === 'number' ? tsMs : 0,
          updatedAt: receivedAt,
        });
      }

      if (normalizedPayload && normalizedPayload.type === 'vehicleDetail') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        const reqId = typeof ev.requestId === 'string' ? ev.requestId : '';
        const entityId = typeof ev.entityId === 'string' ? ev.entityId : '';
        if (reqId) {
          await writeJsonAtomic(path.join(serverDir, `vehicleDetail-${reqId}.json`), {
            entityId,
            requestId: reqId,
            inventory: Array.isArray(ev.inventory) ? ev.inventory : [],
            updatedAt: receivedAt,
          });
        }
      }

      if (normalizedPayload && normalizedPayload.type === 'itemCatalog') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        const items = Array.isArray(ev.items)
          ? ev.items
              .filter((x) => x && typeof x.prefab === 'string' && x.prefab)
              .map((x) => ({ prefab: x.prefab, name: typeof x.name === 'string' ? x.name : '' }))
          : [];
        if (items.length > 0) {
          await writeJsonAtomic(path.join(DATA_DIR, 'itemCatalog.json'), {
            items,
            updatedAt: receivedAt,
            serverId: typeof normalizedPayload.serverId === 'string' ? normalizedPayload.serverId : '',
          });
        }
      }

      if (normalizedPayload && normalizedPayload.type === 'spawnCatalog') {
        const ev = normalizedPayload.event && typeof normalizedPayload.event === 'object' ? normalizedPayload.event : {};
        const items = Array.isArray(ev.items)
          ? ev.items
              .filter((x) => x && typeof x.prefab === 'string' && x.prefab)
              .map((x) => ({ prefab: x.prefab, name: typeof x.name === 'string' ? x.name : '', kind: typeof x.kind === 'string' ? x.kind : '' }))
          : [];
        if (items.length > 0) {
          await writeJsonAtomic(path.join(DATA_DIR, 'spawnCatalog.json'), {
            items,
            updatedAt: receivedAt,
            serverId: typeof normalizedPayload.serverId === 'string' ? normalizedPayload.serverId : '',
          });
        }
      }

      // Enforce 24h rolling buffer.
      next = await maybeCompactServerEvents(serverDir, next, tsMs);

      // If a dev/user queued commands, pass them to the exporter via the ingest response.
      // Clear them once returned so the request is one-shot.
      const pending = (next.pendingCommands && typeof next.pendingCommands === 'object' && !Array.isArray(next.pendingCommands))
        ? next.pendingCommands
        : null;
      if (pending && Object.keys(pending).length > 0) {
        commandsToSend = pending;
        next = { ...next, pendingCommands: {} };
      }

      await writeJsonAtomic(idxPath, next);

      if (normalizedPayload && normalizedPayload.type === 'snapshot' && Array.isArray(normalizedPayload.players)) {
        const latestSnapPath = path.join(serverDir, 'latestSnapshot.json');
        const minimalSnap = {
          tsMs,
          players: normalizedPayload.players,
        };
        await writeJsonAtomic(latestSnapPath, minimalSnap);
      }

      // PII tracking: record player data from join events and snapshots
      await updatePiiFromPayload(serverDir, normalizedPayload, receivedAt);
    });

    if (isShutoff) {
      res.json({ ok: true, shutoff: true });
      return;
    }
    res.json(commandsToSend ? { ok: true, commands: commandsToSend } : { ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[reforgedz] ingest error', err);
    res.status(500).send('Ingest failed');
  }
});

// ─── In-game bans + mutes implementation ───────────────────────────────────
// Reads/writes ReforgedZBans.json + ReforgedZMutes.json on each game server
// volume via the same SSH helpers GM Management uses for config.json. Routes
// gated by moderation.viewIngameBans / editIngameBans / viewIngameMutes /
// editIngameMutes.

const INGAME_BANS_PATH  = '/profile/profile/ReforgedZBans.json';
const INGAME_MUTES_PATH = '/profile/profile/ReforgedZMutes.json';
const INGAME_RESERVED_TAGS = new Set(['na3', 'eu3']); // no longer running

function ingameVolumePath(volumeUuid, suffix) {
  return `/var/lib/pterodactyl/volumes/${volumeUuid}${suffix}`;
}

function ingameKindMeta(kind) {
  if (kind === 'bans') {
    return {
      suffix: INGAME_BANS_PATH,
      listKey: 'bans',
      fields: {
        uid: 'uid', name: 'name', reason: 'reason',
        timestamp: 'timestamp', duration: 'duration', by: 'bannedBy'
      }
    };
  }
  if (kind === 'mutes') {
    return {
      suffix: INGAME_MUTES_PATH,
      listKey: 'mutes',
      fields: {
        uid: 'm_sPlayerUID', name: 'm_sPlayerName', reason: 'm_sMuteReason',
        timestamp: 'm_iMuteTimestamp', duration: 'm_iMuteDuration', by: 'm_sMutedBy'
      }
    };
  }
  return null;
}

function ingameToApi(rec, meta) {
  const f = meta.fields;
  return {
    uid: rec[f.uid],
    name: rec[f.name],
    reason: rec[f.reason],
    timestamp: rec[f.timestamp],
    duration: rec[f.duration],
    by: rec[f.by]
  };
}

function ingameFromApi(api, meta) {
  const f = meta.fields;
  return {
    [f.uid]: String(api.uid || '').toLowerCase(),
    [f.name]: String(api.name || ''),
    [f.reason]: String(api.reason || ''),
    [f.timestamp]: Number(api.timestamp) || Math.floor(Date.now() / 1000),
    [f.duration]: Number(api.duration) || 0,
    [f.by]: String(api.by || '')
  };
}

async function loadIngameServers() {
  const all = await listReforgerServersCached();
  return all.filter((s) => !INGAME_RESERVED_TAGS.has(String(s.tag || '').toLowerCase()));
}

// SSH round-trips per server are slow (~1-2s each) — cache parsed JSON
// per (server, kind) for 60s. Invalidated on every successful write so the
// list reflects new bans/mutes immediately after add/edit/remove.
const INGAME_CACHE_TTL_MS = 60_000;
const ingameJsonCache = new Map();
function ingameCacheKey(pteroId, kind) { return `${pteroId}:${kind}`; }

async function readIngameJson(server, kind, { skipCache = false } = {}) {
  const meta = ingameKindMeta(kind);
  const cacheKey = ingameCacheKey(server.pteroId, kind);
  if (!skipCache) {
    const hit = ingameJsonCache.get(cacheKey);
    if (hit && hit.expiresAt > Date.now()) return hit.value;
  }
  const remote = ingameVolumePath(server.volumeUuid, meta.suffix);
  const json = await sshReadFile(server, remote).catch((e) => {
    if (String(e?.message || '').includes('parse_failed')) return { [meta.listKey]: [] };
    throw e;
  });
  const result = json || { [meta.listKey]: [] };
  if (!Array.isArray(result[meta.listKey])) result[meta.listKey] = [];
  ingameJsonCache.set(cacheKey, { value: result, expiresAt: Date.now() + INGAME_CACHE_TTL_MS });
  return result;
}

async function writeIngameJson(server, kind, body) {
  const meta = ingameKindMeta(kind);
  const remote = ingameVolumePath(server.volumeUuid, meta.suffix);
  await sshWriteFile(server, remote, body);
  // Replace the cached copy with what we just wrote so the next read is
  // hot AND consistent (no race between SSH replication and a fresh read).
  ingameJsonCache.set(
    ingameCacheKey(server.pteroId, kind),
    { value: body, expiresAt: Date.now() + INGAME_CACHE_TTL_MS }
  );
}

// Run the per-server reads in parallel — the SSH connections are
// independent so this turns a 4× sequential cost into a single round-trip
// at the slowest server.
async function readIngameForAll(servers, kind) {
  return Promise.all(servers.map(async (server) => {
    try {
      const body = await readIngameJson(server, kind);
      return { server, body, error: null };
    } catch (err) {
      return { server, body: null, error: String(err?.message || err) };
    }
  }));
}

function ingameRequireView(kind) {
  return kind === 'mutes' ? requireBmPerm('viewIngameMutes') : requireBmPerm('viewIngameBans');
}
function ingameRequireEdit(kind) {
  return kind === 'mutes' ? requireBmPerm('editIngameMutes') : requireBmPerm('editIngameBans');
}

function mountIngameBansMutes(app, { requireAuth, requireBmPerm: _bm, asyncRoute }) {
  // _bm is passed in for clarity but we use the closure-scoped requireBmPerm.
  const KINDS = ['bans', 'mutes'];

  for (const kind of KINDS) {
    const meta = ingameKindMeta(kind);

    // GET /api/ingame/{bans|mutes}?server=eu1|all (default: all)
    app.get(`/api/ingame/${kind}`, requireAuth, ingameRequireView(kind), asyncRoute(async (req, res) => {
      const filter = String(req.query.server || 'all').toLowerCase();
      const servers = await loadIngameServers();
      const targets = filter === 'all' ? servers : servers.filter((s) => String(s.tag || '').toLowerCase() === filter);
      if (!targets.length && filter !== 'all') return res.json({ records: [], servers: [] });

      const reads = await readIngameForAll(targets, kind);
      const out = [];
      const errors = [];
      for (const { server, body, error } of reads) {
        if (error) { errors.push({ server: server.tag, error }); continue; }
        for (const rec of body[meta.listKey] || []) {
          out.push({ server: server.tag || server.pteroId, region: server.region, ...ingameToApi(rec, meta) });
        }
      }
      out.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      // Skip the browser HTTP cache — server-side TTL is enough and we
      // can't reliably bust the browser cache after a mutation in the
      // same tab. The 60s in-process cache already makes back-to-back
      // requests cheap.
      res.set('Cache-Control', 'no-store');
      res.json({
        records: out,
        servers: servers.map((s) => ({ tag: s.tag, region: s.region })),
        errors: errors.length ? errors : undefined
      });
    }));

    // POST /api/ingame/{bans|mutes}
    // Body: { uid, name, reason, duration, servers: ['eu1','eu2'] | [] (= all) }
    app.post(`/api/ingame/${kind}`, requireAuth, ingameRequireEdit(kind), asyncRoute(async (req, res) => {
      const body = req.body || {};
      if (!adminMgrIsValidGuid(body.uid)) return res.status(400).json({ error: 'invalid_uid' });
      const name = String(body.name || '').trim();
      if (!name) return res.status(400).json({ error: 'missing_name' });
      const reason = String(body.reason || '').trim() || 'No reason given';
      const duration = Math.max(0, parseInt(body.duration, 10) || 0);
      const allServers = await loadIngameServers();
      const requested = Array.isArray(body.servers) && body.servers.length
        ? body.servers.map((t) => String(t).toLowerCase())
        : allServers.map((s) => String(s.tag || '').toLowerCase());
      const targets = allServers.filter((s) => requested.includes(String(s.tag || '').toLowerCase()));
      if (!targets.length) return res.status(400).json({ error: 'no_servers' });

      const recordApi = {
        uid: body.uid.toLowerCase(),
        name, reason, duration,
        timestamp: Math.floor(Date.now() / 1000),
        by: req.rzUser.username
      };

      const results = [];
      for (const server of targets) {
        try {
          await withIngestLock(`ingame:${server.pteroId}:${kind}`, async () => {
            // skipCache: a mutation must never be computed from the 60s-cached
            // copy. The game server writes these ban/mute files too (in-game and
            // auto bans), so writing back a stale list silently wipes anything
            // added since the cache was filled.
            const json = await readIngameJson(server, kind, { skipCache: true });
            const list = json[meta.listKey];
            const idx = list.findIndex((r) => String(r[meta.fields.uid] || '').toLowerCase() === recordApi.uid);
            const newRec = ingameFromApi(recordApi, meta);
            if (idx >= 0) list[idx] = newRec; else list.push(newRec);
            await writeIngameJson(server, kind, json);
          });
          results.push({ server: server.tag, ok: true });
        } catch (err) {
          results.push({ server: server.tag, ok: false, error: String(err?.message || err) });
        }
      }
      postAuditEvent({
        actorUsername: req.rzUser.username,
        action: kind === 'mutes' ? 'ingame.mute.add' : 'ingame.ban.add',
        detail: { uid: recordApi.uid, name, reason, duration, servers: targets.map((s) => s.tag) },
        ctx: ctxFromReq(req)
      });
      res.json({ ok: true, record: recordApi, results });
    }));

    // PATCH /api/ingame/{bans|mutes}/:uid
    // Body: { servers?: [...] (default: all), patch: { reason?, duration?, name? } }
    app.patch(`/api/ingame/${kind}/:uid`, requireAuth, ingameRequireEdit(kind), asyncRoute(async (req, res) => {
      const uid = String(req.params.uid || '').toLowerCase();
      if (!adminMgrIsValidGuid(uid)) return res.status(400).json({ error: 'invalid_uid' });
      const patch = req.body?.patch || {};
      const allServers = await loadIngameServers();
      const requested = Array.isArray(req.body?.servers) && req.body.servers.length
        ? req.body.servers.map((t) => String(t).toLowerCase())
        : allServers.map((s) => String(s.tag || '').toLowerCase());
      const targets = allServers.filter((s) => requested.includes(String(s.tag || '').toLowerCase()));

      const results = [];
      for (const server of targets) {
        try {
          await withIngestLock(`ingame:${server.pteroId}:${kind}`, async () => {
            // skipCache: a mutation must never be computed from the 60s-cached
            // copy. The game server writes these ban/mute files too (in-game and
            // auto bans), so writing back a stale list silently wipes anything
            // added since the cache was filled.
            const json = await readIngameJson(server, kind, { skipCache: true });
            const list = json[meta.listKey];
            const idx = list.findIndex((r) => String(r[meta.fields.uid] || '').toLowerCase() === uid);
            if (idx < 0) {
              results.push({ server: server.tag, ok: false, error: 'not_found' });
              return;
            }
            const cur = list[idx];
            if (patch.reason !== undefined) cur[meta.fields.reason] = String(patch.reason);
            if (patch.name !== undefined) cur[meta.fields.name] = String(patch.name);
            if (patch.duration !== undefined) cur[meta.fields.duration] = Math.max(0, parseInt(patch.duration, 10) || 0);
            await writeIngameJson(server, kind, json);
            results.push({ server: server.tag, ok: true });
          });
        } catch (err) {
          results.push({ server: server.tag, ok: false, error: String(err?.message || err) });
        }
      }
      postAuditEvent({
        actorUsername: req.rzUser.username,
        action: kind === 'mutes' ? 'ingame.mute.update' : 'ingame.ban.update',
        detail: { uid, patch, servers: targets.map((s) => s.tag) },
        ctx: ctxFromReq(req)
      });
      res.json({ ok: true, results });
    }));

    // DELETE /api/ingame/{bans|mutes}/:uid?servers=eu1,eu2 (no servers = all)
    app.delete(`/api/ingame/${kind}/:uid`, requireAuth, ingameRequireEdit(kind), asyncRoute(async (req, res) => {
      const uid = String(req.params.uid || '').toLowerCase();
      if (!adminMgrIsValidGuid(uid)) return res.status(400).json({ error: 'invalid_uid' });
      const allServers = await loadIngameServers();
      const requested = typeof req.query.servers === 'string' && req.query.servers
        ? req.query.servers.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
        : allServers.map((s) => String(s.tag || '').toLowerCase());
      const targets = allServers.filter((s) => requested.includes(String(s.tag || '').toLowerCase()));

      const results = [];
      for (const server of targets) {
        try {
          await withIngestLock(`ingame:${server.pteroId}:${kind}`, async () => {
            // skipCache: a mutation must never be computed from the 60s-cached
            // copy. The game server writes these ban/mute files too (in-game and
            // auto bans), so writing back a stale list silently wipes anything
            // added since the cache was filled.
            const json = await readIngameJson(server, kind, { skipCache: true });
            const list = json[meta.listKey];
            const before = list.length;
            json[meta.listKey] = list.filter((r) => String(r[meta.fields.uid] || '').toLowerCase() !== uid);
            if (json[meta.listKey].length !== before) {
              await writeIngameJson(server, kind, json);
              results.push({ server: server.tag, ok: true, removed: true });
            } else {
              results.push({ server: server.tag, ok: true, removed: false });
            }
          });
        } catch (err) {
          results.push({ server: server.tag, ok: false, error: String(err?.message || err) });
        }
      }
      postAuditEvent({
        actorUsername: req.rzUser.username,
        action: kind === 'mutes' ? 'ingame.mute.remove' : 'ingame.ban.remove',
        detail: { uid, servers: targets.map((s) => s.tag) },
        ctx: ctxFromReq(req)
      });
      res.json({ ok: true, results });
    }));
  }
}

// Mount /api/ingame/* now that the helpers + consts above are initialised.
mountIngameBansMutes(app, { requireAuth, requireBmPerm, asyncRoute });

// ─── Developer settings (Discord webhook + server ingest keys) ───────────────
// Gated behind the `dev` admin permission.
app.get('/api/dev/servers', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  await loadDynamicIngestKeys();

  // Merge env-configured keys with dynamic ones.
  const combined = new Map();
  for (const [id, key] of ingestKeyMap.entries()) {
    combined.set(id, { key, name: undefined });
  }
  for (const [id, v] of dynamicIngestKeys.entries()) {
    combined.set(id, { key: v.key, name: v.name });
  }

  const out = [];
  for (const [id, v] of combined.entries()) {
    const keyHint = v && v.key ? `${v.key.slice(0, 2)}…${v.key.slice(-2)}` : '';

    let name = v && typeof v.name === 'string' && v.name.trim().length > 0 ? v.name.trim() : '';
    if (!name) {
      const safeId = sanitizeServerId(id);
      const idxPath = path.join(DATA_DIR, 'servers', safeId, 'index.json');
      const idx = await readJsonOrNull(idxPath);
      if (idx && typeof idx.name === 'string' && idx.name.trim().length > 0) name = idx.name.trim();
    }

    out.push({ id, name: name || id, keyHint });
  }
  out.sort((a, b) => a.id.localeCompare(b.id));
  res.json(out);
}));

app.get('/api/dev/discordWebhook', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const url = await getDiscordWebhookUrl();
  res.json({ isSet: Boolean(url), masked: url ? maskSecretUrl(url) : '' });
}));

app.post('/api/dev/discordWebhook', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const { webhookUrl } = req.body || {};
  if (typeof webhookUrl !== 'string') {
    res.status(400).send('Invalid webhookUrl');
    return;
  }

  const trimmed = webhookUrl.trim();
  if (trimmed.length === 0) {
    const st = await readSettings();
    const next = { ...st };
    delete next.discordWebhookUrl;
    await writeSettings(next);
    res.json({ ok: true, isSet: false, masked: '' });
    return;
  }

  // Must be a real Discord webhook URL — not just any https:// URL. The server
  // POSTs to this on export, so an arbitrary URL would be an authenticated SSRF.
  if (!/^https:\/\/(?:ptb\.|canary\.)?(?:discord|discordapp)\.com\/api\/(?:v\d+\/)?webhooks\/\d+\/[\w-]+/i.test(trimmed)) {
    res.status(400).send('Invalid webhookUrl (must be a Discord webhook URL)');
    return;
  }

  const st = await readSettings();
  await writeSettings({ ...st, discordWebhookUrl: trimmed });
  res.json({ ok: true, isSet: true, masked: maskSecretUrl(trimmed) });
}));

app.post('/api/dev/servers', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const { serverId, serverKey, name } = req.body || {};
  if (typeof serverId !== 'string' || serverId.trim().length === 0) {
    res.status(400).send('Invalid serverId');
    return;
  }
  if (typeof serverKey !== 'string' || serverKey.trim().length < 6) {
    res.status(400).send('Invalid serverKey');
    return;
  }

  const id = serverId.trim();
  const key = serverKey.trim();
  const safeId = sanitizeServerId(id);

  const existing = await readJsonOrNull(INGEST_KEYS_PATH);
  const servers = existing && existing.servers && typeof existing.servers === 'object' && !Array.isArray(existing.servers) ? existing.servers : {};
  const nextServers = { ...servers };
  nextServers[id] = { key, name: (typeof name === 'string' && name.trim().length > 0) ? name.trim() : undefined };
  await writeJsonAtomic(INGEST_KEYS_PATH, { servers: nextServers });

  await loadDynamicIngestKeys();

  // Create server dir and store name in index if provided.
  const serverDir = path.join(DATA_DIR, 'servers', safeId);
  await ensureDir(serverDir);
  const idxPath = path.join(serverDir, 'index.json');
  const idx = (await readJsonOrNull(idxPath)) || {};
  const nextIdx = {
    ...idx,
    id: safeId,
    name: (typeof name === 'string' && name.trim().length > 0) ? name.trim() : (typeof idx.name === 'string' ? idx.name : safeId),
  };
  await writeJsonAtomic(idxPath, nextIdx);

  res.json({ ok: true });
}));

app.post('/api/dev/servers/clear', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  await withIngestLock(safeId, async () => {
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    const idxPath = path.join(serverDir, 'index.json');

    await ensureDir(serverDir);

    const idx = (await readJsonOrNull(idxPath)) || {};
    const keepName = typeof idx.name === 'string' ? idx.name : safeId;
    const keepMapId = typeof idx.mapId === 'string' ? idx.mapId : '';
    const keepMapWorldFile = typeof idx.mapWorldFile === 'string' ? idx.mapWorldFile : '';

    const isMapCacheFileName = (name) => {
      return name.endsWith('.terrain.json') || name.endsWith('.towns.json') || name.endsWith('.descriptors.json');
    };

    try {
      const entries = await fs.readdir(serverDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent || !ent.isFile()) continue;
        if (ent.name === 'index.json') continue;
        if (isMapCacheFileName(ent.name)) continue;
        try { await fs.unlink(path.join(serverDir, ent.name)); } catch { /* ignore */ }
      }
    } catch {
      // ignore
    }

    const nextIdx = {
      id: safeId,
      name: keepName,
      clearedAt: Date.now(),
      ...(keepMapId ? { mapId: keepMapId } : {}),
      ...(keepMapWorldFile ? { mapWorldFile: keepMapWorldFile } : {}),
    };
    await writeJsonAtomic(idxPath, nextIdx);
  });

  res.json({ ok: true });
}));

app.post('/api/dev/servers/regenerateTerrain', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }

  const safeId = sanitizeServerId(serverId);
  const serverDir = path.join(DATA_DIR, 'servers', safeId);
  await ensureDir(serverDir);

  const idxPath = path.join(serverDir, 'index.json');
  const idx = (await readJsonOrNull(idxPath)) || {};
  const prevPending = (idx.pendingCommands && typeof idx.pendingCommands === 'object' && !Array.isArray(idx.pendingCommands))
    ? idx.pendingCommands
    : {};

  const nextIdx = {
    ...idx,
    id: safeId,
    pendingCommands: {
      ...prevPending,
      regenTerrain: Date.now(),
    },
  };

  await writeJsonAtomic(idxPath, nextIdx);
  res.json({ ok: true });
}));

app.post('/api/dev/servers/delete', requireAuth, requireTool('dev'), asyncRoute(async (req, res) => {
  const serverId = String(req.query.serverId || '');
  if (!serverId) {
    res.status(400).send('Missing serverId');
    return;
  }
  const safeId = sanitizeServerId(serverId);

  // Remove the dynamic ingest key (env-configured keys live in INGEST_KEYS and
  // can only be removed by changing the env).
  const existing = await readJsonOrNull(INGEST_KEYS_PATH);
  const servers = existing && existing.servers && typeof existing.servers === 'object' && !Array.isArray(existing.servers)
    ? existing.servers
    : {};
  let removedKey = false;
  if (Object.prototype.hasOwnProperty.call(servers, serverId)) {
    const next = { ...servers };
    delete next[serverId];
    await writeJsonAtomic(INGEST_KEYS_PATH, { servers: next });
    await loadDynamicIngestKeys();
    removedKey = true;
  }

  // Delete the server's stored data (replay history, pii, index, etc.).
  await withIngestLock(safeId, async () => {
    const serverDir = path.join(DATA_DIR, 'servers', safeId);
    try { await fs.rm(serverDir, { recursive: true, force: true }); } catch { /* ignore */ }
  });

  // Flag if an env-configured key still allows this server to re-register.
  const envKeyRemains = !removedKey && ingestKeyMap.has(serverId);
  res.json({ ok: true, envKeyRemains });
}));

// Serve static frontend if built (dist/)
const distDir = path.resolve('dist');
app.use(express.static(distDir));

// SPA fallback (avoid /api)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distDir, 'index.html'));
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[reforgedz] admin server listening on :${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`[reforgedz] ingest keys loaded: ${ingestKeyMap.size}`);

  // Pre-warm the admin-manager cache so the first page open is instant.
  if (ADMIN_MGR_PTERO_URL && ADMIN_MGR_PTERO_KEY) {
    getAdminsSnapshot()
      .then(({ data }) => console.log(`[adminmgr] cache warmed: ${data.admins.length} admins, ${data.servers.length} servers`))
      .catch((e) => console.warn(`[adminmgr] cache warm failed: ${e.message}`));

    // Periodic name resolution so newly-spotted admins get filled in without user action.
    setInterval(() => maybeAutoBackfill(), 30 * 60 * 1000);
  }

  // Warm caches on boot so the replay tool is instant on demand. The recent cache
  // (file tail) makes live load immediately; the slim 24h overview makes the full
  // load instant. Both run in the background and the slim scan yields to the event
  // loop (see scanSlimSlice), so warming never stalls live polling.
  setTimeout(async () => {
    try {
      const dirs = (await fs.readdir(path.join(DATA_DIR, 'servers'), { withFileTypes: true }))
        .filter((d) => d.isDirectory());

      // Fast pass: live for every server right away.
      for (const d of dirs) {
        const safeId = sanitizeServerId(d.name);
        const histPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');
        try {
          const t0 = Date.now();
          await warmRecentCacheFromTail(safeId, histPath);
          const e = replayRecentByServer.get(safeId);
          console.log(`[recentCache] warmed ${safeId}: ${e ? e.items.length : 0} records in ${Date.now() - t0}ms`);
        } catch { /* ignore one server */ }
        await sleep(300);
      }

      // Slow pass: the 24h overview (cooperative scan, gentle gaps).
      for (const d of dirs) {
        const safeId = sanitizeServerId(d.name);
        const histPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');
        try {
          const t0 = Date.now();
          const recs = await getSlimHistory(safeId, histPath, SLIM_HISTORY_INTERVAL_MS, 200000);
          console.log(`[slimHistory] warmed ${safeId}: ${recs.length} records in ${Date.now() - t0}ms`);
        } catch { /* ignore one server */ }
        await sleep(3000);
      }
    } catch { /* ignore */ }
  }, 4000);
});

server.on('error', (err) => {
  if (err && typeof err === 'object' && err.code === 'EADDRINUSE') {
    // eslint-disable-next-line no-console
    console.error(`[reforgedz] port ${PORT} is already in use. Stop the existing server or set PORT to a free port.`);
    process.exit(1);
  }
  // Re-throw unknown errors so they fail loudly during development.
  throw err;
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error('[reforgedz] unhandled error', err);
  if (res.headersSent) return next(err);
  res.status(500).send('Server error');
});
