import {
  ChannelDraft,
  type TChannelDraft,
} from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

const supplyChannel = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleDataB2B
  .xx890Op03()
  .build<TProductVariantDraft>();

const populatePreset = <
  TModel extends TInventoryEntryDraftRest | TInventoryEntryDraftGraphql,
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('xx890-op-green-eu-warehouse')
    .sku(variant.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(supplyChannel.key!));
};

export const restPreset = (): TBuilder<TInventoryEntryDraftRest> =>
  populatePreset(InventoryEntryDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TInventoryEntryDraftGraphql> =>
  populatePreset(InventoryEntryDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TInventoryEntryDraft> =>
  populatePreset(InventoryEntryDraft.presets.empty());
