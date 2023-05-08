# @commercetools-test-data/cart

This package provides the data model for the commercetools platform `Cart` type

https://docs.commercetools.com/api/projects/carts#cart

# Install

```bash
$ pnpm add -D @commercetools-test-data/cart
```

# Usage

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
