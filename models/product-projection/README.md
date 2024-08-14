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
  ProductProjection,
  type TProductProjection,
  type TProductProjectionRest,
  type TProductProjectionGraphql,
} from '@commercetools-test-data/product-projection';

const productProjection =
  ProductProjection.random().build<TProductProjection>();

// For REST entities
const productProjectionRest =
  ProductProjection.random().buildRest<TProductProjectionRest>();

// For Graphql entities
const productProjectionGraphql =
  ProductProjection.random().buildGraphql<TProductProjectionGraphql>();

// Presets
const happyCowProductProjection = ProductProjection.presets;
happyCowMilkProductProjection().build<TProductProjection>();
```
