# Sigma API — Agent Guide

Monorepo (Nx 20.4, npm) with two API apps and 5 shared libs.

## Projects

| Path | Lang | Framework | Entry |
|---|---|---|---|
| `apps/api/sigma` | TS | NestJS 11 | `src/main.ts` |
| `apps/api/delta` | JS | Express | `src/main.js` |
| `libs/config` | TS | — | `src/index.ts` |
| `libs/api/build` | TS | NestJS module | `src/index.ts` |
| `libs/api/deployment` | TS | NestJS module | `src/index.ts` |
| `libs/api/version` | TS | NestJS module | `src/index.ts` |
| `libs/api/health` | TS | NestJS module | `src/index.ts` |

## Commands

- `npx nx build <project>` — webpack build (sigma, delta) / tsc (config)
- `npx nx serve sigma` — dev server (NestJS, hot-reload via webpack)
- `npx nx serve delta` — runs `npm run start:delta-api` (Express)
- `npx nx test <project>` — Jest unit tests
- `npx nx e2e sigma-e2e` — e2e tests (target is `e2e`, not `test`; depends on sigma:build)
- `npx nx e2e delta-e2e` — e2e tests (target is `e2e`, not `test`; depends on delta:build)
- `npx nx lint <project>` — ESLint
- `npx nx graph` — visualize project dependency graph
- CI: `npx nx affected -t lint test build`

## Environment config

Env files live at `environments/{instance}/{api}/{environment}/.env`.

- Instance: `instance1` (default)
- API: `sigma-api` | `delta-api`
- Environment: `local | dev | int | uat | prod`
- `NODE_ENV` defaults to `dev`, PORT to `3000`, API_PREFIX to `api`

Config is a singleton (`Config.getInstance()`), loaded at bootstrap with Joi validation. Both apps call it the same way.

Sigma serves Swagger docs at `/api` (via `@nestjs/swagger`).

## Quirks & gotchas

- **Delta requires `npx nx build config` first.** It imports config from `dist/libs/config/src/index.js` directly (bypassing nx boundary — todo to fix).
- **ConfigModule** exists but is not exported from `@sigma-api/config`. Only `Config` class and `baseSchema` are exported.
- **Delta is plain JS.** Sigma is TypeScript. Do not add TS-only features to delta.
- **Coverage is always on** (lcov + html + cobertura via `jest.preset.js`).
- **nx/jest plugin excludes** `sigma-e2e`, `delta-e2e`, and `health` (they configure Jest themselves).
- **No typecheck target.** Run `npx tsc --noEmit` if needed.
- **Prettier:** `singleQuote: true`, ignores `dist/`, `coverage/`, `.nx/`.
- **Sigma Dockerfile** at `apps/api/sigma/Dockerfile` (multi-stage, node:20-alpine). No delta Dockerfile.
