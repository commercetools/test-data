# @commercetools-test-data/custom-application

## 9.0.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.1
  - @commercetools-test-data/graphql-types@9.0.1
  - @commercetools-test-data/commons@9.0.1
  - @commercetools-test-data/utils@9.0.1

## 9.0.0

### Patch Changes

- Updated dependencies [[`42e42c3`](https://github.com/commercetools/test-data/commit/42e42c3c020d98a73ef45883094a27f3ed116b12)]:
  - @commercetools-test-data/commons@9.0.0
  - @commercetools-test-data/core@9.0.0
  - @commercetools-test-data/graphql-types@9.0.0
  - @commercetools-test-data/utils@9.0.0

## 8.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.5.0
  - @commercetools-test-data/graphql-types@8.5.0
  - @commercetools-test-data/commons@8.5.0
  - @commercetools-test-data/utils@8.5.0

## 8.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.4.0
  - @commercetools-test-data/graphql-types@8.4.0
  - @commercetools-test-data/commons@8.4.0
  - @commercetools-test-data/utils@8.4.0

## 8.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.3.0
  - @commercetools-test-data/graphql-types@8.3.0
  - @commercetools-test-data/commons@8.3.0
  - @commercetools-test-data/utils@8.3.0

## 8.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.2
  - @commercetools-test-data/graphql-types@8.2.2
  - @commercetools-test-data/commons@8.2.2
  - @commercetools-test-data/utils@8.2.2

## 8.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.1
  - @commercetools-test-data/graphql-types@8.2.1
  - @commercetools-test-data/commons@8.2.1
  - @commercetools-test-data/utils@8.2.1

## 8.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.0
  - @commercetools-test-data/graphql-types@8.2.0
  - @commercetools-test-data/commons@8.2.0
  - @commercetools-test-data/utils@8.2.0

## 8.1.1

### Patch Changes

- Updated dependencies [[`9916819`](https://github.com/commercetools/test-data/commit/991681926e766ae4da115621b10e581c518e8230)]:
  - @commercetools-test-data/commons@8.1.1
  - @commercetools-test-data/core@8.1.1
  - @commercetools-test-data/graphql-types@8.1.1
  - @commercetools-test-data/utils@8.1.1

## 8.1.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.1.0
  - @commercetools-test-data/graphql-types@8.1.0
  - @commercetools-test-data/commons@8.1.0
  - @commercetools-test-data/utils@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.0.0
  - @commercetools-test-data/graphql-types@8.0.0
  - @commercetools-test-data/commons@8.0.0
  - @commercetools-test-data/utils@8.0.0

## 7.11.0

### Minor Changes

- [#542](https://github.com/commercetools/test-data/pull/542) [`22b1cce`](https://github.com/commercetools/test-data/commit/22b1cce82bf29d98bc117bd866b5a258b89f5cca) Thanks [@Rhotimee](https://github.com/Rhotimee)! - This package provides the data model for the commercetools internal API `CustomApplication` type

  # Install

  ```bash
  $ pnpm add -D @commercetools-test-data/custom-application
  ```

  # Usage

  ```ts
  import {
    CustomApplication,
    CustomApplicationDraft,
    type TCustomApplicationGraphql,
    type TCustomApplicationDraftGraphql,
  } from '@commercetools-test-data/custom-application';

  const customApplication =
    CustomApplication.random().buildGraphql<TCustomApplicationGraphql>();
  const customApplicationDraft =
    CustomApplicationDraft.random().buildGraphql<TCustomApplicationDraftGraphql>();
  ```

### Patch Changes

- Updated dependencies [[`22b1cce`](https://github.com/commercetools/test-data/commit/22b1cce82bf29d98bc117bd866b5a258b89f5cca), [`b04b275`](https://github.com/commercetools/test-data/commit/b04b275f6fc1287cfc150d4d90a763bcef07b591)]:
  - @commercetools-test-data/utils@7.11.0
  - @commercetools-test-data/commons@7.11.0
  - @commercetools-test-data/core@7.11.0
  - @commercetools-test-data/graphql-types@7.11.0
