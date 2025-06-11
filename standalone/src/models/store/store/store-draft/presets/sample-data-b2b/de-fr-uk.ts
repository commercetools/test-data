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
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

const localize = () => {
  return LocalizedStringDraft.presets
    .empty()
    ['de-DE']('Deutschland, Frankreich und Vereinigtes Königreich')
    ['it-IT']('Germania, Francia e Regno Unito')
    ['nl-NL']('Duitsland, Frankrijk en Verenigd Koninkrijk')
    ['fr-FR']('Allemagne, France et Royaume-Uni')
    ['en-AU']('Germany, France and United Kingdom')
    ['es-ES']('Alemania, Francia y Reino Unido')
    ['en-GB']('Germany, France and United Kingdom')
    ['en-NZ']('Germany, France and United Kingdom')
    ['pt-PT']('Alemanha, França e Reino Unido')
    ['en-US']('Germany, France and United Kingdom');
};

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('de-fr-uk')
    .name(localize())
    .distributionChannels([KeyReferenceDraft.presets.channel().key('de-fr-uk')])
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
  ) as TBuilder<TStoreDraftGraphql | TStoreDraftRest>;
