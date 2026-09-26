import React, { useCallback, useRef, useState } from 'react';
import { listBmServers, type BmDashServer } from '../../util/bmApi';
import { useVisiblePolling } from '../../util/useVisiblePolling';

type Props = {
  pollMs?: number;
  onServersLoaded?: (servers: BmDashServer[]) => void;
};

export function BMServerStatusStrip({ pollMs = 30_000, onServersLoaded }: Props) {
  const [servers, setServers] = useState<BmDashServer[]>([]);
  const [err, setErr] = useState<string | null>(null);

  // onServersLoaded sets state on BattleMetricsPage, so calling it on every poll
  // re-rendered the entire moderation page (and every mounted player list) every
  // 30 seconds even when nothing had changed. Only report real changes.
  const lastSignatureRef = useRef<string>('');
  const onLoadedRef = useRef(onServersLoaded);
  onLoadedRef.current = onServersLoaded;

  const load = useCallback(async () => {
    try {
      const out = await listBmServers();
      setServers(out.servers);
      setErr(null);
      const signature = out.servers
        .map((s) => `${s.bmServerId}:${s.status}:${s.players ?? ''}:${s.maxPlayers ?? ''}`)
        .join('|');
      if (signature !== lastSignatureRef.current) {
        lastSignatureRef.current = signature;
        onLoadedRef.current?.(out.servers);
      }
    } catch (e: any) {
      setErr(e?.message || 'Failed to load servers');
    }
  }, []);

  useVisiblePolling(load, pollMs);

  return (
    <div className="bmServerStrip">
      {err ? <div className="bmError">{err}</div> : null}
      {servers.map((s) => (
        <div key={s.bmServerId} className={`bmServerCard bmServer-${(s.region || 'unknown').toLowerCase()} bmServer-${s.status === 'online' ? 'online' : 'offline'}`}>
          <div className="bmServerCard-tag">{s.tag || s.name.split(' ')[0]}</div>
          <div className="bmServerCard-name">{s.name}</div>
          <div className="bmServerCard-players">{s.players ?? 0}<span className="muted">/{s.maxPlayers ?? '?'}</span></div>
          <div className="bmServerCard-status">{s.status || 'unknown'}</div>
        </div>
      ))}
    </div>
  );
}
