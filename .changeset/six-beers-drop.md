---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new test data model named `CartDiscountTarget` which can be consumed from the `@commercetools/composable-commerce-test-data/cart-discount` entry point.

This is how it can be used:

```ts
import {
  CartDiscountTargetGraphql,
  CartDiscountTargetRest,
} from '@commercetools/composable-commerce-test-data/cart-discount';

const graphqlModel = CartDiscountTargetGraphql.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.lineItems)
  .build();

const restModel = CartDiscountTargetRest.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.shipping)
  .build();
```
