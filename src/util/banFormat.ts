// Shared helpers for displaying ban reason + duration. BattleMetrics templates
// (e.g. "Anti cheat Speed hack - {{duration}} by Psycho") contain literal
// `{{duration}}` placeholders that BM never substitutes — we resolve them
// against the ban's `expires` attribute.

export function formatBanDuration(expiresIso: string | null | undefined, createdAtIso?: string | null): string {
  if (!expiresIso) return 'permanent';
  const exp = Date.parse(expiresIso);
  if (!Number.isFinite(exp)) return 'permanent';
  const now = Date.now();
  if (exp <= now) return 'expired';
  const start = createdAtIso ? Date.parse(createdAtIso) : NaN;
  // Prefer the original (created -> expires) interval when available so a
  // 30-day ban issued a week ago still says "30 days" rather than "23 days".
  const baseMs = Number.isFinite(start) ? exp - start : exp - now;
  return humanDuration(baseMs);
}

function humanDuration(ms: number): string {
  if (ms <= 0) return 'expired';
  const s = Math.round(ms / 1000);
  const m = Math.round(s / 60);
  const h = Math.round(m / 60);
  const d = Math.round(h / 24);
  const w = Math.round(d / 7);
  const mo = Math.round(d / 30);
  const y = Math.round(d / 365);
  if (y >= 2) return `${y} years`;
  if (mo >= 2) return `${mo} months`;
  if (w >= 2) return `${w} weeks`;
  if (d >= 2) return `${d} days`;
  if (d === 1) return '1 day';
  if (h >= 2) return `${h} hours`;
  if (h === 1) return '1 hour';
  if (m >= 2) return `${m} minutes`;
  return `${Math.max(s, 1)} seconds`;
}

// Replace BM's {{duration}} (and a few common siblings) with the computed
// human-readable values. Falls back to leaving placeholders alone.
export function renderBanReason(
  reason: string | null | undefined,
  expiresIso: string | null | undefined,
  createdAtIso?: string | null
): string {
  if (!reason) return '';
  const dur = formatBanDuration(expiresIso, createdAtIso);
  return reason
    .replace(/\{\{\s*duration\s*\}\}/gi, dur)
    .replace(/\{\{\s*expires\s*\}\}/gi, expiresIso ? new Date(expiresIso).toLocaleString() : 'never');
}
