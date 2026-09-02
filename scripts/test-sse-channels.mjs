// A player's raw IP must not reach an account denied `moderation.viewIps`.
//
// ipban.add / ipban.remove carry the address in their payload. The routes raising them
// already require viewIps to ACT, but the broadcast went to the general activity channel,
// so every account with viewActivity received it - including six accounts a manager had
// deliberately denied IP access.
//
//   node scripts/test-sse-channels.mjs
import { classify, channelsFor } from '../server/routes/bm-sse.js';

let fails = 0;
const check = (label, cond, extra = '') => {
  console.log((cond ? '  PASS  ' : '  FAIL  ') + label + (extra ? `  ${extra}` : ''));
  if (!cond) fails++;
};

// --- routing ---------------------------------------------------------------
check('ipban.add routes to ips', classify({ type: 'ipban.add' }) === 'ips');
check('ipban.remove routes to ips', classify({ type: 'ipban.remove' }) === 'ips');
check('ban.create stays on activity', classify({ type: 'ban.create' }) === 'activity');
check('kick stays on activity', classify({ type: 'kick' }) === 'activity');
check('ticket.message stays on tickets', classify({ type: 'ticket.message' }) === 'tickets');
check('unknown type defaults to activity', classify({ type: 'whatever.new' }) === 'activity');

// --- who may receive what --------------------------------------------------
const user = (moderation, adminTickets = false) =>
  ({ perms: { moderation, admin: { tickets: adminTickets } } });

const activityOnly = channelsFor(user({ viewActivity: true, viewIps: false }));
check('activity-only user may connect', !!activityOnly);
check('activity-only user does NOT get the ips channel', activityOnly.ips === false,
      JSON.stringify(activityOnly));

const withIps = channelsFor(user({ viewActivity: true, viewIps: true }));
check('viewIps user does get the ips channel', withIps.ips === true);

const ticketsOnly = channelsFor(user({}, true));
check('tickets-only user may connect', !!ticketsOnly);
check('tickets-only user gets neither activity nor ips',
      ticketsOnly.activity === false && ticketsOnly.ips === false);

check('user with no relevant perms may not connect at all',
      channelsFor(user({})) === null);
check('missing perms object does not throw', channelsFor({}) === null);
check('undefined user does not throw', channelsFor(undefined) === null);

// legacy shape: some tokens carry perms.battlemetrics instead of perms.moderation
const legacy = channelsFor({ perms: { battlemetrics: { viewActivity: true, viewIps: true } } });
check('legacy perms.battlemetrics shape still works', legacy && legacy.ips === true);

// --- the actual leak, end to end -------------------------------------------
const delivered = (u, evt) => {
  const ch = channelsFor(u);
  return !!ch && ch[classify(evt)] === true;
};
const ipEvent = { type: 'ipban.add', payload: { by: 'someone', ip: '203.0.113.7' } };

check('THE LEAK: activity-only user no longer receives an IP event',
      delivered(user({ viewActivity: true, viewIps: false }), ipEvent) === false);
check('viewIps user still receives it',
      delivered(user({ viewActivity: true, viewIps: true }), ipEvent) === true);
check('activity-only user still receives ordinary ban events',
      delivered(user({ viewActivity: true, viewIps: false }), { type: 'ban.create' }) === true);

console.log();
console.log(fails ? `FAILED: ${fails} check(s)` : 'All SSE channel tests passed');
process.exit(fails ? 1 : 0);
