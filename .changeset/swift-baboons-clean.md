---
'@commercetools/composable-commerce-test-data': patch
---

Updated the `Product` test model so it does not populate the `priceMode` property by default. That's an optional property and so the default version of the model should not populate it.
