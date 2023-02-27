# @commercetools-test-data/product-catalog-data

This package provides the data model for the commercetools platform `ProductCatalogData` type

https://docs.commercetools.com/api/projects/products#productcatalogdata

# Install

```bash
$ yarn add -D @commercetools-test-data/product-catalog-data
```

# Usage

```ts
import type {
  TProductCatalogData,
  TProductCatalogDataDraft,
} from '@commercetools-test-data/product-catalog-data';
import * as ProductCatalogData from '@commercetools-test-data/product-catalog-data';

const productCatalogData =
  ProductCatalogData.random().build<TProductCatalogData>();
const productCatalogDataDraft =
  ProductCatalogData.ProductCatalogDataDraft.random().build<TProductCatalogDataDraft>();
```
