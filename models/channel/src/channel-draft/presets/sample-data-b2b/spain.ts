import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
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
  TModel extends TChannelDraftRest | TChannelDraftGraphql
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('spain')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Spanien`)
        ['it-IT'](`Spagna`)
        ['nl-NL'](`Spanje`)
        ['fr-FR'](`Espagnole`)
        ['en-AU'](`Spain`)
        ['es-ES'](`España`)
        ['en-GB'](`Spain`)
        ['en-NZ'](`Spain`)
        ['pt-PT'](`Espanha`)
        ['en-US'](`Spain`)
    )
    .roles([roles.ProductDistribution]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
