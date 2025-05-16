---
'@commercetools/composable-commerce-test-data': minor
---

Added two new sub-models to the Cart one:

- `DiscountOnTotalPrice`
- `DiscountedTotalPricePortion`

You can use them like this:

```ts
import {
  DiscountOnTotalPriceGraphql,
  DiscountedTotalPricePortionGraphql,
} from '@commercetools/composable-commerce-test-data/cart';

const discountOnTotalPriceModel = DiscountOnTotalPriceGraphql.random().build();
const discountedTotalPricePortionModel =
  DiscountedTotalPricePortionGraphql.random().build();
```
