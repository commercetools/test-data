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

## LineItem

```ts
import {
  LineItem,
  LineItemDraft,
  type TLineItem,
  type TLineItemDraft,
} from '@commercetools-test-data/cart';

const lineItem = LineItem.random().build<TLineItem>();
const lineItemDraft = LineItemDraft.random().build<TLineItemDraft>();

// Presets
const emptyLineItemDraft = LineItemDraft.presets
  .empty()
  .build<TLineItemDraft>();
```

## TaxPortion

```ts
import {
  TaxPortionRest,
  TaxPortionDraftRest,
  TaxPortionGraphql,
  TaxPortionDraftGraphql,
} from '@commercetools-test-data/cart';

const restTaxPortion = TaxPortionRest.random().build();
const graphqlTaxPortion = TaxPortionGraphql.random().build();

const restTaxPortionDraft = TaxPortionDraftRest.random().build();
const graphqlTaxPortionDraft = TaxPortionDraftGraphql.random().build();
```

## TaxedItemPrice

```ts
import {
  TaxedItemPriceRest,
  TaxedItemPriceGraphql,
} from '@commercetools-test-data/cart';

const restTaxedItemPrice = TaxedItemPriceRest.random().build();
const graphqlTaxedItemPrice = TaxedItemPriceGraphql.random().build();
```

## ShippingInfo

```ts
import {
  ShippingInfoRest,
  ShippingInfoGraphql,
} from '@commercetools-test-data/cart';

const restShippingInfo = ShippingInfoRest.random().build();
const graphqlShippingInfo = ShippingInfoGraphql.random().build();
```
