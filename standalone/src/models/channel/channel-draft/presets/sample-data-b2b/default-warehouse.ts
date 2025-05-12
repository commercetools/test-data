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
    .key('default-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Standardlager`)
        ['it-IT'](`Magazzino predefinito`)
        ['nl-NL'](`Standaard magazijn`)
        ['fr-FR'](`Entrepôt par défaut`)
        ['en-AU'](`Default warehouse`)
        ['es-ES'](`Almacén predeterminado`)
        ['en-GB'](`Default warehouse`)
        ['en-NZ'](`Default warehouse`)
        ['pt-PT'](`Armazém padrão`)
        ['en-US'](`Default warehouse`)
    )
    .roles([roles.InventorySupply]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
