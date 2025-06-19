---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new models named `RecurringOrder` and `Counter` that can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

Please note that we have added only `Graphql` models and `REST` models will be added once `Recurring Order` is available in Public Beta.

This is how the new model could be used:

```ts
import {
  RecurringOrderGraphql,
  RecurringOrderDraftGraphql,
  CounterGraphql,
  CounterDraftGraphql,
} from '@commercetools/composable-commerce-test-data/recurring-order';

const recurringOrder = RecurringOrderGraphql.random().build();
const recurringOrderDraft = RecurringOrderDraftGraphql.random().build();

const counter = CounterGraphql.random().build();
const counterDraft = CounterDraftGraphql.random().build();
```
