---
'@commercetools-test-data/channel': major
---

Make `name` field optional. If you were relying on the `name` or `nameAllLocales` field to be defined by default, this is not the case anymore.
You now need to explicitly set the `name` field using the `LocalizedString` model.

```js
// Before
Channel.random().buildGraphql();

// After
Channel.random().name(LocalizedString.random()).buildGraphql();
```
