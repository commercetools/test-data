---
'@commercetools/composable-commerce-test-data': patch
---

Fix zone rate models exports

The shipping-method index was using aliased wildcard exports (`export * as ZoneRate`) for zone rate models and zone rate draft models.
This fix replaces with direct named exports.

```ts
import { ZoneRate } from '@commercetools/composable-commerce-test-data/shipping-method';

// BEFORE
const graphqlZoneRate = ZoneRate.ZoneRate.random();

// AFTER
const graphqlZoneRate = ZoneRate.random();
```
