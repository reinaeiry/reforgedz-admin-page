$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$toolsDir = Join-Path $root 'tools\cloudflared'
$exePath = Join-Path $toolsDir 'cloudflared.exe'

New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null

if (Test-Path $exePath) {
  Write-Host "cloudflared already present: $exePath"
  exit 0
}

# Official Cloudflare build (GitHub release). If you are on ARM64, change the URL.
$url = 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe'

Write-Host "Downloading cloudflared from: $url"
Invoke-WebRequest -Uri $url -OutFile $exePath

if (!(Test-Path $exePath)) {
  throw "Download failed: $exePath"
}

Write-Host "Installed cloudflared to: $exePath"
& $exePath --version
