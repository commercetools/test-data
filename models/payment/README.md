# @commercetools-test-data/payment

This package provides the data models for the commercetools platform `Payment` representations

https://docs.commercetools.com/api/projects/payments#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/payment
```

# Usage

## Payment

## PaymentMethodInfo

```ts
import {
  PaymentMethodInfo,
  type TPaymentMethodInfo,
} from '@commercetools-test-data/payment';

const paymentInfoMethod =
  PaymentInfoMethod.random().build<TPaymentInfoMethod>();
```

## PaymentStatus

```ts
import {
  PaymentStatus,
  type TPaymentStatus,
} from '@commercetools-test-data/payment';

const paymentStatus = PaymentStatus.random().build<TPaymentStatus>();
```
