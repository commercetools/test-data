# @commercetools-test-data/plain-enum-value

This package provides the data model for the commercetools platform `PlainEnumValue` type

https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

# Install

```bash
$ yarn add -D @commercetools-test-data/plain-enum-value
```

# Usage

```ts
import type {
  TPlainEnumValue,
  TPlainEnumValueGraphql,
} from '@commercetools-test-data/plain-enum-value';
import * as PlainEnumValue from '@commercetools-test-data/plain-enum-value';

const plainEnumValue = PlainEnumValue.random().build<TPlainEnumValue>();
```
