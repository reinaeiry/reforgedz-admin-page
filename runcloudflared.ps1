param(
  [Parameter(Mandatory = $false)]
  [string]$TunnelName = 'reforgedz-admin',

  # Optional: run a "quick" tunnel (no DNS/host mapping). Mostly useful for ad-hoc testing.
  [Parameter(Mandatory = $false)]
  [switch]$Quick,

  # Origin URL for quick tunnel mode.
  [Parameter(Mandatory = $false)]
  [string]$OriginUrl = 'http://localhost:3001'
)

$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($root)) {
  $root = (Get-Location).Path
}

$exePath = Join-Path $root 'tools\cloudflared\cloudflared.exe'

if (!(Test-Path $exePath)) {
  Write-Host "cloudflared not found at $exePath"
  Write-Host "Run: powershell -ExecutionPolicy Bypass -File .\\scripts\\cloudflared-install.ps1"
  exit 1
}

Write-Host "Using cloudflared: $exePath"
& $exePath --version

if ($Quick) {
  Write-Host ''
  Write-Host "Starting QUICK tunnel to origin: $OriginUrl"
  Write-Host "(This does not use your named tunnel/DNS route.)"
  Write-Host ''
  & $exePath --no-autoupdate tunnel --url $OriginUrl
  exit $LASTEXITCODE
}

Write-Host ''
Write-Host "Starting tunnel: $TunnelName"
Write-Host ''

# Uses the config created by .\scripts\cloudflared-setup.ps1 in %USERPROFILE%\.cloudflared\config.yml
& $exePath --no-autoupdate tunnel run $TunnelName
exit $LASTEXITCODE
