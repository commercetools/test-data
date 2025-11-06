---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Payment` and `PaymentDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the `Payment` and `PaymentDraft` models are now deprecated and you're expected to start using the `PaymentGraphql` or `PaymentDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  PaymentGraphql,
  PaymentRest,
  PaymentDraftGraphql,
  PaymentDraftRest,
} from '@commercetools/composable-commerce-test-data/payment';

const graphqlPayment = PaymentGraphql.random().build();
const restPayment = PaymentRest.random().build();

const graphqlPaymentDraft = PaymentDraftGraphql.random().build();
const restPaymentDraft = PaymentDraftRest.random().build();
```
