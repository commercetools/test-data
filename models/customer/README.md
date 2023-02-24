# @commercetools-test-data/customer

This package provides the data model for the commercetools platform `Customer` type

https://docs.commercetools.com/api/projects/customers

# Install

```bash
$ yarn add -D @commercetools-test-data/customer
```

# Usage

```ts
import type {
  TCustomer,
  TCustomerDraft,
} from '@commercetools-test-data/customer';
import * as Customer from '@commercetools-test-data/customer';

const customer = Customer.random().build<TCustomer>();
const customerDraft = Customer.CustomerDraft.random().build<TCustomerDraft>();
```
