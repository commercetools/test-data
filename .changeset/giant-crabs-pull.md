---
'@commercetools-test-data/category': patch
'@commercetools-test-data/utils': patch
---

Add `models/category`, `utils/`

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
