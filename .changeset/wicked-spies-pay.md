---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing new models named, `standard-schedule-draft`, `standard-schedule-input` and `recurrence-policy-schedule-input`. Also added rest models for `standard-schedule`, `counter`, `counterDraft`, `recurrence-policy`, `recurrence-policy-draft`, `recurring-order` and ` recurring-order-draft`. All these modules can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

This is how new models could be used:

```ts
import {
  StandardScheduleDraftRest,
  StandardScheduleInputGraphql,
  RecurrencePolicyScheduleInputGraphql,
  CounterRest,
  CounterDraftRest,
  RecurrencePolicyRest,
  RecurrencePolicyDraftRest,
  RecurringOrderRest,
  RecurringOrderDraftRest,
} from '@commercetools/composable-commerce-test-data/cart';

// graphql models
const graphqlStandardScheduleInput =
  StandardScheduleInputGraphql.random().build();
const graphqlRecurrencePolicyScheduleInput =
  RecurrencePolicyScheduleInputGraphql.random().build();

// rest models
const restCounter = CounterRest.random().build();
const restCounterDraft = CounterDraftRest.random().build();
const restStandardScheduleDraft = StandardScheduleDraftRest.random().build();
const restRecurrencePolicyDraft = RecurrencePolicyDraftRest.random().build();
const restRecurrencePolicy = RecurrencePolicyRest.random().build();
const restRecurringOrderDraft = RecurringOrderDraftRest.random().build();
const restReccuringOrder = RecurringOrderRest.random().build();
```
