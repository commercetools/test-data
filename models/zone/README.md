# @commercetools-test-data/zone

This package provides the data model for the commercetools platform `Zone` type

https://docs.commercetools.com/api/projects/zones

# Install

```bash
$ pnpm add -D @commercetools-test-data/zone
```

# Usage

```ts
import type { TZone, TZoneDraft } from '@commercetools-test-data/zone';
import * as Zone from '@commercetools-test-data/zone';

const zone = Zone.random().build<TZone>();
const zoneDraft = Zone.ZoneDraft.random().build<TZoneDraft>();
```
