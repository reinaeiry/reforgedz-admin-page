import { useEffect, useRef } from 'react';

/**
 * Poll while the tab is visible, and stop while it is not.
 *
 * Every interval in this app except BMLogs used to run forever: an admin with the
 * moderation or replay tab parked in the background kept fetching every few
 * seconds, and the replay page's fastest loop is sub-second. That is load on the
 * admin container (which is main-thread bound) and battery on a phone, for data
 * nobody is looking at.
 *
 * On returning to the tab it fetches once immediately, so what you see is never
 * one interval stale.
 */
export function useVisiblePolling(
  fn: () => void,
  intervalMs: number,
  opts?: { runOnMount?: boolean },
): void {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  const runOnMount = opts?.runOnMount !== false;

  useEffect(() => {
    if (!Number.isFinite(intervalMs) || intervalMs <= 0) return undefined;
    let timer: number | null = null;

    const stop = () => {
      if (timer !== null) { window.clearInterval(timer); timer = null; }
    };
    const start = () => {
      stop();
      timer = window.setInterval(() => fnRef.current(), intervalMs);
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        fnRef.current();
        start();
      } else {
        stop();
      }
    };

    if (runOnMount) fnRef.current();
    if (document.visibilityState === 'visible') start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [intervalMs, runOnMount]);
}

/** For hand-rolled setTimeout poll loops that reschedule themselves. */
export function isTabHidden(): boolean {
  return typeof document !== 'undefined' && document.visibilityState === 'hidden';
}
