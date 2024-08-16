# @commercetools-test-data/organization-extension

## 10.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.1.1
  - @commercetools-test-data/graphql-types@10.1.1
  - @commercetools-test-data/custom-application@10.1.1
  - @commercetools-test-data/custom-view@10.1.1
  - @commercetools-test-data/utils@10.1.1

## 10.1.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.1.0
  - @commercetools-test-data/graphql-types@10.1.0
  - @commercetools-test-data/custom-application@10.1.0
  - @commercetools-test-data/custom-view@10.1.0
  - @commercetools-test-data/utils@10.1.0

## 10.0.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/custom-application@10.0.0
  - @commercetools-test-data/custom-view@10.0.0
  - @commercetools-test-data/core@10.0.0
  - @commercetools-test-data/graphql-types@10.0.0
  - @commercetools-test-data/utils@10.0.0

## 9.0.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.7
  - @commercetools-test-data/graphql-types@9.0.7
  - @commercetools-test-data/custom-application@9.0.7
  - @commercetools-test-data/custom-view@9.0.7
  - @commercetools-test-data/utils@9.0.7

## 9.0.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.6
  - @commercetools-test-data/graphql-types@9.0.6
  - @commercetools-test-data/custom-application@9.0.6
  - @commercetools-test-data/custom-view@9.0.6
  - @commercetools-test-data/utils@9.0.6

## 9.0.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.5
  - @commercetools-test-data/graphql-types@9.0.5
  - @commercetools-test-data/custom-application@9.0.5
  - @commercetools-test-data/custom-view@9.0.5
  - @commercetools-test-data/utils@9.0.5

## 9.0.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.4
  - @commercetools-test-data/graphql-types@9.0.4
  - @commercetools-test-data/custom-application@9.0.4
  - @commercetools-test-data/custom-view@9.0.4
  - @commercetools-test-data/utils@9.0.4

## 9.0.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.3
  - @commercetools-test-data/graphql-types@9.0.3
  - @commercetools-test-data/custom-application@9.0.3
  - @commercetools-test-data/custom-view@9.0.3
  - @commercetools-test-data/utils@9.0.3

## 9.0.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.2
  - @commercetools-test-data/graphql-types@9.0.2
  - @commercetools-test-data/custom-application@9.0.2
  - @commercetools-test-data/custom-view@9.0.2
  - @commercetools-test-data/utils@9.0.2

## 9.0.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.1
  - @commercetools-test-data/graphql-types@9.0.1
  - @commercetools-test-data/custom-application@9.0.1
  - @commercetools-test-data/custom-view@9.0.1
  - @commercetools-test-data/utils@9.0.1

## 9.0.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/custom-application@9.0.0
  - @commercetools-test-data/custom-view@9.0.0
  - @commercetools-test-data/core@9.0.0
  - @commercetools-test-data/graphql-types@9.0.0
  - @commercetools-test-data/utils@9.0.0

## 8.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.5.0
  - @commercetools-test-data/graphql-types@8.5.0
  - @commercetools-test-data/custom-application@8.5.0
  - @commercetools-test-data/custom-view@8.5.0
  - @commercetools-test-data/utils@8.5.0

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

- [#563](https://github.com/commercetools/test-data/pull/563) [`d937c35`](https://github.com/commercetools/test-data/commit/d937c35aed8d45126b1fdf00db5a2ed414e44499) Thanks [@Rhotimee](https://github.com/Rhotimee)! - Add OrganizationExtension Model

  # Install

  ```bash
  $ pnpm add -D @commercetools-test-data/organization-extension
  ```

  # Usage

  ```ts
  import {
    OrganizationExtension,
    type TOrganizationExtension,
    type TOrganizationExtensionGraphql,
  } from '@commercetools-test-data/custom-view';

  const organizationExtension =
    OrganizationExtension.random().build<TOrganizationExtension>();
  const organizationExtensionGraphQL =
    OrganizationExtension.random().buildGraphql<TOrganizationExtensionGraphql>();
  ```

### Patch Changes

- Updated dependencies [[`ac42d1b`](https://github.com/commercetools/test-data/commit/ac42d1b617758ec8c2bc662c6e69e4099b81d54e)]:
  - @commercetools-test-data/custom-view@8.3.0
  - @commercetools-test-data/core@8.3.0
  - @commercetools-test-data/graphql-types@8.3.0
  - @commercetools-test-data/custom-application@8.3.0
  - @commercetools-test-data/utils@8.3.0
