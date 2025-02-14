# @commercetools-test-data/product-tailoring

This package provides the data model for the commercetools platform `ProductTailoring` type

https://docs.commercetools.com/api/projects/product-tailoring

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-tailoring
```

# Usage

```ts
import {
  ProductTailoringRest,
  ProductTailoringGraphql,
  ProductTailoringDataRest,
  ProductTailoringDataGraphql,
  ProductVariantTailoringRest,
  ProductVariantTailoringGraphql,
  ProductTailoringAttributeRest,
  ProductTailoringAttributeGraphql,
} from '@commercetools-test-data/product-tailoring';

// Basic REST models
const productTailoringRest = ProductTailoringRest.random().build();
const productTailoringDataRest = ProductTailoringDataRest.random().build();
const productVariantTailoringRest =
  ProductVariantTailoringRest.random().build();
const productTailoringAttributeRest =
  ProductTailoringAttributeRest.random().build();

// Basic GraphQL models
const productTailoringGraphql = ProductTailoringGraphql.random().build();
const productTailoringDataGraphql =
  ProductTailoringDataGraphql.random().build();
const productVariantTailoringGraphql =
  ProductVariantTailoringGraphql.random().build();
const productTailoringAttributeGraphql =
  ProductTailoringAttributeGraphql.random().build();

// Presets
const basicRestPreset = ProductTailoringRest.presets.basic().build();
const basicGraphqlPreset = ProductTailoringGraphql.presets.basic().build();
```

# Models

## ProductTailoring

The main model representing a product tailoring. Available in both REST and GraphQL variants.

### Presets

#### Basic Preset

The basic preset provides a complete product tailoring with all essential fields and three variants. It includes:

- Localized fields in English and German:

  - name: "Tailored Product" / "Angepasstes Produkt"
  - description: "Product tailored for specific market" / "Produkt für spezifischen Markt angepasst"
  - metaTitle: "Tailored Product - Meta Title" / "Angepasstes Produkt - Meta Titel"
  - metaDescription: "Meta description for tailored product" / "Meta-Beschreibung für angepasstes Produkt"
  - metaKeywords: "tailored, product, market" / "angepasst, produkt, markt"
  - slug: "tailored-product" / "angepasstes-produkt"

- Product state:

  - key: "tailored-product-key"
  - published: true
  - hasStagedChanges: false

- Three variants, each with:
  - Unique ID
  - Two product images with dimensions
  - Color attribute (localized)
  - Size attribute (localized)

Example:

```ts
// REST
const basicRest = ProductTailoringRest.presets.basic().build();

// GraphQL
const basicGraphql = ProductTailoringGraphql.presets.basic().build();
```

## ProductTailoringData

Represents the data part of a product tailoring, containing the actual tailored fields.

Example:

```ts
const dataRest = ProductTailoringDataRest.random()
  .name(LocalizedString.presets.empty().en('Name').de('Name'))
  .description(
    LocalizedString.presets.empty().en('Description').de('Beschreibung')
  )
  .build();

const dataGraphql = ProductTailoringDataGraphql.random()
  .nameAllLocales(LocalizedString.presets.empty().en('Name').de('Name'))
  .descriptionAllLocales(
    LocalizedString.presets.empty().en('Description').de('Beschreibung')
  )
  .build();
```

## ProductVariantTailoring

Represents a variant within a product tailoring, containing images, attributes, and other variant-specific data.

Example:

```ts
const variantRest = ProductVariantTailoringRest.random()
  .id(1)
  .images([
    /* ... */
  ])
  .attributes([
    /* ... */
  ])
  .build();

const variantGraphql = ProductVariantTailoringGraphql.random()
  .id(1)
  .images([
    /* ... */
  ])
  .attributesRaw([
    /* ... */
  ])
  .build();
```

## ProductTailoringAttribute

Represents an attribute within a product variant tailoring.

Example:

```ts
const attributeRest = ProductTailoringAttributeRest.random()
  .name('color')
  .value(LocalizedString.presets.empty().en('Red').de('Rot'))
  .build();

const attributeGraphql = ProductTailoringAttributeGraphql.random()
  .name('color')
  .value({
    type: 'ltext',
    value: LocalizedString.presets.empty().en('Red').de('Rot'),
  })
  .build();
```
