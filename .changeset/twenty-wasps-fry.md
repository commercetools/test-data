---
'@commercetools/composable-commerce-test-data': patch
---

Fixed an issue with both the `Price` and `PriceDraft` models regarding the default value of their `validUntil` property as it was being populated with the current timestamp where it's expected to be a future timestamp instead.
