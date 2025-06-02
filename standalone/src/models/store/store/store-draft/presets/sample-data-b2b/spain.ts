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
      ProductSelectionSettingDraftRest.presets.defaultProductSelection(),
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
      ProductSelectionSettingDraftGraphql.presets.defaultProductSelection(),
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
      ProductSelectionSettingDraft.presets.defaultProductSelection(),
    ]);
