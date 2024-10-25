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

const DiscountedPriceRest =
  DiscountedPriceRest.random().build<TDiscountedPriceRest>();
const DiscountedPriceGraphql =
  DiscountedPriceGraphql.random().build<TDiscountedPriceGraphql>();
const DiscountedPriceDraftRest =
  DiscountedPriceDraftRest.random().build<TDiscountedPriceDraftRest>();
const DiscountedPriceDraftGraphql =
  DiscountedPriceDraftGraphql.random().build<TDiscountedPriceDraftGraphql>();
```
