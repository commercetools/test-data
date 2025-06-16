---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new models named `RecurreningOrder` and `Counter` that can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

This is how the new model could be used:

```ts
import {
  RecurreningOrderGraphql,
  RecurreningOrderDraftGraphql,
  CounterGraphql,
  CounterDraftGraphql,
} from '@commercetools/composable-commerce-test-data/recurring-order';

const recurringOrder = RecurreningOrderGraphql.random().build();
const recurringOrderDraft = RecurreningOrderDraftGraphql.random().build();

const counter = CounterGraphql.random().build();
const counterDraft = CounterDraftGraphql.random().build();
```
