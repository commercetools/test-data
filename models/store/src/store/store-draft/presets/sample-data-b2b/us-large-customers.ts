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

const usLargeCustomers = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('us-large-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US-Großkunden')
        ['it-IT']('Grandi Clienti degli Stati Uniti')
        ['nl-NL']('Grote Klanten in de VS')
        ['fr-FR']('Grands Clients des États-Unis')
        ['en-AU']('US Large Customers')
        ['es-ES']('Grandes Clientes de EE. UU.')
        ['en-GB']('US Large Customers')
        ['en-NZ']('US Large Customers')
        ['pt-PT']('Grandes Clientes dos EUA')
        ['en-US']('US Large Customers')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-large-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')])
    .productSelections([defaultProductSelectionSetting]);

export default usLargeCustomers;
