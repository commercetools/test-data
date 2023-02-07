# @commercetools-test-data/cart-discount-value-absolute

This package provides the data model for the commercetools platform `CartDiscountValueAbsolute` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvalueabsolute

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-value-absolute
```

# Usage

```ts
import type {
  TCartDiscountValueAbsolute,
  TCartDiscountValueAbsoluteDraft,
} from '@commercetools-test-data/cart-discount-value-absolute';
import * as CartDiscountValueAbsolute from '@commercetools-test-data/cart-discount-value-absolute';

const cartDiscountValueAbsolute =
  CartDiscountValueAbsolute.random().build<TCartDiscountValueAbsolute>();
const cartDiscountValueAbsoluteDraft =
  CartDiscountValueAbsolute.CartDiscountValueAbsoluteDraft.random().build<TCartDiscountValueAbsoluteDraft>();
```
