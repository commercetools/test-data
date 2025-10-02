---
'@commercetools/composable-commerce-test-data': minor
---

## New Shipping Rate Price Tier Models

We're introducing new shipping rate price tier models that provide support for mocking different types of shipping rate pricing tiers:

```ts
import {
  CartClassificationPriceTierDraftRest,
  CartValuePriceTierDraftRest,
  CartScorePriceTierDraftRest,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const cartClassificationTier =
  CartClassificationPriceTierDraftRest.random().build();
const cartValueTier = CartValuePriceTierDraftRest.random().build();
const cartScoreTier = CartScorePriceTierDraftRest.random().build();
```

```ts
import {
  CartClassificationPriceTierGraphql,
  CartValuePriceTierGraphql,
  CartScorePriceTierGraphql,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const cartClassificationTier =
  CartClassificationPriceTierGraphql.random().build();
const cartValueTier = CartValuePriceTierGraphql.random().build();
const cartScoreTier = CartScorePriceTierGraphql.random().build();
```

## Migrated Shipping Rate Model

The shipping rate models have been migrated to the new model structure:

```ts
import {
  ShippingRateRest,
  ShippingRateGraphql,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const restShippingRate = ShippingRateRest.random().build();
const graphqlShippingRate = ShippingRateGraphql.random().build();
```

## Migrated Shipping Rate Draft Model

The shipping rate draft models have been migrated with enhanced preset support:

```ts
import {
  ShippingRateDraftRest,
  ShippingRateDraftGraphql,
} from '@commercetools/composable-commerce-test-data/shipping-method';

const restDraft = ShippingRateDraftRest.random().build();
const graphqlDraft = ShippingRateDraftGraphql.random().build();
```
