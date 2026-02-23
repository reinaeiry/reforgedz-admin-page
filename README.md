# ReforgedZ Admin (Client + Backend)

This repo now includes:
- A Vite + React client (login -> server selector -> replay placeholder)
- A minimal Node/Express backend that:
	- Serves the built client from `dist/`
	- Provides `/api/*` routes used by the client
	- Accepts Reforger exporter POSTs at `/api/replay/ingest`

## Setup

1) Install deps:

```bash
npm install
```

2) Create a local env file:

```bash
copy .env.example .env
```

3) Set `VITE_API_BASE_URL` in `.env`:
- For local dev with the backend on the same PC: `http://localhost:3000`
- For production at your domain: `https://admin.reforgedz.xyz`

4) Configure backend env vars in `.env` (see `.env.backend.example` for all options):
- `ADMIN_USER`, `ADMIN_PASS`
- `TOKEN_SECRET`
- `INGEST_KEYS` (example: `reforgedz-dev-eu-1=reforgedz-dev-eu-1-secret`)

## Run (development)

Backend API (port 3000 by default):

```bash
npm run dev:api
```

Frontend dev server:

```bash
npm run dev
```

## Run (production)

Build client:

```bash
npm run build
```

Run combined server (serves `dist/` + `/api/*`):

```bash
npm run start
```

Cloudflare note: if `admin.reforgedz.xyz` is proxied, Cloudflare only connects to your origin on certain ports.
Port `3000` is not one of them, so either:
- Set `PORT=80` (or another Cloudflare-supported port) for the Node server, OR
- Put IIS/Nginx in front and reverse-proxy `:80/:443` -> `:3000`.

## Cloudflare Tunnel (no port forwarding)

If you can't port-forward `80/443`, use `cloudflared` to tunnel `admin.reforgedz.xyz` to your local Node server.

1) Install `cloudflared` (downloads into `tools/cloudflared/cloudflared.exe`):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\cloudflared-install.ps1
```

2) Set up the tunnel + config file:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\cloudflared-setup.ps1
```

3) Run backend locally (example uses `PORT=3001`):

```powershell
npm run build
npm run start
```

4) Run the tunnel:

```powershell
.\tools\cloudflared\cloudflared.exe tunnel run reforgedz-admin
```

After that, your site + API should be reachable at `https://admin.reforgedz.xyz/` without any router port-forwarding.

Note: the Vite dev server (`npm run dev`) is for local development only; it will not be reachable via Cloudflare Tunnel unless you explicitly point the tunnel at it.

## API endpoints

- `POST /api/auth/login` -> `{ token }`
- `GET /api/servers` -> `[{ id, name }]`
- `GET /api/replay/status?serverId=...` -> `{ serverId, lastIngestTsMs }`
- `POST /api/replay/ingest` -> `{ ok: true }` (requires matching `serverId/serverKey`)

## Reforger exporter config

In `EIR_ReplayExporterGameModeComponent` set:
- Base URL: `https://admin.reforgedz.xyz/`
- POST path: `api/replay/ingest`
- Server ID: `reforgedz-dev-eu-1`
- Server key: `reforgedz-dev-eu-1-secret`
