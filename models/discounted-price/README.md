# @commercetools-test-data/discounted-price

This package includes provides the data model for the commercetools platform `DiscountedPrice` representations

https://docs.commercetools.com/api/types#discountedprice

# Install

```bash
$ pnpm add -D @commercetools-test-data/discounted-price
```

# Usage

```ts
import type {
  DiscountedPriceRest,
  DiscountedPriceGraphql,
  DiscountedPriceDraftRest,
  DiscountedPriceDraftGraphql,
  type TDiscountedPriceRest,
  type TDiscountedPriceGraphql,
  type TDiscountedPriceDraftRest,
  type TDiscountedPriceDraftGraphql,
} from '@commercetools-test-data/discounted-price';

const DiscountedPriceRestModel =
  DiscountedPriceRest.random().build<TDiscountedPriceRest>();
const DiscountedPriceGraphqlModel =
  DiscountedPriceGraphql.random().build<TDiscountedPriceGraphql>();
const DiscountedPriceDraftRestModel =
  DiscountedPriceDraftRest.random().build<TDiscountedPriceDraftRest>();
const DiscountedPriceDraftGraphqlModel =
  DiscountedPriceDraftGraphql.random().build<TDiscountedPriceDraftGraphql>();
```
