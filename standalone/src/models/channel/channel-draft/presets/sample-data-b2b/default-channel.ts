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
    .key('default-channel')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Standard`)
        ['it-IT'](`Predefinito`)
        ['nl-NL'](`Standaard`)
        ['fr-FR'](`Défaut`)
        ['en-AU'](`Default`)
        ['es-ES'](`Predeterminado`)
        ['en-GB'](`Default`)
        ['en-NZ'](`Default`)
        ['pt-PT'](`Padrão`)
        ['en-US'](`Default`)
    )
    .roles([roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
