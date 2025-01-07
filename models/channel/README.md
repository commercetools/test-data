# @commercetools-test-data/channel

This package provides the data model for the commercetools platform `Channel` type

https://docs.commercetools.com/api/projects/channels

# Install

```bash
$ pnpm add -D @commercetools-test-data/channel
```

# Usage

```ts
import {
  ChannelRest,
  ChannelDraftRest,
  ChannelGraphql,
  ChannelDraftGraphql,
} from '@commercetools-test-data/inventory-entry';

const channelRest = ChannelRest.random().build();
const channelDraftRest = ChannelDraftRest.random().build();

const channelGraphql = ChannelGraphql.random().build();
const channelDraftGraphql = ChannelDraftGraphql.random().build();

// Presets
const withInventorySupplyAndProductDistributionRolesRest =
  ChannelDraftRest.presets
    .withInventorySupplyAndProductDistributionRoles()
    .build();
const withInventorySupplyAndProductDistributionRolesGraphql =
  ChannelDraftGraphql.presets
    .withInventorySupplyAndProductDistributionRoles()
    .build();
```

For backwards compatibility, we still support using the generic data models, but you should consider them legacy as we will be removing them in the future.

```ts
import {
  Channel,
  ChannelDraft,
  type TChannel,
  type TChannelDraft,
} from '@commercetools-test-data/channel';

const channel = Channel.random().build<TChannel>();
const channelDraft = ChannelDraft.random().build<TChannelDraft>();

// Presets
const withInventorySupplyAndProductDistributionRoles = ChannelDraft.presets
  .withInventorySupplyAndProductDistributionRoles()
  .build<TChannelDraft>();
```
