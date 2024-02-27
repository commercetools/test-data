# @commercetools-test-data/commons

## 7.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.2
  - @commercetools-test-data/utils@7.2.2

## 7.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.1
  - @commercetools-test-data/utils@7.2.1

## 7.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.0
  - @commercetools-test-data/utils@7.2.0

## 7.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.1
  - @commercetools-test-data/utils@7.1.1

## 7.1.0

### Minor Changes

- [#487](https://github.com/commercetools/test-data/pull/487) [`387e367`](https://github.com/commercetools/test-data/commit/387e367b189bc9f33fe1288392ee6beae7caf96f) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Add B2B sample data presets

### Patch Changes

- [#484](https://github.com/commercetools/test-data/pull/484) [`6da8af0`](https://github.com/commercetools/test-data/commit/6da8af0291c9769f9d2654408e16ddb8cf728217) Thanks [@jaikamat](https://github.com/jaikamat)! - Create staged quote KeyReferenceDraft preset

- [#488](https://github.com/commercetools/test-data/pull/488) [`9e7e964`](https://github.com/commercetools/test-data/commit/9e7e964b10c155bc1bbda3a1d291cb14ceac7e16) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Adjustments made to CH MoneyDraft & PaymentDraft presets.

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.0
  - @commercetools-test-data/utils@7.1.0

## 7.0.0

### Major Changes

- [#478](https://github.com/commercetools/test-data/pull/478) [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf) Thanks [@jaikamat](https://github.com/jaikamat)! - This breaking release excludes \_\_typename from built GraphQL draft models.

  Updating this package will require changes in your codebase. To migrate:

  - Ensure tests that assert on the presence of \_\_typename in draft GraphQL models are updated to no longer expect this field.
  - Update any code that relies on the presence of \_\_typename in draft GraphQL models to align with the new approach.

### Minor Changes

- [#472](https://github.com/commercetools/test-data/pull/472) [`f027639`](https://github.com/commercetools/test-data/commit/f027639045374709b64259584986ea4ae9e1be5b) Thanks [@jaikamat](https://github.com/jaikamat)! - Create standalone prices model and associated draft, support channel key reference preset

### Patch Changes

- [#480](https://github.com/commercetools/test-data/pull/480) [`d7b7eb6`](https://github.com/commercetools/test-data/commit/d7b7eb6e2bf3daff60ea60d07d48252252999923) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Added various CH presets for max cent amount.

- Updated dependencies []:
  - @commercetools-test-data/core@7.0.0
  - @commercetools-test-data/utils@7.0.0

## 6.11.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.11.0
  - @commercetools-test-data/utils@6.11.0

## 6.10.0

### Minor Changes

- [#459](https://github.com/commercetools/test-data/pull/459) [`203eff0`](https://github.com/commercetools/test-data/commit/203eff051df03eff3b4f125e281890d0c2db9fd7) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Add CH specific presets to Payment package.
  Add additional values to PaymentMethodInfo model.
  Add min and max to Money.centAmount.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.10.0
  - @commercetools-test-data/utils@6.10.0

## 6.9.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.9.0
  - @commercetools-test-data/utils@6.9.0

## 6.8.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.1
  - @commercetools-test-data/utils@6.8.1

## 6.8.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.0
  - @commercetools-test-data/utils@6.8.0

## 6.6.0

### Minor Changes

- [#435](https://github.com/commercetools/test-data/pull/435) [`c1d67887`](https://github.com/commercetools/test-data/commit/c1d678873faeb4de4f995fb705b67b5633748562) Thanks [@ChristianMoll](https://github.com/ChristianMoll)! - Add Associate Role package

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.6.0
  - @commercetools-test-data/utils@6.6.0

## 6.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.5.0
  - @commercetools-test-data/utils@6.5.0

## 6.4.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.4.2
  - @commercetools-test-data/utils@6.4.2

## 6.4.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.4.1
  - @commercetools-test-data/utils@6.4.1

## 6.4.0

### Minor Changes

- [#384](https://github.com/commercetools/test-data/pull/384) [`677867c8`](https://github.com/commercetools/test-data/commit/677867c829ba60bd4c819ad544cc841f7b6d3ece) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Add new model `LocalizedField`

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.4.0
  - @commercetools-test-data/utils@6.4.0

## 6.3.8

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.8
  - @commercetools-test-data/utils@6.3.8

## 6.3.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.7
  - @commercetools-test-data/utils@6.3.7

## 6.3.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.6
  - @commercetools-test-data/utils@6.3.6

## 6.3.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.5
  - @commercetools-test-data/utils@6.3.5

## 6.3.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.4
  - @commercetools-test-data/utils@6.3.4

## 6.3.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.3
  - @commercetools-test-data/utils@6.3.3

## 6.3.2

### Patch Changes

- [#401](https://github.com/commercetools/test-data/pull/401) [`e5ecb9dc`](https://github.com/commercetools/test-data/commit/e5ecb9dc0e2a45c192251f3bd9b18226ee54551f) Thanks [@jaikamat](https://github.com/jaikamat)! - moodify state names in goodstore data to be consistent

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.2
  - @commercetools-test-data/utils@6.3.2

## 6.3.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.1
  - @commercetools-test-data/utils@6.3.1

## 6.3.0

### Minor Changes

- [#382](https://github.com/commercetools/test-data/pull/382) [`d4faaa2a`](https://github.com/commercetools/test-data/commit/d4faaa2a5c8559ad4b29fc324c6d6f2c7debe1eb) Thanks [@renovate](https://github.com/apps/renovate)! - Updated packages to use dependency `@commercetools/platform-sdk": "^6.0.0`

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.0
  - @commercetools-test-data/utils@6.3.0

## 6.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.2.0
  - @commercetools-test-data/utils@6.2.0

## 6.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.1.1
  - @commercetools-test-data/utils@6.1.1

## 6.1.0

### Minor Changes

- [#370](https://github.com/commercetools/test-data/pull/370) [`3cccf1d1`](https://github.com/commercetools/test-data/commit/3cccf1d19057b05cb65c9696465b6dcd5ddafa97) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Updated the exported presets folder name to sampleDataGoodStore.

### Patch Changes

- [#351](https://github.com/commercetools/test-data/pull/351) [`b00d01a5`](https://github.com/commercetools/test-data/commit/b00d01a5aa67265e726e2d739f067ead042d436f) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Add customer and address presets for theGoodStore

- Updated dependencies []:
  - @commercetools-test-data/core@6.1.0
  - @commercetools-test-data/utils@6.1.0

## 6.0.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.0.0
  - @commercetools-test-data/utils@6.0.0

## 5.11.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.2
  - @commercetools-test-data/utils@5.11.2

## 5.11.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.1
  - @commercetools-test-data/utils@5.11.1

## 5.11.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.0
  - @commercetools-test-data/utils@5.11.0

## 5.10.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.10.1
  - @commercetools-test-data/utils@5.10.1

## 5.10.0

### Minor Changes

- [#322](https://github.com/commercetools/test-data/pull/322) [`c19456b`](https://github.com/commercetools/test-data/commit/c19456b5f0df5c48e7dc7b74f70ad0a18668c7a4) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds payment sample data presets, empty preset for payment-draft, empty presets for transaction-draft and payment-status-draft.

- [#312](https://github.com/commercetools/test-data/pull/312) [`9040a90`](https://github.com/commercetools/test-data/commit/9040a9066d7cda96fba1389fd35cd493248fcd94) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Add Business Unit package.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.10.0
  - @commercetools-test-data/utils@5.10.0

## 5.9.0

### Minor Changes

- [#304](https://github.com/commercetools/test-data/pull/304) [`819d832`](https://github.com/commercetools/test-data/commit/819d832e01c7cb774cfde8c12d026b20ee4dc9da) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Update sdk dependency. Add graphql transformer to ProductSetting model.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.9.0
  - @commercetools-test-data/utils@5.9.0

## 5.8.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.8.2
  - @commercetools-test-data/utils@5.8.2

## 5.8.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.8.1
  - @commercetools-test-data/utils@5.8.1

## 5.8.0

### Minor Changes

- [#280](https://github.com/commercetools/test-data/pull/280) [`2284af3`](https://github.com/commercetools/test-data/commit/2284af362e7168b26f949b6e853527b7414f2669) Thanks [@renovate](https://github.com/apps/renovate)! - Update to Faker v8. Additional documentation referenced [here](https://fakerjs.dev/guide/upgrading.html).

### Patch Changes

- Updated dependencies [[`2284af3`](https://github.com/commercetools/test-data/commit/2284af362e7168b26f949b6e853527b7414f2669)]:
  - @commercetools-test-data/utils@5.8.0
  - @commercetools-test-data/core@5.8.0

## 5.7.0

### Minor Changes

- [#291](https://github.com/commercetools/test-data/pull/291) [`21a3705`](https://github.com/commercetools/test-data/commit/21a37055edc4dc2f8ec8bd2b509713390cefd9e5) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Presets completed for all supported ReferenceTypeIds.

### Patch Changes

- [#295](https://github.com/commercetools/test-data/pull/295) [`fa7acd2`](https://github.com/commercetools/test-data/commit/fa7acd28ee59ef8d035597d025c4d9d82d4ac2bc) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Add missing shipping method to Fashion Sample Data `cart-draft` presets.

- Updated dependencies []:
  - @commercetools-test-data/core@5.7.0
  - @commercetools-test-data/utils@5.7.0

## 5.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.6.0
  - @commercetools-test-data/utils@5.6.0

## 5.5.1

### Patch Changes

- [#286](https://github.com/commercetools/test-data/pull/286) [`07ea874`](https://github.com/commercetools/test-data/commit/07ea8748049f50ec6b74438fcf2ee00d58c9f86d) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Updates to presets consumed by audit-log for Order creation

- Updated dependencies []:
  - @commercetools-test-data/core@5.5.1
  - @commercetools-test-data/utils@5.5.1

## 5.5.0

### Minor Changes

- [#284](https://github.com/commercetools/test-data/pull/284) [`b49a3ed`](https://github.com/commercetools/test-data/commit/b49a3ed0c028f279ac039c23d986182323bce6de) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Update fashion sample data customer, cart, order, and product variant presets for consistency.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.5.0
  - @commercetools-test-data/utils@5.5.0

## 5.4.1

### Patch Changes

- [#282](https://github.com/commercetools/test-data/pull/282) [`57b1fa2`](https://github.com/commercetools/test-data/commit/57b1fa2c2c9f855eca534ef5646bc9f77c054ab9) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Added change-history presets to various models

- Updated dependencies []:
  - @commercetools-test-data/core@5.4.1
  - @commercetools-test-data/utils@5.4.1

## 5.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.4.0
  - @commercetools-test-data/utils@5.4.0

## 5.3.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.6
  - @commercetools-test-data/utils@5.3.6

## 5.3.5

### Patch Changes

- [#274](https://github.com/commercetools/test-data/pull/274) [`a321085`](https://github.com/commercetools/test-data/commit/a321085894185cd7206dde9b3a9a67dcf8722443) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Add change-history specific presets for: customer, address, tax category & tax presets.

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.5
  - @commercetools-test-data/utils@5.3.5

## 5.3.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.4
  - @commercetools-test-data/utils@5.3.4

## 5.3.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.3
  - @commercetools-test-data/utils@5.3.3

## 5.3.2

### Patch Changes

- [#266](https://github.com/commercetools/test-data/pull/266) [`1d8a21c`](https://github.com/commercetools/test-data/commit/1d8a21c55728dcf1059e37a1964280f2eda22d09) Thanks [@jaikamat](https://github.com/jaikamat)! - fix graphql transformations

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.2
  - @commercetools-test-data/utils@5.3.2

## 5.3.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.1
  - @commercetools-test-data/utils@5.3.1

## 5.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.0
  - @commercetools-test-data/utils@5.3.0

## 5.2.0

### Minor Changes

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - remove \_\_typename from drafts

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.2.0
  - @commercetools-test-data/utils@5.2.0

## 5.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Minor Changes

- [#252](https://github.com/commercetools/test-data/pull/252) [`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf) Thanks [@jaikamat](https://github.com/jaikamat)! - edited tests, minor preset revisions

- [#249](https://github.com/commercetools/test-data/pull/249) [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds Shipping Method, Shipping Rate, and Zone Rate models and presets.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.1.0
  - @commercetools-test-data/utils@5.1.0

## 5.0.0

### Major Changes

- [#248](https://github.com/commercetools/test-data/pull/248) [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **Price**, **Money**, and **CentPrecisionMoney** have been colocated under package `@commercetools-test-data/commons`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>

  - `import { CentPrecisionMoney } from '@commercetools-test-data/commons’` <br>
  - `import { PriceDraft } from '@commercetools-test-data/commons'`<br><br>

  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

  - `@commercetools-test-data/price` <br>
  - `@commercetools-test-data/money` <br>
  - `@commercetools-test-data/cent-precision-money` <br>

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

### Minor Changes

- [#234](https://github.com/commercetools/test-data/pull/234) [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1) Thanks [@jaikamat](https://github.com/jaikamat)! - Create cart discount presets, empty preset for giftLineItem

- [#234](https://github.com/commercetools/test-data/pull/234) [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1) Thanks [@jaikamat](https://github.com/jaikamat)! - Create KeyReference package, remove `key` field from Reference model

- [#243](https://github.com/commercetools/test-data/pull/243) [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds product draft presets for fashion sample data.

- [#237](https://github.com/commercetools/test-data/pull/237) [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Add Fashion sample data Cart presets.

### Patch Changes

- Updated dependencies [[`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.11.1

## 4.11.0

### Minor Changes

- [#218](https://github.com/commercetools/test-data/pull/218) [`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d) Thanks [@jaikamat](https://github.com/jaikamat)! - create AddressDraft empty functionality and CustomerDraft presets

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.11.0

## 4.10.0

### Minor Changes

- [#212](https://github.com/commercetools/test-data/pull/212) [`ba91abc`](https://github.com/commercetools/test-data/commit/ba91abca0afd7ca67f9bc68a30cfdc2ce0f728c6) Thanks [@jaikamat](https://github.com/jaikamat)! - Create LineItem/LineItemDraft, Cart/CartDraft, and adjust commons

### Patch Changes

- [#159](https://github.com/commercetools/test-data/pull/159) [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb) Thanks [@emmenko](https://github.com/emmenko)! - Use pnpm as the package manager

- Updated dependencies []:
  - @commercetools-test-data/core@4.10.0

## 4.9.0

### Patch Changes

- [#193](https://github.com/commercetools/test-data/pull/193) [`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980) Thanks [@jaikamat](https://github.com/jaikamat)! - remove copyright year from licenses

- Updated dependencies [[`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980)]:
  - @commercetools-test-data/core@4.9.0

## 4.8.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.8.0

## 4.7.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.7.0

## 4.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.6.0

## 4.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.5.0

## 4.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.4.0

## 4.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.3.0

## 4.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.2

## 4.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.1

## 4.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.0

## 4.1.1

### Patch Changes

- [#141](https://github.com/commercetools/test-data/pull/141) [`219002d`](https://github.com/commercetools/test-data/commit/219002d7b945045c13930bf03b5a42be6604183d) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @commercetools/platform-sdk to v3

- Updated dependencies []:
  - @commercetools-test-data/core@4.1.1

## 4.1.0

### Minor Changes

- [#140](https://github.com/commercetools/test-data/pull/140) [`0ee1463`](https://github.com/commercetools/test-data/commit/0ee14631bc546c6fabf1150bd6a024cea8335674) Thanks [@valoriecarli](https://github.com/valoriecarli)! - feat(customer): add customer and customer draft models

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.1.0

## 4.0.3

### Patch Changes

- [#150](https://github.com/commercetools/test-data/pull/150) [`4f87f72`](https://github.com/commercetools/test-data/commit/4f87f72c0a1c3530392b2002f6fb3fa9dba58221) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(localized-string): to-localized-field to return null when no value is received

- Updated dependencies []:
  - @commercetools-test-data/core@4.0.3

## 4.0.2

### Patch Changes

- [#147](https://github.com/commercetools/test-data/pull/147) [`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(faker): updating deprecated fields

- Updated dependencies [[`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240)]:
  - @commercetools-test-data/core@4.0.2

## 4.0.1

### Patch Changes

- [#145](https://github.com/commercetools/test-data/pull/145) [`467ac5f`](https://github.com/commercetools/test-data/commit/467ac5f041a733b05d71b7c3d69723369e658e17) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(address): replacing depracated fake address function

- Updated dependencies []:
  - @commercetools-test-data/core@4.0.1

## 4.0.0

### Minor Changes

- [#143](https://github.com/commercetools/test-data/pull/143) [`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539) Thanks [@emmenko](https://github.com/emmenko)! - Adjust graphql transformers to use given properties data. This fixes a regression when overwriting certain model fields.

  For example, when building a `Channel` the `name` property can be overwritten with a `LocalizedString` model.

  ```js
  Channel.random().name(LocalizedString.random().en('Store')).buildGraphql();
  ```

  This resulted in the `nameAllLocales` field to NOT include the `Store` value for the `en` locale.

  Now this is fixed and working as expected. Similarly, other models with the same logic have been fixed.

### Patch Changes

- Updated dependencies [[`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539)]:
  - @commercetools-test-data/core@4.0.0

## 3.1.2

### Patch Changes

- [#135](https://github.com/commercetools/test-data/pull/135) [`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c) Thanks [@emmenko](https://github.com/emmenko)! - Fix faker deprecated methods

- Updated dependencies [[`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c)]:
  - @commercetools-test-data/core@3.1.2

## 3.1.1

### Patch Changes

- [#131](https://github.com/commercetools/test-data/pull/131) [`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @faker-js/faker to v7

- Updated dependencies [[`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a)]:
  - @commercetools-test-data/core@3.1.1

## 3.1.0

### Minor Changes

- [#127](https://github.com/commercetools/test-data/pull/127) [`1788be7`](https://github.com/commercetools/test-data/commit/1788be7b8032a4720cd4dcd4ae069b21b276c36d) Thanks [@emmenko](https://github.com/emmenko)! - Add `AddressDraft` model.

  ```ts
  import {
    AddressDraft,
    type TAddressDraft,
  } from '@commercetools-test-data/commons';

  const addressDraft = AddressDraft.random().build<TAddressDraft>();
  ```

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@3.1.0

## 3.0.2

### Patch Changes

- [#126](https://github.com/commercetools/test-data/pull/126) [`4c94ecc`](https://github.com/commercetools/test-data/commit/4c94ecc68d2481d9c13fd92c0c058430fb79f746) Thanks [@emmenko](https://github.com/emmenko)! - Update platform-sdk dependency

* [#124](https://github.com/commercetools/test-data/pull/124) [`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39) Thanks [@emmenko](https://github.com/emmenko)! - Update license year

* Updated dependencies [[`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39)]:
  - @commercetools-test-data/core@3.0.2

## 3.0.1

### Patch Changes

- [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

* [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Replace deprecated method `name.title()` with `name.jobTitle()`.

* Updated dependencies [[`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b)]:
  - @commercetools-test-data/core@3.0.1

## 3.0.0

### Major Changes

- [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Remove field `countryName`, as it never existed in the API model.

  In tests, we recommend to explicitly set the `country` field and derive the localized country name. For example for `de` it would be `Germany`, given that the application locale is set to `en`.

  Furthermore, the `Initiator` model has been replaced by `ClientLogging`, as the base model. Only the GraphQL version of `ClientLogging` is typed as `Initiator`.

### Minor Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Add model for `Address`.

### Patch Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Refine models and types.

* [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

- [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

* [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Use [generated API spec types](https://www.npmjs.com/package/@commercetools/platform-sdk) to type the REST models.

- [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

- Updated dependencies [[`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb), [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449), [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141), [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1)]:
  - @commercetools-test-data/core@3.0.0

## 2.4.1

### Patch Changes

- Updated dependencies [[`3a8d03e`](https://github.com/commercetools/test-data/commit/3a8d03e14fc166bddc8e57039b6c379ef2d0904e), [`2085e1e`](https://github.com/commercetools/test-data/commit/2085e1ea59a923e2fbc5a24d33e2ac65de816978)]:
  - @commercetools-test-data/core@2.4.1

## 2.4.0

### Minor Changes

- [#69](https://github.com/commercetools/test-data/pull/69) [`cc1789d`](https://github.com/commercetools/test-data/commit/cc1789d77a3b6d12e6f44cb8edc6447aba0141c1) Thanks [@adnasa](https://github.com/adnasa)! - Fix Reference to distinguish expanded `graphql and`rest` shape respectively

### Patch Changes

- [#73](https://github.com/commercetools/test-data/pull/73) [`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d) Thanks [@adnasa](https://github.com/adnasa)! - Update LICENSE

- Updated dependencies [[`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d)]:
  - @commercetools-test-data/core@2.4.0

## 2.3.0

### Minor Changes

- [#67](https://github.com/commercetools/test-data/pull/67) [`3e36d52`](https://github.com/commercetools/test-data/commit/3e36d5214d002309d7f3107c3ffda09a5bfdc048) Thanks [@emmenko](https://github.com/emmenko)! - Use `faker` v5

### Patch Changes

- Updated dependencies [[`3e36d52`](https://github.com/commercetools/test-data/commit/3e36d5214d002309d7f3107c3ffda09a5bfdc048)]:
  - @commercetools-test-data/core@2.3.0

## 2.2.0

### Minor Changes

- [#58](https://github.com/commercetools/test-data/pull/58) [`288b012`](https://github.com/commercetools/test-data/commit/288b012823c7df21b01dd29a7d11bd724c39e407) Thanks [@adnasa](https://github.com/adnasa)! - add `Reference` and `Initiator`

## 2.1.2

### Patch Changes

- [#52](https://github.com/commercetools/test-data/pull/52) [`54b4586`](https://github.com/commercetools/test-data/commit/54b4586fea89dbef8bd6086eeeaeae52e6a3a394) Thanks [@renovate](https://github.com/apps/renovate)! - chore: update all deps

- Updated dependencies [[`54b4586`](https://github.com/commercetools/test-data/commit/54b4586fea89dbef8bd6086eeeaeae52e6a3a394)]:
  - @commercetools-test-data/core@2.1.2

## 2.1.1

### Patch Changes

- [`f1361f9`](https://github.com/commercetools/test-data/commit/f1361f914f60e4b86150e2ddbc0e549d18bc4dd7) [#42](https://github.com/commercetools/test-data/pull/42) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

* [`55e636e`](https://github.com/commercetools/test-data/commit/55e636ea480e8bc9114da345641928a9696b773c) [#40](https://github.com/commercetools/test-data/pull/40) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade preconstruct CLI to v2 for bundling.

* Updated dependencies [[`f1361f9`](https://github.com/commercetools/test-data/commit/f1361f914f60e4b86150e2ddbc0e549d18bc4dd7), [`55e636e`](https://github.com/commercetools/test-data/commit/55e636ea480e8bc9114da345641928a9696b773c)]:
  - @commercetools-test-data/core@2.1.1

## 2.1.0

### Minor Changes

- [`965dce5`](https://github.com/commercetools/test-data/commit/965dce5860972e92f09010793bbfacddeb35266f) [#38](https://github.com/commercetools/test-data/pull/38) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

### Patch Changes

- Updated dependencies [[`965dce5`](https://github.com/commercetools/test-data/commit/965dce5860972e92f09010793bbfacddeb35266f)]:
  - @commercetools-test-data/core@2.1.0

## 2.0.1

### Patch Changes

- [`95b701b`](https://github.com/commercetools/test-data/commit/95b701b4445cb3374b43a4efc81eef6b31f88536) [#27](https://github.com/commercetools/test-data/pull/27) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`95b701b`](https://github.com/commercetools/test-data/commit/95b701b4445cb3374b43a4efc81eef6b31f88536)]:
  - @commercetools-test-data/core@2.0.1

## 2.0.0

### Major Changes

- [`0c35ac4`](https://github.com/commercetools/test-data/commit/0c35ac491d3ff8703f5d6293a73acfdb607410cd) [#24](https://github.com/commercetools/test-data/pull/24) Thanks [@pa3](https://github.com/pa3)! - drop `default` prop from builder initializer

### Patch Changes

- Updated dependencies [[`0c35ac4`](https://github.com/commercetools/test-data/commit/0c35ac491d3ff8703f5d6293a73acfdb607410cd)]:
  - @commercetools-test-data/core@2.0.0

## 1.1.3

### Patch Changes

- [`b9953cc`](https://github.com/commercetools/test-data/commit/b9953ccc5d497dc337226984fe2f6529063000fa) [#20](https://github.com/commercetools/test-data/pull/20) Thanks [@pa3](https://github.com/pa3)! - Filter out empty translations from LocalizedString

## 1.1.2

### Patch Changes

- [`d7932e1`](https://github.com/commercetools/test-data/commit/d7932e125cb31c88eee4fa99312774d0ed838af5) [#17](https://github.com/commercetools/test-data/pull/17) Thanks [@emmenko](https://github.com/emmenko)! - Fix type declarations generation to only include declarations files of each specific package

- Updated dependencies [[`d7932e1`](https://github.com/commercetools/test-data/commit/d7932e125cb31c88eee4fa99312774d0ed838af5)]:
  - @commercetools-test-data/core@1.1.2

## 1.1.1

### Patch Changes

- [`716fad7`](https://github.com/commercetools/test-data/commit/716fad74520d8bacf895756f5fffaef1216d2f69) [#15](https://github.com/commercetools/test-data/pull/15) Thanks [@emmenko](https://github.com/emmenko)! - Fix bundle compatibility with browser environments

- Updated dependencies [[`716fad7`](https://github.com/commercetools/test-data/commit/716fad74520d8bacf895756f5fffaef1216d2f69)]:
  - @commercetools-test-data/core@1.1.1

## 1.1.0

### Minor Changes

- [`8384239`](https://github.com/commercetools/test-data/commit/83842397840665a59eaaf2eee7b96b21e9867067) [#12](https://github.com/commercetools/test-data/pull/12) Thanks [@emmenko](https://github.com/emmenko)! - Add new model for `LocalizedString` type

### Patch Changes

- Updated dependencies [[`8384239`](https://github.com/commercetools/test-data/commit/83842397840665a59eaaf2eee7b96b21e9867067)]:
  - @commercetools-test-data/core@1.1.0
