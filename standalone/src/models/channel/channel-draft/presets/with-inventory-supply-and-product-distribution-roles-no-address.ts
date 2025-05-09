import { TBuilder } from '../../../../core';
import { roles } from '../../constants';
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
    .address(undefined)
    .roles([roles.InventorySupply, roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.random());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.random());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.random());
