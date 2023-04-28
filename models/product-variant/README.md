# @commercetools-test-data/product-variant

This package provides the data model for the commercetools platform `ProductVariant` type representations

https://docs.commercetools.com/api/projects/products#productvariant

# Install

```bash
$ yarn add -D @commercetools-test-data/product-variant
```

# Usage

## ProductVariant

```ts
import type {
  TProductVariant,
  TProductVariantDraft,
} from '@commercetools-test-data/product-variant';
import { ProductVariant, ProductVariantDraft } from '@commercetools-test-data/product-variant';

const productVariant = ProductVariant.random().build<TProductVariant>();
const productVariantDraft =
  ProductVariantDraft.random().build<TProductVariantDraft>();
```

## Image

```ts
import type { TImage } from '@commercetools-test-data/product-variant';
import { Image } from '@commercetools-test-data/product-variant';

const image = Image.random().build<TImage>();
```

## Attribute

```ts
import type {
  TAttribute,
  TAttributeDraft,
} from '@commercetools-test-data/product-variant';
import { Attribute } from '@commercetools-test-data/product-variant';

const attribute = Attribute.random().build<TAttribute>();
const attributeDraftGraphql =
  AttributeDraft.random().buildGraphql<TAttributeDraft>();
```
