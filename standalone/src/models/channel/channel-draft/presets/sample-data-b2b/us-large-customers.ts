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
    .key('us-large-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Große Kunden im Vereinigten Staaten`)
        ['it-IT'](`Grandi Clienti USA`)
        ['nl-NL'](`VS Grote Klanten`)
        ['fr-FR'](`Clients Importants aux États-Unis`)
        ['en-AU'](`US Large Customers`)
        ['es-ES'](`Clientes Grandes de Estados Unidos`)
        ['en-GB'](`US Large Customers`)
        ['en-NZ'](`US Large Customers`)
        ['pt-PT'](`Grandes Clientes EUA`)
        ['en-US'](`US Large Customers`)
    )
    .roles([roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
