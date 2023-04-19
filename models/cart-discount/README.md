# @commercetools-test-data/cart-discount

This package provides the data model for the commercetools platform `CartDiscount` type

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscount

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount
```

# Usage

## `CartDiscount`

```ts
import type {
  TCartDiscount,
  TCartDiscountDraft,
} from '@commercetools-test-data/cart-discount';
import * as CartDiscount from '@commercetools-test-data/cart-discount';

const cartDiscount = CartDiscount.random().build<TCartDiscount>();
const cartDiscountDraft =
  CartDiscount.CartDiscountDraft.random().build<TCartDiscountDraft>();
```

## `CartDiscountLineItemsTarget`

```ts
import {
  CartDiscountLineItemsTarget,
  CartDiscountLineItemsTargetDraft,
  type TCartDiscountLineItemsTarget,
  type TCartDiscountLineItemsTargetDraft,
} from '@commercetools-test-data/cart-discount-target';

const target =
  CartDiscountLineItemsTarget.random().build<TCartDiscountLineItemsTarget>();
const targetDraft =
  CartDiscountLineItemsTargetDraft.random().build<TCartDiscountLineItemsTargetDraft>();
```

## `CartDiscountShippingCost`

```ts
import {
  CartDiscountShippingCost,
  CartDiscountShippingCostDraft,
  type TCartDiscountShippingCost,
  type TCartDiscountShippingCostDraft,
} from '@commercetools-test-data/cart-discount-target';

const target =
  CartDiscountShippingCost.random().build<TCartDiscountShippingCost>();
const targetDraft =
  CartDiscountShippingCostDraft.random().build<TCartDiscountShippingCostDraft>();
```

## `CartDiscountMultiBuyLineItems`

```ts
import {
  CartDiscountMultiBuyLineItems,
  CartDiscountMultiBuyLineItemsDraft,
  type TCartDiscountMultiBuyLineItems,
  type TCartDiscountMultiBuyLineItemsDraft,
} from '@commercetools-test-data/cart-discount-target';

const target =
  CartDiscountMultiBuyLineItems.random().build<TCartDiscountMultiBuyLineItems>();
const targetDraft =
  CartDiscountMultiBuyLineItemsDraft.random().build<TCartDiscountMultiBuyLineItemsDraft>();
```
