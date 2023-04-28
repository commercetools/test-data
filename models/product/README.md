# @commercetools-test-data/product

This package provides the data models for the commercetools platform `Product` type representations.

https://docs.commercetools.com/api/projects/products#product

# Install

```bash
$ pn add -D @commercetools-test-data/product
```

# Usage

## Product

```ts
import type { TProduct, TProductDraft } from '@commercetools-test-data/product';
import { Product, ProductDraft } from '@commercetools-test-data/product';

const product = Product.random().build<TProduct>();
const productDraft = ProductDraft.random().build<TProductDraft>();
```

## ProductData

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
