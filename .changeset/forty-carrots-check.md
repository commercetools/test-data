---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `ProductVariantAvailability` that can be consumed from the `@commercetools/composable-commerce-test-data/product` entry point.

This is how the new model could be used:

```ts
import { ProductVariantAvailabilityGraphql } from '@commercetools/composable-commerce-test-data/product';

const model = ProductVariantAvailabilityGraphql.random().build();
```
