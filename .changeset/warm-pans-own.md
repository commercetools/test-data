---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing two new models named `DiscountGroup` and `DiscountGroupDraft` that can be consumed from the `@commercetools/composable-commerce-test-data/discount-group` entry point.

There's a REST (Composable commerce HTTP API) and a GraphQL (Composable Commerce GraphQL API) version for these two models.

This is how the new models could be used:

```ts
import {
  DiscountGroupGraphql,
  DiscountGroupRest,
  DiscountGroupDraftGraphql,
  DiscountGroupDraftRest,
} from '@commercetools/composable-commerce-test-data/discount-group';

const discountGroupGraphql = DiscountGroupGraphql.random().build();
const discountGroupRest = DiscountGroupRest.random().build();
const discountGroupDraftGraphql = DiscountGroupDraftGraphql.random().build();
const discountGroupDraftRest = DiscountGroupDraftRest.random().build();
```
