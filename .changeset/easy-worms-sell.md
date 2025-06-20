---
'@commercetools/composable-commerce-test-data': minor
---

We're migrating the model `TrackingData` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the migrated model could be used:

```ts
import { TrackingDataGraphql } from '@commercetools/composable-commerce-test-data/order';

const model = TrackingDataGraphql.random().build();
```
