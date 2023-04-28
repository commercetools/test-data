# @commercetools-test-data/cart-discount

This package provides the data models for the commercetools platform `CartDiscount` representations.

https://docs.commercetools.com/api/projects/cartDiscounts#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/cart-discount
```

# Usage

- [@commercetools-test-data/cart-discount](#commercetools-test-datacart-discount)
- [Install](#install)
- [Usage](#usage)
  - [`CartDiscount`](#cartdiscount)
  - [`CartDiscountLineItemsTarget`](#cartdiscountlineitemstarget)
  - [`CartDiscountMultiBuyLineItems`](#cartdiscountmultibuylineitems)
  - [`CartDiscountShippingCost`](#cartdiscountshippingcost)
  - [`CartDiscountValueAbsolute`](#cartdiscountvalueabsolute)
  - [`CartDiscountValueFixed`](#cartdiscountvaluefixed)
  - [`CartDiscountValueGiftLineItem`](#cartdiscountvaluegiftlineitem)
  - [`CartDiscountValueRelative`](#cartdiscountvaluerelative)

## `CartDiscount`

```ts
import {
  CartDiscount,
  CartDiscountDraft,
  type TCartDiscount,
  type TCartDiscountDraft,
} from '@commercetools-test-data/cart-discount';

const cartDiscount = CartDiscount.random().build<TCartDiscount>();
const cartDiscountDraft =
  CartDiscountDraft.random().build<TCartDiscountDraft>();
```

## `CartDiscountLineItemsTarget`

```ts
import {
  CartDiscountLineItemsTarget,
  CartDiscountLineItemsTargetDraft,
  type TCartDiscountLineItemsTarget,
  type TCartDiscountLineItemsTargetDraft,
} from '@commercetools-test-data/cart-discount';

const target =
  CartDiscountLineItemsTarget.random().build<TCartDiscountLineItemsTarget>();
const targetDraft =
  CartDiscountLineItemsTargetDraft.random().build<TCartDiscountLineItemsTargetDraft>();
```

## `CartDiscountMultiBuyLineItems`

```ts
import {
  CartDiscountMultiBuyLineItems,
  CartDiscountMultiBuyLineItemsDraft,
  type TCartDiscountMultiBuyLineItems,
  type TCartDiscountMultiBuyLineItemsDraft,
} from '@commercetools-test-data/cart-discount';

const target =
  CartDiscountMultiBuyLineItems.random().build<TCartDiscountMultiBuyLineItems>();
const targetDraft =
  CartDiscountMultiBuyLineItemsDraft.random().build<TCartDiscountMultiBuyLineItemsDraft>();
```

## `CartDiscountShippingCost`

```ts
import {
  CartDiscountShippingCost,
  CartDiscountShippingCostDraft,
  type TCartDiscountShippingCost,
  type TCartDiscountShippingCostDraft,
} from '@commercetools-test-data/cart-discount';

const target =
  CartDiscountShippingCost.random().build<TCartDiscountShippingCost>();
const targetDraft =
  CartDiscountShippingCostDraft.random().build<TCartDiscountShippingCostDraft>();
```

## `CartDiscountValueAbsolute`

```ts
import {
  CartDiscountValueAbsolute,
  CartDiscountValueAbsoluteDraft,
  type TCartDiscountValueAbsolute,
  type TCartDiscountValueAbsoluteDraft,
} from '@commercetools-test-data/cart-discount';

const cartDiscountValueAbsolute =
  CartDiscountValueAbsolute.random().build<TCartDiscountValueAbsolute>();
const cartDiscountValueAbsoluteDraft =
  CartDiscountValueAbsoluteDraft.random().build<TCartDiscountValueAbsoluteDraft>();
```

## `CartDiscountValueFixed`

```ts
import {
  CartDiscountValueFixed,
  CartDiscountValueFixedDraft,
  type TCartDiscountValueFixed,
  type TCartDiscountValueFixedDraft,
} from '@commercetools-test-data/cart-discount;

const cartDiscountValueFixed =
  CartDiscountValueFixed.random().build<TCartDiscountValueFixed>();
const cartDiscountValueFixedDraft =
  CartDiscountValueFixedDraft.random().build<TCartDiscountValueFixedDraft>();

```

## `CartDiscountValueGiftLineItem`

```ts
import {
  CartDiscountValueGiftLineItem,
  CartDiscountValueGiftLineItemDraft,
  type TCartDiscountValueGiftLineItem,
  type TCartDiscountValueGiftLineItemDraft,
} from '@commercetools-test-data/cart-discount';

const cartDiscountValueGiftLineItem =
  CartDiscountValueGiftLineItem.random().build<TCartDiscountValueGiftLineItem>();
const cartDiscountValueGiftLineItemDraft =
  CartDiscountValueGiftLineItemDraft.random().build<TCartDiscountValueGiftLineItemDraft>();
```

## `CartDiscountValueRelative`

```ts
import {
  CartDiscountValueRelative,
  CartDiscountValueRelativeDraft,
  type TCartDiscountValueRelative,
  type TCartDiscountValueRelativeDraft,
} from '@commercetools-test-data/cart-discount';

const cartDiscountValueRelative =
  CartDiscountValueRelative.random().build<TCartDiscountValueRelative>();
const cartDiscountValueRelativeDraft =
  CartDiscountValueRelativeDraft.random().build<TCartDiscountValueRelativeDraft>();
```
