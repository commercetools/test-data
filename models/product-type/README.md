# @commercetools-test-data/product-type

This package provides the data model for the commercetools platform `ProductType` type

https://docs.commercetools.com/api/projects/productTypes#product-types

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-type
```

# Usage

## AttributeDefinition

```ts
import {
  AttributeDefinition,
  AttributeDefinitionDraft,
  type TAttributeDefinition,
  type TAttributeDefinitionDraft,
} from '@commercetools-test-data/product-type';

const attributeDefinition =
  AttributeDefinition.random().build<TAttributeDefinition>();

const attributeDefinitionDraft =
  AttributeDefinitionDraft.random().build<TAttributeDefinitionDraft>();

// Presets
const emptyAttributeDefinitionPreset = AttributeDefinitionDraft.presets
  .empty()
  .build<TAttributeDefinitionDraft>();
```

## ProductType

```ts
import {
  ProductType,
  ProductTypeDraft,
  type TProductType,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';

const productType = ProductType.random().build<TProductType>();
const productTypeDraft = ProductTypeDraft.random().build<TProductTypeDraft>();

// Presets
const emptyProductTypeDraft = ProductTypeDraft.presets
  .empty()
  .build<TProductTypeDraft>();
```
