# @commercetools-test-data/cart-discount

## 5.2.0

### Minor Changes

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - fix graphql draft types

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - remove \_\_typename from drafts

### Patch Changes

- Updated dependencies [[`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e), [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e)]:
  - @commercetools-test-data/category@5.2.0
  - @commercetools-test-data/customer-group@5.2.0
  - @commercetools-test-data/product-type@5.2.0
  - @commercetools-test-data/commons@5.2.0
  - @commercetools-test-data/core@5.2.0
  - @commercetools-test-data/utils@5.2.0

## 5.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/category@5.1.1
  - @commercetools-test-data/commons@5.1.1
  - @commercetools-test-data/customer-group@5.1.1
  - @commercetools-test-data/product-type@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Patch Changes

- Updated dependencies [[`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf), [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1)]:
  - @commercetools-test-data/customer-group@5.1.0
  - @commercetools-test-data/product-type@5.1.0
  - @commercetools-test-data/category@5.1.0
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

- [#238](https://github.com/commercetools/test-data/pull/238) [`d2cb5e6`](https://github.com/commercetools/test-data/commit/d2cb5e6faadd51f7a63b43ca63ee01938fdb895d) Thanks [@jaikamat](https://github.com/jaikamat)! - Create CartDiscountTarget models and implement in presets

### Patch Changes

- Updated dependencies [[`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`90420e1`](https://github.com/commercetools/test-data/commit/90420e1b380fb29368226adbaada1b76551b6e61), [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6), [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb), [`fda4538`](https://github.com/commercetools/test-data/commit/fda4538360c0952f7bfdd0dab5efcff827f7bd1d), [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075), [`23caa84`](https://github.com/commercetools/test-data/commit/23caa84726eb6b97a55dc6cdc23280e22382f105), [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/commons@5.0.0
  - @commercetools-test-data/category@5.0.0
  - @commercetools-test-data/customer-group@5.0.0
  - @commercetools-test-data/product-type@5.0.0
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- [#223](https://github.com/commercetools/test-data/pull/223) [`c94d229`](https://github.com/commercetools/test-data/commit/c94d22961830a472dee5f0b66dededed1c362238) Thanks [@valoriecarli](https://github.com/valoriecarli)! - expose addtl drafts

- Updated dependencies []:
  - @commercetools-test-data/cart-discount-value-absolute@4.11.1
  - @commercetools-test-data/cart-discount-value-fixed@4.11.1
  - @commercetools-test-data/core@4.11.1
  - @commercetools-test-data/cart-discount-value-gift-line-item@4.11.1
  - @commercetools-test-data/cart-discount-value-relative@4.11.1
  - @commercetools-test-data/commons@4.11.1
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/cart-discount-value-absolute@4.11.0
  - @commercetools-test-data/cart-discount-value-fixed@4.11.0
  - @commercetools-test-data/cart-discount-value-gift-line-item@4.11.0
  - @commercetools-test-data/cart-discount-value-relative@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0

## 4.10.0

### Patch Changes

- [#159](https://github.com/commercetools/test-data/pull/159) [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb) Thanks [@emmenko](https://github.com/emmenko)! - Use pnpm as the package manager

- Updated dependencies [[`ba91abc`](https://github.com/commercetools/test-data/commit/ba91abca0afd7ca67f9bc68a30cfdc2ce0f728c6), [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb)]:
  - @commercetools-test-data/commons@4.10.0
  - @commercetools-test-data/cart-discount-value-gift-line-item@4.10.0
  - @commercetools-test-data/cart-discount-value-absolute@4.10.0
  - @commercetools-test-data/cart-discount-value-relative@4.10.0
  - @commercetools-test-data/cart-discount-value-fixed@4.10.0
  - @commercetools-test-data/core@4.10.0
  - @commercetools-test-data/utils@4.10.0

## 4.9.0

### Minor Changes

- [#195](https://github.com/commercetools/test-data/pull/195) [`cf123cf`](https://github.com/commercetools/test-data/commit/cf123cf6195c47c9479d51165b2a1a21c054c4f5) Thanks [@jaikamat](https://github.com/jaikamat)! - created CartDiscount package

### Patch Changes

- Updated dependencies [[`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980)]:
  - @commercetools-test-data/commons@4.9.0
  - @commercetools-test-data/utils@4.9.0
  - @commercetools-test-data/core@4.9.0
  - @commercetools-test-data/cart-discount-value-absolute@4.9.0
  - @commercetools-test-data/cart-discount-value-fixed@4.9.0
  - @commercetools-test-data/cart-discount-value-gift-line-item@4.9.0
  - @commercetools-test-data/cart-discount-value-relative@4.9.0
