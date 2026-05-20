// Auto-discover the BattleMetrics server ID for each Pterodactyl Reforger
// server, by matching on (ip, port). Results cached in data/bmServers.json,
// refreshed hourly (or on demand).
//
// Pterodactyl server list comes from the existing admin-manager snapshot
// machinery in server/index.js — we accept that snapshot as input here so
// this module stays decoupled.

import fs from 'node:fs/promises';
import path from 'node:path';
import { listOrgServers } from './battlemetrics.js';

const REFRESH_MS = 60 * 60 * 1000; // 1 hour

function dataDir() { return process.env.DATA_DIR || 'data'; }
function cachePath() { return path.join(dataDir(), 'bmServers.json'); }
function bmOrgId() { return process.env.BATTLEMETRICS_ORG_ID || ''; }

let cached = null; // { mapping: {pteroId: {...}}, byBmId: {...}, builtAt }
let inFlight = null;

async function readDiskCache() {
  try {
    const txt = await fs.readFile(cachePath(), 'utf8');
    return JSON.parse(txt);
  } catch {
    return null;
  }
}

async function writeDiskCache(value) {
  await fs.mkdir(path.dirname(cachePath()), { recursive: true });
  const tmp = cachePath() + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(value, null, 2), 'utf8');
  await fs.rename(tmp, cachePath());
}

function isFresh(snap) {
  return snap && typeof snap.builtAt === 'number' && (Date.now() - snap.builtAt) < REFRESH_MS;
}

// Match a Pterodactyl server to a BM server by IP+port. Falls back to a
// case-insensitive name substring match.
function matchOne(pteroServer, bmServers) {
  const ip = pteroServer.ip || '';
  // Pterodactyl ip is "host:port"; split it.
  const [host, portStr] = ip.split(':');
  const port = parseInt(portStr || '', 10);
  if (host && Number.isFinite(port)) {
    const exact = bmServers.find((s) => s.attributes?.ip === host && Number(s.attributes?.port) === port);
    if (exact) return exact;
  }
  // Fallback: name substring (e.g. "[EU1] Official ..." matching tag)
  const tag = pteroServer.tag || '';
  if (tag) {
    const bracketed = `[${tag}]`.toLowerCase();
    const fuzzy = bmServers.find((s) => (s.attributes?.name || '').toLowerCase().includes(bracketed));
    if (fuzzy) return fuzzy;
  }
  return null;
}

async function rebuild(pteroServers) {
  if (!bmOrgId()) {
    throw new Error('bmServers: BATTLEMETRICS_ORG_ID not set');
  }
  const bm = await listOrgServers(bmOrgId());
  const mapping = {};
  const byBmId = {};
  const unmatched = [];
  for (const ps of pteroServers) {
    const m = matchOne(ps, bm);
    if (!m) { unmatched.push(ps.pteroId); continue; }
    const entry = {
      pteroId: ps.pteroId,
      bmServerId: m.id,
      name: m.attributes?.name || ps.name || '',
      ip: m.attributes?.ip,
      port: m.attributes?.port,
      tag: ps.tag || null,
      region: ps.region || null
    };
    mapping[ps.pteroId] = entry;
    byBmId[m.id] = entry;
  }
  const snap = {
    builtAt: Date.now(),
    bmOrgId: bmOrgId(),
    mapping,
    byBmId,
    unmatched
  };
  await writeDiskCache(snap);
  cached = snap;
  console.log(`[bmServers] rebuilt: ${Object.keys(mapping).length} mapped, ${unmatched.length} unmatched`);
  return snap;
}

// Ensure we have a fresh-enough snapshot. If forceRefresh or stale, rebuild.
// pteroServers is the array of ReforgerServer objects from the admin-manager
// snapshot machinery.
export async function ensure(pteroServers, { forceRefresh = false } = {}) {
  if (!cached) cached = await readDiskCache();
  if (!forceRefresh && isFresh(cached)) return cached;
  if (inFlight) return inFlight;
  inFlight = rebuild(pteroServers).finally(() => { inFlight = null; });
  return inFlight;
}

export function getCached() {
  return cached;
}

// Lookup helpers.
export function lookupByPteroId(pteroId) {
  if (!cached || !cached.mapping) return null;
  return cached.mapping[pteroId] || null;
}

export function lookupByBmId(bmServerId) {
  if (!cached || !cached.byBmId) return null;
  return cached.byBmId[String(bmServerId)] || null;
}

export function listAll() {
  if (!cached || !cached.mapping) return [];
  return Object.values(cached.mapping);
}
