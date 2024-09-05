# @commercetools-test-data/customers-search-list-my-view

This package provides the data model for the commercetools internal API `CustomersSearchListMyView` type

https://github.com/commercetools/merchant-center-services/blob/main/packages/settings/lib/schemas/customers-search-list-my-view.graphql

# Install

```bash
$ pnpm add -D @commercetools-test-data/customers-search-list-my-view
```

# Usage

```ts
import type {
  CustomersSearchListMyView,
  type TCustomersSearchListMyViewGraphql,
} from '@commercetools-test-data/customers-search-list-my-view';

const customersSearchListMyView =
  CustomersSearchListMyView.random().buildGraphl<TCustomersSearchListMyViewGraphql>();
```
