# @commercetools-test-data/shipping-method

This package provides the data models for the commercetools platform `Shipping Method` representations

https://docs.commercetools.com/api/projects/shippingMethods#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/shipping-method
```

# Usage

## ShippingMethod

```ts
import type { TShippingMethod } from '@commercetools-test-data/shipping-method';
import { ShippingMethod } from '@commercetools-test-data/shipping-method';

const shippingMethod = ShippingMethod.random().build<TShippingMethod>();
const shippingMethodDraft =
  ShippingMethodDraft.random().build<TShippingMethodDraft>();
```

## ShippingRate

```ts
import type { TShippingRate } from '@commercetools-test-data/shipping-method';
import { ShippingRate } from '@commercetools-test-data/shipping-method';

const shippingRate = ShippingRate.random().build<TShippingRate>();
const shippingRateDraft =
  ShippingRateDraft.random().build<TShippingRateDraft>();
```

## ZoneRate

```ts
import type { TZoneRate } from '@commercetools-test-data/shipping-method';
import { ZoneRate } from '@commercetools-test-data/shipping-method';

const zoneRate = ZoneRate.random().build<TZoneRate>();
const zoneRateDraft = ZoneRateDraft.random().build<TZoneRateDraft>();
```
