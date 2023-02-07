# @commercetools-test-data/cart-discount-value-relative

This package provides the data model for the commercetools platform `CartDiscountValueRelative` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluerelative

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-value-relative
```

# Usage

```ts
import type {
  TCartDiscountValueRelative,
  TCartDiscountValueRelativeDraft,
} from '@commercetools-test-data/cart-discount-value-relative';
import * as CartDiscountValueRelative from '@commercetools-test-data/cart-discount-value-relative';

const cartDiscountValueRelative =
  CartDiscountValueRelative.random().build<TCartDiscountValueRelative>();
const cartDiscountValueRelativeDraft =
  CartDiscountValueRelative.CartDiscountValueRelativeDraft.random().build<TCartDiscountValueRelativeDraft>();
```
