# @commercetools-test-data/product-projection

This package provides the data model for the commercetools platform `ProductProjection` type

https://docs.commercetools.com/api/projects/productProjections

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-projection
```

# Usage

```ts
import {
  ProductProjectionRest,
  ProductProjectionGraphql,
} from '@commercetools-test-data/product-projection';

// For REST entities
const productProjectionRest = ProductProjectionRest.random().build();

// For Graphql entities
const productProjectionGraphql = ProductProjectionGraphql.random().build();

// Presets
const happyCowProductProjectionRest = ProductProjectionRest.presets
  .happyCowMilk()
  .build();
const happyCowProductProjectionGraphql = ProductProjectionGraphql.presets
  .happyCowMilk()
  .build();
```
