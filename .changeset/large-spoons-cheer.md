---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `PaymentMethodInfo` and `PaymentMethodInfoDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the `PaymentMethodInfo` and `PaymentMethodInfoDraft` models are now deprecated and you're expected to start using the `PaymentMethodInfoGraphql` or `PaymentMethodInfoDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  PaymentMethodInfoGraphql,
  PaymentMethodInfoRest,
  PaymentMethodInfoDraftGraphql,
  PaymentMethodInfoDraftRest,
} from '@commercetools/composable-commerce-test-data/payment';

const graphqlPaymentMethodInfo = PaymentMethodInfoGraphql.random().build();
const restPaymentMethodInfo = PaymentMethodInfoRest.random().build();

const graphqlPaymentMethodInfoDraft =
  PaymentMethodInfoDraftGraphql.random().build();
const restPaymentMethodInfoDraft = PaymentMethodInfoDraftRest.random().build();
```
