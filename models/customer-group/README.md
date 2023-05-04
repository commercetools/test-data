# @commercetools-test-data/customer-group

This package provides the data model for the commercetools platform `CustomerGroup` type

https://docs.commercetools.com/api/projects/customerGroups

# Install

```bash
$ pnpm add -D @commercetools-test-data/customer-group
```

# Usage

```ts
import type {
  TCustomerGroup,
  TCustomerGroupDraft,
} from '@commercetools-test-data/customer-group';
import * as CustomerGroup from '@commercetools-test-data/customer-group';

const customerGroup = CustomerGroup.random().build<TCustomerGroup>();
const customerGroupDraft =
  CustomerGroupDraft.random().build<TCustomerGroupDraft>();
```
