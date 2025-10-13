---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Zone` and `ZoneDraft` models to the new implementation patterns.

This change does not have any impact on consumers, however the `Zone` and `ZoneDraft` models are now deprecated and you're expected to start using the `ZoneGraphql`, `ZoneRest`, `ZoneDraftGraphql` or `ZoneDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  ZoneGraphql,
  ZoneRest,
  ZoneDraftRest,
  ZoneDraftGraphql,
} from '@commercetools/composable-commerce-test-data/zone';

const graphqlZone = ZoneGraphql.random().build();
const restZone = ZoneRest.random().build();

const graphqlZoneDraft = ZoneDraftGraphql.random().build();
const restZoneDraft = ZoneDraftRest.random().build();
```
