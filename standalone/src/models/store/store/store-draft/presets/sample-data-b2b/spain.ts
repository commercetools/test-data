import { TBuilder } from '@/core';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductSelectionSetting,
  ProductSelectionSettingGraphql,
  ProductSelectionSettingRest,
} from '../../../../product-selection-setting/index';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { StoreDraft, StoreDraftGraphql, StoreDraftRest } from '../../index';

export const spainRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('spain')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Spain')
    )
    .distributionChannels([KeyReferenceDraft.presets.channel().key('spain')])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('eu-warehouse')])
    .productSelections([
      ProductSelectionSettingRest.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

export const spainGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('spain')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Spain')
    )
    .distributionChannels([KeyReferenceDraft.presets.channel().key('spain')])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('eu-warehouse')])
    .productSelections([
      ProductSelectionSettingGraphql.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

/**
 * @deprecated Use `StoreDraft.presets.spainGraphql` instead.
 */
export const spain = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('spain')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Spain')
    )
    .distributionChannels([KeyReferenceDraft.presets.channel().key('spain')])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('eu-warehouse')])
    .productSelections([
      ProductSelectionSetting.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);
