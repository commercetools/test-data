# @commercetools-test-data/custom-view

## 7.2.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.3
  - @commercetools-test-data/graphql-types@7.2.3
  - @commercetools-test-data/commons@7.2.3
  - @commercetools-test-data/utils@7.2.3

## 7.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.2
  - @commercetools-test-data/graphql-types@7.2.2
  - @commercetools-test-data/commons@7.2.2
  - @commercetools-test-data/utils@7.2.2

## 7.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.1
  - @commercetools-test-data/graphql-types@7.2.1
  - @commercetools-test-data/commons@7.2.1
  - @commercetools-test-data/utils@7.2.1

## 7.2.0

### Patch Changes

- Updated dependencies [[`1c41c10`](https://github.com/commercetools/test-data/commit/1c41c10a8973eaa6014010f31be713aaec7d018f)]:
  - @commercetools-test-data/graphql-types@7.2.0
  - @commercetools-test-data/core@7.2.0
  - @commercetools-test-data/commons@7.2.0
  - @commercetools-test-data/utils@7.2.0

## 7.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.1
  - @commercetools-test-data/graphql-types@7.1.1
  - @commercetools-test-data/commons@7.1.1
  - @commercetools-test-data/utils@7.1.1

## 7.1.0

### Patch Changes

- Updated dependencies [[`387e367`](https://github.com/commercetools/test-data/commit/387e367b189bc9f33fe1288392ee6beae7caf96f), [`6da8af0`](https://github.com/commercetools/test-data/commit/6da8af0291c9769f9d2654408e16ddb8cf728217), [`9e7e964`](https://github.com/commercetools/test-data/commit/9e7e964b10c155bc1bbda3a1d291cb14ceac7e16)]:
  - @commercetools-test-data/commons@7.1.0
  - @commercetools-test-data/core@7.1.0
  - @commercetools-test-data/graphql-types@7.1.0
  - @commercetools-test-data/utils@7.1.0

## 7.0.0

### Major Changes

- [#478](https://github.com/commercetools/test-data/pull/478) [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf) Thanks [@jaikamat](https://github.com/jaikamat)! - This breaking release excludes \_\_typename from built GraphQL draft models.

  Updating this package will require changes in your codebase. To migrate:

  - Ensure tests that assert on the presence of \_\_typename in draft GraphQL models are updated to no longer expect this field.
  - Update any code that relies on the presence of \_\_typename in draft GraphQL models to align with the new approach.

### Patch Changes

- Updated dependencies [[`f027639`](https://github.com/commercetools/test-data/commit/f027639045374709b64259584986ea4ae9e1be5b), [`d7b7eb6`](https://github.com/commercetools/test-data/commit/d7b7eb6e2bf3daff60ea60d07d48252252999923), [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf)]:
  - @commercetools-test-data/commons@7.0.0
  - @commercetools-test-data/graphql-types@7.0.0
  - @commercetools-test-data/core@7.0.0
  - @commercetools-test-data/utils@7.0.0

## 6.11.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.11.0
  - @commercetools-test-data/graphql-types@6.11.0
  - @commercetools-test-data/commons@6.11.0
  - @commercetools-test-data/utils@6.11.0

## 6.10.0

### Patch Changes

- Updated dependencies [[`203eff0`](https://github.com/commercetools/test-data/commit/203eff051df03eff3b4f125e281890d0c2db9fd7)]:
  - @commercetools-test-data/commons@6.10.0
  - @commercetools-test-data/core@6.10.0
  - @commercetools-test-data/graphql-types@6.10.0
  - @commercetools-test-data/utils@6.10.0

## 6.9.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.9.0
  - @commercetools-test-data/graphql-types@6.9.0
  - @commercetools-test-data/commons@6.9.0
  - @commercetools-test-data/utils@6.9.0

## 6.8.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.1
  - @commercetools-test-data/graphql-types@6.8.1
  - @commercetools-test-data/commons@6.8.1
  - @commercetools-test-data/utils@6.8.1

## 6.8.0

### Minor Changes

- [#422](https://github.com/commercetools/test-data/pull/422) [`555c8da`](https://github.com/commercetools/test-data/commit/555c8da7d28d81c7ec385cde27fe768cdf4728fb) Thanks [@kark](https://github.com/kark)! - Allow to generate test data for Custom Views Installations.

  ```ts
  import {
    CustomViewInstallation,
    RestrictedCustomViewInstallationForOrganization,
    type TCustomViewInstallationGraphql,
    type TRestrictedCustomViewInstallationForOrganizationGraphql,
  } from '@commercetools-test-data/custom-view';

  const customViewInstallation =
    CustomViewInstallation.random().buildGraphql<TCustomViewInstallationGraphql>();

  const restrictedCustomViewInstallationForOrganization =
    RestrictedCustomViewInstallationForOrganization.random().buildGraphql<TRestrictedCustomViewInstallationForOrganizationGraphql>();
  ```

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.0
  - @commercetools-test-data/graphql-types@6.8.0
  - @commercetools-test-data/commons@6.8.0
  - @commercetools-test-data/utils@6.8.0

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
