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
    ['de-DE']('Standard')
    ['it-IT']('Predefinito')
    ['nl-NL']('Standaard')
    ['fr-FR']('Défaut')
    ['en-AU']('Default')
    ['es-ES']('Predeterminado')
    ['en-GB']('Default')
    ['en-NZ']('Default')
    ['pt-PT']('Padrão')
    ['en-US']('Default');
};

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('default-store')
    .name(localize())
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('default-channel'),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key('default-warehouse'),
    ]);
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
