# @commercetools-test-data/attribute-type

This package provides the data models for the commercetools platform `AttributeTypes' representations

https://docs.commercetools.com/api/projects/productTypes#attributetype

# Install

```bash
$ pnpm add -D @commercetools-test-data/attribute-type
```

# Usage

## `AttributeType`

```ts
import {
  AttributeType,
  type TAttributeType,
} from '@commercetools-test-data/attribute-type';

const attributeType = AttributeType.random().build<TAttributeType>();
```

## `AttributePlainEnumValue`

```ts
import {
  AttributePlainEnumValue,
  type TAttributePlainEnumValue,
  type TAttributePlainEnumValueGraphql,
} from '@commercetools-test-data/attribute-type';
import { AttributePlainEnumValue } from '@commercetools-test-data/attribute-type';

const attributePlainEnumValue =
  AttributePlainEnumValue.random().build<TAttributePlainEnumValue>();
```
