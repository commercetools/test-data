# @commercetools-test-data/custom-object

## 7.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.1
  - @commercetools-test-data/commons@7.1.1
  - @commercetools-test-data/utils@7.1.1

## 7.1.0

### Patch Changes

- Updated dependencies [[`387e367`](https://github.com/commercetools/test-data/commit/387e367b189bc9f33fe1288392ee6beae7caf96f), [`6da8af0`](https://github.com/commercetools/test-data/commit/6da8af0291c9769f9d2654408e16ddb8cf728217), [`9e7e964`](https://github.com/commercetools/test-data/commit/9e7e964b10c155bc1bbda3a1d291cb14ceac7e16)]:
  - @commercetools-test-data/commons@7.1.0
  - @commercetools-test-data/core@7.1.0
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
  - @commercetools-test-data/core@7.0.0
  - @commercetools-test-data/utils@7.0.0

## 6.11.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.11.0
  - @commercetools-test-data/commons@6.11.0
  - @commercetools-test-data/utils@6.11.0

## 6.10.0

### Patch Changes

- Updated dependencies [[`203eff0`](https://github.com/commercetools/test-data/commit/203eff051df03eff3b4f125e281890d0c2db9fd7)]:
  - @commercetools-test-data/commons@6.10.0
  - @commercetools-test-data/core@6.10.0
  - @commercetools-test-data/utils@6.10.0

## 6.9.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.9.0
  - @commercetools-test-data/commons@6.9.0
  - @commercetools-test-data/utils@6.9.0

## 6.8.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.1
  - @commercetools-test-data/commons@6.8.1
  - @commercetools-test-data/utils@6.8.1

## 6.8.0

### Minor Changes

- [#441](https://github.com/commercetools/test-data/pull/441) [`2285e9a`](https://github.com/commercetools/test-data/commit/2285e9aa8e6e47c6c21279722d3114a5c7055d45) Thanks [@kterry1](https://github.com/kterry1)! - custom-object and custom-object-draft models and package

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.0
  - @commercetools-test-data/commons@6.8.0
  - @commercetools-test-data/utils@6.8.0
