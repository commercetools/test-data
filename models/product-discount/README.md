# @commercetools-test-data/product-discount

This package provides the data model for the commercetools platform `ProductDiscount` type

https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

# Install

```bash
$ yarn add -D @commercetools-test-data/product-discount
```

# Usage

```ts
import type {
  TProductDiscount,
  TProductDiscountDraft,
} from '@commercetools-test-data/product-discount';
import * as ProductDiscount from '@commercetools-test-data/product-discount';

const productDiscount = ProductDiscount.random().build<TProductDiscount>();
const productDiscountDraft =
  ProductDiscount.ProductDiscountDraft.random().build<TProductDiscountDraft>();
```
