---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new test data model named `SyncInfo` which can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

[Here](https://docs.commercetools.com/api/projects/orders#syncinfo) are the official docs for this resource.

This is how it can be used:

```ts
import {
  SyncInfoGraphql,
  SyncInfoRest,
} from '@commercetools/composable-commerce-test-data/order';

const graphqlModel = SyncInfoGraphql.random().build();
const restModel = SyncInfoRest.random().build();
```
