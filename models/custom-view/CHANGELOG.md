# @commercetools-test-data/custom-view

## 6.6.0

### Patch Changes

- Updated dependencies [[`c1d67887`](https://github.com/commercetools/test-data/commit/c1d678873faeb4de4f995fb705b67b5633748562)]:
  - @commercetools-test-data/commons@6.6.0
  - @commercetools-test-data/core@6.6.0
  - @commercetools-test-data/graphql-types@6.6.0
  - @commercetools-test-data/utils@6.6.0

## 6.5.0

### Minor Changes

- [#431](https://github.com/commercetools/test-data/pull/431) [`94ad2796`](https://github.com/commercetools/test-data/commit/94ad27965528a6c5f7008e1c32b159aeec3bc5ea) Thanks [@Rhotimee](https://github.com/Rhotimee)! - Introduce model for CustomViewPermissionDraft

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.5.0
  - @commercetools-test-data/graphql-types@6.5.0
  - @commercetools-test-data/commons@6.5.0
  - @commercetools-test-data/utils@6.5.0

## 6.4.2

### Patch Changes

- [#428](https://github.com/commercetools/test-data/pull/428) [`64de71d2`](https://github.com/commercetools/test-data/commit/64de71d26e02eac43f75537a4ce5529feade0790) Thanks [@Rhotimee](https://github.com/Rhotimee)! - Remove status from custom view draft

- [#421](https://github.com/commercetools/test-data/pull/421) [`9040a6b8`](https://github.com/commercetools/test-data/commit/9040a6b813d83efc43f693ff5b827d5e2dc17c43) Thanks [@emmenko](https://github.com/emmenko)! - Use generated GraphQL types

- Updated dependencies [[`9040a6b8`](https://github.com/commercetools/test-data/commit/9040a6b813d83efc43f693ff5b827d5e2dc17c43)]:
  - @commercetools-test-data/graphql-types@6.4.2
  - @commercetools-test-data/core@6.4.2
  - @commercetools-test-data/commons@6.4.2
  - @commercetools-test-data/utils@6.4.2

## 6.4.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.4.1
  - @commercetools-test-data/commons@6.4.1
  - @commercetools-test-data/utils@6.4.1

## 6.4.0

### Minor Changes

- [#384](https://github.com/commercetools/test-data/pull/384) [`677867c8`](https://github.com/commercetools/test-data/commit/677867c829ba60bd4c819ad544cc841f7b6d3ece) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - New package to generate test data for Custom Views.

  ```ts
  import {
    CustomView,
    type TCustomViewGraphql,
  } from '@commercetools-test-data/custom-view';

  const customView = CustomView.random().buildGraphql<TCustomViewGraphql>();
  ```

### Patch Changes

- Updated dependencies [[`677867c8`](https://github.com/commercetools/test-data/commit/677867c829ba60bd4c819ad544cc841f7b6d3ece)]:
  - @commercetools-test-data/commons@6.4.0
  - @commercetools-test-data/core@6.4.0
  - @commercetools-test-data/utils@6.4.0
