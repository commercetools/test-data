# @commercetools-test-data/product

//TODO: clean up!

This package provides the data models for the commercetools platform `Product` type

https://docs.commercetools.com/api/projects/products#product

# Install

```bash
$ yarn add -D @commercetools-test-data/product
```

# Usage

## ProductType

```ts
import type { TProduct, TProductDraft } from '@commercetools-test-data/product';
import { Product } from '@commercetools-test-data/product';

const product = Product.random().build<TProduct>();
const productDraft = Product.ProductDraft.random().build<TProductDraft>();
```

## ProductCatalog

```ts
import type { TProductData } from '@commercetools-test-data/product';
import { ProductData } from '@commercetools-test-data/product';

// For REST entities
const productDataRest = ProductData.random().buildRest<TProductData>();

// For Graphql entities
const productDataGraphql = ProductData.random().buildGraphql<TProductData>();
```

## ProductCatalogData

```ts
import type { TProductCatalogData } from '@commercetools-test-data/product';
import { ProductCatalogData } from '@commercetools-test-data/product';

const productCatalogData =
  ProductCatalogData.random().build<TProductCatalogData>();
```
