---
'@commercetools/composable-commerce-test-data': patch
---

## Migrated Zone Rate Model

The zone rate models have been migrated to the new model structure:

```ts
import {
  ZoneRateRest,
  ZoneRateGraphql,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const restZoneRate = ZoneRateRest.random().build();
const graphqlZoneRate = ZoneRateGraphql.random().build();
```

## Migrated Zone Rate Draft Model

The zone rate draft models have been migrated with preset support:

```ts
import {
  ZoneRateDraftRest,
  ZoneRateDraftGraphql,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const restDraft = ZoneRateDraftRest.random().build();
const graphqlDraft = ZoneRateDraftGraphql.random().build();
```
