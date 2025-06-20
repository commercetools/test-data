---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `DeliveryItemGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the new models could be used:

```ts
import { DeliveryItemGraphql } from '@commercetools/composable-commerce-test-data/order';

const model = DeliveryItemGraphql.random().build();
```
