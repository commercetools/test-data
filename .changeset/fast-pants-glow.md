---
'@commercetools/composable-commerce-test-data': patch
---

fix(store): export correct `compatPreset` for `usLargeCustomers` in store model

Previously, the `restPreset` was mistakenly exported instead of the intended `compatPreset` for the `usLargeCustomers` store model.
