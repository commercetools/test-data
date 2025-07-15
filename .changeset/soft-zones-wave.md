---
'@commercetools/composable-commerce-test-data': minor
---

We've migrated the `Location` model to the new implementation patterns.

The model was populating the `state` property by default which goes against the rule of only populating required fields by default.
We've changed that property to not be populated by default and also included a new preset which can be used when consumers need to generate a fully populated object.

Example:

```ts
import { LocationGraphql } from '@commercetools/composable-commerce-test-data/zone';

const fullLocation = LocationGraphql.presets.withAllFields();
```
