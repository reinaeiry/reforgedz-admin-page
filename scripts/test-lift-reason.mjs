// Lifting a ban from the admin site must carry a reason, and the controller must receive it -
// the same accountability `.unban` and `.ipunban` have in Discord.
//   node scripts/test-lift-reason.mjs
import { MAX_LIFT_REASON, parseLiftReason, shapeBanHistory } from '../server/lib/banLift.js';

let fails = 0;
const check = (l, c, e = '') => {
  console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : ''));
  if (!c) fails++;
};

// --- the reason itself ------------------------------------------------------
check('empty is refused', parseLiftReason('').ok === false && parseLiftReason('').error === 'reason_required');
check('whitespace only is refused', parseLiftReason('   \n\t ').ok === false);
check('missing is refused', parseLiftReason(undefined).ok === false && parseLiftReason(null).ok === false);
let r = parseLiftReason('  appeal accepted  ');
check('surrounding space is trimmed', r.ok && r.reason === 'appeal accepted', JSON.stringify(r));
r = parseLiftReason('line one\nline two\r\n\tthree');
check('newlines and tabs collapse to single spaces', r.ok && r.reason === 'line one line two three', JSON.stringify(r));
r = parseLiftReason('bellhere');
check('control characters are removed', r.ok && r.reason === 'bell here', JSON.stringify(r));
check('exactly the maximum is accepted', parseLiftReason('x'.repeat(MAX_LIFT_REASON)).ok === true);
r = parseLiftReason('x'.repeat(MAX_LIFT_REASON + 1));
check('over the maximum is refused, not silently cut', r.ok === false && r.error === 'reason_too_long');
check('unicode survives', parseLiftReason('Chertolёt appeal').reason === 'Chertolёt appeal');

// --- history shaping --------------------------------------------------------
const rows = [
  { id: 2, kind: 'ip', uid: 'u', ip: '7.7.7.7', name: 'Guy', reason: 'auto', banned_by: 'AutoBan',
    banned_at: '2026-06-27 10:00:00', lifted_by: 'Tobi', lifted_at: '2026-09-11 04:00:00', note: 'home line' },
  { id: 1, kind: 'account', uid: 'u', ip: '', name: 'Guy', reason: 'speedhacking', banned_by: 'Juggerz',
    banned_at: '2026-06-27 10:00:00', lifted_by: 'Nattii', lifted_at: '2026-09-10 12:00:00', note: 'appeal accepted' },
];
let shaped = shapeBanHistory(rows, true);
check('shaping keeps every row, in order', shaped.length === 2 && shaped[0].id === 2);
check('who lifted it and why are carried', shaped[1].liftedBy === 'Nattii' && shaped[1].note === 'appeal accepted');
check('the original reason and who set it are carried', shaped[1].reason === 'speedhacking' && shaped[1].bannedBy === 'Juggerz');
check('with viewIps the address is shown', shaped[0].ip === '7.7.7.7');
check('the misleading adoption date is not passed on', !('bannedAt' in shaped[1]) && !('banned_at' in shaped[1]));
shaped = shapeBanHistory(rows, false);
check('without viewIps the address is withheld', shaped[0].ip === null);
check('without viewIps the IP ban itself is still listed', shaped[0].kind === 'ip' && shaped[0].note === 'home line');
check('an account row never carries an address', shapeBanHistory(rows, true)[1].ip === null);
check('garbage input is an empty list', shapeBanHistory(null, true).length === 0 && shapeBanHistory('x', true).length === 0);
check('an unknown kind is treated as an account ban', shapeBanHistory([{ id: 3, kind: 'weird' }], true)[0].kind === 'account');

// --- the controller receives it --------------------------------------------
process.env.IPBAN_CONTROLLER_BASE = 'http://controller.test/';
process.env.IPBAN_CONTROLLER_KEY = 'test-key';
const calls = [];
globalThis.fetch = async (url, init = {}) => {
  calls.push({ url: String(url), method: init.method || 'GET', body: init.body ? JSON.parse(init.body) : null });
  return { ok: true, status: 200, json: async () => ({ ok: true, history: [] }), text: async () => '' };
};
const ipBans = await import('../server/lib/ipBans.js');

await ipBans.removeBan('1.2.3.4', { by: 'Tobi', reason: 'shared exit & wrong player' });
let c = calls.at(-1);
check('IP unban is a DELETE', c.method === 'DELETE');
check('IP unban carries who lifted it', c.url.includes('by=Tobi'), c.url);
check('IP unban carries the reason, encoded', c.url.includes('reason=shared%20exit%20%26%20wrong%20player'), c.url);
check('a trailing slash on the base does not double up',
  c.url.startsWith('http://controller.test/api/admin/ipbans/1.2.3.4?'), c.url);

await ipBans.removeBan('1.2.3.4');
check('an old-style call without who/why still works',
  calls.at(-1).url === 'http://controller.test/api/admin/ipbans/1.2.3.4', calls.at(-1).url);

await ipBans.accountUnban({ uid: 'u', name: 'Guy', by: 'Tobi', reason: 'appeal accepted' });
c = calls.at(-1);
check('account unban posts the reason', c.method === 'POST' && c.body?.reason === 'appeal accepted', JSON.stringify(c.body));
check('account unban still sends who', c.body?.by === 'Tobi');

await ipBans.banHistory('11111111-2222-3333-4444-555555555555');
c = calls.at(-1);
check('history asks the controller by uid',
  c.url === 'http://controller.test/api/admin/ban-history?uid=11111111-2222-3333-4444-555555555555', c.url);

console.log();
console.log(fails ? `FAILED: ${fails} check(s)` : 'All lift-reason tests passed');
process.exit(fails ? 1 : 0);
