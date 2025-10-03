---
'@commercetools/composable-commerce-test-data': minor
---

Introduces the attribute-group-draft model and an empty preset; and the attribute-reference, which is used internally by attribute-group-draft.

```ts
import {
  AttributeGroupDraftGraphql,
  AttributeGroupDraftRest,
} from '@commercetools/composable-commerce-test-data/attribute-group';

const graphqlModel = AttributeGroupDraftGraphql.random().build();

const restModel = AttributeGroupDraftRest.random().build();

// empty preset
const emptyGraphqlModel = AttributeGroupDraftGraphql.presets.empty().build();

const emptyRestModel = AttributeGroupDraftRest.presets.empty().build();
```
