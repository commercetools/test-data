# @commercetools-test-data/custom-view

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