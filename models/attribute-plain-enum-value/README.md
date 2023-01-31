# @commercetools-test-data/attribute-plain-enum-value

This package provides the data model for the commercetools platform `AttributePlainEnumValue` type

https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

# Install

```bash
$ yarn add -D @commercetools-test-data/attribute-plain-enum-value
```

# Usage

```ts
import type {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueGraphql,
} from '@commercetools-test-data/attribute-plain-enum-value';
import * as AttributePlainEnumValue from '@commercetools-test-data/attribute-plain-enum-value';

const attributePlainEnumValue =
  AttributePlainEnumValue.random().build<TAttributePlainEnumValue>();
```
