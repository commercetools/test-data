---
'@commercetools/composable-commerce-test-data': minor
---

We've migrated the `Money` model to the new implementation patterns.

This change does not have any impact on consumers, however the `Money` model is now deprecated and you're expected to start using the `MoneyGraphql` or `MoneyRest` models instead depending of the type of API you're mocking.

```ts
import { MoneyGraphql, MoneyRest } form '@commercetools/composable-commerce-test-data/commons';

const graphqlMoney = MoneyGraphql.random().build();
const restMoney = MoneyRest.random().build();
```
