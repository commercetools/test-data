# @commercetools-test-data/attribute-type

This package provides the data models for the commercetools platform `AttributeTypes' representations

https://docs.commercetools.com/api/projects/productTypes#attributetype

# Install

```bash
$ pnpm add -D @commercetools-test-data/attribute-type
```
<br>

# Usage
- [AttributeBooleanType](#attributebooleantype)<br>
- [AttributeEnumType](#attributeenumtype)<br>
- [AttributeLocalizedEnumValue](#attributelocalizedenumvalue)<br>
- [AttributePlainEnumValue](#attributeplainenumvalue)<br>
- [AttributeTextType](#attributetexttype)<br><br>




## `AttributeBooleanType`

```ts
import {
  AttributeBooleanType,
  type TAttributeBooleanType,
} from '@commercetools-test-data/attribute-type';

const attributeBooleanType =
  AttributeBooleanType.random().build<TAttributeBooleanType>();
```
## `AttributeEnumType`

```ts
import {
  AttributeEnumType,
  type TAttributeEnumType,
} from '@commercetools-test-data/attribute-type';

const attributeEnumType =
  AttributeEnumType.random().build<TAttributeEnumType>();
```

## `AttributeLocalizedEnumValue`

```ts
import {
  AttributeLocalizedEnumValue,
  type TAttributeLocalizedEnumValue,
  type TAttributeLocalizedEnumValueGraphql,
} from '@commercetools-test-data/attribute-type';

const attributeLocalizedEnumValue =
  AttributePLocalizedEnumValue.random().build<TAttributeLocalizedEnumValue>();
```


## `AttributePlainEnumValue`

```ts
import {
  AttributePlainEnumValue,
  type TAttributePlainEnumValue,
  type TAttributePlainEnumValueGraphql,
} from '@commercetools-test-data/attribute-type';

const attributePlainEnumValue =
  AttributePlainEnumValue.random().build<TAttributePlainEnumValue>();
```

## `AttributeTextType`

```ts
import {
  AttributeTextType,
  type TAttributeTextType,
} from '@commercetools-test-data/attribute-type';

const attributeTextType =
  AttributeTextType.random().build<TAttributeTextType>();
```

