---
'@commercetools/composable-commerce-test-data': minor
---

We are introducing a new model named `PaymentInfo` that can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

This is how the new model could be used:

```ts
import {
  PaymentInfoRest,
  PaymentInfoGraphql,
} from '@commercetools/composable-commerce-test-data/order';

const restPaymentInfo = PaymentInfoRest.random().build();

const graphqlPaymentInfo = PaymentInfoGraphql.random().build();
```
