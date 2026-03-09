import React, { useEffect, useState } from 'react';
import {
  addDevServer, clearServerHistory, getDevDiscordWebhook,
  listDevServers, regenerateTerrainData, setDevDiscordWebhook,
  type DevServerInfo,
} from '../../util/api';

export function DevPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [servers, setServers] = useState<DevServerInfo[]>([]);
  const [discordWebhookMasked, setDiscordWebhookMasked] = useState('');
  const [discordWebhookDraft, setDiscordWebhookDraft] = useState('');
  const [discordWebhookIsSet, setDiscordWebhookIsSet] = useState(false);
  const [serverId, setServerId] = useState('');
  const [serverKey, setServerKey] = useState('');
  const [serverName, setServerName] = useState('');

  async function refresh() {
    setBusy(true); setError(null);
    try {
      setServers(await listDevServers());
      const wh = await getDevDiscordWebhook();
      setDiscordWebhookIsSet(!!wh.isSet);
      setDiscordWebhookMasked(wh.masked || '');
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to load'); }
    finally { setBusy(false); }
  }

  useEffect(() => { refresh(); }, []);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Developer</h1>
        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack" style={{ gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-bright)', marginBottom: 2 }}>Discord Webhook</div>
              <div className="muted" style={{ fontSize: 11 }}>Global webhook for "Export to Discord".</div>
            </div>

            <div style={{
              padding: '8px 12px', borderRadius: 'var(--r)',
              background: discordWebhookIsSet ? 'var(--green-dim)' : 'var(--bg-raised)',
              border: `1px solid ${discordWebhookIsSet ? 'rgba(74,222,128,0.12)' : 'var(--border)'}`,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span className={`statusDot ${discordWebhookIsSet ? 'statusDotOnline' : 'statusDotOffline'}`} />
              <span style={{ fontSize: 12, color: discordWebhookIsSet ? 'var(--green)' : 'var(--text-dim)' }}>
                {discordWebhookIsSet ? (discordWebhookMasked || 'Configured') : 'Not set'}
              </span>
            </div>

            <div>
              <div className="label">Webhook URL</div>
              <input className="input" type="password" value={discordWebhookDraft}
                onChange={(e) => setDiscordWebhookDraft(e.target.value)} placeholder="https://discord.com/api/webhooks/..." />
              <div className="muted" style={{ fontSize: 10, marginTop: 4 }}>Leave blank and save to clear.</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button className="button buttonPrimary" disabled={busy} onClick={async () => {
                setBusy(true); setError(null);
                try { await setDevDiscordWebhook(discordWebhookDraft.trim()); setDiscordWebhookDraft(''); await refresh(); }
                catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
                finally { setBusy(false); }
              }}>Save</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stack" style={{ gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-bright)', marginBottom: 2 }}>Add Server</div>
              <div className="muted" style={{ fontSize: 11 }}>Register a new ingest key for replay uploads.</div>
            </div>
            <div className="row" style={{ gap: 10 }}>
              <div style={{ flex: 1 }}><div className="label">Server ID</div><input className="input" value={serverId} onChange={(e) => setServerId(e.target.value)} placeholder="reforgedz-dev-eu-1" /></div>
              <div style={{ flex: 1 }}><div className="label">Name</div><input className="input" value={serverName} onChange={(e) => setServerName(e.target.value)} placeholder="Optional" /></div>
            </div>
            <div>
              <div className="label">Secret Key</div>
              <input className="input" value={serverKey} onChange={(e) => setServerKey(e.target.value)} placeholder="min 6 chars" />
            </div>
            <div style={{ textAlign: 'right' }}>
              <button className="button buttonPrimary" disabled={busy || !serverId.trim() || serverKey.trim().length < 6}
                onClick={async () => {
                  setBusy(true); setError(null);
                  try {
                    await addDevServer({ serverId: serverId.trim(), serverKey: serverKey.trim(), name: serverName.trim() || undefined });
                    setServerId(''); setServerKey(''); setServerName('');
                    await refresh();
                  } catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
                  finally { setBusy(false); }
                }}>Add Server</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stack" style={{ gap: 12 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Servers</span>
                {servers.length > 0 && <span className="badge badgeMuted">{servers.length}</span>}
              </div>
              <button className="button" disabled={busy} onClick={refresh}>Refresh</button>
            </div>

            <div className="listContainer">
              <div className="scroll" style={{ maxHeight: 480, overflow: 'auto' }}>
                {servers.length === 0 ? (
                  <div className="listEmpty">No servers configured.</div>
                ) : servers.map((s) => (
                  <div key={s.id} className="listRow">
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-bright)', fontSize: 13 }}>{s.name || s.id}</div>
                        <div className="muted" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>
                          {s.id}{s.keyHint ? ` \u2022 ${s.keyHint}` : ''}
                        </div>
                      </div>
                      <div className="row" style={{ gap: 4 }}>
                        <button className="button buttonDanger" style={{ fontSize: 10, padding: '4px 10px' }} disabled={busy}
                          onClick={async () => {
                            if (!confirm(`Clear history for '${s.id}'?`)) return;
                            setBusy(true); setError(null);
                            try { await clearServerHistory(s.id); await refresh(); }
                            catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
                            finally { setBusy(false); }
                          }}>Clear</button>
                        <button className="button" style={{ fontSize: 10, padding: '4px 10px' }} disabled={busy}
                          onClick={async () => {
                            if (!confirm(`Regen terrain for '${s.id}'?`)) return;
                            setBusy(true); setError(null);
                            try { await regenerateTerrainData(s.id); await refresh(); }
                            catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
                            finally { setBusy(false); }
                          }}>Regen Terrain</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
