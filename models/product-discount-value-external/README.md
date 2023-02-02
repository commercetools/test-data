# @commercetools-test-data/product-discount-value-external

This package provides the data model for the commercetools platform `ProductDiscountValueExternal` type

https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueexternal

# Install

```bash
$ yarn add -D @commercetools-test-data/product-discount-value-external
```

# Usage

```ts
import type {
  TProductDiscountValueExternal,
  TProductDiscountValueExternalDraft,
} from '@commercetools-test-data/product-discount-value-external';
import * as ProductDiscountValueExternal from '@commercetools-test-data/product-discount-value-external';

const productDiscountValueExternal = ProductDiscountValueExternal.random().build<TProductDiscountValueExternal>();
const productDiscountValueExternalDraft = ProductDiscountValueExternal.ProductDiscountValueExternalDraft.random().build<TProductDiscountValueExternalDraft>();
```
