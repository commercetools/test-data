# @commercetools-test-data/category

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
