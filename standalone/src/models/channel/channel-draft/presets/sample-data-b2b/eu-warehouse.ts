import type { TBuilder } from '../../../../../core';
import { LocalizedStringDraft } from '../../../../commons';
import { roles } from '../../../constants';
import type {
  TChannelDraft,
  TChannelDraftGraphql,
  TChannelDraftRest,
} from '../../../types';
import {
  ChannelDraft,
  ChannelDraftGraphql,
  ChannelDraftRest,
} from '../../index';

const populatePreset = <
  TModel extends TChannelDraftRest | TChannelDraftGraphql,
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('eu-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Europalager`)
        ['it-IT'](`Magazzino Europa`)
        ['nl-NL'](`Europa magazijn`)
        ['fr-FR'](`Entrepôt Europe`)
        ['en-AU'](`Europe warehouse`)
        ['es-ES'](`Almacén Europa`)
        ['en-GB'](`Europe warehouse`)
        ['en-NZ'](`Europe warehouse`)
        ['pt-PT'](`Armazém Europa`)
        ['en-US'](`Europe warehouse`)
    )
    .roles([roles.InventorySupply]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
