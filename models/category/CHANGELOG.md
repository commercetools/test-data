# @commercetools-test-data/category

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
