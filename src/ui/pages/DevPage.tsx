import React, { useEffect, useState } from 'react';
import {
  addDevServer,
  clearServerHistory,
  getDevDiscordWebhook,
  listDevServers,
  regenerateTerrainData,
  setDevDiscordWebhook,
  type DevServerInfo,
} from '../../util/api';

export function DevPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [servers, setServers] = useState<DevServerInfo[]>([]);

  const [discordWebhookMasked, setDiscordWebhookMasked] = useState<string>('');
  const [discordWebhookDraft, setDiscordWebhookDraft] = useState<string>('');
  const [discordWebhookIsSet, setDiscordWebhookIsSet] = useState(false);

  const [serverId, setServerId] = useState('');
  const [serverKey, setServerKey] = useState('');
  const [serverName, setServerName] = useState('');

  async function refresh() {
    setBusy(true);
    setError(null);
    try {
      const s = await listDevServers();
      setServers(s);
      const wh = await getDevDiscordWebhook();
      setDiscordWebhookIsSet(!!wh.isSet);
      setDiscordWebhookMasked(wh.masked || '');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load dev servers');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Developer</h1>
        {error ? <div className="error">{error}</div> : null}

        {/* Discord webhook */}
        <div className="card">
          <div className="stack">
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>Discord Webhook</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Global webhook used by "Export event to Discord". Shared across all servers.
              </div>
            </div>

            <div style={{
              padding: '10px 14px', borderRadius: 'var(--rz-radius)',
              background: discordWebhookIsSet ? 'var(--rz-success-soft)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${discordWebhookIsSet ? 'rgba(52,211,153,0.15)' : 'var(--rz-border)'}`,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span className={`statusDot ${discordWebhookIsSet ? 'statusDotOnline' : 'statusDotOffline'}`} />
              <span style={{ fontSize: 13, color: discordWebhookIsSet ? 'var(--rz-success)' : 'var(--rz-muted)' }}>
                {discordWebhookIsSet ? (discordWebhookMasked || 'Configured') : 'Not configured'}
              </span>
            </div>

            <div>
              <div className="label">Webhook URL</div>
              <input
                className="input"
                type="password"
                value={discordWebhookDraft}
                onChange={(e) => setDiscordWebhookDraft(e.target.value)}
                placeholder="https://discord.com/api/webhooks/..."
              />
              <div className="muted" style={{ fontSize: 11, marginTop: 6 }}>
                Leave blank and click Save to clear.
              </div>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button
                className="button buttonPrimary"
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  setError(null);
                  try {
                    await setDevDiscordWebhook(discordWebhookDraft.trim());
                    setDiscordWebhookDraft('');
                    await refresh();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : 'Failed to save webhook');
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Save Webhook
              </button>
            </div>
          </div>
        </div>

        {/* Add server */}
        <div className="card">
          <div className="stack">
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>Add Server</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Add a new ingest key so the backend accepts replay uploads for that server.
              </div>
            </div>

            <div className="row" style={{ gap: 12 }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div className="label">Server ID</div>
                <input className="input" value={serverId} onChange={(e) => setServerId(e.target.value)} placeholder="reforgedz-dev-eu-1" />
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div className="label">Server name (optional)</div>
                <input className="input" value={serverName} onChange={(e) => setServerName(e.target.value)} placeholder="EU #1" />
              </div>
            </div>

            <div>
              <div className="label">Server key / secret</div>
              <input className="input" value={serverKey} onChange={(e) => setServerKey(e.target.value)} placeholder="secret (min 6 chars)" />
              <div className="muted" style={{ fontSize: 11, marginTop: 6 }}>
                Must match what the Reforger exporter sends as serverKey.
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
                Add Server
              </button>
            </div>
          </div>
        </div>

        {/* Server list */}
        <div className="card">
          <div className="stack">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>
                  Servers
                  {servers.length > 0 ? <span className="badge badgeMuted" style={{ marginLeft: 8 }}>{servers.length}</span> : null}
                </div>
                <div className="muted" style={{ fontSize: 12 }}>
                  Clear history removes stored replay data. Cached map data is kept.
                </div>
              </div>
              <button className="button" disabled={busy} onClick={refresh}>Refresh</button>
            </div>

            <div className="listContainer">
              <div className="scroll" style={{ maxHeight: 520, overflow: 'auto' }}>
                {servers.length === 0 ? (
                  <div className="listEmpty">No servers configured.</div>
                ) : (
                  servers.map((s) => (
                    <div key={s.id} className="listRow">
                      <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--rz-text-bright)' }}>{s.name || s.id}</div>
                          <div className="muted" style={{ fontSize: 12, fontFamily: 'monospace', marginTop: 2 }}>
                            {s.id}{s.keyHint ? ` \u2022 key: ${s.keyHint}` : ''}
                          </div>
                        </div>
                        <div className="row" style={{ gap: 6 }}>
                          <button
                            className="button buttonDanger"
                            style={{ fontSize: 11, padding: '5px 12px' }}
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
                            Clear History
                          </button>

                          <button
                            className="button"
                            style={{ fontSize: 11, padding: '5px 12px' }}
                            disabled={busy}
                            onClick={async () => {
                              if (!confirm(`Regenerate terrain data for '${s.id}'?`)) return;
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
                            Regen Terrain
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
