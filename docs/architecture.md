# Architecture

The application uses a feature-oriented React architecture.

- app: application composition and routing
- features: business capabilities and domain UI
- shared: reusable presentation components
- test: global test setup

Server state is prepared for TanStack Query, while local cross-feature state can use Zustand. Strict TypeScript keeps contracts explicit as the application grows.

The structure is intentionally small at the first milestone and designed to expand without moving business logic into generic folders.