---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `OrdersListListView` can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

There's only a GraphQL version for this model as it only exists in the MC Settings services which only expose a GraphQL API.

This is how the new model could be used:

```
import {
  OrdersListViewGraphql,
} from '@commercetools/composable-commerce-test-data/my-view';
const ordersListView = OrdersListViewGraphql.random().build();
```
