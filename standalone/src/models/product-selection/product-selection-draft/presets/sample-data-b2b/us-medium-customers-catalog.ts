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
    .key('us-medium-customers-catalog')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US Mittel Kundenkatalog')
        ['it-IT']('Catalogo Clienti Medio USA')
        ['nl-NL']('Catalogus voor Middelgrote Klanten in de VS')
        ['fr-FR']('Catalogue Clients Moyens des États-Unis')
        ['en-AU']('US Medium Customers Catalog')
        ['es-ES']('Catálogo de Clientes Medianos de EE. UU.')
        ['en-GB']('US Medium Customers Catalog')
        ['en-NZ']('US Medium Customers Catalog')
        ['pt-PT']('Catálogo de Clientes Médios dos EUA')
        ['en-US']('US Medium Customers Catalog')
    )
    .mode(TCtpProductSelectionMode.Individual);
}

export const restPreset = (): TBuilder<TProductSelectionDraftRest> =>
  populateBuilder(ProductSelectionDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TProductSelectionDraftGraphql> =>
  populateBuilder(ProductSelectionDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TProductSelectionDraft> =>
  populateBuilder(ProductSelectionDraft.presets.empty());
