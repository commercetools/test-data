# @commercetools-test-data/product-discount-value-absolute

This package provides the data model for the commercetools platform `ProductDiscountValueAbsolute` type

https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalue

# Install

```bash
$ yarn add -D @commercetools-test-data/product-discount-value-absolute
```

# Usage

```ts
import type {
  TProductDiscountValueAbsolute,
  TProductDiscountValueAbsolute,
} from '@commercetools-test-data/product-discount-value-absolute';
import * as ProductDiscountValueAbsolute from '@commercetools-test-data/product-discount-value-absolute';

const productDiscountValueAbsolute =
  ProductDiscountValueAbsolute.random().build<TProductDiscountValueAbsolute>();
const productDiscountValueAbsoluteDraft =
  ProductDiscountValueAbsolute.ProductDiscountValueAbsoluteDraft.random().build<TProductDiscountValueAbsoluteDraft>();
```
