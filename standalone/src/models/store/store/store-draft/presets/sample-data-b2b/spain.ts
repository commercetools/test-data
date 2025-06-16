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
    ['de-DE']('Spanien')
    ['it-IT']('Spagna')
    ['nl-NL']('Spanje')
    ['fr-FR']('Espagnole')
    ['en-AU']('Spain')
    ['es-ES']('España')
    ['en-GB']('Spain')
    ['en-NZ']('Spain')
    ['pt-PT']('Espanha')
    ['en-US']('Spain');
};

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('spain')
    .name(localize())
    .distributionChannels([KeyReferenceDraft.presets.channel().key('spain')])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('eu-warehouse')]);
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
  populatePreset<TStoreDraftGraphql | TStoreDraftRest>(
    StoreDraft.presets
      .empty()
      .productSelections([
        ProductSelectionSettingDraft.presets.sampleDataB2B.defaultProductSelection(),
      ])
  );
