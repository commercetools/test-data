import { TBuilder } from '@/core';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductSelectionSettingDraft,
  ProductSelectionSettingDraftRest,
  ProductSelectionSettingDraftGraphql,
} from '../../../../index';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { StoreDraft, StoreDraftGraphql, StoreDraftRest } from '../../index';

const localize = () => {
  return LocalizedStringDraft.presets
    .empty()
    ['de-DE']('US-Mittelgroße Kunden')
    ['it-IT']('Clienti Medi degli Stati Uniti')
    ['nl-NL']('Middelgrote Klanten in de VS')
    ['fr-FR']('Clients Moyens des États-Unis')
    ['en-AU']('US Medium Customers')
    ['es-ES']('Clientes Medianos de EE. UU.')
    ['en-GB']('US Medium Customers')
    ['en-NZ']('US Medium Customers')
    ['pt-PT']('Clientes Médios dos EUA')
    ['en-US']('US Medium Customers');
};

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('us-medium-customers')
    .name(localize())
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-medium-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')]);
};

export const restPreset = (): TBuilder<TStoreDraftRest> =>
  populatePreset(
    StoreDraftRest.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraftRest.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
      ])
  );

export const graphqlPreset = (): TBuilder<TStoreDraftGraphql> =>
  populatePreset(
    StoreDraftGraphql.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraftGraphql.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
      ])
  );

export const compatPreset = (): TBuilder<
  TStoreDraftGraphql | TStoreDraftRest
> =>
  populatePreset<TStoreDraftGraphql | TStoreDraftRest>(
    StoreDraft.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraft.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
      ])
  );
