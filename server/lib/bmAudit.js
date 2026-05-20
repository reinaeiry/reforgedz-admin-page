// Posts audit events to auth.reforgedz.net /api/internal/audit so all
// BM mutations show up alongside login/perm-change events in the central
// audit log. Best-effort: never blocks the caller, logs failures.

const AUTH_BASE = (process.env.AUTH_BASE || 'https://auth.reforgedz.net').replace(/\/+$/, '');
const AUDIT_KEY = process.env.INTERNAL_AUDIT_KEY || '';

export async function postAuditEvent({ actorUsername, action, targetUserId, targetUsername, detail, ctx }) {
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
    const res = await fetch(`${AUTH_BASE}/api/internal/audit`, {
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
