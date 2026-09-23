# Architecture Decisions

## Feature-oriented structure
Business capabilities live under features so unrelated domains remain isolated.

## Server state
TanStack Query is used for remote data, caching and synchronization. Global UI state is reserved for Zustand when component-local state is insufficient.

## Strict TypeScript
Strict mode is enabled to make contracts explicit and reduce avoidable runtime defects.