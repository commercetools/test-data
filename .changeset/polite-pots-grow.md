---
'@commercetools/composable-commerce-test-data': patch
---

Updated the way constants are exported for the `ProductSelection` models.

We were exporting them independently but we usually add them as part of the models instead.

```ts
// BEFORE
import {
  ProductSelectionGraphql,
  productSelectionMode as productSelectionModeConstants,
} from '@commercetools/composable-commerce-test-data/product-selection';

const productSelectionDraftInclusion = ProductSelectionGraphql.random()
  .mode(productSelectionModeConstants.Individual)
  .build();

// AFTER
import { ProductSelectionGraphql } from '@commercetools/composable-commerce-test-data/product-selection';

const productSelectionDraftInclusion = ProductSelectionGraphql.random()
  .mode(ProductSelectionGraphql.constants.productSelectionMode.Individual)
  .build();
```
