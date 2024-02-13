# @commercetools-test-data/order

This package provides the data model for the commercetools platform `Order` type

https://docs.commercetools.com/api/projects/orders#order

# Install

```bash
$ pnpm add -D @commercetools-test-data/order
```

# Usage

```ts
import {
  Order,
  OrderFromCartDraft,
  OrderFromQuoteDraft,
  type TOrder,
  type TOrderFromCartDraft,
  type TOrderFromQuoteDraft,
} from '@commercetools-test-data/order';

const order = Order.random().build<TOrder>();
const orderFromCartDraft =
  OrderFromCartDraft.random().build<TOrderFromCartDraft>();
const orderFromQuoteDraft =
  OrderFromQuoteDraft.random().build<TOrderFromQuoteDraft>();
```
