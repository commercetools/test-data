---
'@commercetools/composable-commerce-test-data': patch
---

We're introducing a new model named `DiscountCodeInfo` that can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

This is how the new model could be used:

```ts
import {
  DiscountCodeInfoRest,
  DiscountCodeInfoGraphql,
} from '@commercetools/composable-commerce-test-data/cart';

const restDiscountCodeInfo = DiscountCodeInfoRest.random().build();

const graphqlDiscountCodeInfo = DiscountCodeInfoGraphql.random().build();
```
