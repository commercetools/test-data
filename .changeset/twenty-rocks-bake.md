---
'@commercetools-test-data/category': patch
---

Fixed the `Category` graphql transformer as it was not building the `name` and `description` properties which both are nested models of type `LocalizedString`.
