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

export const usLargeCustomersRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
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
    .productSelections([
      ProductSelectionSettingRest.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

export const usLargeCustomersGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
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
    .productSelections([
      ProductSelectionSettingGraphql.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);

/**
 * @deprecated Use usLargeCustomersRest or usLargeCustomersGraphql instead
 */
export const usLargeCustomers = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> =>
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
    .productSelections([
      ProductSelectionSetting.draft.presets.sampleDataB2B.defaultProductSelection(),
    ]);
