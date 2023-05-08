# @commercetools-test-data/customer

This package provides the data model for the commercetools platform `Customer` type

https://docs.commercetools.com/api/projects/customers

# Install

```bash
$ pnpm add -D @commercetools-test-data/customer
```

# Usage

```ts
import {
  Customer,
  CustomerDraft,
  type TCustomer,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';

const customer = Customer.random().build<TCustomer>();
const customerDraft = CustomerDraft.random().build<TCustomerDraft>();

// Presets
const emptyCustomerDraft = CustomerDraft.presets
  .empty()
  .build<TCustomerDraft>();
```
