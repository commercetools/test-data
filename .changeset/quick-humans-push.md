---
'@commercetools/composable-commerce-test-data': minor
---

### Additions

We're introducing a new preset in `Product Type` test data model which should help consumers building objects.

#### LineItem

New `tshirt` preset which populates all the model properties.
Example:

```ts
import { ProductTypeGraphQl } from '@commercetools/composable-commerce-test-data/product-type';

const tshirt = ProductType.presets.tshirt().buildGraphql();
```
