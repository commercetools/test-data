---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new models named `ItemShippingDetailsGraphql`, `ItemShippingTargetGraphql` and `ShippingGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

This is how the new models could be used:

```ts
import { ItemShippingDetailsGraphql } from '@commercetools/composable-commerce-test-data/cart';

const model = ItemShippingDetailsGraphql.random().build();
```

```ts
import { ItemShippingTargetGraphql } from '@commercetools/composable-commerce-test-data/cart';

const model = ItemShippingTargetGraphql.random().build();
```

```ts
import { ShippingGraphql } from '@commercetools/composable-commerce-test-data/cart';

const model = ShippingGraphql.random().build();
```
