# @commercetools-test-data/core

## 6.3.8

## 6.3.7

## 6.3.6

## 6.3.5

## 6.3.4

## 6.3.3

## 6.3.2

## 6.3.1

## 6.3.0

## 6.2.0

## 6.1.1

## 6.1.0

## 6.0.0

## 5.11.2

## 5.11.1

## 5.11.0

## 5.10.1

## 5.10.0

## 5.9.0

## 5.8.2

## 5.8.1

## 5.8.0

### Minor Changes

- [#280](https://github.com/commercetools/test-data/pull/280) [`2284af3`](https://github.com/commercetools/test-data/commit/2284af362e7168b26f949b6e853527b7414f2669) Thanks [@renovate](https://github.com/apps/renovate)! - Update to Faker v8. Additional documentation referenced [here](https://fakerjs.dev/guide/upgrading.html).

## 5.7.0

## 5.6.0

## 5.5.1

## 5.5.0

## 5.4.1

## 5.4.0

## 5.3.6

## 5.3.5

## 5.3.4

## 5.3.3

## 5.3.2

## 5.3.1

## 5.3.0

## 5.2.0

## 5.1.1

## 5.1.0

## 5.0.0

### Major Changes

- [#247](https://github.com/commercetools/test-data/pull/247) [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **CartDiscount**, **CartDiscountLineItemsTarget**,**CartDiscountMultiBuyLineItemsTarget**
  **CartDiscountShippingCostTarget**
  **CartDiscountValueAbsolute**
  **CartDiscountValueFixed**
  **CartDiscountValueGiftLineItem** &
  **CartDiscountValueRelative** have been colocated under package `@commercetools-test-data/cart-discount`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { CartDiscountValueGiftLineItem } from '@commercetools-test-data/cart-discount’`<br>
  `import { CartDiscountDraft } from '@commercetools-test-data/cart-discount'`<br><br>
  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:

  - `@commercetools-test-data/cart-discount-line-items-target`
  - `@commercetools-test-data/cart-discount-multi-buy-line-items-target`
  - `@commercetools-test-data/cart-discount-shipping-cost-target`
  - `@commercetools-test-data/cart-discount-value-absolute`
  - `@commercetools-test-data/cart-discount-value-fixed`
  - `@commercetools-test-data/cart-discount-value-gift-line-item`
  - `@commercetools-test-data/cart-discount-value-relative`

## 4.11.1

## 4.11.0

## 4.10.0

## 4.9.0

### Patch Changes

- [#193](https://github.com/commercetools/test-data/pull/193) [`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980) Thanks [@jaikamat](https://github.com/jaikamat)! - remove copyright year from licenses

## 4.8.0

## 4.7.0

## 4.6.0

## 4.5.0

## 4.4.0

## 4.3.0

## 4.2.2

## 4.2.1

## 4.2.0

## 4.1.1

## 4.1.0

## 4.0.3

## 4.0.2

### Patch Changes

- [#147](https://github.com/commercetools/test-data/pull/147) [`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(faker): updating deprecated fields

## 4.0.1

## 4.0.0

### Patch Changes

- [#143](https://github.com/commercetools/test-data/pull/143) [`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539) Thanks [@emmenko](https://github.com/emmenko)! - Better null check for property access.

## 3.1.2

### Patch Changes

- [#135](https://github.com/commercetools/test-data/pull/135) [`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c) Thanks [@emmenko](https://github.com/emmenko)! - Fix faker deprecated methods

## 3.1.1

### Patch Changes

- [#131](https://github.com/commercetools/test-data/pull/131) [`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @faker-js/faker to v7

## 3.1.0

## 3.0.2

### Patch Changes

- [#124](https://github.com/commercetools/test-data/pull/124) [`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39) Thanks [@emmenko](https://github.com/emmenko)! - Update license year

## 3.0.1

### Patch Changes

- [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

## 3.0.0

### Minor Changes

- [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Add `test-utils` entry point for helping testing builder models.

### Patch Changes

- [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

* [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

- [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

## 2.4.1

### Patch Changes

- [#79](https://github.com/commercetools/test-data/pull/79) [`3a8d03e`](https://github.com/commercetools/test-data/commit/3a8d03e14fc166bddc8e57039b6c379ef2d0904e) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [#87](https://github.com/commercetools/test-data/pull/87) [`2085e1e`](https://github.com/commercetools/test-data/commit/2085e1ea59a923e2fbc5a24d33e2ac65de816978) Thanks [@tdeekens](https://github.com/tdeekens)! - Add support for a `__typename` property when building a GraphQL list

  ```js
  const list = buildGraphqlList([builder, builder], {
    total: 10,
    offset: 2,
    __typename: 'OrganizationPaginatedResultList',
  });
  ```

  Please note that whenever a `name` is specified the old behaviour of concatinating the `name` with `QueryResult` will remain. If that behaviour is not adequate for your use case feel free to use `__typename`.

## 2.4.0

### Patch Changes

- [#73](https://github.com/commercetools/test-data/pull/73) [`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d) Thanks [@adnasa](https://github.com/adnasa)! - Update LICENSE

## 2.3.0

### Minor Changes

- [#67](https://github.com/commercetools/test-data/pull/67) [`3e36d52`](https://github.com/commercetools/test-data/commit/3e36d5214d002309d7f3107c3ffda09a5bfdc048) Thanks [@emmenko](https://github.com/emmenko)! - Use `faker` v5

## 2.1.2

### Patch Changes

- [#52](https://github.com/commercetools/test-data/pull/52) [`54b4586`](https://github.com/commercetools/test-data/commit/54b4586fea89dbef8bd6086eeeaeae52e6a3a394) Thanks [@renovate](https://github.com/apps/renovate)! - chore: update all deps

## 2.1.1

### Patch Changes

- [`f1361f9`](https://github.com/commercetools/test-data/commit/f1361f914f60e4b86150e2ddbc0e549d18bc4dd7) [#42](https://github.com/commercetools/test-data/pull/42) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

* [`55e636e`](https://github.com/commercetools/test-data/commit/55e636ea480e8bc9114da345641928a9696b773c) [#40](https://github.com/commercetools/test-data/pull/40) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade preconstruct CLI to v2 for bundling.

## 2.1.0

### Minor Changes

- [`965dce5`](https://github.com/commercetools/test-data/commit/965dce5860972e92f09010793bbfacddeb35266f) [#38](https://github.com/commercetools/test-data/pull/38) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

## 2.0.1

### Patch Changes

- [`95b701b`](https://github.com/commercetools/test-data/commit/95b701b4445cb3374b43a4efc81eef6b31f88536) [#27](https://github.com/commercetools/test-data/pull/27) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 2.0.0

### Major Changes

- [`0c35ac4`](https://github.com/commercetools/test-data/commit/0c35ac491d3ff8703f5d6293a73acfdb607410cd) [#24](https://github.com/commercetools/test-data/pull/24) Thanks [@pa3](https://github.com/pa3)! - drop `default` prop from builder initializer

## 1.1.2

### Patch Changes

- [`d7932e1`](https://github.com/commercetools/test-data/commit/d7932e125cb31c88eee4fa99312774d0ed838af5) [#17](https://github.com/commercetools/test-data/pull/17) Thanks [@emmenko](https://github.com/emmenko)! - Fix type declarations generation to only include declarations files of each specific package

## 1.1.1

### Patch Changes

- [`716fad7`](https://github.com/commercetools/test-data/commit/716fad74520d8bacf895756f5fffaef1216d2f69) [#15](https://github.com/commercetools/test-data/pull/15) Thanks [@emmenko](https://github.com/emmenko)! - Fix bundle compatibility with browser environments

## 1.1.0

### Patch Changes

- [`8384239`](https://github.com/commercetools/test-data/commit/83842397840665a59eaaf2eee7b96b21e9867067) [#12](https://github.com/commercetools/test-data/pull/12) Thanks [@emmenko](https://github.com/emmenko)! - Document how to build new models

## 1.0.1

### Patch Changes

- [`53fbe8d`](https://github.com/commercetools/test-data/commit/53fbe8dbd27446a4c16d293ee333bd476c7c8c90) [#4](https://github.com/commercetools/test-data/pull/4) Thanks [@emmenko](https://github.com/emmenko)! - Fix transformer types. Now the `replaceFields` option takes precedence as the return value can be of any type.
  If the `addFields` and `removeFields` options are also provided together with the `replaceFields` option, a warning will be logged.
