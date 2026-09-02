// Honest reporting for the /api/ingame/* fan-out.
//
// These routes write ban/mute files on every game server over SSH. They used to answer
// `{ok:true}` unconditionally, so an admin whose write failed on all six servers still
// saw success and believed the action had taken.
//
// Partial failure is deliberately still a 200: some servers did change, and turning that
// into an error would hide the ones that worked. Total failure is a 502.

export function summarise(results) {
  const list = Array.isArray(results) ? results : [];
  const failed = list.filter((r) => !r || !r.ok);
  const ok = failed.length === 0;
  const total = list.length > 0 && failed.length === list.length;
  return {
    ok,
    totalFailure: total,
    status: total ? 502 : 200,
    error: ok ? undefined : (total ? 'all_servers_failed' : 'some_servers_failed'),
    failedServers: failed.map((r) => (r && r.server) || 'unknown'),
  };
}

export function ingameOutcome(res, results, extra = {}) {
  const s = summarise(results);
  const body = { ok: s.ok, results, ...extra };
  if (!s.ok) {
    body.error = s.error;
    body.failedServers = s.failedServers;
  }
  return res.status(s.status).json(body);
}
