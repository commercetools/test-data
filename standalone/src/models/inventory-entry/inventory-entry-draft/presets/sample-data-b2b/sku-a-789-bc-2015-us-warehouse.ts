import type { TBuilder } from '@/core';
import { ChannelDraft, type TChannelDraft } from '@/models/channel';
import { KeyReferenceDraft } from '@/models/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@/models/product';
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
  .usWarehouse()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleDataB2B
  .a789Bc01()
  .build<TProductVariantDraft>();

const populatePreset = <
  TModel extends TInventoryEntryDraftRest | TInventoryEntryDraftGraphql,
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('a789-bc-2015-us-warehouse')
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
