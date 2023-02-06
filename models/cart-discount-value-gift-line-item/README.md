# @commercetools-test-data/cart-discount-value-gift-line-item

This package provides the data model for the commercetools platform `CartDiscountValueGiftLineItem` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluegiftlineitem

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-value-gift-line-item
```

# Usage

```ts
import type {
  TCartDiscountValueGiftLineItem,
  TCartDiscountValueGiftLineItemDraft,
} from '@commercetools-test-data/cart-discount-value-gift-line-item';
import * as CartDiscountValueGiftLineItem from '@commercetools-test-data/cart-discount-value-gift-line-item';

const cartDiscountValueGiftLineItem =
  CartDiscountValueGiftLineItem.random().build<TCartDiscountValueGiftLineItem>();
const cartDiscountValueGiftLineItemDraft =
  CartDiscountValueGiftLineItem.CartDiscountValueGiftLineItemDraft.random().build<TCartDiscountValueGiftLineItemDraft>();
```
