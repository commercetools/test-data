import { TBuilder } from '../../../../core';
import type {
  TChannelDraft,
  TChannelDraftGraphql,
  TChannelDraftRest,
} from '../../types';
import { ChannelDraft, ChannelDraftGraphql, ChannelDraftRest } from '../index';

const populatePreset = <
  TModel extends TChannelDraftGraphql | TChannelDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .roles(undefined)
    .name(undefined)
    .description(undefined)
    .address(undefined)
    .custom(undefined)
    .geoLocation(undefined);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.random());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.random());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.random());
