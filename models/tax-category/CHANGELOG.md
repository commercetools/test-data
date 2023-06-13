# @commercetools-test-data/tax-category

## 5.5.0

### Patch Changes

- Updated dependencies [[`b49a3ed`](https://github.com/commercetools/test-data/commit/b49a3ed0c028f279ac039c23d986182323bce6de)]:
  - @commercetools-test-data/commons@5.5.0
  - @commercetools-test-data/core@5.5.0
  - @commercetools-test-data/utils@5.5.0

## 5.4.1

### Patch Changes

- [#282](https://github.com/commercetools/test-data/pull/282) [`57b1fa2`](https://github.com/commercetools/test-data/commit/57b1fa2c2c9f855eca534ef5646bc9f77c054ab9) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Added change-history presets to various models

- Updated dependencies [[`57b1fa2`](https://github.com/commercetools/test-data/commit/57b1fa2c2c9f855eca534ef5646bc9f77c054ab9)]:
  - @commercetools-test-data/commons@5.4.1
  - @commercetools-test-data/core@5.4.1
  - @commercetools-test-data/utils@5.4.1

## 5.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.4.0
  - @commercetools-test-data/commons@5.4.0
  - @commercetools-test-data/utils@5.4.0

## 5.3.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.6
  - @commercetools-test-data/commons@5.3.6
  - @commercetools-test-data/utils@5.3.6

## 5.3.5

### Patch Changes

- [#274](https://github.com/commercetools/test-data/pull/274) [`a321085`](https://github.com/commercetools/test-data/commit/a321085894185cd7206dde9b3a9a67dcf8722443) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Add change-history specific presets for: customer, address, tax category & tax presets.

- Updated dependencies [[`a321085`](https://github.com/commercetools/test-data/commit/a321085894185cd7206dde9b3a9a67dcf8722443)]:
  - @commercetools-test-data/commons@5.3.5
  - @commercetools-test-data/core@5.3.5
  - @commercetools-test-data/utils@5.3.5

## 5.3.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.4
  - @commercetools-test-data/commons@5.3.4
  - @commercetools-test-data/utils@5.3.4

## 5.3.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.3
  - @commercetools-test-data/commons@5.3.3
  - @commercetools-test-data/utils@5.3.3

## 5.3.2

### Patch Changes

- Updated dependencies [[`1d8a21c`](https://github.com/commercetools/test-data/commit/1d8a21c55728dcf1059e37a1964280f2eda22d09)]:
  - @commercetools-test-data/commons@5.3.2
  - @commercetools-test-data/core@5.3.2
  - @commercetools-test-data/utils@5.3.2

## 5.3.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.1
  - @commercetools-test-data/commons@5.3.1
  - @commercetools-test-data/utils@5.3.1

## 5.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.0
  - @commercetools-test-data/commons@5.3.0
  - @commercetools-test-data/utils@5.3.0

## 5.2.0

### Minor Changes

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - remove \_\_typename from drafts

### Patch Changes

- Updated dependencies [[`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e)]:
  - @commercetools-test-data/commons@5.2.0
  - @commercetools-test-data/core@5.2.0
  - @commercetools-test-data/utils@5.2.0

## 5.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/commons@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Minor Changes

- [#250](https://github.com/commercetools/test-data/pull/250) [`d271d64`](https://github.com/commercetools/test-data/commit/d271d649dceab579feac91199f0f6b72791c763d) Thanks [@jaikamat](https://github.com/jaikamat)! - fix incorrect import for tax rate drafts

### Patch Changes

- Updated dependencies [[`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf), [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1)]:
  - @commercetools-test-data/commons@5.1.0
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

- [#241](https://github.com/commercetools/test-data/pull/241) [`796e72c`](https://github.com/commercetools/test-data/commit/796e72c3dab6ddb8b6206fe78560743eeacda280) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **TaxCategory** and **TaxRate** have been colocated under package `@commercetools-test-data/tax-category`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { TaxCategoryDraft } from '@commercetools-test-data/tax-category’`<br>
  `import { TaxRate } from '@commercetools-test-data/tax-category'`<br><br>
  **2.** Require the use of '@commercetools-test-data/tax-rate’ to be discontinued and all references removed, as this package is scheduled to be unpublished.

- [#242](https://github.com/commercetools/test-data/pull/242) [`b1bb291`](https://github.com/commercetools/test-data/commit/b1bb291749813a33ccf3acdcc3531550a5b02eba) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **Product**, **ProductCatalogData** and **ProductData** have been colocated under package `@commercetools-test-data/product`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { ProductDraft } from '@commercetools-test-data/product’`<br>
  `import { ProductCatalogData } from '@commercetools-test-data/product'`<br><br>
  **2.** Require the use of `@commercetools-test-data/product-catalog-data` and `@commercetools-test-data/product-data` to be discontinued and all references removed, as these packages are scheduled to be unpublished.

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

### Patch Changes

- Updated dependencies [[`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6), [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb), [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075), [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/commons@5.0.0
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.11.1
  - @commercetools-test-data/commons@4.11.1
  - @commercetools-test-data/tax-rate@4.11.1
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/tax-rate@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0

## 4.10.0

### Minor Changes

- [#208](https://github.com/commercetools/test-data/pull/208) [`c97c711`](https://github.com/commercetools/test-data/commit/c97c7115dbf01efdcf2cc6e2ce27fada9c5a554a) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Update export for `TaxRateDraft` and add sample data preset for `TaxCategoryDraft`.

### Patch Changes

- [#159](https://github.com/commercetools/test-data/pull/159) [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb) Thanks [@emmenko](https://github.com/emmenko)! - Use pnpm as the package manager

- Updated dependencies [[`ba91abc`](https://github.com/commercetools/test-data/commit/ba91abca0afd7ca67f9bc68a30cfdc2ce0f728c6), [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb), [`c97c711`](https://github.com/commercetools/test-data/commit/c97c7115dbf01efdcf2cc6e2ce27fada9c5a554a)]:
  - @commercetools-test-data/commons@4.10.0
  - @commercetools-test-data/tax-rate@4.10.0
  - @commercetools-test-data/core@4.10.0
  - @commercetools-test-data/utils@4.10.0

## 4.9.0

### Patch Changes

- [#193](https://github.com/commercetools/test-data/pull/193) [`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980) Thanks [@jaikamat](https://github.com/jaikamat)! - remove copyright year from licenses

- Updated dependencies [[`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980)]:
  - @commercetools-test-data/tax-rate@4.9.0
  - @commercetools-test-data/commons@4.9.0
  - @commercetools-test-data/utils@4.9.0
  - @commercetools-test-data/core@4.9.0

## 4.8.0

### Minor Changes

- [#190](https://github.com/commercetools/test-data/pull/190) [`b0500f3`](https://github.com/commercetools/test-data/commit/b0500f3db455e114945d874ea03994bc5e079905) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Image and Review models added

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.8.0
  - @commercetools-test-data/commons@4.8.0
  - @commercetools-test-data/tax-rate@4.8.0
  - @commercetools-test-data/utils@4.8.0

## 4.7.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.7.0
  - @commercetools-test-data/commons@4.7.0
  - @commercetools-test-data/tax-rate@4.7.0
  - @commercetools-test-data/utils@4.7.0

## 4.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.6.0
  - @commercetools-test-data/commons@4.6.0
  - @commercetools-test-data/tax-rate@4.6.0
  - @commercetools-test-data/utils@4.6.0

## 4.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.5.0
  - @commercetools-test-data/commons@4.5.0
  - @commercetools-test-data/tax-rate@4.5.0
  - @commercetools-test-data/utils@4.5.0

## 4.4.0

### Minor Changes

- [#177](https://github.com/commercetools/test-data/pull/177) [`df67722`](https://github.com/commercetools/test-data/commit/df677228bff8125763b8f32ca7560ce15ac49b54) Thanks [@valoriecarli](https://github.com/valoriecarli)! - add tax category and tax rate models

### Patch Changes

- Updated dependencies [[`df67722`](https://github.com/commercetools/test-data/commit/df677228bff8125763b8f32ca7560ce15ac49b54)]:
  - @commercetools-test-data/tax-rate@4.4.0
  - @commercetools-test-data/core@4.4.0
  - @commercetools-test-data/commons@4.4.0
  - @commercetools-test-data/utils@4.4.0
