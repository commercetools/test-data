---
'@commercetools/composable-commerce-test-data': patch
---

Fixed an error with both `Price` and `PriceDraft` models causing the default value for the `validUntil` property to not be a string representation of a future date.

Now that default value will always represent a date one year ahead.
