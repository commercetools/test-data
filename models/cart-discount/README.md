# @commercetools-test-data/cart-discount

This package provides the data model for the commercetools platform `CartDiscount` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscount

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount
```

# Usage

```ts
import type {
  TCartDiscount,
  TCartDiscountDraft,
} from '@commercetools-test-data/cart-discount';
import * as CartDiscount from '@commercetools-test-data/cart-discount';

const cartDiscount =
  CartDiscount.random().build<TCartDiscount>();
const cartDiscountDraft =
  CartDiscount.CartDiscountDraft.random().build<TCartDiscountDraft>();
```
