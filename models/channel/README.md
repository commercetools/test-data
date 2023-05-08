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
  .build<TCategoryDraft>();
```
