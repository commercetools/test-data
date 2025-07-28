---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Price` and `PriceDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the migrated models are now deprecated and you're expected to start using the `PriceGraphql` or `PriceRest` models instead depending of the type of API you're mocking.

You can use them like this:

```ts
import {
  PriceRest,
  PriceGraphql,
  PriceDraftRest,
  PriceDraftGraphql,
} from '@commercetools/composable-commerce-test-data/commons';

const restPrice = PriceRest.random().build();
const graphqlPrice = PriceGraphql.random().build();

const restPriceDraft = PriceDraftRest.random().build();
const graphqlPriceDraft = PriceDraftGraphql.random().build();
```
