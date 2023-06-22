# @commercetools-test-data/zone

This package provides data models for the commercetools platform `Zone` representations.

https://docs.commercetools.com/api/projects/zones

# Install

```bash
$ pnpm add -D @commercetools-test-data/zone
```

# Usage

<br>

## Location

```ts
import { Location, type TLocation } from '@commercetools-test-data/zone';

const location = Location.random().build<TLocation>();
```

## Zone

```ts
import {
  Zone,
  ZoneDraft,
  type TZone,
  type TZoneDraft,
} from '@commercetools-test-data/zone';

const zone = Zone.random().build<TZone>();
const zoneDraft = Zone.ZoneDraft.random().build<TZoneDraft>();
```
