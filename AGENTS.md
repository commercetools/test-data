# commercetools Test Data

## What This Repo Does

Monorepo of test data builders for commercetools platform entities. Teams across
the organization use these builders to generate realistic mock data for both REST
and GraphQL API responses in their test suites.

## Architecture

Two workspace packages (`pnpm-workspace.yaml`):

- **`standalone/`** — the published package
  (`@commercetools/composable-commerce-test-data`). Contains all domain models
  under `src/models/`, organized by domain area (product, cart, category, etc.).
  Each domain folder (e.g. `product/`) contains one or more sub-model folders
  (e.g. `product/`, `product-draft/`), and each sub-model folder contains
  `types.ts`, `fields-config.ts`, `builders.ts`, `builders.spec.ts`, `index.ts`,
  and an optional `presets/` directory. The `src/core/` module exports
  `createSpecializedBuilder`, `fake`, `sequence`, `oneOf`,
  `buildLimitGraphqlList`, `buildCountGraphqlList`, and other helpers. All domain
  models depend on core — changes here have blast-radius across every model.
  Dependencies beyond root stack: `@commercetools/platform-sdk` (REST types),
  `@faker-js/faker` (random data generation), `lodash`, `omit-deep`.
- **`generators/`** — internal CLI tool (`pnpm generate-model`) for scaffolding
  new test data models. A `prompts`-based CLI entry point (`src/index.ts`)
  dispatches to generators — currently the only generator is `new-test-model`.
  Templates live in `src/new-test-model/templates/` and use
  [Squirrelly](https://squirrelly.js.org/) for rendering. This package uses
  `tsx` to run TypeScript directly — it is not built by `preconstruct`.

Every model has two representations — REST and GraphQL — each with a random
builder and optional presets. REST types come from `@commercetools/platform-sdk`.
GraphQL types are generated via `graphql-codegen` from introspection schemas
stored in `schemas/` (core, ctp, mc, settings). A `types-post-processor.mjs`
runs after codegen to un-export colliding helper types and replace `any` with
`unknown`.

`preconstruct` builds the standalone package — each domain model is a separate
entrypoint (see `standalone/package.json` `preconstruct.entrypoints`).

## Import Aliases

All imports within `standalone/` use path aliases (defined in `tsconfig.json`,
mirrored in `babel.config.js`):

| Alias               | Resolves to                      |
| ------------------- | -------------------------------- |
| `@/core`            | `standalone/src/core`            |
| `@/core/test-utils` | `standalone/src/core/test-utils` |
| `@/graphql-types`   | `standalone/src/graphql-types`   |
| `@/models/*`        | `standalone/src/models/*`        |
| `@/utils`           | `standalone/src/utils`           |

Do not use relative imports to reach across these boundaries.

## Builder API

### Factory functions

- **`createSpecializedBuilder({ name, type, modelFieldsConfig })`** — creates a
  builder for a single API type (`'rest'` or `'graphql'`). Use for
  `RestModelBuilder` and `GraphqlModelBuilder`.
- **`createCompatibilityBuilder({ name, modelFieldsConfig: { rest, graphql } })`**
  — creates a builder that supports all three build methods. Deprecated for new
  models; prefer specialized builders.

### Builder methods

Every builder is a Proxy with:

- **`.build()`** — returns the built object (REST for specialized rest builders,
  REST for compat builders).
- **`.buildRest()`** / **`.buildGraphql()`** — explicitly build one
  representation.
- **`.fieldName(value)`** — fluent setter for any model field. Returns the
  builder for chaining. Value can be a literal, a nested builder (auto-built),
  or a function `(currentState) => Partial<Model>`.
- **`.build({ omitFields: ['a'] })`** / **`.build({ keepFields: ['a'] })`** —
  include or exclude specific fields from the output.

### Fields config

Each model exports `restFieldsConfig` and `graphqlFieldsConfig` of type
`TModelFieldsConfig<T>`:

```ts
export const restFieldsConfig: TModelFieldsConfig<TMyModelRest> = {
  fields: {
    id: fake((f) => f.string.uuid()), // callback receives a Faker instance
    version: sequence(), // auto-incrementing number per build
    status: oneOf('Active', 'Inactive'), // random pick
    active: bool(), // random true/false
    name: fake(() => LocalizedString.random()), // nested builder (auto-built)
  },
};
```

Only assign values to **required** fields. Use presets for fully-populated
versions.

GraphQL configs for non-draft models **must** include `__typename` as a string
literal (e.g. `__typename: 'Category'`). Draft models must **not** include it
(see ADR 0002).

### `postBuild` callback

Use `postBuild` when a field's value depends on other generated fields — most
commonly in GraphQL configs where singular fields are derived from
`*AllLocales` arrays:

```ts
export const graphqlFieldsConfig: TModelFieldsConfig<TMyModelGraphql> = {
  fields: {
    name: null,
    nameAllLocales: fake(() => LocalizedString.random()) /* ... */,
  },
  postBuild: (model) => ({
    ...model,
    name: LocalizedString.resolveGraphqlDefaultLocaleValue(
      model.nameAllLocales
    ),
  }),
};
```

In compat builders, `postBuild` receives a second arg `{ isCompatMode: boolean }`
to handle shape differences between REST and GraphQL field names.

### Presets

Presets live in `presets/` next to the model and return **builders** (not built
objects) so consumers can chain further overrides before calling `.build()`.

Each preset file exports up to three variants (`restPreset`, `graphqlPreset`,
`compatPreset`). The `presets/index.ts` collects them:

```ts
export const restPresets = { withAllFields: restPreset };
export const graphqlPresets = { withAllFields: graphqlPreset };
export const compatPresets = { withAllFields: compatPreset };
```

### Model index pattern

Each sub-model's `index.ts` wires builders and presets into the public API:

```ts
export const MyModelRest = {
  presets: presets.restPresets,
  random: RestModelBuilder,
};
export const MyModelGraphql = {
  presets: presets.graphqlPresets,
  random: GraphqlModelBuilder,
};
```

Consumers use: `MyModelRest.random().fieldName(value).build()`.

## How To Make Changes

### Verify your work

| Task              | Command                                 | Notes                             |
| ----------------- | --------------------------------------- | --------------------------------- |
| Run tests         | `pnpm test`                             | Jest, matches `**/*.spec.{js,ts}` |
| Run a single test | `pnpm test -- --testPathPattern=<path>` | Path fragment is enough           |
| Typecheck         | `pnpm typecheck`                        | `tsc --noEmit` from root          |
| Lint              | `pnpm lint`                             | Jest runner with ESLint           |

### Common workflows

**Create a new model:**

1. Run `pnpm generate-model` — the CLI scaffolds `types.ts`, `fields-config.ts`,
   `builders.ts`, `builders.spec.ts`, and `index.ts` with TODOs.
2. Define REST and GraphQL types in `types.ts` (REST from `@commercetools/platform-sdk`,
   GraphQL from `@commercetools-test-data/graphql-types`).
3. Implement `restFieldsConfig` and `graphqlFieldsConfig` in `fields-config.ts`.
   Only assign values to **required** properties — use presets for fully-populated
   versions.
4. Wire up builders in `builders.ts` using `createSpecializedBuilder`.
5. Re-export from the domain's `index.ts` and add the entrypoint to
   `standalone/package.json` `preconstruct.entrypoints`. Add re-exports from the
   top-level barrel files (e.g. `src/product.ts` re-exports from
   `src/models/product/`). Update the `files` array in `standalone/package.json`.
6. Write builder specs validating default REST and GraphQL output shapes.
7. Run `pnpm test`, `pnpm typecheck`, and `pnpm lint`.

**Update GraphQL types after schema changes:**

1. Copy `.env.template` to `.env` and fill in credentials (if not already done).
2. Run `pnpm generate-types` — this regenerates types in
   `standalone/src/graphql-types/generated/`. Do not edit generated files manually.

**Add a changeset before opening a PR:**

1. Run `pnpm changeset` and follow the prompts to select affected packages and
   semver bump type.

## Boundaries

- **Published:** `@commercetools/composable-commerce-test-data` (standalone) — public
  npm, semver obligations apply. Changesets are required for publishable changes.
- **Internal-only:** `@commercetools-test-data/generators` — private, never published.
- REST types come from `@commercetools/platform-sdk` — do not manually define them.
- GraphQL types are generated by `graphql-codegen` — run `generate-types` to update,
  do not edit files in `standalone/src/graphql-types/generated/` manually.
- Preset ownership: presets under team-specific folders (e.g. `change-history-data`,
  `sample-data-fashion`, `sample-data-b2c-lifestyle`) are owned by their respective
  teams and must not be altered without that team's review.

## Gotchas

- `preconstruct dev` runs during `postinstall` and creates symlinks in
  `standalone/` for local dev. If you see missing module errors, run
  `pnpm install` first.
- `types-post-processor.mjs` runs after codegen to un-export helper types and
  replace `any` with `unknown`. Do not manually edit generated type files — your
  changes will be overwritten.
- Draft GraphQL models must NOT include `__typename` (see ADR 0002). This is a
  deliberate design decision for mutation input compatibility.
- The pre-commit hook runs `lint-staged` (prettier + eslint + tsc-files on
  changed files). The `commit-msg` hook enforces conventional commits via
  `commitlint`.
- `@faker-js/faker` is ESM-only since v10 — Jest is configured with a custom
  `transformIgnorePatterns` to handle this. Do not add faker to the ignore list.
- The `prettierPath` in `jest.test.config.js` points to `prettier-jest` (an
  older version) because the latest Prettier is incompatible with Jest's snapshot
  formatting.
- `src/core/` is high blast-radius — it is the foundation for every model
  builder. Changes here affect all models. Run the full test suite after any
  core change.
- Entrypoint registration is manual — if you add a new model directory under
  `src/models/` but forget to add it to `preconstruct.entrypoints` in
  `standalone/package.json`, it won't be included in the published build.
- The `files` array in `standalone/package.json` also needs updating when adding
  a new domain — it controls what gets published to npm.

## Conventions

- **Commits:** conventional commit format (enforced by commitlint). Scopes with
  slashes are allowed, e.g. `refactor(app/my-component): something`.
- **Model file structure:** each domain folder contains one or more sub-model
  folders (e.g. `product/product/`, `product/product-draft/`). Every sub-model
  must have `types.ts`, `fields-config.ts`, `builders.ts`, `builders.spec.ts`,
  and `index.ts`. Presets go in a `presets/` subdirectory.
- **Fields config:** only assign values to required properties. For fully-populated
  versions, create a `withAllFields` preset.
- **Changesets:** required for publishable changes. Run `pnpm changeset` — see
  `docs/guidelines/writing-changesets.md` for content guidelines.

## Further Reading

- `docs/contributing/test-data-models-overview.md` — model architecture and public API
- `docs/guidelines/creating-new-model.md` — step-by-step model creation guide
- `docs/guidelines/writing-changesets.md` — changeset content guidelines
- `docs/architecture-decisions/` — ADRs (notably ADR 0002: draft model `__typename` exclusion)
