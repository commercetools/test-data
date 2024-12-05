import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type { TGeometryRest } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpChannel,
  TCtpChannelDraft,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TChannelRest` instead
 */
export type TChannel = Channel;
export type TChannelRest = Omit<Channel, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelGraphql = TCtpChannel;

/**
 * @deprecated use `TChannelDraftRest` instead
 */
export type TChannelDraft = ChannelDraft;
export type TChannelDraftRest = Omit<ChannelDraft, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelDraftGraphql = TCtpChannelDraft;

export type TCreateChannelBuilder<
  TChannelModel extends
    | TChannelRest
    | TChannelGraphql
    | TChannelDraftRest
    | TChannelDraftGraphql,
> = () => TBuilder<TChannelModel>;
