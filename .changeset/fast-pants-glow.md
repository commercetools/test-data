---
'@commercetools/composable-commerce-test-data': patch
---

fix(store): export correct `compatPreset` for `usLargeCustomers` in store model

We're fixing a preset in the StoreDraft model where we were exporting a REST one instead of the expected compatibility one (StoreDraft.presets.useLargeCustomers).
