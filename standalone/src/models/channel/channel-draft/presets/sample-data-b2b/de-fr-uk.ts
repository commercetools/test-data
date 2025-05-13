import type { TBuilder } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
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
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Deutschland, Frankreich und Vereinigtes Königreich`)
        ['it-IT'](`Germania, Francia e Regno Unito`)
        ['nl-NL'](`Duitsland, Frankrijk en Verenigd Koninkrijk`)
        ['fr-FR'](`Allemagne, France et Royaume-Uni`)
        ['en-AU'](`Germany, France and United Kingdom`)
        ['es-ES'](`Alemania, Francia y Reino Unido`)
        ['en-GB'](`Germany, France and United Kingdom`)
        ['en-NZ'](`Germany, France and United Kingdom`)
        ['pt-PT'](`Alemanha, França e Reino Unido`)
        ['en-US'](`Germany, France and United Kingdom`)
    )
    .roles([roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
