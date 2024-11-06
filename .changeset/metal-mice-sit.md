---
'@commercetools-test-data/inventory-entry': minor
---

Refactored `InventoryEntry` and `InventoryEntryDraft` models to use the new implementation patterns.
This means the existing models are now deprecated (though we still support them for backwards compatibility) and consumers should move to the new ones implemented:
* `InventoryEntryRest`
* `InventoryEntryGraphql`
* `InventoryEntryDraftRest`
* `InventoryEntryDraftGraphql`
