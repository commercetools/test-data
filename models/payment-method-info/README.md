# @commercetools-test-data/payment-method-info

This package provides the data model for the commercetools platform `PaymentMethodInfo` type

https://docs.commercetools.com/api/projects/payments#paymentmethodinfo

# Install

```bash
$ yarn add -D @commercetools-test-data/payment-method-info
```

# Usage

```ts
import type { TPaymentMethodInfo } from '@commercetools-test-data/payment-method-info';
import * as PaymentMethodInfo from '@commercetools-test-data/payment-method-info';

const paymentMethodInfo =
  PaymentMethodInfo.random().build<TPaymentMethodInfo>();
```
