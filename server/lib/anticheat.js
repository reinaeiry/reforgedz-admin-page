// Anti-cheat incident scanner.
//
// Single-pass reader over a server's events.ndjson, maintaining small rolling
// per-player state (last known position/ammo/aim), producing scored incidents
// as it goes. Mirrors the streaming style already used by readNdjsonByteWindow
// in server/index.js, but is a full linear scan rather than a seek-to-timestamp
// window, since every category needs to see the whole retained history.
//
// THRESHOLDS BELOW ARE PLACEHOLDERS. Several checks need real ReforgedZ game
// values that only the team has - Arma Reforger's actual sprint/vehicle speed
// caps, real per-weapon reload durations, and a curated restricted-item denylist.
// Do not treat the defaults here as tuned; they're conservative (biased toward
// under-flagging) so the scanner is safe to run before those values are filled in.

import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import readline from 'node:readline';

// Live progress for in-flight scans, polled by the /scan-progress SSE route.
// Keyed by serverId; entry is removed when the scan finishes (success or not),
// so "no entry" doubles as "not currently scanning" from the route's POV.
const scanProgress = new Map(); // serverId -> { bytesRead, totalBytes, startedAt }

export function getScanProgress(serverId) {
  return scanProgress.get(serverId) || null;
}

export const SEVERITY = Object.freeze({ LOW: 'low', MEDIUM: 'medium', HIGH: 'high' });

export const INCIDENT_CATEGORIES = Object.freeze({
  wallbang: { severity: SEVERITY.HIGH, label: 'Line-of-sight blocked hit' },
  godMode: { severity: SEVERITY.HIGH, label: 'Damage/health mismatch' },
  aimSnap: { severity: SEVERITY.HIGH, label: 'Abnormal aim snap onto target' },
  speedhack: { severity: SEVERITY.HIGH, label: 'Implausible movement speed' },
  noclip: { severity: SEVERITY.HIGH, label: 'Position below terrain surface' },
  infiniteAmmo: { severity: SEVERITY.MEDIUM, label: 'Ammo did not decrease across observed shots' },
  instantReload: { severity: SEVERITY.MEDIUM, label: 'Magazine refilled faster than possible' },
  restrictedItem: { severity: SEVERITY.MEDIUM, label: 'Restricted/admin-only item in inventory' },
  interactRange: { severity: SEVERITY.MEDIUM, label: 'Interaction beyond plausible range' },
  fallImmunity: { severity: SEVERITY.LOW, label: 'No fall damage from a lethal-looking drop' },
  combatLog: { severity: SEVERITY.LOW, label: 'Disconnected shortly after combat' },
});

// --- TUNE THESE against real ReforgedZ values before relying on results. ---
const CONFIG = {
  // Hit/damage integrity
  godModeMinDamageDeltaM: 15, // damage report vs actual health drop must differ by at least this much
  // Movement (m/s). Arma Reforger's real sprint/vehicle caps are NOT reflected here - placeholder.
  maxPlausibleSpeedOnFootMps: 12,
  maxPlausibleSpeedInVehicleMps: 45,
  // Interaction range (m) per actionType emitted by EmitInteract in the exporter.
  interactRangeM: { inventory: 3, heal: 3, default: 4 },
  // Ammo/reload - realWeaponReloadMs is intentionally empty; without it, instantReload
  // never fires (safe default) rather than guessing a number per weapon.
  realWeaponReloadMsByName: {},
  minPlausibleReloadMsFallback: null, // set a global fallback (ms) if you don't want per-weapon data yet
  // Restricted items - intentionally empty; without it, restrictedItem never fires.
  restrictedItemPrefabs: new Set(),
  // Combat logging
  combatLogWindowMs: 15000,
  // Fall immunity
  fallImmunityMinDropM: 8,
  fallImmunityWindowMs: 2000,
  // Noclip - margin below the interpolated terrain surface before flagging, to
  // absorb legitimate basements/underground structures and interpolation slop
  // near steep terrain. This is a guess; tune against real basement depths.
  noclipMarginM: 3,
};

function distance3(a, b) {
  const dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function angleBetweenDeg(a, b) {
  const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const magA = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
  const magB = Math.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
  if (!magA || !magB) return 0;
  const cos = Math.max(-1, Math.min(1, dot / (magA * magB)));
  return (Math.acos(cos) * 180) / Math.PI;
}

function clampConfidence(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

// Bilinear-interpolated surface height at (x, z) from the one-time terrain grid
// export (evt.bbMin/bbMax/gridW/gridH/heights, see SendTerrainInfo in the
// Enfusion exporter). Returns null if out of bounds or terrain hasn't loaded yet.
function surfaceHeightAt(terrainGrid, x, z) {
  if (!terrainGrid) return null;
  const { bbMin, bbMax, gridW, gridH, heights } = terrainGrid;
  if (!Array.isArray(heights) || gridW < 2 || gridH < 2) return null;
  const spanX = bbMax[0] - bbMin[0];
  const spanZ = bbMax[2] - bbMin[2];
  if (spanX <= 0 || spanZ <= 0) return null;
  if (x < bbMin[0] || x > bbMax[0] || z < bbMin[2] || z > bbMax[2]) return null;

  const fx = ((x - bbMin[0]) / spanX) * (gridW - 1);
  const fz = ((z - bbMin[2]) / spanZ) * (gridH - 1);
  const x0 = Math.floor(fx), x1 = Math.min(x0 + 1, gridW - 1);
  const z0 = Math.floor(fz), z1 = Math.min(z0 + 1, gridH - 1);
  const tx = fx - x0, tz = fz - z0;

  const h00 = heights[z0 * gridW + x0];
  const h10 = heights[z0 * gridW + x1];
  const h01 = heights[z1 * gridW + x0];
  const h11 = heights[z1 * gridW + x1];
  if ([h00, h10, h01, h11].some((h) => typeof h !== 'number')) return null;

  const hx0 = h00 + (h10 - h00) * tx;
  const hx1 = h01 + (h11 - h01) * tx;
  return hx0 + (hx1 - hx0) * tz;
}

function makeIncident(category, serverId, identityId, tsMs, confidence, summary, evidence) {
  const meta = INCIDENT_CATEGORIES[category];
  return {
    category,
    severity: meta.severity,
    label: meta.label,
    confidence: clampConfidence(confidence),
    serverId,
    identityId,
    tsMs,
    summary,
    evidence,
  };
}

// Pure, identityId/serverId/tsMs-free versions of the single-event checks
// below (wallbang, godMode, interactRange - the ones that don't need rolling
// state across multiple events). Shared by both the live per-server scanner
// above/below and playerIndex.js's permanent per-event indexer, so the two
// never disagree on what counts as flagged or at what confidence. The
// multi-event checks (speedhack, noclip, aimSnap, ammo) stay scan-only - they
// need the rolling snapshot state this function intentionally doesn't have.
export function checkHitForIncidents(evt) {
  const out = [];
  if (!evt) return out;

  if (evt.losBlocked === true) {
    out.push({
      category: 'wallbang',
      confidence: 85,
      summary: `Hit landed through blocked line of sight (${(evt.distanceM || 0).toFixed(1)}m, ${evt.weaponName || 'unknown weapon'})`,
      evidence: {
        shooterIdentityId: evt.shooterIdentityId, shooterName: evt.shooterName,
        victimIdentityId: evt.victimIdentityId, victimName: evt.victimName,
        distanceM: evt.distanceM, weaponName: evt.weaponName, damage: evt.damage,
      },
    });
  }

  if (typeof evt.victimHealthBefore === 'number' && typeof evt.victimHealthAfter === 'number' && typeof evt.damage === 'number') {
    if (evt.victimHealthBefore > 0) {
      const actualDrop = evt.victimHealthBefore - evt.victimHealthAfter;
      const delta = Math.abs(actualDrop - evt.damage);
      if (delta >= CONFIG.godModeMinDamageDeltaM) {
        out.push({
          category: 'godMode',
          confidence: clampConfidence((delta / Math.max(evt.damage, 1)) * 100),
          summary: `Reported ${evt.damage.toFixed(1)} damage but health only dropped ${actualDrop.toFixed(1)} (or vice versa)`,
          evidence: {
            shooterIdentityId: evt.shooterIdentityId, shooterName: evt.shooterName,
            damage: evt.damage, healthBefore: evt.victimHealthBefore, healthAfter: evt.victimHealthAfter,
          },
        });
      }
    }
  }

  return out;
}

export function checkInteractForIncident(evt) {
  if (!evt) return null;
  const cap = CONFIG.interactRangeM[evt.actionType] ?? CONFIG.interactRangeM.default;
  if (typeof evt.distanceM !== 'number' || evt.distanceM <= cap) return null;
  return {
    category: 'interactRange',
    confidence: clampConfidence(((evt.distanceM - cap) / cap) * 100),
    summary: `${evt.actionType || 'Interaction'} performed from ${evt.distanceM.toFixed(1)}m (max plausible ~${cap}m)`,
    evidence: { actionType: evt.actionType, distanceM: evt.distanceM, targetEntityId: evt.targetEntityId },
  };
}

// Scans one server's events.ndjson start to finish, returning all incidents
// found. For large files this is O(n) with small constant memory (a handful
// of rolling maps keyed by playerId - NOT identityId, since events carry the
// numeric session playerId; identityId is resolved via the same per-player
// snapshot payloads and attached to incidents at emit time).
export async function scanServerForIncidents(serverId, filePath) {
  const incidents = [];

  // Rolling per-playerId state, reset naturally as players join/leave sessions.
  const lastSnapshot = new Map(); // playerId -> { pos, tsMs, aimDir, identityId, inVehicle }
  const lastAmmo = new Map(); // `${playerId}:${weaponName}` -> { ammoCount, tsMs }
  const recentCombat = new Map(); // playerId -> lastCombatTsMs (was hit, hit someone, or died)
  // `${shooterPlayerId}:${weaponName}` -> tsMs of the last hit event fired from that weapon.
  // Keyed by weaponName (not an entity id) because that's the only field hit events and
  // snapshot weapon payloads both carry - see the infiniteAmmo check below.
  const shotConfirmed = new Map();
  const identityByPlayer = new Map(); // playerId -> identityId (best-known)
  let terrain = null; // set from the one-time 'terrain' event; null until then

  let totalBytes = 0;
  try {
    totalBytes = (await stat(filePath)).size;
  } catch {
    return incidents;
  }

  let stream;
  try {
    stream = createReadStream(filePath, { encoding: 'utf8' });
  } catch {
    return incidents;
  }

  scanProgress.set(serverId, { bytesRead: 0, totalBytes, startedAt: Date.now() });
  let bytesRead = 0;
  let linesSinceProgressUpdate = 0;

  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  try {
    for await (const line of rl) {
      bytesRead += Buffer.byteLength(line, 'utf8') + 1; // +1 for the stripped newline
      linesSinceProgressUpdate += 1;
      if (linesSinceProgressUpdate >= 2000) {
        linesSinceProgressUpdate = 0;
        scanProgress.set(serverId, { bytesRead, totalBytes, startedAt: scanProgress.get(serverId)?.startedAt || Date.now() });
      }

      if (!line) continue;
      let outer;
      try { outer = JSON.parse(line); } catch { continue; }
      const p = outer && outer.payload;
      if (!p || typeof p.tsMs !== 'number') continue;
      const type = p.type;
      const evt = p.event;
      // outer.receivedAt (this server's own Date.now() at ingest), NOT p.tsMs -
      // the exporter's tsMs is milliseconds since the mod started, not wall-clock
      // time, so incidents timestamped from it land near the Unix epoch. Same
      // bug as the ingest-path fix in index.js, just in this separate reader -
      // falls back to p.tsMs only for old records written before receivedAt existed.
      const tsMs = typeof outer.receivedAt === 'number' ? outer.receivedAt : p.tsMs;

      if (type === 'terrain' && evt && Array.isArray(evt.bbMin) && Array.isArray(evt.bbMax) && Array.isArray(evt.heights)) {
        terrain = { bbMin: evt.bbMin, bbMax: evt.bbMax, gridW: evt.gridW, gridH: evt.gridH, heights: evt.heights };
      }

      if (type === 'snapshot' && evt && Array.isArray(evt.players)) {
        for (const pl of evt.players) {
          if (!pl || typeof pl.playerId !== 'number') continue;
          if (pl.identityId) identityByPlayer.set(pl.playerId, pl.identityId);

          const prev = lastSnapshot.get(pl.playerId);
          if (prev && Array.isArray(pl.pos) && Array.isArray(prev.pos)) {
            const dtMs = tsMs - prev.tsMs;
            if (dtMs > 0 && dtMs < 30000) {
              const dist = distance3(pl.pos, prev.pos);
              const speedMps = dist / (dtMs / 1000);
              const cap = pl.inVehicle ? CONFIG.maxPlausibleSpeedInVehicleMps : CONFIG.maxPlausibleSpeedOnFootMps;
              if (speedMps > cap) {
                incidents.push(makeIncident(
                  'speedhack', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                  clampConfidence(((speedMps - cap) / cap) * 100),
                  `Moved ${dist.toFixed(1)}m in ${dtMs}ms (${speedMps.toFixed(1)} m/s, cap ${cap} m/s${pl.inVehicle ? ', in vehicle' : ''})`,
                  { fromPos: prev.pos, toPos: pl.pos, dtMs, speedMps, inVehicle: !!pl.inVehicle }
                ));
              }
              // Fall immunity: large drop with no corresponding recent-combat/damage entry.
              const dropM = prev.pos[1] - pl.pos[1];
              if (!pl.inVehicle && dropM > CONFIG.fallImmunityMinDropM && dtMs < CONFIG.fallImmunityWindowMs) {
                const lastCombat = recentCombat.get(pl.playerId) || 0;
                if (tsMs - lastCombat > CONFIG.fallImmunityWindowMs) {
                  incidents.push(makeIncident(
                    'fallImmunity', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                    50,
                    `Dropped ${dropM.toFixed(1)}m in ${dtMs}ms with no recorded damage`,
                    { fromPos: prev.pos, toPos: pl.pos, dtMs, dropM }
                  ));
                }
              }
            }
          }
          if (terrain && Array.isArray(pl.pos) && !pl.inVehicle) {
            const surfaceY = surfaceHeightAt(terrain, pl.pos[0], pl.pos[2]);
            if (surfaceY !== null && pl.pos[1] < surfaceY - CONFIG.noclipMarginM) {
              incidents.push(makeIncident(
                'noclip', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                clampConfidence(((surfaceY - pl.pos[1] - CONFIG.noclipMarginM) / CONFIG.noclipMarginM) * 50),
                `Position ${(surfaceY - pl.pos[1]).toFixed(1)}m below the terrain surface`,
                { pos: pl.pos, surfaceY }
              ));
            }
          }

          lastSnapshot.set(pl.playerId, {
            pos: pl.pos, tsMs, aimDir: pl.aimDir, identityId: pl.identityId, inVehicle: !!pl.inVehicle,
          });

          if (pl.weapon && typeof pl.weapon.ammoCount === 'number' && pl.weapon.name) {
            const key = `${pl.playerId}:${pl.weapon.name}`;
            const prevAmmo = lastAmmo.get(key);
            if (prevAmmo) {
              const dtMs = tsMs - prevAmmo.tsMs;
              // Refilled to (near) max faster than any plausible reload -> instant reload.
              // Only fires if a reference reload time is actually configured (see CONFIG).
              const refReload = CONFIG.realWeaponReloadMsByName[pl.weapon.name]
                ?? CONFIG.minPlausibleReloadMsFallback;
              if (refReload && pl.weapon.ammoCount > prevAmmo.ammoCount && dtMs > 0 && dtMs < refReload) {
                incidents.push(makeIncident(
                  'instantReload', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                  clampConfidence(((refReload - dtMs) / refReload) * 100),
                  `Magazine refilled in ${dtMs}ms (expected >= ${refReload}ms for ${pl.weapon.name || 'weapon'})`,
                  { weapon: pl.weapon.name, dtMs, refReload, from: prevAmmo.ammoCount, to: pl.weapon.ammoCount }
                ));
              }
              // Infinite ammo: we know at least one shot was fired on this weapon between
              // these two snapshots (a hit/kill was attributed to this player+weapon in that
              // window, tracked via shotConfirmed below), but ammo didn't drop. Weaker proxy
              // than a real shot-fired count (that capture point isn't wired in the exporter
              // yet - see EmitShotFired's comments), but doesn't need it.
              const confirmedShotAt = shotConfirmed.get(key);
              if (confirmedShotAt && confirmedShotAt > prevAmmo.tsMs && confirmedShotAt <= tsMs
                && pl.weapon.ammoCount >= prevAmmo.ammoCount) {
                incidents.push(makeIncident(
                  'infiniteAmmo', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                  55,
                  `A confirmed hit was fired from ${pl.weapon.name || 'this weapon'} between two ammo readings, but ammo count did not drop (${prevAmmo.ammoCount} -> ${pl.weapon.ammoCount})`,
                  { weapon: pl.weapon.name, from: prevAmmo.ammoCount, to: pl.weapon.ammoCount }
                ));
              }
            }
            lastAmmo.set(key, { ammoCount: pl.weapon.ammoCount, tsMs });
          }

          if (Array.isArray(pl.inventory)) {
            for (const item of pl.inventory) {
              if (item && item.prefab && CONFIG.restrictedItemPrefabs.has(item.prefab)) {
                incidents.push(makeIncident(
                  'restrictedItem', serverId, pl.identityId || identityByPlayer.get(pl.playerId) || '', tsMs,
                  75,
                  `Inventory contains restricted item: ${item.name || item.prefab}`,
                  { prefab: item.prefab, name: item.name }
                ));
              }
            }
          }
        }
      }

      if (type === 'hit' && evt) {
        if (typeof evt.victimPlayerId === 'number') recentCombat.set(evt.victimPlayerId, tsMs);
        if (typeof evt.shooterPlayerId === 'number') recentCombat.set(evt.shooterPlayerId, tsMs);
        if (typeof evt.shooterPlayerId === 'number' && evt.weaponName) {
          shotConfirmed.set(`${evt.shooterPlayerId}:${evt.weaponName}`, tsMs);
        }

        for (const check of checkHitForIncidents(evt)) {
          // wallbang is attributed to the shooter (they're the one who took the
          // shot through cover); godMode to the victim (their damage handling is
          // what's wrong) - matches the identityId each category's evidence implies.
          const owner = check.category === 'wallbang' ? evt.shooterIdentityId : evt.victimIdentityId;
          incidents.push(makeIncident(check.category, serverId, owner || '', tsMs, check.confidence, check.summary, check.evidence));
        }
      }

      if ((type === 'kill' || type === 'death') && evt) {
        if (typeof evt.victimPlayerId === 'number') recentCombat.set(evt.victimPlayerId, tsMs);
        if (typeof evt.killerPlayerId === 'number') recentCombat.set(evt.killerPlayerId, tsMs);

        // Basic snap-angle check: killer's aim direction at the kill vs their last
        // known snapshot aim direction shortly before it. A large instantaneous
        // swing right at the kill, outside of a normal tracking curve, is the classic
        // aimbot signal - this is a coarse first pass, not a statistical model.
        if (typeof evt.killerPlayerId === 'number' && Array.isArray(evt.killerAimDir)) {
          const prev = lastSnapshot.get(evt.killerPlayerId);
          if (prev && Array.isArray(prev.aimDir) && tsMs - prev.tsMs < 1000) {
            const angle = angleBetweenDeg(evt.killerAimDir, prev.aimDir);
            if (angle > 45) {
              incidents.push(makeIncident(
                'aimSnap', serverId, evt.killerIdentityId || '', tsMs,
                clampConfidence(((angle - 45) / 135) * 100),
                `Aim snapped ${angle.toFixed(0)} degrees in the ${tsMs - prev.tsMs}ms before this kill`,
                { angleDeg: angle, dtMs: tsMs - prev.tsMs, weaponName: evt.weaponName }
              ));
            }
          }
        }
      }

      if (type === 'interact' && evt) {
        const check = checkInteractForIncident(evt);
        if (check) incidents.push(makeIncident(check.category, serverId, evt.playerIdentityId || '', tsMs, check.confidence, check.summary, check.evidence));
      }

      if (type === 'disconnect' && evt && typeof evt.playerId === 'number') {
        const lastCombat = recentCombat.get(evt.playerId) || 0;
        if (lastCombat && tsMs - lastCombat <= CONFIG.combatLogWindowMs) {
          incidents.push(makeIncident(
            'combatLog', serverId, identityByPlayer.get(evt.playerId) || '', tsMs,
            70,
            `Disconnected ${tsMs - lastCombat}ms after last combat activity`,
            { msSinceCombat: tsMs - lastCombat }
          ));
        }
      }
    }
  } finally {
    try { rl.close(); } catch { /* ignore */ }
    try { stream.destroy(); } catch { /* ignore */ }
    scanProgress.delete(serverId);
  }

  return incidents;
}

// ─── Caching ────────────────────────────────────────────────────────────────
// A full scan is O(file size) - measured at ~90s for a real 37GB server log.
// Stale-while-revalidate: only the very first-ever request for a given server
// blocks on a real scan. Every request after that is instant, even the first
// one after the cache goes stale - it gets the old (briefly stale) result
// immediately while a fresh scan runs in the background for next time. This
// intentionally does NOT proactively scan servers nobody is looking at - no
// speculative background load on a box that's also running live game servers.
const CACHE_TTL_MS = 5 * 60 * 1000;
const scanCache = new Map(); // serverId -> { incidents, computedAt, refreshing }
const coldScansInFlight = new Set(); // serverId - first-ever scan, no cache entry to attach a flag to yet

export async function getIncidentsCached(serverId, filePath) {
  const entry = scanCache.get(serverId);
  const now = Date.now();

  if (entry && now - entry.computedAt < CACHE_TTL_MS) {
    return { incidents: entry.incidents, stale: false, scanning: false, computedAt: entry.computedAt };
  }

  if (entry) {
    // Stale (or a refresh already in flight): serve what we have immediately,
    // kick off exactly one background refresh.
    if (!entry.refreshing) {
      entry.refreshing = true;
      scanServerForIncidents(serverId, filePath)
        .then((incidents) => {
          scanCache.set(serverId, { incidents, computedAt: Date.now(), refreshing: false });
        })
        .catch(() => { entry.refreshing = false; });
    }
    return { incidents: entry.incidents, stale: true, scanning: false, computedAt: entry.computedAt };
  }

  // Cold - NEVER block the HTTP request on this. A full scan measured up to
  // ~180s on the larger real server logs, well past Cloudflare's (and most
  // reverse proxies') origin timeout (~100s) - blocking here produced real
  // 524 Gateway Timeout errors in production, not just a slow page load.
  // Kick off the scan in the background (deduped via coldScansInFlight so
  // concurrent requests for the same never-scanned server don't start it
  // twice) and return immediately; the frontend's scan-progress SSE endpoint
  // plus a re-fetch once it reports done covers the wait.
  if (!coldScansInFlight.has(serverId)) {
    coldScansInFlight.add(serverId);
    scanServerForIncidents(serverId, filePath)
      .then((incidents) => {
        scanCache.set(serverId, { incidents, computedAt: Date.now(), refreshing: false });
      })
      .catch((e) => console.warn(`[anticheat] cold scan failed for ${serverId}:`, e.message))
      .finally(() => coldScansInFlight.delete(serverId));
  }
  return { incidents: [], stale: false, scanning: true, computedAt: 0 };
}

// ─── Player risk aggregation ────────────────────────────────────────────────
// Vendor-anti-cheat-panel style: rank players by an aggregate risk score
// instead of presenting a flat incident log as the primary view. Score is a
// simple weighted sum (severity weight x confidence fraction) summed across
// every incident for that player - a rough, explainable ranking signal, not a
// calibrated probability. Drill-down into a player's own incident list is
// still the flat log, just scoped to one identityId.
const SEVERITY_WEIGHT = { [SEVERITY.LOW]: 1, [SEVERITY.MEDIUM]: 2, [SEVERITY.HIGH]: 4 };

// riskScore answers "how bad" (severity x confidence, summed - one bad
// incident can outweigh many mild ones). confidence answers a different
// question: "how sure are we". A single incident, even at 85% per-incident
// confidence, is still one data point - could be a bad terrain mesh, a lag
// spike, a fluke. confidence is pulled toward 0 with few incidents
// (Bayesian-style shrinkage against a prior of CONFIDENCE_PRIOR_COUNT
// "unknown" incidents) and pushed up by two things: more incidents of the
// same kind, and - more than that - incidents spanning multiple independent
// categories, since a player tripping wallbang AND speedhack is much
// stronger evidence than the same check firing repeatedly (which could just
// mean that one check runs hot for them). Shared between the live scanner's
// summarizePlayerRisk (below) and playerIndex.js's permanent per-player
// aggregates, so a player's standing reads the same everywhere it's shown.
const CONFIDENCE_PRIOR_COUNT = 3;
const CONFIDENCE_CATEGORY_BONUS_PER_EXTRA = 0.15;
const CONFIDENCE_CATEGORY_BONUS_MAX_EXTRA = 2;

export function computeConfidence({ incidentCount, distinctCategories, avgConfidence }) {
  if (!incidentCount || !avgConfidence) return 0;
  const sampleWeight = incidentCount / (incidentCount + CONFIDENCE_PRIOR_COUNT);
  const extraCategories = Math.min(Math.max(distinctCategories - 1, 0), CONFIDENCE_CATEGORY_BONUS_MAX_EXTRA);
  const categoryBonus = 1 + CONFIDENCE_CATEGORY_BONUS_PER_EXTRA * extraCategories;
  return Math.max(0, Math.min(100, Math.round(avgConfidence * sampleWeight * categoryBonus)));
}

export function summarizePlayerRisk(incidents) {
  const byPlayer = new Map();

  for (const inc of incidents) {
    if (!inc.identityId) continue;
    let p = byPlayer.get(inc.identityId);
    if (!p) {
      p = {
        identityId: inc.identityId,
        riskScore: 0,
        incidentCount: 0,
        confidenceSum: 0,
        categories: {},
        highestSeverity: SEVERITY.LOW,
        firstIncidentTsMs: inc.tsMs,
        lastIncidentTsMs: inc.tsMs,
      };
      byPlayer.set(inc.identityId, p);
    }

    p.riskScore += SEVERITY_WEIGHT[inc.severity] * (inc.confidence / 100);
    p.incidentCount += 1;
    p.confidenceSum += inc.confidence;
    p.categories[inc.category] = (p.categories[inc.category] || 0) + 1;
    if (SEVERITY_WEIGHT[inc.severity] > SEVERITY_WEIGHT[p.highestSeverity]) p.highestSeverity = inc.severity;
    if (inc.tsMs < p.firstIncidentTsMs) p.firstIncidentTsMs = inc.tsMs;
    if (inc.tsMs > p.lastIncidentTsMs) p.lastIncidentTsMs = inc.tsMs;
  }

  const out = Array.from(byPlayer.values()).map(({ confidenceSum, ...p }) => ({
    ...p,
    riskScore: Math.round(p.riskScore * 10) / 10,
    confidence: computeConfidence({
      incidentCount: p.incidentCount,
      distinctCategories: Object.keys(p.categories).length,
      avgConfidence: confidenceSum / p.incidentCount,
    }),
  }));
  out.sort((a, b) => b.riskScore - a.riskScore);
  return out;
}

export { CONFIG as ANTICHEAT_CONFIG };
