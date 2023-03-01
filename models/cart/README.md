# @commercetools-test-data/cart

This package provides the data model for the commercetools platform `Cart` type

https://docs.commercetools.com/api/projects/carts#cart

# Install

```bash
$ yarn add -D @commercetools-test-data/cart
```

# Usage

```ts
import type { TCart, TCartDraft } from '@commercetools-test-data/cart';
import * as Cart from '@commercetools-test-data/cart';

const cart = Cart.random().build<TCart>();
const cartDraft = Cart.CartDraft.random().build<TCartDraft>();
```
