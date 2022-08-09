---
'@commercetools-test-data/category': minor
'@commercetools-test-data/channel': minor
'@commercetools-test-data/commons': minor
---

Adjust graphql transformers to use given properties data. This fixes a regression when overwriting certain model fields.

For example, when building a `Channel` the `name` property can be overwritten with a `LocalizedString` model.

```js
Channel.random().name(LocalizedString.random().en('Store')).buildGraphql();
```

This resulted in the `nameAllLocales` field to NOT include the `Store` value for the `en` locale.

Now this is fixed and working as expected. Similarly, other models with the same logic have been fixed.
