# @commercetools-test-data/utils

## 10.11.2

## 10.11.1

## 10.11.0

## 10.10.1

## 10.10.0

## 10.9.3

## 10.9.2

## 10.9.1

## 10.9.0

## 10.8.1

## 10.8.0

## 10.7.1

## 10.7.0

## 10.6.1

## 10.6.0

## 10.5.2

## 10.5.1

## 10.5.0

## 10.4.0

## 10.3.0

## 10.2.0

## 10.1.4

## 10.1.3

## 10.1.2

## 10.1.1

## 10.1.0

## 10.0.0

## 9.0.7

## 9.0.6

## 9.0.5

## 9.0.4

## 9.0.3

## 9.0.2

## 9.0.1

## 9.0.0

## 8.5.0

## 8.4.0

## 8.3.0

## 8.2.2

## 8.2.1

## 8.2.0

## 8.1.1

## 8.1.0

## 8.0.0

## 7.11.0

### Minor Changes

- [#542](https://github.com/commercetools/test-data/pull/542) [`22b1cce`](https://github.com/commercetools/test-data/commit/22b1cce82bf29d98bc117bd866b5a258b89f5cca) Thanks [@Rhotimee](https://github.com/Rhotimee)! - Add slugify function

## 7.10.0

## 7.9.1

## 7.9.0

## 7.8.0

## 7.7.1

## 7.7.0

## 7.6.0

## 7.5.0

## 7.4.0

## 7.3.0

## 7.2.13

## 7.2.12

## 7.2.11

## 7.2.10

## 7.2.9

## 7.2.8

## 7.2.7

## 7.2.6

## 7.2.5

## 7.2.4

## 7.2.3

## 7.2.2

## 7.2.1

## 7.2.0

## 7.1.1

## 7.1.0

## 7.0.0

## 6.11.0

## 6.10.0

## 6.9.0

## 6.8.1

## 6.8.0

## 6.6.0

## 6.5.0

## 6.4.2

## 6.4.1

## 6.4.0

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

### Patch Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Refine models and types.

* [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

- [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

* [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

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
