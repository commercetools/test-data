---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `ShippingMethod` model to the new implementation patterns.

This change does not have any impact on consumers, however the `ShippingMethod` model is now deprecated and you're expected to start using the `ShippingMethodGraphql` or `ShippingMethodRest` models instead depending of the type of API you're mocking.

```ts
import {
  ShippingMethodGraphql,
  ShippingMethodRest,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const graphqlShippingMethod = ShippingMethodGraphql.random().build();
const restShippingMethod = ShippingMethodRest.random().build();
```

We've migrated the `ShippingMethodDraft` model to the new implementation patterns.

This change does not have any impact on consumers, however the `ShippingMethodDraft` model is now deprecated and you're expected to start using the `ShippingMethodDraftGraphql` or `ShippingMethodDraftRest` models instead depending of the type of API you're mocking.

```ts
import {
  ShippingMethodDraftGraphql,
  ShippingMethodDraftRest,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const graphqlDraft = ShippingMethodDraftGraphql.random().build();
const restDraft = ShippingMethodDraftRest.random().build();
```
