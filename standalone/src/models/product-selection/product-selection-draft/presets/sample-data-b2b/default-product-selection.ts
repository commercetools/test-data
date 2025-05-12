import { LocalizedStringDraft } from '../../../../commons';
import type { TBuilder } from '../../../../../core';
import { TCtpProductSelectionMode } from '../../../../../graphql-types';
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

export const restPreset = (): TBuilder<TProductSelectionDraftRest> =>
  ProductSelectionDraftRest.presets
    .empty()
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

export const graphqlPreset = (): TBuilder<TProductSelectionDraftGraphql> =>
  ProductSelectionDraftGraphql.presets
    .empty()
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

export const compatPreset = (): TBuilder<TProductSelectionDraft> =>
  ProductSelectionDraft.presets
    .empty()
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
