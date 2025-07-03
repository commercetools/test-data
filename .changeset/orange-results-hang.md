---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new test data model named `ItemState` which can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

This is how it can be used:

```ts
import {
  ItemStateGraphql,
  ItemStateRest,
} from '@commercetools/composable-commerce-test-data/cart';

const graphqlModel = ItemStateGraphql.random().build();
const restModel = ItemStateRest.random().build();
```
