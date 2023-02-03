# @commercetools-test-data/attribute-type

This package provides the data model for the commercetools platform `AttributeType` type

https://docs.commercetools.com/api/projects/productTypes#attributetype

# Install

```bash
$ yarn add -D @commercetools-test-data/attribute-type
```

# Usage

```ts
import type { TAttributeType } from '@commercetools-test-data/attribute-type';
import * as AttributeType from '@commercetools-test-data/attribute-type';

const attributeType = AttributeType.random().build<TAttributeType>();
```
