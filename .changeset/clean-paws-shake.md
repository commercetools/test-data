---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `PimSearchListView` which is the first one associated with the "My views" Merchant Center functionality so we've created a new package entry point (`@commercetools/composable-commerce-test-data/my-view`) we can use to aggregate all the other use cases we will need in the future.

This is how the new model could be used:

```ts
import { PimSearchListViewGraphql } from '@commercetools/composable-commerce-test-data/my-view';

const model = PimSearchListViewGraphql.random().build();
```
