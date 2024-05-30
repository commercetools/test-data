# @commercetools-test-data/project-extension

## 8.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.4.0
  - @commercetools-test-data/graphql-types@8.4.0
  - @commercetools-test-data/custom-application@8.4.0
  - @commercetools-test-data/custom-view@8.4.0
  - @commercetools-test-data/utils@8.4.0

## 8.3.0

### Minor Changes

- [#562](https://github.com/commercetools/test-data/pull/562) [`81044fb`](https://github.com/commercetools/test-data/commit/81044fb12ea69e88e29dc785fcd4c48dea85372d) Thanks [@Rhotimee](https://github.com/Rhotimee)! - Add ProjectExtension Model

  # Install

  ```bash
  $ pnpm add -D @commercetools-test-data/project-extension
  ```

  # Usage

  The package provides models for ProjectExtension.

  ```ts
  import {
    ProjectExtension,
    type TProjectExtension,
    type TProjectExtensionGraphql,
  } from '@commercetools-test-data/project-extension';

  const projectExtension =
    ProjectExtension.random().buildRest<TProjectExtension>();
  const projectExtensionGraphQL =
    ProjectExtension.random().buildGraphql<TProjectExtensionGraphql>();
  ```

### Patch Changes

- Updated dependencies [[`ac42d1b`](https://github.com/commercetools/test-data/commit/ac42d1b617758ec8c2bc662c6e69e4099b81d54e)]:
  - @commercetools-test-data/custom-view@8.3.0
  - @commercetools-test-data/core@8.3.0
  - @commercetools-test-data/graphql-types@8.3.0
  - @commercetools-test-data/custom-application@8.3.0
  - @commercetools-test-data/utils@8.3.0
