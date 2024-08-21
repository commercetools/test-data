import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TChannel = Channel;
export type TChannelDraft = ChannelDraft;

export type TChannelDraftGraphql = Omit<
  TChannelDraft,
  'name' | 'description'
> & {
  name?: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql;
};

export type TChannelGraphql = Omit<
  TChannel,
  // In GraphQL, these properties have different shapes.
  'name' | 'description' | 'createdBy' | 'lastModifiedBy'
> & {
  __typename: 'Channel';
  createdBy?: TClientLoggingGraphql;
  lastModifiedBy?: TClientLoggingGraphql;
  name?: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};

export type TChannelBuilder = TBuilder<Channel>;
export type TChannelDraftBuilder = TBuilder<ChannelDraft>;
export type TCreateChannelBuilder = () => TChannelBuilder;
export type TCreateChannelDraftBuilder = () => TChannelDraftBuilder;
