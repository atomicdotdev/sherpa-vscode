# Security policy

## Supported versions

Atomic Sherpa 1.x receives security fixes. Pre-1.0 builds are unsupported.

## Reporting a vulnerability

Report vulnerabilities through a private GitHub security advisory:

https://github.com/atomicdotdev/sherpa-vscode/security/advisories/new

Do not open a public issue for an unpatched vulnerability. Include the affected
version, platform, reproduction steps, and any relevant extension-host or Atomic
runtime logs. Do not include private repository contents, identities, or tokens.

## Dependency policy

Production dependencies must pass:

```sh
npm audit --omit=dev
```

CI enforces this on every pull request and release branch. Development-only
advisories are tracked separately and do not ship in the VSIX.
