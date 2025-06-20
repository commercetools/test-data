---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `TrackingDataGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the new models could be used:

```ts
import { TrackingDataGraphql } from '@commercetools/composable-commerce-test-data/order';

const model = TrackingDataGraphql.random().build();
```
