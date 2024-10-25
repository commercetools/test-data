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
  DiscountedPrice,
  type TDiscountedPriceRest,
  type TDiscountedPriceGraphql,
} from '@commercetools-test-data/discounted-price';

const DiscountedPrice = DiscountedPrice.random().build<TDiscountedPrice>();
```
