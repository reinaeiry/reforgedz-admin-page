import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getServerHealth, listServers, sendGlobalMessage, type ServerHealth, type ServerInfo } from '../../util/api';

export function ServerHealthPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [health, setHealth] = useState<ServerHealth | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const [fpsHistory, setFpsHistory] = useState<number[]>([]);
  const [playerHistory, setPlayerHistory] = useState<number[]>([]);

  const [message, setMessage] = useState('');
  const [msgSuccess, setMsgSuccess] = useState(false);

  useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      const data = await getServerHealth(serverId);
      setHealth(data);
      setFpsHistory((prev) => [...prev.slice(-59), data.fps]);
      setPlayerHistory((prev) => [...prev.slice(-59), data.playerCount]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to get health');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => {
    if (!serverId) return;
    setFpsHistory([]);
    setPlayerHistory([]);
    refresh();
    if (!autoRefresh) return;
    const id = setInterval(refresh, 15000);
    return () => clearInterval(id);
  }, [serverId, autoRefresh, refresh]);

  async function onSendMessage() {
    if (!message.trim() || !serverId) return;
    setBusy(true);
    setError(null);
    setMsgSuccess(false);
    try {
      await sendGlobalMessage({ serverId, message: message.trim() });
      setMessage('');
      setMsgSuccess(true);
      setTimeout(() => setMsgSuccess(false), 3000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to send message');
    } finally {
      setBusy(false);
    }
  }

  function fpsColor(fps: number): string {
    if (fps >= 30) return '#b7f7c8';
    if (fps >= 15) return '#f9bc59';
    return '#ffb4b4';
  }

  function renderMiniChart(data: number[], maxVal: number, color: string) {
    if (data.length < 2) return null;
    const w = 300;
    const h = 50;
    const points = data.map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - (Math.min(v, maxVal) / maxVal) * h;
      return `${x},${y}`;
    });
    return (
      <svg width={w} height={h} style={{ display: 'block' }}>
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h1 className="h1">Server Health</h1>
          <div className="row" style={{ gap: 8 }}>
            <label className="row" style={{ gap: 6 }}>
              <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
              <span className="muted" style={{ fontSize: 12 }}>Auto-refresh (15s)</span>
            </label>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>
              Refresh
            </button>
          </div>
        </div>

        <div className="card">
          <div className="label">Server</div>
          <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
            <option value="">Select server...</option>
            {servers.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {error ? <div className="error">{error}</div> : null}

        {health ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
            <div className="card">
              <div className="stack" style={{ gap: 8 }}>
                <div className="label">Server FPS</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: fpsColor(health.fps) }}>
                  {health.fps.toFixed(1)}
                </div>
                {renderMiniChart(fpsHistory, 60, fpsColor(health.fps))}
              </div>
            </div>

            <div className="card">
              <div className="stack" style={{ gap: 8 }}>
                <div className="label">Players Online</div>
                <div style={{ fontSize: 32, fontWeight: 900 }}>
                  {health.playerCount}
                </div>
                {renderMiniChart(playerHistory, Math.max(64, ...playerHistory), 'var(--rz-accent)')}
              </div>
            </div>
          </div>
        ) : serverId ? (
          <div className="muted">Loading health data...</div>
        ) : null}

        <div className="card">
          <div className="stack">
            <div>
              <div className="label">Global Message</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Broadcast a message to all players on the server.
              </div>
            </div>
            <div className="row">
              <input
                className="input"
                style={{ flex: 1 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Server restarting in 5 minutes..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSendMessage();
                }}
              />
              <button className="button buttonPrimary" disabled={busy || !serverId || !message.trim()} onClick={onSendMessage}>
                Send
              </button>
            </div>
            {msgSuccess ? <div className="success" style={{ fontSize: 12 }}>Message sent!</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
