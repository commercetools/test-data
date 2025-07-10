---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new test data model named `AttributeNestedType` that can be consumed from the `@commercetools/composable-commerce-test-data/product-type` entry point.

This is how it could be used:

```ts
import {
  AttributeNestedTypeGraphql,
  AttributeNestedTypeRest,
} from '@commercetools/composable-commerce-test-data/product-type';

const restModel = AttributeNestedTypeRest.random().build();
const graphqlModel = AttributeNestedTypeGraphql.random().build();
```
