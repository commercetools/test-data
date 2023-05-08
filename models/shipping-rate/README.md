# @commercetools-test-data/shipping-rate

This package provides the data model for the commercetools platform `ShippingRate` type

https://docs.commercetools.com/api/types#centprecisionmoney

# Install

```bash
$ yarn add -D @commercetools-test-data/shipping-rate
```

# Usage

```ts
import type {
  TShippingRate,
  TShippingRateDraft,
} from '@commercetools-test-data/shipping-rate';
import * as ShippingRate from '@commercetools-test-data/shipping-rate';

const shippingRate = ShippingRate.random().build<TShippingRate>();
const shippingRateDraft =
  ShippingRate.ShippingRateDraft.random().build<TShippingRateDraft>();
```
