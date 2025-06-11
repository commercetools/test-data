---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new models named `RecurrencePolicy` and `StandardSchedule` that can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

This is how the new model could be used:

```ts
import {
  RecurrencePolicyDraftGraphql,
  RecurrencePolicyGraphql,
  StandardScheduleGraphql,
} from '@commercetools/composable-commerce-test-data/recurring-order';

const recurrencePolicy = RecurrencePolicyDraftGraphql.random().build();
const recurrencePolicyDraft = RecurrencePolicyDraftGraphql.random().build();

const standardSchedule = StandardScheduleGraphql.random().build();
```
