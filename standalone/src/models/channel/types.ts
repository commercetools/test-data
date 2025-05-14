import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpChannel, TCtpChannelDraft } from '@/graphql-types';
import type { TGeometryRest } from '@/models/commons';

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
