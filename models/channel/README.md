# `@commercetools-test-data/channel`

This package provides the data model for the commercetools platform `Channel` type

https://docs.commercetools.com/api/projects/channels

## Install

```bash
$ yarn add -D @commercetools-test-data/channel
```

## Usage

```tsx
import type { TChannel, TChannelDraft } from '@commercetools-test-data/channel';
import * as Channel from '@commercetools-test-data/channel';

const channel = Channel.random().build<TChannel>();
const channelDraft = Channel.ChannelDraft.random().build<TChannelDraft>();
```
