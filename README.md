# Sigma API

A lightweight CI/CD management API monorepo — tracks software builds, deployments, and versions across two API services.

## Tech Stack

- **Monorepo**: Nx 20.4, npm
- **sigma**: NestJS 11, TypeScript, webpack — serves Swagger docs at `/api`
- **delta**: Express 4, plain JS (ESM)
- **Config**: Singleton (dotenv + Joi), compiled via tsc
- **Health**: `@nestjs/terminus` (HTTP ping, disk, memory checks)
- **Testing**: Jest 29, ts-jest, supertest (coverage always on)
- **Linting**: ESLint 9 flat config, Prettier (singleQuote)

## Project Structure

```
apps/api/
├── sigma/          # NestJS application — main API
├── sigma-e2e/      # E2E tests for sigma
├── delta/          # Express application — secondary API
└── delta-e2e/      # E2E tests for delta
libs/
├── config/         # Shared config (dotenv + Joi singleton)
└── api/
    ├── build/      # Build management module
    ├── deployment/ # Deployment management module
    ├── version/    # Version management module
    └── health/     # Health check module (@nestjs/terminus)
environments/       # Environment config files
└── instance1/
    ├── sigma-api/{env}/.env
    └── delta-api/{env}/.env
```

## Quick Start

```bash
npm ci
npx nx build config      # required before delta can run
npx nx serve sigma       # NestJS dev server (webpack rebuild on changes)
npx nx serve delta       # Express server (node apps/api/delta/src/main.js)
```

## Commands

| Command | Description |
|---|---|
| `npx nx build <project>` | Build (webpack for sigma/delta, tsc for config) |
| `npx nx serve sigma` | Dev server with webpack rebuild |
| `npx nx serve delta` | Express dev server |
| `npx nx test <project>` | Jest unit tests |
| `npx nx e2e sigma-e2e` | E2E tests (builds sigma first) |
| `npx nx e2e delta-e2e` | E2E tests (builds delta first) |
| `npx nx lint <project>` | ESLint |
| `npx nx graph` | Visualize project dependency graph |

## API Endpoints (sigma)

All routes are prefixed with `API_PREFIX` (default: `/api`). Swagger UI at `/api`.

| Route | Method | Description |
|---|---|---|
| `/api/` | GET | Hello world |
| `/api/build` | GET/POST | List / create builds |
| `/api/deployment` | GET/POST | List / create deployments |
| `/api/version` | GET/POST | List / create versions |
| `/api/health` | GET | System health checks |

Data is stored in-memory (no database).

## Environment Config

```
environments/{instance}/{api}/{environment}/.env
```

- Instance: `instance1` (default)
- API: `sigma-api` | `delta-api`
- Environment: `local` | `dev` | `int` | `uat` | `prod`

Configuration uses `dotenv` + `process.env` merge, validated through Joi schemas.

## CI

GitHub Actions runs `npx nx affected -t lint test build` on every push/PR, plus CodeQL analysis and Docker build checks (hadolint + trivy scan).
