---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing new models named, `day-of-month-schedule`, `day-of-month-schedule-draft`, and `day-of-month-schedule-input`. All these modules can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

This is how new models could be used:

```ts
import {
    DayOfMonthScheuleRest,
    DayOfMonthScheduleGraphql,
    DayOfMonthScheduleDraft,
    DayOfMonthScheuleInput
} from '@commercetools/composable-commerce-test-data/recurring-order';

// rest models
const dayOfMonthScheduleDraft = DayOfMonthScheduleDraft.random().build();,
const dayOfMonthScheuleRest = DayOfMonthScheuleRest.random().build();

// graphql models
const dayOfMonthScheuleInput = DayOfMonthScheuleInput.random().build();
const dayOfMonthScheduleGraphql = DayOfMonthScheduleGraphql.random().build();
```
