---
'@commercetools/composable-commerce-test-data': minor
'@commercetools-test-data/generators': minor
---

Updated the `ProductData` and `ProductDraft` test models so it does not populate the `categories` property by default. That's an optional property and so the default version of the model should not populate it.
