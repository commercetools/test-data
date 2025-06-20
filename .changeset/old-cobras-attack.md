---
'@commercetools/composable-commerce-test-data': patch
---

We're fixing the `CategoryDraft` model as it was populating the `slug` field incorrectly by default.
It was including three slugs in three different languages (`de`, `en` and `fr`) but two of them were including spaces in the values, which is not allowed.
