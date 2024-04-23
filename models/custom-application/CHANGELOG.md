# @commercetools-test-data/custom-application

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
