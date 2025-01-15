---
'@commercetools-test-data/commons': patch
---

Migrated the `Reference` model to the new implementation patterns.

Now REST and GraphQL model instances can be created using their own builders:

```ts
import {
  ReferenceRest,
  ReferenceGraphql,
  ReferenceDraftRest,
  ReferenceDraftGraphql,
} from '@commercetools-test-data/commons';

// Query models
const restProductRef = ReferenceRest.random().
  .typeId('product')
  .build();
const graphqlProductRef = ReferenceGraphql.random().
  .typeId('product')
  .build();

// Draft models
const restProductRefDraft = ReferenceDraftRest.random().
  .typeId('product')
  .build();
const graphqlProductRefDraft = ReferenceDraftGraphql.random().
  .typeId('product')
  .build();


// Presets
const restCategoryRef = ReferenceRest.presets
  .category()
  .build();
const graphqlCategoryRefDraft = ReferenceDraftGraphql.presets
  .category()
  .build();
```
