// Posts audit events to auth.reforgedz.net /api/internal/audit so all
// BM mutations show up alongside login/perm-change events in the central
// audit log. Best-effort: never blocks the caller, logs failures.

// Lazy env reads — module-level reads ran before dotenv.config(), which is
// why audit posting silently no-op'd ("INTERNAL_AUDIT_KEY not set").
function authBase() { return (process.env.AUTH_BASE || 'https://auth.reforgedz.net').replace(/\/+$/, ''); }
function auditKey() { return process.env.INTERNAL_AUDIT_KEY || ''; }

export async function postAuditEvent({ actorUsername, action, targetUserId, targetUsername, detail, ctx }) {
  const AUDIT_KEY = auditKey();
  if (!AUDIT_KEY) {
    console.warn('[bmAudit] INTERNAL_AUDIT_KEY not set; skipping');
    return;
  }
  const payload = {
    actorUsername: actorUsername || null,
    action: action,
    targetUserId: targetUserId || null,
    targetUsername: targetUsername || null,
    detail: detail || null,
    ip: ctx?.ip || null,
    ua: ctx?.ua || null,
    browser: ctx?.browser || null,
    os: ctx?.os || null,
    device: ctx?.device || null,
    deviceLabel: ctx?.deviceLabel || null,
    geoCountry: ctx?.geo?.country || null,
    geoRegion: ctx?.geo?.region || null,
    geoCity: ctx?.geo?.city || null,
    geoLabel: ctx?.geoLabel || null
  };
  try {
    const res = await fetch(`${authBase()}/api/internal/audit`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AUDIT_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.warn(`[bmAudit] auth audit POST ${res.status}: ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn('[bmAudit] post failed:', err.message);
  }
}

// ─── View auditing ──────────────────────────────────────────────────────
// Records "admin X viewed Y" events. Deduped per (actor, action, target)
// within a TTL window so polling (the logs/tickets tabs refresh every 15s)
// and the multiple GETs a single profile page fires collapse into one
// audit entry instead of flooding the log.
const VIEW_DEDUPE_MS = 5 * 60 * 1000;
const recentViews = new Map();

function viewSeenRecently(key) {
  const now = Date.now();
  const hit = recentViews.get(key);
  if (hit && hit > now) return true;
  recentViews.set(key, now + VIEW_DEDUPE_MS);
  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (recentViews.size > 5000) {
    for (const [k, exp] of recentViews) if (exp < now) recentViews.delete(k);
  }
  return false;
}

// auditView(req, action, target, detail?) — fire-and-forget view event.
// `target` is a stable string (guid, channelId, ticket id, "logs:<filters>")
// used for dedupe; pass '' for actions with no specific target.
export function auditView(req, action, target = '', detail = null) {
  const actor = req.rzUser?.username || 'unknown';
  const key = `${actor}|${action}|${target}`;
  if (viewSeenRecently(key)) return;
  postAuditEvent({
    actorUsername: actor,
    action,
    targetUsername: detail?.targetName || null,
    detail: { target: target || undefined, ...(detail || {}) },
    ctx: ctxFromReq(req)
  });
}

// Builds the rich ctx object expected by the auth side (mirrors reqctx in
// reforgedz-auth/server/reqctx.js). Pulls IP from CF header, parses UA.
export function ctxFromReq(req) {
  const ip = (req.headers['cf-connecting-ip'] || req.ip || '').toString().replace(/^::ffff:/, '');
  const ua = req.headers['user-agent'] || '';
  // Lightweight UA parse — full parser lives on the auth side. We pass the
  // raw UA and let auth re-parse on display.
  return {
    ip,
    ua,
    browser: null,
    os: null,
    device: null,
    deviceLabel: null,
    geo: null,
    geoLabel: null
  };
}
