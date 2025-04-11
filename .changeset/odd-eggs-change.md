---
'@commercetools-test-data/product': patch
---

We had a bug in the `Product` compatibility presets where they were always returning a GraphQL value for the `productType` property even when the consumer wanted to build a REST `Product`.
