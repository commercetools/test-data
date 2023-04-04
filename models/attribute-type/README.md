# @commercetools-test-data/attribute-type

This package provides the data models for the commercetools platform `AttributeTypes'

https://docs.commercetools.com/api/projects/productTypes#attributetype

# Install

```bash
$ yarn add -D @commercetools-test-data/attribute-type
```

# Usage

## `AttributeType`

```ts
import type { TAttributeType } from '@commercetools-test-data/attribute-type';
import * as AttributeType from '@commercetools-test-data/attribute-type';

const attributeType = AttributeType.random().build<TAttributeType>();
```

## `AttributePlainEnumValue`

```ts
import type {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueGraphql,
} from '@commercetools-test-data/attribute-type';
import * as AttributePlainEnumValue from '@commercetools-test-data/attribute-type';

const attributePlainEnumValue =
  AttributePlainEnumValue.random().build<TAttributePlainEnumValue>();
```
