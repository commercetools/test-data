import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import {
  ProductSelectionSettingDraft,
  type TProductSelectionSettingDraft,
} from '../../../../product-selection-setting/index';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const defaultProductSelectionSetting =
  ProductSelectionSettingDraft.presets.sampleDataB2B
    .defaultProductSelection()
    .build<TProductSelectionSettingDraft>();

const spain = (): TStoreDraftBuilder =>
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
    .productSelections([defaultProductSelectionSetting]);

export default spain;
