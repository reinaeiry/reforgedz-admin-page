import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import { createReadStream } from 'node:fs';

import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';

dotenv.config();

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(compression());

const JSON_LIMIT = process.env.JSON_LIMIT || '10mb';
app.use(express.json({ limit: JSON_LIMIT }));

const PORT = parseInt(process.env.PORT || '3000', 10);

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'change-me';

// IMPORTANT: set this to a long random string in production
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'dev-token-secret-change-me';

// Comma-separated mapping: "serverId=serverKey,serverId2=serverKey2"
const INGEST_KEYS = process.env.INGEST_KEYS || '';

const DATA_DIR = process.env.DATA_DIR || 'data';

// Rolling retention for events.ndjson.
// - Set RETENTION_MS=0 to disable compaction entirely.
// - Default is 7 days.
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

const USERS_PATH = path.join(DATA_DIR, 'users.json');
const INGEST_KEYS_PATH = path.join(DATA_DIR, 'ingestKeys.json');
const MAPS_DIR = path.join(DATA_DIR, 'maps');

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

function getExpectedIngestKey(serverId, safeId) {
  // Priority: dynamic config -> env map.
  const d1 = dynamicIngestKeys.get(serverId);
  if (d1 && d1.key) return d1.key;
  const d2 = dynamicIngestKeys.get(safeId);
  if (d2 && d2.key) return d2.key;

  return ingestKeyMap.get(serverId) || ingestKeyMap.get(safeId) || null;
}

/** @returns {{ users: Record<string, any> }} */
async function readUsersFile() {
  const obj = await readJsonOrNull(USERS_PATH);
  if (!obj || typeof obj !== 'object') return { users: {} };
  const users = obj.users && typeof obj.users === 'object' && !Array.isArray(obj.users) ? obj.users : {};
  return { users };
}

function pbkdf2Hash(password, saltHex) {
  const salt = Buffer.from(saltHex, 'hex');
  const iter = 120_000;
  const dk = crypto.pbkdf2Sync(String(password), salt, iter, 32, 'sha256');
  return { iter, hashHex: dk.toString('hex') };
}

function makePasswordRecord(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const { iter, hashHex } = pbkdf2Hash(password, salt);
  return { algo: 'pbkdf2-sha256', iter, saltHex: salt, hashHex };
}

function verifyPassword(password, record) {
  if (!record || typeof record !== 'object') return false;
  if (record.algo !== 'pbkdf2-sha256') return false;
  if (typeof record.saltHex !== 'string' || typeof record.hashHex !== 'string') return false;

  // iter is stored but currently fixed; accept stored value if valid.
  const expected = Buffer.from(record.hashHex, 'hex');
  const salt = Buffer.from(record.saltHex, 'hex');
  const iter = (typeof record.iter === 'number' && Number.isFinite(record.iter) && record.iter > 10_000) ? record.iter : 120_000;

  const got = crypto.pbkdf2Sync(String(password), salt, iter, expected.length, 'sha256');
  if (got.length !== expected.length) return false;
  return crypto.timingSafeEqual(got, expected);
}

function normalizeTools(tools) {
  const t = tools && typeof tools === 'object' ? tools : {};
  return {
    replay: !!t.replay,
    admin: !!t.admin,
    dev: !!t.dev,
  };
}

function base64UrlEncode(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecodeToString(s) {
  const padded = String(s).replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (padded.length % 4)) % 4;
  const withPad = padded + '='.repeat(padLen);
  return Buffer.from(withPad, 'base64').toString('utf8');
}

function base64UrlDecodeToBuffer(s) {
  const padded = String(s).replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (padded.length % 4)) % 4;
  const withPad = padded + '='.repeat(padLen);
  return Buffer.from(withPad, 'base64');
}

function signToken(payload) {
  const bodyJson = JSON.stringify(payload);
  const body = base64UrlEncode(bodyJson);
  const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(body).digest();
  return `${body}.${base64UrlEncode(sig)}`;
}

function verifyToken(token) {
  if (!token) return null;

  const parts = String(token).split('.');
  if (parts.length !== 2) return null;

  const [body, sig] = parts;
  if (!body || !sig) return null;

  const expected = crypto.createHmac('sha256', TOKEN_SECRET).update(body).digest();
  const got = base64UrlDecodeToBuffer(sig);

  if (got.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(got, expected)) return null;

  let payload;
  try {
    payload = JSON.parse(base64UrlDecodeToString(body));
  } catch {
    return null;
  }

  if (!payload || typeof payload !== 'object') return null;

  if (typeof payload.exp === 'number' && Date.now() > payload.exp) return null;

  return payload;
}

function requireAuth(req, res, next) {
  const header = req.header('authorization') || '';
  const prefix = 'Bearer ';
  if (!header.startsWith(prefix)) {
    res.status(401).send('Missing Authorization header');
    return;
  }

  const token = header.slice(prefix.length).trim();
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).send('Invalid token');
    return;
  }

  req.user = payload;
  next();
}

function requireTool(tool) {
  return (req, res, next) => {
    const user = req.user;
    const tools = user && user.tools && typeof user.tools === 'object' ? user.tools : null;
    // Default allow replay if tools missing (backward compatibility)
    if (!tools) {
      if (tool === 'replay') return next();
      res.status(403).send('Forbidden');
      return;
    }

    if (tools[tool]) return next();
    res.status(403).send('Forbidden');
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
    return JSON.parse(text);
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

  const out = [];

  let stat;
  try {
    stat = await fs.stat(filePath);
  } catch {
    return out;
  }

  if (!stat || stat.size <= 0) return out;

  const rl = readline.createInterface({
    input: createReadStream(filePath, { encoding: 'utf8' }),
    crlfDelay: Infinity,
  });

  if (!tail) {
    for await (const line of rl) {
      if (!line) continue;

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

      out.push(obj);
      if (out.length >= limit) break;
    }

    return out;
  }

  // Tail mode: return the last `limit` matching records in the window.
  const ring = new Array(limit);
  let count = 0;
  let start = 0;

  for await (const line of rl) {
    if (!line) continue;

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

    if (count < limit) {
      ring[count] = obj;
      count++;
    } else {
      ring[start] = obj;
      start = (start + 1) % limit;
    }
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

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => {
  const sub = req.user && typeof req.user.sub === 'string' ? req.user.sub : null;
  res.json({ username: sub, tools: req.user && req.user.tools ? req.user.tools : null });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};

  if (typeof username !== 'string' || typeof password !== 'string') {
    res.status(400).send('Invalid payload');
    return;
  }

  (async () => {
    const uname = String(username);
    const pwd = String(password);

    // If users.json exists / contains users, authenticate against it.
    const { users } = await readUsersFile();
    const entry = users[uname];
    if (entry) {
      if (!verifyPassword(pwd, entry.password)) {
        res.status(401).send('Invalid credentials');
        return;
      }

      const tools = normalizeTools(entry.tools);
      if (!tools.replay && !tools.admin && !tools.dev) {
        res.status(403).send('Account has no tool access');
        return;
      }

      const token = signToken({
        sub: uname,
        exp: Date.now() + 24 * 60 * 60 * 1000,
        tools,
      });

      res.json({ token });
      return;
    }

    // Bootstrap fallback: env admin credentials.
    if (!timingSafeEqualString(uname, ADMIN_USER) || !timingSafeEqualString(pwd, ADMIN_PASS)) {
      res.status(401).send('Invalid credentials');
      return;
    }

    const token = signToken({
      sub: uname,
      exp: Date.now() + 24 * 60 * 60 * 1000,
      tools: { replay: true, admin: true, dev: true },
      bootstrap: true,
    });

    res.json({ token });
  })().catch(() => {
    res.status(500).send('Login failed');
  });
});

app.get('/api/servers', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

    const idxPath = path.join(serversDir, id, 'index.json');
    const idx = await readJsonOrNull(idxPath);

    out.push({
      id,
      name: (idx && typeof idx.name === 'string' && idx.name.length > 0) ? idx.name : id,
    });
  }

  out.sort((a, b) => a.id.localeCompare(b.id));
  res.json(out);
}));

app.get('/api/replay/status', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

app.get('/api/replay/statusAll', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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
  res.json(out);
}));

app.get('/api/replay/mapTerrain', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

  const terrainPath = path.join(MAPS_DIR, `${mapId}.terrain.json`);
  const terrain = await readJsonOrNull(terrainPath);
  if (!terrain) {
    res.status(404).send('No terrain cached for map');
    return;
  }

  res.json(terrain);
}));

app.get('/api/replay/mapTowns', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

app.get('/api/replay/mapDescriptors', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

app.get('/api/replay/range', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

app.get('/api/replay/players', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

app.get('/api/replay/events', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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

  const opts = {
    sinceTsMs: (sinceTsMs !== null && Number.isFinite(sinceTsMs)) ? sinceTsMs : null,
    untilTsMs: (untilTsMs !== null && Number.isFinite(untilTsMs)) ? untilTsMs : null,
    limit: (Number.isFinite(limit) && limit > 0) ? Math.min(limit, 20000) : 5000,
    tail,
  };

  const eventsPath = path.join(DATA_DIR, 'servers', safeId, 'events.ndjson');
  const items = await readNdjsonWindow(eventsPath, opts);
  res.json(items);
}));

app.post('/api/replay/gmPing', requireAuth, requireTool('replay'), asyncRoute(async (req, res) => {
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
  });

  res.json({ ok: true });
}));

app.get('/api/admin/users', requireAuth, requireTool('admin'), asyncRoute(async (req, res) => {
  const { users } = await readUsersFile();
  const out = Object.entries(users).map(([username, v]) => ({
    username,
    tools: normalizeTools(v && v.tools),
  }));
  out.sort((a, b) => a.username.localeCompare(b.username));
  res.json(out);
}));

app.post('/api/admin/users', requireAuth, requireTool('admin'), asyncRoute(async (req, res) => {
  const { username, password, tools } = req.body || {};
  if (typeof username !== 'string' || username.trim().length < 3) {
    res.status(400).send('Invalid username');
    return;
  }
  if (typeof password !== 'string' || password.length < 6) {
    res.status(400).send('Invalid password');
    return;
  }

  const uname = username.trim();
  const nextTools = normalizeTools(tools);
  if (!nextTools.replay && !nextTools.admin && !nextTools.dev) {
    res.status(400).send('User must have at least one tool');
    return;
  }

  const file = await readUsersFile();
  if (file.users[uname]) {
    res.status(409).send('User already exists');
    return;
  }

  const users = { ...file.users };
  users[uname] = {
    password: makePasswordRecord(password),
    tools: nextTools,
    createdAt: Date.now(),
  };

  await writeJsonAtomic(USERS_PATH, { users });
  res.json({ ok: true });
}));

app.put('/api/admin/users/:username', requireAuth, requireTool('admin'), asyncRoute(async (req, res) => {
  const uname = String(req.params.username || '');
  if (!uname) {
    res.status(400).send('Missing username');
    return;
  }

  const { tools, password } = req.body || {};
  const file = await readUsersFile();
  if (!file.users[uname]) {
    res.status(404).send('User not found');
    return;
  }

  const users = { ...file.users };
  const entry = { ...users[uname] };
  if (tools !== undefined) {
    const nextTools = normalizeTools(tools);
    if (!nextTools.replay && !nextTools.admin && !nextTools.dev) {
      res.status(400).send('User must have at least one tool');
      return;
    }
    entry.tools = nextTools;
  }

  if (password !== undefined) {
    if (typeof password !== 'string' || password.length < 6) {
      res.status(400).send('Invalid password');
      return;
    }
    entry.password = makePasswordRecord(password);
    entry.passwordUpdatedAt = Date.now();
  }

  entry.updatedAt = Date.now();
  users[uname] = entry;
  await writeJsonAtomic(USERS_PATH, { users });
  res.json({ ok: true });
}));

app.delete('/api/admin/users/:username', requireAuth, requireTool('admin'), asyncRoute(async (req, res) => {
  const uname = String(req.params.username || '');
  if (!uname) {
    res.status(400).send('Missing username');
    return;
  }

  const self = req.user && typeof req.user.sub === 'string' ? req.user.sub : '';
  if (self && uname === self) {
    res.status(400).send('Cannot delete your own account');
    return;
  }

  const file = await readUsersFile();
  if (!file.users[uname]) {
    res.status(404).send('User not found');
    return;
  }

  const users = { ...file.users };
  delete users[uname];
  await writeJsonAtomic(USERS_PATH, { users });
  res.json({ ok: true });
}));

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

    // Preserve name/id if present.
    const idx = (await readJsonOrNull(idxPath)) || {};
    const keepName = typeof idx.name === 'string' ? idx.name : safeId;
    const keepMapId = typeof idx.mapId === 'string' ? idx.mapId : '';
    const keepMapWorldFile = typeof idx.mapWorldFile === 'string' ? idx.mapWorldFile : '';

    // Delete everything in the server folder EXCEPT map-related caches (if any ever live here).
    // Map caches are normally stored in MAPS_DIR, not per-server.
    const isMapCacheFileName = (name) => {
      return name.endsWith('.terrain.json') || name.endsWith('.towns.json') || name.endsWith('.descriptors.json');
    };

    try {
      const entries = await fs.readdir(serverDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent || !ent.isFile()) continue;
        if (ent.name === 'index.json') continue; // we'll rewrite it
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
      // Keep map identity so map endpoints don't 404 after a clear.
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

    await withIngestLock(safeId, async () => {
      const receivedAt = Date.now();
      const serverDir = path.join(DATA_DIR, 'servers', safeId);
      await ensureDir(serverDir);

      // Normalize timestamps so replays stay continuous across Reforger server restarts.
      // Exporter provides a per-run sessionId; we apply a stable offset per sessionId.
      const idxPath = path.join(serverDir, 'index.json');
      const prev = (await readJsonOrNull(idxPath)) || {};

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
      }

      await fs.appendFile(eventsPath, `${JSON.stringify(record)}\n`, 'utf8');

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

        if (mapId) {
          next.mapId = mapId;
          if (worldFile) next.mapWorldFile = worldFile;

          await ensureDir(MAPS_DIR);
          const terrainPath = path.join(MAPS_DIR, `${mapId}.terrain.json`);
          const existing = await readJsonOrNull(terrainPath);

          const shouldWrite = !existing
            || (existing && typeof existing === 'object' && worldFile && typeof existing.worldFile === 'string' && existing.worldFile !== worldFile);

          if (shouldWrite) {
            await writeJsonAtomic(terrainPath, {
              mapId,
              worldFile,
              createdAt: receivedAt,
              updatedAt: receivedAt,
              ...ev,
            });
          } else {
            await writeJsonAtomic(terrainPath, {
              ...existing,
              mapId,
              worldFile: worldFile || (existing && existing.worldFile),
              updatedAt: receivedAt,
            });
          }
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

          const shouldWrite = !existing
            || (existing && typeof existing === 'object' && worldFile && typeof existing.worldFile === 'string' && existing.worldFile !== worldFile);

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
    });

    res.json(commandsToSend ? { ok: true, commands: commandsToSend } : { ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[reforgedz] ingest error', err);
    res.status(500).send('Ingest failed');
  }
});

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
