---
'@commercetools/composable-commerce-test-data': minor
---

We've included two new presets to the `State` model:

- `packed`
- `shipped`

We've also took the opportunity to migrate both the `State` and `StateDraft` models to the new pattern.

Here are examples on how the new presets can be consumed:

```ts
import {
  StateGraphql,
  StateRest,
} from '@commercetools/composable-commerce-test-data/state';

const packedGraphqlModel = StateGraphql.presets.packed();
const shippedRestModel = StateRest.presets.shipped();
```
