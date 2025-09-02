---
"@commercetools/composable-commerce-test-data": minor
---

We're introducing a new model named `BusinessUnitsListView`, which can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

There's only a GraphQL version for this model as it only exists in the MC Settings service which only exposes a GraphQL API.

This is how the new model could be used:

```
import {
  BusinessUnitsListViewGraphql,
} from '@commercetools/composable-commerce-test-data/my-view';
const BusinessUnitsListView = BusinessUnitsListViewGraphql.random().build();
```
