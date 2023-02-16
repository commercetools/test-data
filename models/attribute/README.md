# @commercetools-test-data/attribute

This package provides the data model for the commercetools platform `Attribute` type

https://docs.commercetools.com/api/projects/products#attribute

# Install

```bash
$ yarn add -D @commercetools-test-data/attribute
```

# Usage

```ts
import type { TAttribute } from '@commercetools-test-data/attribute';
import * as Attribute from '@commercetools-test-data/attribute';

const attribute = Attribute.random().build<TAttribute>();
```
