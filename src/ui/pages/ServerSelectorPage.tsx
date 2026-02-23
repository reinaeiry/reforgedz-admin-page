import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listServers, type ServerInfo } from '../../util/api';
import { clearSession } from '../../util/session';

export function ServerSelectorPage() {
  const nav = useNavigate();

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setBusy(true);
      setError(null);
      try {
        const data = await listServers();
        if (cancelled) {
          return;
        }
        setServers(data);
      } catch (err) {
        if (cancelled) {
          return;
        }
        const message = err instanceof Error ? err.message : 'Failed to load servers';
        setError(message);
      } finally {
        if (!cancelled) {
          setBusy(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function onLogout() {
    clearSession();
    nav('/login', { replace: true });
  }

  function onSelect(serverId: string) {
    nav(`/replay?serverId=${encodeURIComponent(serverId)}`);
  }

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1 className="h1">Server Selector</h1>
        <button className="button" onClick={onLogout}>
          Log out
        </button>
      </div>

      <div style={{ height: 12 }} />

      <div className="card">
        {busy ? <div className="muted">Loading…</div> : null}
        {error ? <div className="error">{error}</div> : null}

        {!busy && !error && servers.length === 0 ? (
          <div className="muted">No servers returned by API.</div>
        ) : null}

        <div className="stack">
          {servers.map((s) => (
            <div key={s.id} className="row" style={{ justifyContent: 'space-between' }}>
              <div className="stack" style={{ gap: 4 }}>
                <div className="h2">{s.name}</div>
                <div className="muted" style={{ fontSize: 12 }}>
                  {s.id}
                </div>
              </div>
              <button className="button" onClick={() => onSelect(s.id)}>
                Open Replay Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
