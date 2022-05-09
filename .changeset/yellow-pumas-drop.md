---
'@commercetools-test-data/commons': minor
---

Add address draft preset.

```ts
import { Address, type TAddress } from '@commercetools-test-data/commons';

const addressDraft = Address.presets.draft().build<TAddress>();
```
