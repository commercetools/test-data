# @commercetools-test-data/product-type

This package provides the data model for the commercetools platform `ProductType` type

https://docs.commercetools.com/api/projects/productTypes#product-types

# Install

```bash
$ yarn add -D @commercetools-test-data/product-type
```

# Usage

```ts
import type {
  TProductTypeDefault,
  TProductTypeDraftDefault,
} from '@commercetools-test-data/product-type';
import * as ProductType from '@commercetools-test-data/product-type';

const productType = ProductType.random().build<TProductTypeDefault>();
const productTypeDraft =
  ProductType.ProductTypeDraft.random().build<TProductTypeDraftDefault>();
```
