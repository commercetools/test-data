---
'@commercetools/composable-commerce-test-data': patch
---

We're adjusting the way we export the `Channel` data model builders.

There was an inconsistency in the way the compatibility models where exported which allowed consumers wanting to use the `ChannelDraft` builder like this:

```
import * as Channel from '@commercetools/composable-commerce-test-data/channel';

const draftModel = Channel.ChannelDraft.random();
```

After the refactor this is no longer possible and consumers should use the expected pattern:

```
import { ChannelDraft } from '@commercetools/composable-commerce-test-data/channel';

const draftModel = ChannelDraft.random();
```
