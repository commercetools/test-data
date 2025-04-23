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
  CustomLineItemRest,
  CustomLineItemDraftRest,
  CustomLineItemGraphql,
  CustomLineItemDraftGraphql,
} from '@commercetools-test-data/cart';

const restCustomLineItem = CustomLineItemRest.random().build();
const graphqlCustomLineItem = CustomLineItemGraphql.random().build();

const restCustomLineItemDraft = CustomLineItemDraftRest.random().build();
const graphqlCustomLineItemDraft = CustomLineItemDraftGraphql.random().build();
```

## LineItem

```ts
import {
  LineItemRest,
  LineItemDraftRest
  LineItemGraphql,
  LineItemDraftGraphql,
} from '@commercetools-test-data/cart';

const restLineItem = LineItemRest.random().build();
const graphqlLineItem = LineItemGraphql.random().build();

const restLineItemDraft = LineItemDraftRest.random().build();
const graphqlLineItemDraft = LineItemDraftGraphql.random().build()

// Presets
const restEmptyLineItemDraft = LineItemDraftRest.presets.empty().build();
const graphqlEmptyLineItemDraft = LineItemDraftGraphql.presets.empty().build()
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
