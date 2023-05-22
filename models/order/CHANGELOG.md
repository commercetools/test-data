# @commercetools-test-data/order

## 5.3.4

### Patch Changes

- Updated dependencies [[`1248fad`](https://github.com/commercetools/test-data/commit/1248fad6d1b008dcd8abec4a386d74a34c349648)]:
  - @commercetools-test-data/cart-discount@5.3.4
  - @commercetools-test-data/cart@5.3.4
  - @commercetools-test-data/core@5.3.4
  - @commercetools-test-data/commons@5.3.4
  - @commercetools-test-data/customer-group@5.3.4
  - @commercetools-test-data/line-item@5.3.4
  - @commercetools-test-data/utils@5.3.4

## 5.3.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/line-item@5.3.3
  - @commercetools-test-data/cart@5.3.3
  - @commercetools-test-data/core@5.3.3
  - @commercetools-test-data/cart-discount@5.3.3
  - @commercetools-test-data/commons@5.3.3
  - @commercetools-test-data/customer-group@5.3.3
  - @commercetools-test-data/utils@5.3.3

## 5.3.2

### Patch Changes

- Updated dependencies [[`1d8a21c`](https://github.com/commercetools/test-data/commit/1d8a21c55728dcf1059e37a1964280f2eda22d09)]:
  - @commercetools-test-data/commons@5.3.2
  - @commercetools-test-data/line-item@5.3.2
  - @commercetools-test-data/cart@5.3.2
  - @commercetools-test-data/cart-discount@5.3.2
  - @commercetools-test-data/customer-group@5.3.2
  - @commercetools-test-data/core@5.3.2
  - @commercetools-test-data/utils@5.3.2

## 5.3.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/cart-discount@5.3.1
  - @commercetools-test-data/line-item@5.3.1
  - @commercetools-test-data/cart@5.3.1
  - @commercetools-test-data/core@5.3.1
  - @commercetools-test-data/commons@5.3.1
  - @commercetools-test-data/customer-group@5.3.1
  - @commercetools-test-data/utils@5.3.1

## 5.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/cart-discount@5.3.0
  - @commercetools-test-data/cart@5.3.0
  - @commercetools-test-data/line-item@5.3.0
  - @commercetools-test-data/core@5.3.0
  - @commercetools-test-data/commons@5.3.0
  - @commercetools-test-data/customer-group@5.3.0
  - @commercetools-test-data/utils@5.3.0

## 5.2.0

### Minor Changes

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - remove \_\_typename from drafts

### Patch Changes

- Updated dependencies [[`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e), [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e)]:
  - @commercetools-test-data/cart-discount@5.2.0
  - @commercetools-test-data/customer-group@5.2.0
  - @commercetools-test-data/line-item@5.2.0
  - @commercetools-test-data/commons@5.2.0
  - @commercetools-test-data/cart@5.2.0
  - @commercetools-test-data/core@5.2.0
  - @commercetools-test-data/utils@5.2.0

## 5.1.1

### Patch Changes

- Updated dependencies [[`8970865`](https://github.com/commercetools/test-data/commit/89708651f4c088517ce3f4d60a1650698a129a63)]:
  - @commercetools-test-data/line-item@5.1.1
  - @commercetools-test-data/cart@5.1.1
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/cart-discount@5.1.1
  - @commercetools-test-data/commons@5.1.1
  - @commercetools-test-data/customer-group@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Patch Changes

- Updated dependencies [[`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf), [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1)]:
  - @commercetools-test-data/customer-group@5.1.0
  - @commercetools-test-data/commons@5.1.0
  - @commercetools-test-data/cart@5.1.0
  - @commercetools-test-data/cart-discount@5.1.0
  - @commercetools-test-data/line-item@5.1.0
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

- [#239](https://github.com/commercetools/test-data/pull/239) [`f3487bc`](https://github.com/commercetools/test-data/commit/f3487bc79d04c8fb5c6bbbb24afb0ec29a89280b) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds order-from-cart-draft presets.

### Patch Changes

- Updated dependencies [[`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6), [`d2cb5e6`](https://github.com/commercetools/test-data/commit/d2cb5e6faadd51f7a63b43ca63ee01938fdb895d), [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb), [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075), [`c0ed06d`](https://github.com/commercetools/test-data/commit/c0ed06debd5c71d30943e0fd0b7c81447a06b6f4), [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/cart-discount@5.0.0
  - @commercetools-test-data/commons@5.0.0
  - @commercetools-test-data/customer-group@5.0.0
  - @commercetools-test-data/line-item@5.0.0
  - @commercetools-test-data/cart@5.0.0
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- Updated dependencies [[`c94d229`](https://github.com/commercetools/test-data/commit/c94d22961830a472dee5f0b66dededed1c362238)]:
  - @commercetools-test-data/cent-precision-money@4.11.1
  - @commercetools-test-data/cart-discount@4.11.1
  - @commercetools-test-data/line-item@4.11.1
  - @commercetools-test-data/cart@4.11.1
  - @commercetools-test-data/core@4.11.1
  - @commercetools-test-data/commons@4.11.1
  - @commercetools-test-data/customer-group@4.11.1
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Minor Changes

- [#216](https://github.com/commercetools/test-data/pull/216) [`dc3cca0`](https://github.com/commercetools/test-data/commit/dc3cca0f02d366fdcdefb2cc693ed34469117cd7) Thanks [@jaikamat](https://github.com/jaikamat)! - create Order and OrderFromCartDraft

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d), [`4b56c01`](https://github.com/commercetools/test-data/commit/4b56c01d5c74ebf746122b659bbfd85a45e156ba)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/cart@4.11.0
  - @commercetools-test-data/cart-discount@4.11.0
  - @commercetools-test-data/cent-precision-money@4.11.0
  - @commercetools-test-data/customer-group@4.11.0
  - @commercetools-test-data/line-item@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0
