---
'@commercetools-test-data/commons': minor
---

Added a new helper in the `LocalizedString` model which allows to get the default locale value out of all configured ones.

The default value has been configured to be `en`.

In case the model does not have that one configured, the helper will return the first one configured.
