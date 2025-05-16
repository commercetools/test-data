---
'@commercetools/composable-commerce-test-data': patch
---

The `ProductSelection` and `ProductSelectionDraft` models have been refactored to use the new implementation patterns but that does not affect consumers..
Added new submodel to the ProductSelection model:

- `ProductOfSelection`

You can use it like this:

```ts
import { ProductOfSelectionGraphql } from '@commercetools/composable-commerce-test-data/product-selection';

const productOfSelectionModel = ProductOfSelectionGraphql.random().build();
```

This submodel is now used to populate the required `productRefs` field of the ProductSelection GraphQL model, which was previously `null` by default.
