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

export const defaultStoreRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('default-store')
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
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('default-channel'),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key('default-warehouse'),
    ])
    .productSelections([
      ProductSelectionSettingDraftRest.presets.defaultProductSelection(),
    ]);

export const defaultStoreGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('default-store')
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
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('default-channel'),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key('default-warehouse'),
    ])
    .productSelections([
      ProductSelectionSettingDraftGraphql.presets.defaultProductSelection(),
    ]);

/**
 * @deprecated Use `defaultStoreRest` or `defaultStoreGraphql` instead
 */
export const defaultStore = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> =>
  StoreDraft.presets
    .empty()
    .key('default-store')
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
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('default-channel'),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key('default-warehouse'),
    ])
    .productSelections([
      ProductSelectionSettingDraft.presets.defaultProductSelection(),
    ]);
