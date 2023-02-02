# @commercetools-test-data/product-discount-value-relative

This package provides the data model for the commercetools platform `ProductDiscountValueRelative` type

https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvaluerelative

# Install

```bash
$ yarn add -D @commercetools-test-data/product-discount-value-relative
```

# Usage

```ts
import type {
  TProductDiscountValueRelative,
  TProductDiscountValueRelative,
} from '@commercetools-test-data/product-discount-value-relative';
import * as ProductDiscountValueRelative from '@commercetools-test-data/product-discount-value-relative';

const productDiscountValueRelative =
  ProductDiscountValueRelative.random().build<TProductDiscountValueRelative>();
const productDiscountValueRelativeDraft =
  ProductDiscountValueRelative.ProductDiscountValueRelativeDraft.random().build<TProductDiscountValueRelativeDraft>();
```
