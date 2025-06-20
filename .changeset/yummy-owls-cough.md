---
'@commercetools/composable-commerce-test-data': minor
---

We're migrating the model `DeliveryItem` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the migrated model could be used:

```ts
import { DeliveryItemGraphql } from '@commercetools/composable-commerce-test-data/order';

const model = DeliveryItemGraphql.random().build();
```
