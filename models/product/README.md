# @commercetools-test-data/product

This package provides the data models for the commercetools platform `Product` type representations.

https://docs.commercetools.com/api/projects/products#product

# Install

```bash
$ pnpm add -D @commercetools-test-data/product
```

# Usage

## Attribute

```ts
import {
  Attribute,
  AttributeDraft,
  type TAttribute,
  type TAttributeDraft,
} from '@commercetools-test-data/product';

const attribute = Attribute.random().build<TAttribute>();
const attributeDraftGraphql =
  AttributeDraft.random().buildGraphql<TAttributeDraft>();
```

## Image

```ts
import { Image, type TImage } from '@commercetools-test-data/product';

const image = Image.random().build<TImage>();
```

## Product

```ts
import {
  ProductGraphql,
  ProductRest,
  ProductGraphqlDraft,
  ProductRestDraft,
} from '@commercetools-test-data/product';

const productGraphql = ProductGraphql.random().build();
const productRest = ProductRest.random().build();

const productGraphqlDraft = ProductGraphqlDraft.random().build();
const productRestDraft = ProductRestDraft.random().build();
```

## ProductCatalogData

```ts
import {
  ProductCatalogDataGraphql,
  ProductCatalogDataRest,
} from '@commercetools-test-data/product';

const productCatalogDataGraphql = ProductCatalogDataGraphql.random().build();
const productCatalogDataRest = ProductCatalogDataRest.random().build();
```

## ProductData

```ts
import {
  ProductDataGraphql,
  TProductDataRest,
} from '@commercetools-test-data/product';

// For REST entities
const productDataRest = ProductDataRest.random().build();

// For Graphql entities
const productDataGraphql = ProductData.random().build();
```

## ProductVariant

```ts
import {
  ProductVariantGraphql,
  ProductVariantRest,
  ProductVariantGraphqlDraft,
  ProductVariantRestDraft,
} from '@commercetools-test-data/product';

const productVariantGraphql = ProductVariantGraphql.random().build();
const productVariantRest = ProductVariantRest.random().build();

const productVariantGraphqlDraft = ProductVariantGraphqlDraft.random().build();
const productVariantRestDraft = ProductVariantGraphqlDraft.random().build();
```
