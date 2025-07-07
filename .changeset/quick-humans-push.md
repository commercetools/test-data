---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new preset in `ProductType` test data model called `tshirt` which should help consumers building objects.

Here's an example on how it could be used:

```ts
import { ProductTypeGraphql } from '@commercetools/composable-commerce-test-data/product-type';

const tshirt = ProductTypeGraphql.presets.tshirt().build();
