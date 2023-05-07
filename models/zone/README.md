# @commercetools-test-data/zone

This package provides the data model for the commercetools platform `Zone` type

https://docs.commercetools.com/api/projects/zones

# Install

```bash
$ pnpm add -D @commercetools-test-data/zone
```

# Usage

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
