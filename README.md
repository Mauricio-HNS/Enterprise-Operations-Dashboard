# Enterprise Operations Dashboard

![Enterprise Operations Dashboard](./docs/dashboard-preview.svg)

> Senior-oriented React enterprise dashboard showcasing operational analytics, interactive workflows and an AI-ready frontend architecture.

A production-oriented React + TypeScript dashboard designed as an evolving enterprise SaaS frontend. The project focuses on maintainable architecture, domain-oriented feature boundaries, operational visibility and a clear path toward API-driven and AI-assisted workflows.

**Live application:** [GitHub Pages](https://mauricio-hns.github.io/Enterprise-Operations-Dashboard/)

## What is implemented

- Responsive enterprise dashboard with collapsible navigation
- Operational KPI cards with interactive detail views
- Revenue and target analytics using Recharts
- Company management view with search, filtering and detail workflows
- Analytics workspace with date-range selection and export feedback
- AI Assistant workspace with prompt history and workflow suggestions
- Customers and Settings application areas
- Modal workflows, empty/error-ready states and responsive behavior
- Automated linting, type checking, tests and production builds through GitHub Actions

## Architecture

The frontend follows a feature-oriented structure that keeps business areas isolated while allowing shared infrastructure and UI primitives to evolve independently.

```text
src/
├── app/                    # Application composition and routing
├── features/
│   ├── dashboard/          # Operational overview and KPIs
│   ├── companies/          # Company domain and workflows
│   ├── analytics/          # Operational analytics
│   └── ai-assistant/       # AI-ready interaction surface
├── shared/
│   ├── components/         # Cross-feature UI
│   └── types/              # Shared domain contracts
├── styles/                 # Global and feature presentation
└── test/                   # Test environment configuration
```

### Architectural principles

1. **Feature boundaries** — business capabilities live close to their pages, data and types.
2. **Separation of concerns** — application composition, domain features, shared UI and styling have distinct responsibilities.
3. **Typed contracts** — TypeScript is used throughout the application.
4. **Progressive integration** — UI capabilities can evolve from local data toward API-backed services without rewriting the application structure.
5. **AI-ready by design** — the AI Assistant currently represents the interaction layer; a real LLM/provider integration is intentionally not claimed yet.

## Technology

| Area | Technology |
| --- | --- |
| UI | React |
| Language | TypeScript |
| Build | Vite |
| Routing | React Router |
| Server-state foundation | TanStack Query |
| Client-state foundation | Zustand |
| Validation | Zod |
| Data visualization | Recharts |
| Testing | Vitest + Testing Library |
| Quality | ESLint + TypeScript |
| CI/CD | GitHub Actions + GitHub Pages |

## Application areas

| Route | Purpose |
| --- | --- |
| `/dashboard` | Executive operational overview |
| `/companies` | Company search, status and revenue |
| `/customers` | Customer workspace foundation |
| `/analytics` | Revenue and operational analytics |
| `/ai` | AI-assisted operations interaction layer |
| `/settings` | Workspace and account settings |

## Engineering quality

The repository uses an automated quality pipeline covering:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Tests use a dedicated Vitest environment and include browser API mocks required by chart rendering.

## Local development

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Engineering decisions

Key architectural decisions are documented in:

- [Architecture](./docs/architecture.md)
- [Evolution](./docs/evolution.md)
- [Technical decisions](./docs/decisions.md)

These documents are part of the project rather than replacing the implementation: the repository is intentionally structured to show how the system evolves over time.

## Evolution

This project is intentionally an evolving engineering system. Its history should show progression from a clean React foundation toward stronger domain modeling, API integration, automated quality, operational workflows and AI-assisted capabilities.

The goal is not to hide earlier stages. Earlier implementation choices remain part of the project's history while the current codebase demonstrates progressively stronger engineering practices.

## Roadmap

- [ ] Authentication and RBAC
- [ ] Customer and project management
- [ ] API/service layer with typed contracts
- [ ] TanStack Query data integration
- [ ] Form workflows with schema validation
- [ ] Audit trail
- [ ] E2E coverage
- [ ] Accessibility and performance hardening
- [ ] Production AI provider integration
- [ ] Observability and error monitoring

## Portfolio focus

This repository is intended to demonstrate senior-level frontend engineering through architecture, domain separation, typed development, automated quality and incremental delivery — not simply a visual dashboard.

