# @commercetools-test-data/cart-discount-target

This package provides the data model for the commercetools platform cart discount target types

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscounttarget

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-target
```

# Usage

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
