// Lifting a ban is a judgement call. The reason is what lets the next admin understand it -
// and revisit it if it proves wrong - so every lift from the admin site carries one, the same
// as `.unban` and `.ipunban` in Discord. Pure functions, so they can be tested without a server.

export const MAX_LIFT_REASON = 500;

/**
 * @returns {{ok: true, reason: string} | {ok: false, error: string, max?: number}}
 *   Control characters and runs of whitespace collapse to single spaces: the reason is shown
 *   on one line in Discord and on the player page. Too long is refused rather than cut, because
 *   a silently truncated reason reads as a different reason.
 */
export function parseLiftReason(value) {
  const cleaned = Array.from(String(value ?? ''), (ch) => {
    const code = ch.charCodeAt(0);
    return code < 32 || code === 127 ? ' ' : ch;
  }).join('');
  const reason = cleaned.replace(/\s+/g, ' ').trim();
  if (!reason) return { ok: false, error: 'reason_required' };
  if (reason.length > MAX_LIFT_REASON) return { ok: false, error: 'reason_too_long', max: MAX_LIFT_REASON };
  return { ok: true, reason };
}

/**
 * The controller's ban_history rows, shaped for the player page.
 *
 * IP addresses are PII behind moderation.viewIps. Without it an IP row still says an IP ban
 * existed, who set and lifted it, and why - just not the address.
 *
 * The original ban date is deliberately left out: for account bans the controller stores when
 * it adopted the ban, not when it was placed, and showing that as "banned on" would be wrong.
 */
export function shapeBanHistory(rows, canViewIps) {
  if (!Array.isArray(rows)) return [];
  return rows.map((r) => {
    const kind = r?.kind === 'ip' ? 'ip' : 'account';
    return {
      id: r?.id,
      kind,
      reason: r?.reason || '',
      bannedBy: r?.banned_by || '',
      liftedBy: r?.lifted_by || '',
      liftedAt: r?.lifted_at || '',
      note: r?.note || '',
      ip: kind === 'ip' && canViewIps ? (r?.ip || '') : null,
    };
  });
}
