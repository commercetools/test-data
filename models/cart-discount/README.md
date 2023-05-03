# @commercetools-test-data/cart-discount

This package provides the data models for the commercetools platform `CartDiscount` representations.

https://docs.commercetools.com/api/projects/cartDiscounts#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/cart-discount
```

- [CartDiscount](#cartdiscount)<br>
- [CartDiscountLineItemsTarget](#cartdiscountlineitemstarget)<br>
- [CartDiscountMultiBuyLineItemsTarget](#cartdiscountmultibuylineitemstarget)<br>
- [CartDiscountShippingCostTarget](#cartdiscountshippingcosttarget)<br>
- [CartDiscountValueAbsolute](#cartdiscountvalueabsolute)<br>
- [CartDiscountValueFixed](#cartdiscountvaluefixed)<br>
- [CartDiscountValueGiftLineItem](#cartdiscountvaluegiftlineitem)<br>
- [CartDiscountValueRelative](#cartdiscountvaluerelative)<br>

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

## `CartDiscountMultiBuyLineItemsTarget`

```ts
import {
  CartDiscountMultiBuyLineItemsTarget,
  CartDiscountMultiBuyLineItemsTargetDraft,
  type TCartDiscountMultiBuyLineItemsTarget,
  type TCartDiscountMultiBuyLineItemsTargetDraft,
} from '@commercetools-test-data/cart-discount';

const target =
  CartDiscountMultiBuyLineItemsTarget.random().build<TCartDiscountMultiBuyLineItemsTarget>();
const targetDraft =
  CartDiscountMultiBuyLineItemsTargetDraft.random().build<TCartDiscountMultiBuyLineItemsTargetDraft>();
```

## `CartDiscountShippingCostTarget`

```ts
import {
  CartDiscountShippingCostTarget,
  CartDiscountShippingCostTargetDraft,
  type TCartDiscountShippingCostTarget,
  type TCartDiscountShippingCostTargetDraft,
} from '@commercetools-test-data/cart-discount';

const target =
  CartDiscountShippingCostTarget.random().build<TCartDiscountShippingCostTarget>();
const targetDraft =
  CartDiscountShippingCostTargetDraft.random().build<TCartDiscountShippingCostTargetDraft>();
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
} from '@commercetools-test-data/cart-discount';

const cartDiscountValueFixed =
  CartDiscountValueFixed.random().build<TCartDiscountValueFixed>();
const cartDiscountValueFixedDraft = CartDiscountValueFixedDraft.random().buil;
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
