import { TBuilder } from '@/core';
import { ChannelDraft, type TChannelDraft } from '../../../../../channel';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import { ProductSelectionSettingDraft } from '../../../../product-selection-setting/index';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import * as StoreDraft from '../../index';

const deFrUkChannel = ChannelDraft.presets.sampleDataB2B
  .deFrUk()
  .build<TChannelDraft>();
const euWarehouseChannel = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const deFrUk = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
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
      ProductSelectionSettingDraft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

export default deFrUk;
