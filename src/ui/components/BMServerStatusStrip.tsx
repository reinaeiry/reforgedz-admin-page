import React, { useEffect, useState } from 'react';
import { listBmServers, type BmDashServer } from '../../util/bmApi';

type Props = {
  pollMs?: number;
  onServersLoaded?: (servers: BmDashServer[]) => void;
};

export function BMServerStatusStrip({ pollMs = 30_000, onServersLoaded }: Props) {
  const [servers, setServers] = useState<BmDashServer[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const out = await listBmServers();
        if (!alive) return;
        setServers(out.servers);
        setErr(null);
        onServersLoaded?.(out.servers);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || 'Failed to load servers');
      }
    }
    load();
    const t = setInterval(load, pollMs);
    return () => { alive = false; clearInterval(t); };
  }, [pollMs]);

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
