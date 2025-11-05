---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Transaction` and `TransactionDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the `Transaction` and `TransactionDraft` models are now deprecated and you're expected to start using the `TransactionGraphql` or `TransactionDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  TransactionGraphql,
  TransactionRest,
  TransactionDraftGraphql,
  TransactionDraftRest,
} from '@commercetools/composable-commerce-test-data/payment';

const graphqlTransaction = TransactionGraphql.random().build();
const restTransaction = TransactionRest.random().build();

const graphqlTransactionDraft = TransactionDraftGraphql.random().build();
const restTransactionDraft = TransactionDraftRest.random().build();
```
