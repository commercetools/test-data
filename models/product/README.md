# @commercetools-test-data/product

This package provides the data model for the commercetools platform `Product` type

https://docs.commercetools.com/api/projects/products#product

# Install

```bash
$ yarn add -D @commercetools-test-data/product
```

# Usage

```ts
import type { TProduct, TProductDraft } from '@commercetools-test-data/product';
import * as Product from '@commercetools-test-data/product';

const product = Product.random().build<TProduct>();
const productDraft = Product.ProductDraft.random().build<TProductDraft>();
```
