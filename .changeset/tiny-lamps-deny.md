---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing new models named `AttributeNestedTypeRest` and `AttributeNestedTypeGraphQl` that can be consumed from the `@commercetools/composable-commerce-test-data/product-type` entry point.

This is how the new models could be used:

```ts
import { AttributeNestedTypeRest } from '@commercetools/composable-commerce-test-data/product-type';

const model = AttributeNestedTypeRest.random().build();
```

```ts
import { AttributeNestedTypeGraphql } from '@commercetools/composable-commerce-test-data/product-type';

const model = AttributeNestedTypeGraphql.random().build();
```
