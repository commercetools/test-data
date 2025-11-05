---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `PaymentStatus` and `PaymentStatusDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the `PaymentStatus` and `PaymentStatusDraft` models are now deprecated and you're expected to start using the `PaymentStatusGraphql` or `PaymentStatusDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  PaymentStatusGraphql,
  PaymentStatusRest,
  PaymentStatusDraftGraphql,
  PaymentStatusDraftRest,
} from '@commercetools/composable-commerce-test-data/payment';

const graphqlPaymentStatus = PaymentStatusGraphql.random().build();
const restPaymentStatus = PaymentStatusRest.random().build();

const graphqlPaymentStatusDraft = PaymentStatusDraftGraphql.random().build();
const restPaymentStatusDraft = PaymentStatusDraftRest.random().build();
```
