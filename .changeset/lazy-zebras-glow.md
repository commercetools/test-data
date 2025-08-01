---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new test data model named `ImageDimensions` which can be consumed from the `@commercetools/composable-commerce-test-data/product` entry point.

This is how it can be used:

```ts
import {
  ImageDimensionsGraphql,
  ImageDimensionsRest,
  ImageDimensionsDraftGraphql,
  ImageDimensionsDraftRest,
} from '@commercetools/composable-commerce-test-data/product';

// Creating test data models
const graphqlModel = ImageDimensionsGraphql.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.lineItems)
  .build();
const restModel = ImageDimensionsRest.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.shipping)
  .build();

// There are also some presets to generate test data models with
// some specific sizes
const thumbImageDimensionsGraphql =
  ImageDimensionsGraphql.presets.withThumbSize();
const largeImageDimensionsRest = ImageDimensionsRest.presets.withLargeSize();
```
