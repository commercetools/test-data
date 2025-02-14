# @commercetools-test-data/product-discount

This package provides the data models for the commercetools platform `ProductDiscount` type representations

https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-discount
```

- [ProductDiscount](#productdiscount)<br>
- [ProductDiscountValueAbsolute](#productdiscountvalueabsolute)<br>
- [ProductDiscountValueExternal](#productdiscountvalueexternal)<br>
- [ProductDiscountValueRelative](#productdiscountvaluerelative)<br>

# Usage

## `ProductDiscount`

```ts
import {
  ProductDiscount,
  ProductDiscountDraft,
  type TProductDiscount,
  type TProductDiscountDraft,
} from '@commercetools-test-data/product-discount';

const productDiscount = ProductDiscount.random().build<TProductDiscount>();

const productDiscountDraft =
  ProductDiscountDraft.random().build<TProductDiscountDraft>();
```

## `ProductDiscountValueAbsolute`

```ts
import {
  ProductDiscountValueAbsolute,
  ProductDiscountValueAbsoluteDraft
  type TProductDiscountValueAbsolute,
  type TProductDiscountValueAbsoluteDraft,
} from '@commercetools-test-data/product-discount';

const productDiscountValueAbsolute =
  ProductDiscountValueAbsolute.random().build<TProductDiscountValueAbsolute>();

const productDiscountValueAbsoluteDraft =
  ProductDiscountValueAbsoluteDraft.random().build<TProductDiscountValueAbsoluteDraft>();
```

## `ProductDiscountValueExternal`

```ts
import {
  ProductDiscountValueExternal,
  ProductDiscountValueExternalDraft,
  type TProductDiscountValueExternal,
  type TProductDiscountValueExternalDraft,
} from '@commercetools-test-data/product-discount';

const productDiscountValueExternal =
  ProductDiscountValueExternal.random().build<TProductDiscountValueExternal>();

const productDiscountValueExternalDraft =
  ProductDiscountValueExternalDraft.random().build<TProductDiscountValueExternalDraft>();
```

## `ProductDiscountValueRelative`

```ts
import {
  ProductDiscountValueRelative,
  ProductDiscountValueRelativeDraft,
  type TProductDiscountValueRelative,
  type TProductDiscountValueRelativeDraft,
} from '@commercetools-test-data/product-discount';

const productDiscountValueRelative =
  ProductDiscountValueRelative.random().build<TProductDiscountValueRelative>();

const productDiscountValueRelativeDraft =
  ProductDiscountValueRelativeDraft.random().build<TProductDiscountValueRelativeDraft>();
```

## `DiscountedPrice`

```ts
import {
  DiscountedPriceRest,
  DiscountedPriceGraphql,
  DiscountedPriceDraftRest,
  DiscountedPriceDraftGraphql,
  type TDiscountedPriceRest,
  type TDiscountedPriceGraphql,
  type TDiscountedPriceDraftRest,
  type TDiscountedPriceDraftGraphql,
} from '@commercetools-test-data/product-discount';

const DiscountedPriceRest = DiscountedPriceRest.random().build();
const DiscountedPriceGraphql = DiscountedPriceGraphql.random().build();
const DiscountedPriceDraftRest = DiscountedPriceDraftRest.random().build();
const DiscountedPriceDraftGraphql =
  DiscountedPriceDraftGraphql.random().build();
```
