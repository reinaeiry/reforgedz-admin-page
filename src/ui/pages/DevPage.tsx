import React, { useEffect, useState } from 'react';
import { addDevServer, clearServerHistory, listDevServers, regenerateTerrainData, type DevServerInfo } from '../../util/api';

export function DevPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [servers, setServers] = useState<DevServerInfo[]>([]);

  const [serverId, setServerId] = useState('');
  const [serverKey, setServerKey] = useState('');
  const [serverName, setServerName] = useState('');

  async function refresh() {
    setBusy(true);
    setError(null);
    try {
      const s = await listDevServers();
      setServers(s);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load dev servers');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Dev</h1>
        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack">
            <div>
              <div className="label">Add server</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Adds a new ingest key so the backend will accept replay uploads for that server.
              </div>
            </div>

            <div className="row">
              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="label">Server ID</div>
                <input className="input" value={serverId} onChange={(e) => setServerId(e.target.value)} placeholder="reforgedz-dev-eu-1" />
              </div>

              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="label">Server name (optional)</div>
                <input className="input" value={serverName} onChange={(e) => setServerName(e.target.value)} placeholder="EU #1" />
              </div>
            </div>

            <div>
              <div className="label">Server key / secret</div>
              <input className="input" value={serverKey} onChange={(e) => setServerKey(e.target.value)} placeholder="secret" />
              <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                This must match what the Reforger exporter sends as serverKey.
              </div>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button
                className="button buttonPrimary"
                disabled={busy || serverId.trim().length === 0 || serverKey.trim().length < 6}
                onClick={async () => {
                  setBusy(true);
                  setError(null);
                  try {
                    await addDevServer({ serverId: serverId.trim(), serverKey: serverKey.trim(), name: serverName.trim() || undefined });
                    setServerId('');
                    setServerKey('');
                    setServerName('');
                    await refresh();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : 'Failed to add server');
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Add server
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="label">Servers</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept.
              </div>
            </div>

            <button className="button buttonPrimary" disabled={busy} onClick={refresh}>
              Refresh
            </button>
          </div>

          <div style={{ height: 10 }} />

          <div className="scroll" style={{ maxHeight: 520, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
            {servers.length === 0 ? (
              <div className="muted" style={{ padding: 10, fontSize: 12 }}>No servers configured.</div>
            ) : (
              servers.map((s) => (
                <div key={s.id} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{s.name || s.id}</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        id: {s.id}{s.keyHint ? ` • key: ${s.keyHint}` : ''}
                      </div>
                    </div>

                    <button
                      className="button"
                      disabled={busy}
                      onClick={async () => {
                        if (!confirm(`Clear history for '${s.id}'? This deletes stored replay data.`)) return;
                        setBusy(true);
                        setError(null);
                        try {
                          await clearServerHistory(s.id);
                          await refresh();
                        } catch (e) {
                          setError(e instanceof Error ? e.message : 'Failed to clear history');
                        } finally {
                          setBusy(false);
                        }
                      }}
                    >
                      Clear history
                    </button>

                    <button
                      className="button"
                      disabled={busy}
                      onClick={async () => {
                        if (!confirm(`Regenerate terrain data for '${s.id}'? This queues a command for the exporter to re-send map terrain.`)) return;
                        setBusy(true);
                        setError(null);
                        try {
                          await regenerateTerrainData(s.id);
                          await refresh();
                        } catch (e) {
                          setError(e instanceof Error ? e.message : 'Failed to regenerate terrain');
                        } finally {
                          setBusy(false);
                        }
                      }}
                    >
                      Regenerate terrain data
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
