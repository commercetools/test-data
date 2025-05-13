import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import { ProductSelectionSettingDraft } from '../../../../product-selection-setting/index';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const defaultStore = (): TStoreDraftBuilder =>
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
      ProductSelectionSettingDraft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

export default defaultStore;
