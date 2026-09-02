// Probe every registered route unauthenticated and report what it does.
//
// Run inside the admin container:
//   node scripts/probe-routes.mjs
//
// Unauthenticated is the point: every route must reject BEFORE it does any work. A 401 or
// 403 is correct. A 404 means the route is not registered - a button wired to nothing. A
// 500 means it crashed before even checking auth, which is both a bug and a way to probe
// the server without credentials. A 200 on anything moderation-related means it is
// serving data to anyone who asks.
//
// Nothing mutates: the writes are rejected at the auth gate, which is exactly what is
// being verified.
import { readFileSync } from 'fs';

const BASE = process.env.PROBE_BASE || 'http://127.0.0.1:3001';
const FILES = ['server/index.js', 'server/routes/bm.js', 'server/routes/bm-sse.js',
  'server/routes/players.js', 'server/routes/tickets.js', 'server/routes/bm-webhook.js'];

// Plausible values for path params so routing resolves rather than 400ing on shape.
const SAMPLES = {
  ':id': '1', ':guid': '11111111-2222-3333-4444-555555555555', ':ip': '203.0.113.7',
  ':uid': '11111111-2222-3333-4444-555555555555', ':noteId': '1', ':kind': 'bans',
  ':name': 'x', ':tag': 'eu1', ':serverId': '1', ':key': 'x', ':token': 'x',
};

const routes = [];
for (const f of FILES) {
  let src = '';
  try { src = readFileSync(f, 'utf8'); } catch { continue; }
  // These must match the app.use() mounts in server/index.js exactly. Guessing produced
  // five phantom 404s that looked like buttons wired to nothing - players.js mounts at
  // /api/players, not /api/bm.
  const mountMatch = f.includes('/bm.js') ? '/api/bm'
    : f.includes('bm-sse') ? '/api/bm/events'
      : f.includes('players.js') ? '/api/players'
        : f.includes('tickets.js') ? '/api/tickets'
          : f.includes('bm-webhook') ? '/api/bm/webhook' : '';
  const re = /(app|router)\.(get|post|patch|put|delete)\(\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) {
    const [, kind, method, path] = m;
    const full = kind === 'app' ? path : (mountMatch + (path === '/' ? '' : path));
    if (!full.startsWith('/')) continue;
    routes.push({ method: method.toUpperCase(), path: full, file: f });
  }
}

const seen = new Set();
const unique = routes.filter((r) => {
  const k = `${r.method} ${r.path}`;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

function concrete(path) {
  return path.replace(/:[A-Za-z_][A-Za-z0-9_]*/g, (p) => SAMPLES[p] || 'x');
}

const buckets = { rejected: [], notFound: [], crashed: [], open: [], other: [] };

for (const r of unique) {
  const url = BASE + concrete(r.path);
  let status = 0;
  let note = '';
  try {
    const res = await fetch(url, {
      method: r.method,
      headers: { 'Content-Type': 'application/json' },
      body: ['POST', 'PATCH', 'PUT'].includes(r.method) ? '{}' : undefined,
      redirect: 'manual',
    });
    status = res.status;
  } catch (e) {
    note = String(e.message).slice(0, 40);
    status = -1;
  }
  const row = { ...r, status, note };
  if (status === 401 || status === 403) buckets.rejected.push(row);
  else if (status === 404) buckets.notFound.push(row);
  else if (status >= 500) buckets.crashed.push(row);
  else if (status >= 200 && status < 400) buckets.open.push(row);
  else buckets.other.push(row);
}

const show = (title, rows) => {
  if (!rows.length) return;
  console.log(`\n${title} (${rows.length})`);
  for (const r of rows.slice(0, 40)) {
    console.log(`  ${String(r.status).padStart(3)}  ${r.method.padEnd(6)} ${r.path}${r.note ? '  ' + r.note : ''}`);
  }
  if (rows.length > 40) console.log(`  ...and ${rows.length - 40} more`);
};

console.log(`Probed ${unique.length} routes at ${BASE}`);
show('OK - rejected before doing anything (401/403)', buckets.rejected);
show('REACHABLE WITHOUT AUTH - check each is meant to be public', buckets.open);
show('NOT REGISTERED (404) - a control wired to nothing', buckets.notFound);
show('CRASHED BEFORE AUTH (5xx) - bug', buckets.crashed);
show('OTHER', buckets.other);

console.log(`\n  rejected=${buckets.rejected.length} open=${buckets.open.length} ` +
  `notFound=${buckets.notFound.length} crashed=${buckets.crashed.length} other=${buckets.other.length}`);
process.exit(buckets.crashed.length ? 1 : 0);
