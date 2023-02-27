# @commercetools-test-data/product-variant

This package provides the data model for the commercetools platform `ProductVariant` type

https://docs.commercetools.com/api/projects/products#productvariant

# Install

```bash
$ yarn add -D @commercetools-test-data/product-variant
```

# Usage

```ts
import type {
  TProductVariant,
  TProductVariantDraft,
} from '@commercetools-test-data/product-variant';
import * as ProductVariant from '@commercetools-test-data/product-variant';

const productVariant =
  ProductVariant.random().build<TProductVariant>();
const productVariantDraft =
  ProductVariant.ProductVariantDraft.random().build<TProductVariantDraft>();
```
