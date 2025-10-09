---
'@commercetools/composable-commerce-test-data': patch
---

Fix zone rate models exports

The shipping-method index was using aliased wildcard exports (`export * as ZoneRate`) for zone rate models and zone rate draft models.
This fix replaces with direct named exports.
