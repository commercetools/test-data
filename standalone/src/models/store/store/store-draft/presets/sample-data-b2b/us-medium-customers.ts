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
      ProductSelectionSettingDraftRest.presets.usMediumCustomersCatalogProductSelection(),
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
      ProductSelectionSettingDraftGraphql.presets.usMediumCustomersCatalogProductSelection(),
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
      ProductSelectionSettingDraft.presets.usMediumCustomersCatalogProductSelection(),
    ]);
