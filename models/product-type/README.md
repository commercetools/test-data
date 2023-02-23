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
  TProductType,
  TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import * as ProductType from '@commercetools-test-data/product-type';

const productType = ProductType.random().build<TProductType>();
const productTypeDraft =
  ProductType.ProductTypeDraft.random().build<TProductTypeDraft>();
```
