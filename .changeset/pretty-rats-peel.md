---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Image` model to the new implementation patterns.

This change does not have any impact on consumers, however the `Image` model is now deprecated and you're expected to start using the `ImageGraphql` or `ImageRest` models instead depending of the type of API you're mocking.

```ts
import {
  ImageGraphql,
  ImageRest,
} from '@commercetools/composable-commerce-test-data/tax-cateopry';

const graphqlImage = ImageGraphql.random().build();
const restImage = ImageRest.random().build();
```
