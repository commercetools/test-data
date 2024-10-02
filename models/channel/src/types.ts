import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TGeometryGraphql,
  TGeometryRest,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

/**
 * @deprecated use `TChannelRest` instead
 */
export type TChannel = Channel;
export type TChannelRest = Omit<Channel, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelGraphql = Omit<
  Channel,
  // In GraphQL, these properties have different shapes.
  'name' | 'description' | 'createdBy' | 'lastModifiedBy' | 'geoLocation'
> & {
  __typename: 'Channel';
  createdBy?: TClientLoggingGraphql;
  lastModifiedBy?: TClientLoggingGraphql;
  name?: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  geoLocation?: TGeometryGraphql;
};

/**
 * @deprecated use `TChannelDraftRest` instead
 */
export type TChannelDraft = ChannelDraft;
export type TChannelDraftRest = Omit<ChannelDraft, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelDraftGraphql = Omit<
  ChannelDraft,
  'name' | 'description' | 'geoLocation'
> & {
  name?: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql;
  geoLocation?: TGeometryGraphql;
  __typename: 'ChannelDraft';
};

// export type TChannelBuilder = TBuilder<Channel>;
// export type TChannelDraftBuilder = TBuilder<ChannelDraft>;
// export type TCreateChannelDraftBuilder = () => TChannelDraftBuilder;

export type TCreateChannelBuilder<
  TChannelModel extends
    | TChannelRest
    | TChannelGraphql
    | TChannelDraftRest
    | TChannelDraftGraphql
> = () => TBuilder<TChannelModel>;
