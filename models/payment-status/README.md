# @commercetools-test-data/payment-status

This package provides the data model for the commercetools platform `PaymentStatus` type

https://docs.commercetools.com/api/types#centprecisionmoney

# Install

```bash
$ yarn add -D @commercetools-test-data/payment-status
```

# Usage

```ts
import type {
  TPaymentStatus,
  TPaymentStatusDraft,
} from '@commercetools-test-data/payment-status';
import * as PaymentStatus from '@commercetools-test-data/payment-status';

const paymentStatus = PaymentStatus.random().build<TPaymentStatus>();
const paymentStatusDraft =
  PaymentStatus.PaymentStatusDraft.random().build<TPaymentStatusDraft>();
```
