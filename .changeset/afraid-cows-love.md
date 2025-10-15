---
'@commercetools/composable-commerce-test-data': patch
---

We've identified some models where the default dates that were used to populate some of their fields where not always accurate. The returned default values were past dates instead of a future ones.

These are the affected models and the properties:

- `InventoryEntryDraft.expectedDelivery`
- `RecurringOrderDraft.startsAt`
