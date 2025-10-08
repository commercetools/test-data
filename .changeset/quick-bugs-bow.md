---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `ZoneRate` model to the new implementation patterns.

This change does not have any impact on consumers, however the `ZoneRate` model is now deprecated and you're expected to start using the `ZoneRateGraphql` or `ZoneRateRest` models instead depending of the type of API you're mocking.

```ts
import {
  ZoneRateGraphql,
  ZoneRateRest,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const graphqlZoneRate = ZoneRateGraphql.random().build();
const restZoneRate = ZoneRateRest.random().build();
```

We've migrated the `ZoneRateDraft` model to the new implementation patterns.

This change does not have any impact on consumers, however the `ZoneRateDraft` model is now deprecated and you're expected to start using the `ZoneRateDraftGraphql` or `ZoneRateDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  ZoneRateDraftGraphql,
  ZoneRateDraftRest,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const graphqlDraft = ZoneRateDraftGraphql.random().build();
const restDraft = ZoneRateDraftRest.random().build();
```
