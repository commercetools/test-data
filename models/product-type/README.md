# @commercetools-test-data/product-type

This package provides the data model for the commercetools platform `ProductType` type

https://docs.commercetools.com/api/projects/productTypes#product-types

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-type
```

# Usage

- [AttributeBooleanType](#attributebooleantype)<br>
- [AttributeDefinition](#attributedefinition)<br>
- [AttributeEnumType](#attributeenumtype)<br>
- [AttributeLocalizedEnumType](#attributelocalizedenumtype)<br>
- [AttributeLocalizedEnumValue](#attributelocalizedenumvalue)<br>
- [attributeLocalizableTextType](#attributelocalizabletexttype)<br>
- [AttributePlainEnumValue](#attributeplainenumvalue)<br>
- [AttributeTextType](#attributetexttype)<br><br>
- [ProductType](#producttype)<br>

## `AttributeDefinition`

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

## `AttributeBooleanType`

```ts
import {
  AttributeBooleanType,
  type TAttributeBooleanType,
} from '@commercetools-test-data/product-type';

const attributeBooleanType =
  AttributeBooleanType.random().build<TAttributeBooleanType>();
```

## `AttributeEnumType`

```ts
import {
  AttributeEnumType,
  type TAttributeEnumType,
} from '@commercetools-test-data/product-type';

const attributeEnumType =
  AttributeEnumType.random().build<TAttributeEnumType>();
```

## `AttributeLocalizedEnumType`

```ts
import {
  AttributeLocalizedEnumType,
  type TAttributeLocalizedEnumType,
  type TAttributeLocalizedEnumValueGraphql,
} from '@commercetools-test-data/product-type';

const attributeLocalizedEnumType =
  AttributePLocalizedEnumType.random().build<TAttributeLocalizedEnumValue>();
```

## `AttributeLocalizedEnumValue`

```ts
import {
  AttributeLocalizedEnumValue,
  type TAttributeLocalizedEnumValue,
  type TAttributeLocalizedEnumValueGraphql,
} from '@commercetools-test-data/product-type';

const attributeLocalizedEnumValue =
  AttributePLocalizedEnumValue.random().build<TAttributeLocalizedEnumValue>();
```

## `AttributeLocalizableTextType`

```ts
import {
  AttributeLocalizableTextType,
  type TAttributeLocalizableTextType,
} from '@commercetools-test-data/product-type';

const attributeLocalizableTextType =
  AttributeLocalizableTextType.random().build<TattributeLocalizableTextType>();
```

## `AttributePlainEnumValue`

```ts
import {
  AttributePlainEnumValue,
  type TAttributePlainEnumValue,
  type TAttributePlainEnumValueGraphql,
} from '@commercetools-test-data/product-type';

const attributePlainEnumValue =
  AttributePlainEnumValue.random().build<TAttributePlainEnumValue>();
```

## `AttributeTextType`

```ts
import {
  AttributeTextType,
  type TAttributeTextType,
} from '@commercetools-test-data/product-type';

const attributeTextType =
  AttributeTextType.random().build<TAttributeTextType>();
```

## `ProductType`

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
