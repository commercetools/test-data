---
'@commercetools-test-data/commons': major
---

Remove field `countryName`, as it never existed in the API model.

In tests, we recommend to explicitly set the `country` field and derive the localized country name. For example for `de` it would be `Germany`, given that the application locale is set to `en`.

Furthermore, the `Initiator` model has been replaced by `ClientLogging`, as the base model. Only the GraphQL version of `ClientLogging` is typed as `Initiator`.
