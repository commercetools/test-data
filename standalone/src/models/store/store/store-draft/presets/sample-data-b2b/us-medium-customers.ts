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

export const usMediumCustomersRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('us-medium-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US-Mittelgroße Kunden')
        ['it-IT']('Clienti Medi degli Stati Uniti')
        ['nl-NL']('Middelgrote Klanten in de VS')
        ['fr-FR']('Clients Moyens des États-Unis')
        ['en-AU']('US Medium Customers')
        ['es-ES']('Clientes Medianos de EE. UU.')
        ['en-GB']('US Medium Customers')
        ['en-NZ']('US Medium Customers')
        ['pt-PT']('Clientes Médios dos EUA')
        ['en-US']('US Medium Customers')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-medium-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')])
    .productSelections([
      ProductSelectionSettingRest.draft.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
    ]);

export const usMediumCustomersGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('us-medium-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US-Mittelgroße Kunden')
        ['it-IT']('Clienti Medi degli Stati Uniti')
        ['nl-NL']('Middelgrote Klanten in de VS')
        ['fr-FR']('Clients Moyens des États-Unis')
        ['en-AU']('US Medium Customers')
        ['es-ES']('Clientes Medianos de EE. UU.')
        ['en-GB']('US Medium Customers')
        ['en-NZ']('US Medium Customers')
        ['pt-PT']('Clientes Médios dos EUA')
        ['en-US']('US Medium Customers')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-medium-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')])
    .productSelections([
      ProductSelectionSettingGraphql.draft.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
    ]);

export const usMediumCustomers = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> =>
  StoreDraft.presets
    .empty()
    .key('us-medium-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US-Mittelgroße Kunden')
        ['it-IT']('Clienti Medi degli Stati Uniti')
        ['nl-NL']('Middelgrote Klanten in de VS')
        ['fr-FR']('Clients Moyens des États-Unis')
        ['en-AU']('US Medium Customers')
        ['es-ES']('Clientes Medianos de EE. UU.')
        ['en-GB']('US Medium Customers')
        ['en-NZ']('US Medium Customers')
        ['pt-PT']('Clientes Médios dos EUA')
        ['en-US']('US Medium Customers')
    )
    .distributionChannels([
      KeyReferenceDraft.presets.channel().key('us-medium-customers'),
    ])
    .supplyChannels([KeyReferenceDraft.presets.channel().key('us-warehouse')])
    .productSelections([
      ProductSelectionSetting.draft.presets.sampleDataB2B.usMediumCustomersCatalogProductSelection(),
    ]);
