---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing two new test data models named `MethodTaxRate` and `MethodTaxedPrice` which can be consumed from the @commercetools/composable-commerce-test-data/cart entry point.

This is how it can be used:

```ts
import {
  MethodTaxRateGraphql,
  MethodTaxRateRest,
  MethodTaxedPriceGraphql,
  MethodTaxedPriceRest,
} from '@commercetools/composable-commerce-test-data/cart';

const methodTaxRateGraphqlModel = MethodTaxRateGraphql.random().build();
const methodTaxRateRestModel = MethodTaxRateRest.random().build();

const methodTaxesPriceGraphqlModel = MethodTaxedPriceGraphql.random().build();
const methodTaxedPriceRestModel = MethodTaxedPriceRest.random().build();
```
