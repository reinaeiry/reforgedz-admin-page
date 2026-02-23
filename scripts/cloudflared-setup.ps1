param(
  [Parameter(Mandatory = $false)]
  [string]$TunnelName = 'reforgedz-admin',

  [Parameter(Mandatory = $false)]
  [string]$Hostname = 'admin.reforgedz.xyz',

  [Parameter(Mandatory = $false)]
  [string]$OriginUrl = 'http://localhost:3001'
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$exePath = Join-Path $root 'tools\cloudflared\cloudflared.exe'

if (!(Test-Path $exePath)) {
  Write-Host "cloudflared not found at $exePath"
  Write-Host "Run: powershell -ExecutionPolicy Bypass -File .\scripts\cloudflared-install.ps1"
  exit 1
}

Write-Host "Using cloudflared: $exePath"
& $exePath --version

Write-Host ''
Write-Host 'Step 1) Login to Cloudflare (opens browser):'
Write-Host ('.\tools\cloudflared\cloudflared.exe tunnel login')
Write-Host ''
Write-Host 'Step 2) Create the tunnel:'
Write-Host (".\\tools\\cloudflared\\cloudflared.exe tunnel create $TunnelName")
Write-Host ''
Write-Host 'Step 3) Map DNS hostname -> tunnel (creates the DNS record in Cloudflare):'
Write-Host (".\\tools\\cloudflared\\cloudflared.exe tunnel route dns $TunnelName $Hostname")
Write-Host ''
Write-Host 'Step 4) After create, cloudflared will output a tunnel UUID. Put it here:'

$tunnelId = Read-Host 'Tunnel UUID (example: 12345678-1234-1234-1234-1234567890ab)'
if ([string]::IsNullOrWhiteSpace($tunnelId)) {
  throw 'Tunnel UUID is required.'
}

$userProfileDir = $env:USERPROFILE
$cloudflaredDir = Join-Path $userProfileDir '.cloudflared'
New-Item -ItemType Directory -Force -Path $cloudflaredDir | Out-Null

$credentialsFile = Join-Path $cloudflaredDir ("$tunnelId.json")

$configPath = Join-Path $cloudflaredDir 'config.yml'
$config = @"
# Auto-generated for ReforgedZ admin tunnel

tunnel: $tunnelId
credentials-file: $credentialsFile

ingress:
  - hostname: $Hostname
    service: $OriginUrl
  - service: http_status:404
"@

Set-Content -Path $configPath -Value $config -Encoding UTF8

Write-Host ''
Write-Host "Wrote: $configPath"
Write-Host 'Next:'
Write-Host '  1) Ensure your backend is running locally:'
Write-Host '     npm run build'
Write-Host '     npm run start'
Write-Host ''
Write-Host '  2) Run the tunnel:'
Write-Host (".\\tools\\cloudflared\\cloudflared.exe tunnel run $TunnelName")
Write-Host ''
Write-Host 'Optional: install as a Windows service (run PowerShell as Administrator):'
Write-Host '  .\tools\cloudflared\cloudflared.exe service install'
