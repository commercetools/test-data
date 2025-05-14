import type { TBuilder } from '@/core';
import { TCtpProductSelectionMode } from '@/graphql-types';
import { LocalizedStringDraft } from '@/models/commons';
import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
  TProductSelectionDraft,
} from '../../../types';
import {
  ProductSelectionDraftRest,
  ProductSelectionDraftGraphql,
  ProductSelectionDraft,
} from '../../index';

function populateBuilder<
  TModel extends TProductSelectionDraftRest | TProductSelectionDraftGraphql,
>(builder: TBuilder<TModel>): TBuilder<TModel> {
  return builder
    .key('default-product-selection')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Standard')
        ['it-IT']('Predefinito')
        ['nl-NL']('Standaard')
        ['fr-FR']('Défaut')
        ['en-AU']('Default')
        ['es-ES']('Predeterminado')
        ['en-GB']('Default')
        ['en-NZ']('Default')
        ['pt-PT']('Padrão')
        ['en-US']('Default')
    )
    .mode(TCtpProductSelectionMode.Individual);
}

export const restPreset = (): TBuilder<TProductSelectionDraftRest> =>
  populateBuilder(ProductSelectionDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TProductSelectionDraftGraphql> =>
  populateBuilder(ProductSelectionDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TProductSelectionDraft> =>
  populateBuilder(ProductSelectionDraft.presets.empty());
