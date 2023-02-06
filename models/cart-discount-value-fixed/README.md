# @commercetools-test-data/cart-discount-value-fixed

This package provides the data model for the commercetools platform `CartDiscountValueFixed` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixed

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-value-fixed
```

# Usage

```ts
import type {
  TCartDiscountValueFixed,
  TCartDiscountValueFixedDraft,
} from '@commercetools-test-data/cart-discount-value-fixed';
import * as CartDiscountValueFixed from '@commercetools-test-data/cart-discount-value-fixed';

const cartDiscountValueFixed =
  CartDiscountValueFixed.random().build<TCartDiscountValueFixed>();
const cartDiscountValueFixedDraft =
  CartDiscountValueFixed.CartDiscountValueFixedDraft.random().build<TCartDiscountValueFixedDraft>();
```
