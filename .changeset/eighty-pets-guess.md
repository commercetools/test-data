---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing new models named, `line-item-recurrence-info` and `line-item-recurrence-info-draft`, `custom-line-item-recurrence-info` and `custom-line-item-recurrence-info-draft`. All these models can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

This is how new models could be used:

```ts
import {
  LineItemRecurrenceInfoRest,
  LineItemRecurrenceInfoGraphql,
  LineItemRecurrenceInfoDraftRest,
  LineItemRecurrenceInfoDraftGraphql,
  CustomLineItemRecurrenceInfoRest,
  CustomLineItemRecurrenceInfoGraphql,
  CustomLineItemRecurrenceInfoDraftRest,
  CustomLineItemRecurrenceInfoDraftGraphql,
} from '@commercetools/composable-commerce-test-data/cart';

// Line item recurrence models
const lineItemRecurrenceInfoRest = LineItemRecurrenceInfoRest.random().build();
const lineItemRecurrenceInfoGraphql =
  LineItemRecurrenceInfoGraphql.random().build();
const lineItemRecurrenceInfoDraftRest =
  LineItemRecurrenceInfoDraftRest.random().build();
const lineItemRecurrenceInfoDraftGraphql =
  LineItemRecurrenceInfoDraftGraphql.random().build();

// Custom line item recurrence models
const customLineItemRecurrenceInfoRest =
  CustomLineItemRecurrenceInfoRest.random().build();
const customLineItemRecurrenceInfoGraphql =
  CustomLineItemRecurrenceInfoGraphql.random().build();
const customLineItemRecurrenceInfoDraftRest =
  CustomLineItemRecurrenceInfoDraftRest.random().build();
const customLineItemRecurrenceInfoDraftGraphql =
  CustomLineItemRecurrenceInfoDraftGraphql.random().build();
```
