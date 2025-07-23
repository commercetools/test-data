---
'@commercetools/composable-commerce-test-data': minor
---

We've migrated `Money` and `MoneyDraft` models to the new implementation patterns.

There's a REST (Composable commerce HTTP API) and a GraphQL (Composable Commerce GraphQL API) version for these two models.

This is how the new models could be used:

```ts
import {
  MoneyRest,
  MoneyGraphql,
  MoneyDraftRest,
  MoneyDraftGraphql,
} from '@commercetools/composable-commerce-test-data/money';

const moneyRest = MoneyRest.random().build();
const moneyGraphql = MoneyGraphql.random().build();
const moneyDraftRest = MoneyDraftRest.random().build();
const moneyDraftGraphql = MoneyDraftGraphql.random().build();
```
