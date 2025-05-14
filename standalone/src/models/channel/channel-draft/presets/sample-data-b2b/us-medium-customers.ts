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
    .key('us-medium-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Mittelgroße Kunden im Vereinigten Staaten`)
        ['it-IT'](`Clienti Medi USA`)
        ['nl-NL'](`VS Middelgrote Klanten`)
        ['fr-FR'](`Clients Moyens aux États-Unis`)
        ['en-AU'](`US Medium Customers`)
        ['es-ES'](`Clientes Medianos de Estados Unidos`)
        ['en-GB'](`US Medium Customers`)
        ['en-NZ'](`US Medium Customers`)
        ['pt-PT'](`Clientes Médios EUA`)
        ['en-US'](`US Medium Customers`)
    )
    .roles([roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
