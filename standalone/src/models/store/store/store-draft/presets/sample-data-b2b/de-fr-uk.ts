import { TBuilder } from '@/core';
import { ChannelDraft, type TChannelDraft } from '../../../../../channel';
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

const deFrUkChannel = ChannelDraft.presets.sampleDataB2B
  .deFrUk()
  .build<TChannelDraft>();
const euWarehouseChannel = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

export const deFrUkRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Germany, France and United Kingdom')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key(deFrUkChannel.key),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key),
    ])
    .productSelections([
      ProductSelectionSettingDraftRest.presets.defaultProductSelection(),
    ]);

export const deFrUkGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Germany, France and United Kingdom')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key(deFrUkChannel.key),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key),
    ])
    .productSelections([
      ProductSelectionSettingDraftGraphql.presets.defaultProductSelection(),
    ]);

/**
 * @deprecated Use `deFrUkRest` or `deFrUkGraphql` instead
 */
export const deFrUk = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
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
        ['en-US']('Germany, France and United Kingdom')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key(deFrUkChannel.key),
    ])
    .supplyChannels([
      KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key),
    ])
    .productSelections([
      ProductSelectionSettingDraft.presets.defaultProductSelection(),
    ]);
