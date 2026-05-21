// Shared date/time formatters. Always uses the browser's resolved
// timezone so admins see logs in their own local time, regardless of
// where the admin server runs. ts inputs are always UTC ms epochs.

const LOCAL_TZ = (() => {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone; }
  catch { return undefined; }
})();

function withLocalTz(opts: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions {
  return LOCAL_TZ ? { ...opts, timeZone: LOCAL_TZ } : opts;
}

// "May 21, 5:14:57 PM EDT" — the standard log row time.
export function fmtLogTime(tsMs: number): string {
  return new Intl.DateTimeFormat(undefined, withLocalTz({
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  })).format(new Date(tsMs));
}

// "May 21, 5:14 PM" — compact, for chat / message rows where seconds + TZ
// would be noise.
export function fmtMessageTime(tsMs: number): string {
  const d = new Date(tsMs);
  const sameDay = d.toDateString() === new Date().toDateString();
  return new Intl.DateTimeFormat(undefined, withLocalTz(
    sameDay
      ? { hour: '2-digit', minute: '2-digit' }
      : { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  )).format(d);
}

// "May 21, 2026" — date-only contexts (transcript list, last-seen rows).
export function fmtDate(tsMs: number): string {
  return new Intl.DateTimeFormat(undefined, withLocalTz({
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })).format(new Date(tsMs));
}

// "May 21, 2026, 5:14:57 PM EDT" — full timestamp (ban audit rows, ticket
// header "opened at").
export function fmtFullDateTime(tsMs: number): string {
  return new Intl.DateTimeFormat(undefined, withLocalTz({
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  })).format(new Date(tsMs));
}
