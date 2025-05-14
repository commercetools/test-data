import type { TBuilder } from '../../../../../core';
import { ChannelDraft, type TChannelDraft } from '../../../../channel';
import { KeyReferenceDraft } from '../../../../commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '../../../../product';
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
  .defaultWarehouse()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleDataB2B
  .uu789Uv03()
  .build<TProductVariantDraft>();

const populatePreset = <
  TModel extends TInventoryEntryDraftRest | TInventoryEntryDraftGraphql,
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('uu789-uv-green-default-warehouse')
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
