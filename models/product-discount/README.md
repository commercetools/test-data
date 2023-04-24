# @commercetools-test-data/product-discount

This package provides the data models for the commercetools platform `ProductDiscount` type

https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

# Install

```bash
$ yarn add -D @commercetools-test-data/product-discount
```

# Usage

## `ProductDiscount`

```ts
import type {
  TProductDiscount,
  TProductDiscountDraft,
} from '@commercetools-test-data/product-discount';
import { ProductDiscount } from '@commercetools-test-data/product-discount';

const productDiscount = ProductDiscount.random().build<TProductDiscount>();

const productDiscountDraft =
  ProductDiscount.ProductDiscountDraft.random().build<TProductDiscountDraft>();
```

## `ProductDiscountValueAbsolute`

```ts
import type {
  TProductDiscountValueAbsolute,
  TProductDiscountValueAbsoluteDraft,
} from '@commercetools-test-data/product-discount';
import { ProductDiscountValueAbsolute } from '@commercetools-test-data/product-discount';

const productDiscountValueAbsolute =
  ProductDiscountValueAbsolute.random().build<TProductDiscountValueAbsolute>();

const productDiscountValueAbsoluteDraft =
  ProductDiscountValueAbsolute.ProductDiscountValueAbsoluteDraft.random().build<TProductDiscountValueAbsoluteDraft>();
```

## `ProductDiscountValueExternal`

```ts
import type {
  TProductDiscountValueExternal,
  TProductDiscountValueExternalDraft,
} from '@commercetools-test-data/product-discount';
import { ProductDiscountValueExternal } from '@commercetools-test-data/product-discount';

const productDiscountValueExternal =
  ProductDiscountValueExternal.random().build<TProductDiscountValueExternal>();

const productDiscountValueExternalDraft =
  ProductDiscountValueExternal.ProductDiscountValueExternalDraft.random().build<TProductDiscountValueExternalDraft>();
```

## `ProductDiscountValueExternal`

```ts
import type {
  TProductDiscountValueExternal,
  TProductDiscountValueExternalDraft,
} from '@commercetools-test-data/product-discount';
import * as ProductDiscountValueExternal from '@commercetools-test-data/product-discount';

const productDiscountValueExternal =
  ProductDiscountValueExternal.random().build<TProductDiscountValueExternal>();

const productDiscountValueExternalDraft =
  ProductDiscountValueExternal.ProductDiscountValueExternalDraft.random().build<TProductDiscountValueExternalDraft>();
```

## `ProductDiscountValueRelative`

```ts
import type {
  TProductDiscountValueRelative,
  TProductDiscountValueRelativeDraft,
} from '@commercetools-test-data/product-discount';
import { ProductDiscountValueRelative } from '@commercetools-test-data/product-discount';

const productDiscountValueRelative =
  ProductDiscountValueRelative.random().build<TProductDiscountValueRelative>();

const productDiscountValueRelativeDraft =
  ProductDiscountValueRelative.ProductDiscountValueRelativeDraft.random().build<TProductDiscountValueRelativeDraft>();
```
