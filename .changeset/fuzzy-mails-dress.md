---
'@commercetools/composable-commerce-test-data': patch
---

Fixed `CustomFieldsRest` test data model as the default generated version was not populating the `fields` property but that's a required property.

Now we populate it with an empty object.
