---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `AttributeGroup` model to the new implementation patterns.

This change does not have any impact on consumers, however the `AttributeGroup` model is now deprecated and you're expected to start using the `AttributeGroupGraphql` or `AttributeGroupRest` models instead depending of the type of API you're mocking.

```ts
import {
  AttributeGroupGraphql,
  AttributeGroupRest,
} from '@commercetools/composable-commerce-test-data/attribute-group';

const graphqlAttributeGroup = AttributeGroupGraphql.random().build();
const restAttributeGroup = AttributeGroupRest.random().build();
```
