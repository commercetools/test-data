---
'@commercetools/composable-commerce-test-data': minor
---

We're migrating the model `ParcelMeasurements` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the migrated model could be used:

```ts
import { ParcelMeasurementsGraphql } from '@commercetools/composable-commerce-test-data/order';

const model = ParcelMeasurementsGraphql.random().build();
```
