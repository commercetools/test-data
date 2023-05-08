# @commercetools-test-data/zone-rate

This package provides the data model for the commercetools platform `ZoneRate` type

https://docs.commercetools.com/api/types#centprecisionmoney

# Install

```bash
$ yarn add -D @commercetools-test-data/zone-rate
```

# Usage

```ts
import type {
  TZoneRate,
  TZoneRateDraft,
} from '@commercetools-test-data/zone-rate';
import * as ZoneRate from '@commercetools-test-data/zone-rate';

const zoneRate = ZoneRate.random().build<TZoneRate>();
const zoneRateDraft = ZoneRate.ZoneRateDraft.random().build<TZoneRateDraft>();
```
