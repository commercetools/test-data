---
'@commercetools-test-data/customer': patch
---

Fix Customer model to build `addresses` and `stores` on all transforms.
Allow Customer model to receive builders for `defaultShippingAddress`, `shippingAddresses`, `defaultBillingAddress`, and `billingAddresses` properties. Adds these properties to build fields for default and graphql transforms.
