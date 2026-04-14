# generators

## Purpose

Internal CLI tool (`pnpm generate-model`) that scaffolds new test data model
files from Squirrelly templates, consumed only by developers in this repo.

## How To Work Here

This package is simple — a `prompts`-based CLI entry point (`src/index.ts`) that
dispatches to generators. Currently the only generator is `new-test-model`.

Templates live in `src/new-test-model/templates/`. If you need to change the
scaffolded file structure for new models, edit the templates there. The generator
uses [Squirrelly](https://squirrelly.js.org/) for template rendering.

Root `pnpm test`, `pnpm typecheck`, and `pnpm lint` all cover this package —
no package-scoped commands needed.

## Gotchas

- This package uses `tsx` to run TypeScript directly (`pnpm generate-model`
  invokes `tsx src/index.ts`). It is not built by `preconstruct` — the
  `preconstruct` config in the root `package.json` only covers `generators`
  for workspace resolution, but the CLI is run via `tsx`, not from `dist/`.
