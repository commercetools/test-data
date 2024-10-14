---
'@commercetools-test-data/core': patch
---

When creating Transformers, you can provide a `buildFields` property with the list of names of the nested models fields that should be transformed.

In our latest version, we updated that behaviour so that, if you don't provide that property, the Transformer will automatically detect the nested models and build them.

There were a few models where transformers where not providing the `buildFields` properties but they meant they didn't want any nested model to be build.
In order to cover this use case, we modified the `buildFields` property to also accept `false` as a value, which was used as a signal to not build nested models and we updated those few models accordingly.

However, we discovered one of our internal packages which relies on this one had many more models with the same use case and it's difficult to update all of them accordingly so we're updating the `buildFields` behaviour again to leave it as it was before.

So now:

- If the transformer configuration specifies a list of nested models, only those will be built
- In the transformer configuration does not provide the `buildFields` property, no nested model will be built
- [NEW] In the transformer configuration contains the `buildFields` property with the string value `all`, every nested model will be built (this is used in the new data models patterns)
