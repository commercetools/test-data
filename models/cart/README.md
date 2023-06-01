# @commercetools-test-data/cart

This package provides the data model for the commercetools platform `Cart` representations

https://docs.commercetools.com/api/projects/carts#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/cart
```

# Usage

## Cart

```ts
import {
  Cart,
  CartDraft,
  type TCart,
  type TCartDraft,
} from '@commercetools-test-data/cart';

const cart = Cart.random().build<TCart>();
const cartDraft = CartDraft.random().build<TCartDraft>();

// Presets
const emptyCartDraft = CartDraft.presets.empty().build<TCartDraft>();
```

## CustomLineItem

```ts
import {
  CustomLineItem,
  CustomLineItemDraft,
  type TCustomLineItem,
  type TCustomLineItemDraft,
} from '@commercetools-test-data/cart';

const customLineItem = CustomLineItem.random().build<TCustomLineItem>();
const customLineItemDraft =
  CustomLineItemDraft.random().build<TCustomLineItemDraft>();
```
