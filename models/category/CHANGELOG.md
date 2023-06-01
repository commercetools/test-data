# @commercetools-test-data/category

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

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - fix graphql draft types

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

- [#252](https://github.com/commercetools/test-data/pull/252) [`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf) Thanks [@jaikamat](https://github.com/jaikamat)! - edited tests, minor preset revisions

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

- [#235](https://github.com/commercetools/test-data/pull/235) [`90420e1`](https://github.com/commercetools/test-data/commit/90420e1b380fb29368226adbaada1b76551b6e61) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Creates category draft presets.

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
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0

## 4.10.0

### Patch Changes

- [#159](https://github.com/commercetools/test-data/pull/159) [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb) Thanks [@emmenko](https://github.com/emmenko)! - Use pnpm as the package manager

- Updated dependencies [[`ba91abc`](https://github.com/commercetools/test-data/commit/ba91abca0afd7ca67f9bc68a30cfdc2ce0f728c6), [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb)]:
  - @commercetools-test-data/commons@4.10.0
  - @commercetools-test-data/core@4.10.0
  - @commercetools-test-data/utils@4.10.0

## 4.9.0

### Patch Changes

- [#193](https://github.com/commercetools/test-data/pull/193) [`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980) Thanks [@jaikamat](https://github.com/jaikamat)! - remove copyright year from licenses

- Updated dependencies [[`8f9abe0`](https://github.com/commercetools/test-data/commit/8f9abe097d790a018e836d78b9982e5abba24980)]:
  - @commercetools-test-data/commons@4.9.0
  - @commercetools-test-data/utils@4.9.0
  - @commercetools-test-data/core@4.9.0

## 4.8.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.8.0
  - @commercetools-test-data/commons@4.8.0
  - @commercetools-test-data/utils@4.8.0

## 4.7.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.7.0
  - @commercetools-test-data/commons@4.7.0
  - @commercetools-test-data/utils@4.7.0

## 4.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.6.0
  - @commercetools-test-data/commons@4.6.0
  - @commercetools-test-data/utils@4.6.0

## 4.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.5.0
  - @commercetools-test-data/commons@4.5.0
  - @commercetools-test-data/utils@4.5.0

## 4.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.4.0
  - @commercetools-test-data/commons@4.4.0
  - @commercetools-test-data/utils@4.4.0

## 4.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.3.0
  - @commercetools-test-data/commons@4.3.0
  - @commercetools-test-data/utils@4.3.0

## 4.2.2

### Patch Changes

- [#171](https://github.com/commercetools/test-data/pull/171) [`a40573d`](https://github.com/commercetools/test-data/commit/a40573d2e1986fa14600fe192887de5beb4de622) Thanks [@valoriecarli](https://github.com/valoriecarli)! - add categorydraft to index

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.2
  - @commercetools-test-data/commons@4.2.2
  - @commercetools-test-data/utils@4.2.2

## 4.2.1

### Patch Changes

- [#169](https://github.com/commercetools/test-data/pull/169) [`5c30800`](https://github.com/commercetools/test-data/commit/5c30800246a78d4cd0db5e71c6a810e46be68213) Thanks [@valoriecarli](https://github.com/valoriecarli)! - add slug presets and updated orderhint type

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.1
  - @commercetools-test-data/commons@4.2.1
  - @commercetools-test-data/utils@4.2.1

## 4.2.0

### Minor Changes

- [#167](https://github.com/commercetools/test-data/pull/167) [`e7114c1`](https://github.com/commercetools/test-data/commit/e7114c11fa8a97c0f9ba802c58966cd430c6a3f6) Thanks [@valoriecarli](https://github.com/valoriecarli)! - feat(category): add category draft

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.2.0
  - @commercetools-test-data/commons@4.2.0
  - @commercetools-test-data/utils@4.2.0

## 4.1.1

### Patch Changes

- [#141](https://github.com/commercetools/test-data/pull/141) [`219002d`](https://github.com/commercetools/test-data/commit/219002d7b945045c13930bf03b5a42be6604183d) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @commercetools/platform-sdk to v3

- Updated dependencies [[`219002d`](https://github.com/commercetools/test-data/commit/219002d7b945045c13930bf03b5a42be6604183d)]:
  - @commercetools-test-data/commons@4.1.1
  - @commercetools-test-data/core@4.1.1
  - @commercetools-test-data/utils@4.1.1

## 4.1.0

### Patch Changes

- Updated dependencies [[`0ee1463`](https://github.com/commercetools/test-data/commit/0ee14631bc546c6fabf1150bd6a024cea8335674)]:
  - @commercetools-test-data/commons@4.1.0
  - @commercetools-test-data/core@4.1.0
  - @commercetools-test-data/utils@4.1.0

## 4.0.3

### Patch Changes

- [#150](https://github.com/commercetools/test-data/pull/150) [`4f87f72`](https://github.com/commercetools/test-data/commit/4f87f72c0a1c3530392b2002f6fb3fa9dba58221) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(localized-string): to-localized-field to return null when no value is received

- Updated dependencies [[`4f87f72`](https://github.com/commercetools/test-data/commit/4f87f72c0a1c3530392b2002f6fb3fa9dba58221)]:
  - @commercetools-test-data/commons@4.0.3
  - @commercetools-test-data/core@4.0.3
  - @commercetools-test-data/utils@4.0.3

## 4.0.2

### Patch Changes

- [#147](https://github.com/commercetools/test-data/pull/147) [`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(faker): updating deprecated fields

- Updated dependencies [[`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240)]:
  - @commercetools-test-data/core@4.0.2
  - @commercetools-test-data/commons@4.0.2
  - @commercetools-test-data/utils@4.0.2

## 4.0.1

### Patch Changes

- Updated dependencies [[`467ac5f`](https://github.com/commercetools/test-data/commit/467ac5f041a733b05d71b7c3d69723369e658e17)]:
  - @commercetools-test-data/commons@4.0.1
  - @commercetools-test-data/core@4.0.1
  - @commercetools-test-data/utils@4.0.1

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

- Updated dependencies [[`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539), [`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539)]:
  - @commercetools-test-data/core@4.0.0
  - @commercetools-test-data/commons@4.0.0
  - @commercetools-test-data/utils@4.0.0

## 3.1.2

### Patch Changes

- [#136](https://github.com/commercetools/test-data/pull/136) [`abb2aca`](https://github.com/commercetools/test-data/commit/abb2acae91ccb274dcc066c73efa7d4e29368b75) Thanks [@emmenko](https://github.com/emmenko)! - Export types

* [#135](https://github.com/commercetools/test-data/pull/135) [`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c) Thanks [@emmenko](https://github.com/emmenko)! - Fix faker deprecated methods

* Updated dependencies [[`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c)]:
  - @commercetools-test-data/core@3.1.2
  - @commercetools-test-data/commons@3.1.2
  - @commercetools-test-data/utils@3.1.2

## 3.1.1

### Patch Changes

- [#131](https://github.com/commercetools/test-data/pull/131) [`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @faker-js/faker to v7

- Updated dependencies [[`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a)]:
  - @commercetools-test-data/core@3.1.1
  - @commercetools-test-data/commons@3.1.1
  - @commercetools-test-data/utils@3.1.1

## 3.1.0

### Patch Changes

- Updated dependencies [[`1788be7`](https://github.com/commercetools/test-data/commit/1788be7b8032a4720cd4dcd4ae069b21b276c36d)]:
  - @commercetools-test-data/commons@3.1.0
  - @commercetools-test-data/core@3.1.0
  - @commercetools-test-data/utils@3.1.0

## 3.0.2

### Patch Changes

- [#126](https://github.com/commercetools/test-data/pull/126) [`4c94ecc`](https://github.com/commercetools/test-data/commit/4c94ecc68d2481d9c13fd92c0c058430fb79f746) Thanks [@emmenko](https://github.com/emmenko)! - Update platform-sdk dependency

* [#124](https://github.com/commercetools/test-data/pull/124) [`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39) Thanks [@emmenko](https://github.com/emmenko)! - Update license year

* Updated dependencies [[`4c94ecc`](https://github.com/commercetools/test-data/commit/4c94ecc68d2481d9c13fd92c0c058430fb79f746), [`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39)]:
  - @commercetools-test-data/commons@3.0.2
  - @commercetools-test-data/core@3.0.2
  - @commercetools-test-data/utils@3.0.2

## 3.0.1

### Patch Changes

- [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

- Updated dependencies [[`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b), [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b)]:
  - @commercetools-test-data/core@3.0.1
  - @commercetools-test-data/commons@3.0.1
  - @commercetools-test-data/utils@3.0.1

## 3.0.0

### Patch Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Refine models and types.

* [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

- [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

* [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Use [generated API spec types](https://www.npmjs.com/package/@commercetools/platform-sdk) to type the REST models.

- [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

- Updated dependencies [[`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449), [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb), [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb), [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449), [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449), [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141), [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb), [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1)]:
  - @commercetools-test-data/commons@3.0.0
  - @commercetools-test-data/utils@3.0.0
  - @commercetools-test-data/core@3.0.0

## 2.4.1

### Patch Changes

- Updated dependencies [[`3a8d03e`](https://github.com/commercetools/test-data/commit/3a8d03e14fc166bddc8e57039b6c379ef2d0904e), [`2085e1e`](https://github.com/commercetools/test-data/commit/2085e1ea59a923e2fbc5a24d33e2ac65de816978)]:
  - @commercetools-test-data/core@2.4.1

## 2.4.0

### Patch Changes

- [#72](https://github.com/commercetools/test-data/pull/72) [`46f5781`](https://github.com/commercetools/test-data/commit/46f57810f4b8761d91056402172d15817dbf236f) Thanks [@adnasa](https://github.com/adnasa)! - Add `models/category`, `utils/`

  \*\*Example usage of `models/category`

  ```ts
  import Category from '@commercetools-test-data/category';
  const category = Category.random().build();
  console.log(category);
  // {
  //   "id": <UUID>,
  //   "version": 1,
  //   "createdAt": "2018-12-19T21:31:56.346Z",
  //   "lastModifiedAt": "2019-09-24T10:04:20.946Z",
  //   "name": {
  //     "en": "Clothes"
  //   },
  //   "slug": {
  //     "en": "clothes"
  //   },
  //   "ancestors": [],
  //   "orderHint": "0.01",
  //   "assets": []
  // }
  ```

  \*\*Example usage of `createRelatedDates`

  ```ts
  import type { TCategory } from '@commercetools-test-data/category';
  import { createRelatedDates } from '@commercetools-test-data/utils';

  const [getOlderDate, getNewerDate] = createRelatedDates();
  const generator = Generator<TCategory>({
    fields: {
      createdAt: fake(getOlderDate),
      lastModifiedAt: fake(getNewerDate),
    },
  });
  ```

- Updated dependencies [[`46f5781`](https://github.com/commercetools/test-data/commit/46f57810f4b8761d91056402172d15817dbf236f), [`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d)]:
  - @commercetools-test-data/utils@2.4.0
  - @commercetools-test-data/core@2.4.0
