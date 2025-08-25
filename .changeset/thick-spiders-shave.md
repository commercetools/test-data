---
"@commercetools/composable-commerce-test-data": patch
---

We've migrated the `Team` model to the new implementation patterns.

This change does not have any impact on consumers, however the `Team` model is now deprecated and you're expected to start using the `TeamGraphql` or `TeamRest` models instead depending of the type of API you're mocking.

```ts
import {
  TeamGraphql,
  TeamRest,
} from '@commercetools/composable-commerce-test-data/organization';

const teamGraphql = TeamGraphql.random().build();
const teamRest = TeamRest.random().build();
```
