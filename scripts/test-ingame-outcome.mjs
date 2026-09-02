// /api/ingame/* used to answer {ok:true} even when every per-server SSH write failed.
//   node scripts/test-ingame-outcome.mjs
import { summarise, ingameOutcome } from '../server/lib/ingameOutcome.js';

let fails = 0;
const check = (l, c, e = '') => { console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : '')); if (!c) fails++; };

const ok = (server) => ({ server, ok: true, removed: true });
const bad = (server) => ({ server, ok: false, error: 'ssh timeout' });

let s = summarise([ok('eu1'), ok('eu2'), ok('na1')]);
check('all succeed -> ok, 200', s.ok === true && s.status === 200);
check('all succeed -> no error field', s.error === undefined);

s = summarise([bad('eu1'), bad('eu2')]);
check('THE BUG: all fail -> ok is false', s.ok === false);
check('all fail -> 502, not 200', s.status === 502, String(s.status));
check('all fail -> named as such', s.error === 'all_servers_failed');
check('all fail -> lists the servers', s.failedServers.join(',') === 'eu1,eu2');

s = summarise([ok('eu1'), bad('na1')]);
check('partial -> ok is false', s.ok === false);
check('partial stays 200 (some servers DID change)', s.status === 200, String(s.status));
check('partial -> distinguishes itself', s.error === 'some_servers_failed');
check('partial -> names only the failures', s.failedServers.join(',') === 'na1');

check('empty result set is not a failure', summarise([]).ok === true && summarise([]).status === 200);
check('non-array does not throw', summarise(undefined).ok === true);
check('malformed entries count as failures', summarise([null, undefined]).ok === false);
check('malformed entries get a placeholder name', summarise([null]).failedServers[0] === 'unknown');

// response shaping
const fakeRes = () => {
  const r = { _status: null, _body: null };
  r.status = (c) => { r._status = c; return r; };
  r.json = (b) => { r._body = b; return r; };
  return r;
};
let r = fakeRes();
ingameOutcome(r, [ok('eu1')], { central: { ok: true } });
check('success passes extras through', r._status === 200 && r._body.ok === true && r._body.central.ok === true);
check('success still returns results', Array.isArray(r._body.results));

r = fakeRes();
ingameOutcome(r, [bad('eu1'), bad('eu2')]);
check('total failure responds 502 with error', r._status === 502 && r._body.error === 'all_servers_failed');
check('total failure names the servers', r._body.failedServers.length === 2);

console.log();
console.log(fails ? `FAILED: ${fails} check(s)` : 'All ingame-outcome tests passed');
process.exit(fails ? 1 : 0);
