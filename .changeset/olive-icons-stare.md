---
'@commercetools/composable-commerce-test-data': patch
---

We've fixed an error in the `AttributeGroupDraft` test-data model as its name was not populated with a draft model.

Also, we've updated the entry point of the `@commercetools/composable-commerce-test-data/attribute-group` package entry point so it also exports the `AttributeReference` model.
It can be used like this:

```ts
import {
  AttributeReferenceGraphql,
  AttributeReferenceRest,
} from '@commercetools/composable-commerce-test-data/attribute-group';

const graphqlModel = AttributeReferenceGraphql.random().build();
const restModel = AttributeReferenceRest.random().build();
```
