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
    ['de-DE']('US-Großkunden')
    ['it-IT']('Grandi Clienti degli Stati Uniti')
    ['nl-NL']('Grote Klanten in de VS')
    ['fr-FR']('Grands Clients des États-Unis')
    ['en-AU']('US Large Customers')
    ['es-ES']('Grandes Clientes de EE. UU.')
    ['en-GB']('US Large Customers')
    ['en-NZ']('US Large Customers')
    ['pt-PT']('Grandes Clientes dos EUA')
    ['en-US']('US Large Customers');
};

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('us-large-customers')
    .name(localize())
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-large-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')]);
};

export const restPreset = (): TBuilder<TStoreDraftRest> =>
  populatePreset(
    StoreDraftRest.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraftRest.presets.sampleDataB2B.defaultProductSelection(),
      ])
  );

export const graphqlPreset = (): TBuilder<TStoreDraftGraphql> =>
  populatePreset(
    StoreDraftGraphql.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraftGraphql.presets.sampleDataB2B.defaultProductSelection(),
      ])
  );

export const compatPreset = (): TBuilder<
  TStoreDraftGraphql | TStoreDraftRest
> =>
  populatePreset(
    StoreDraft.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraft.presets.sampleDataB2B.defaultProductSelection(),
      ])
  );
