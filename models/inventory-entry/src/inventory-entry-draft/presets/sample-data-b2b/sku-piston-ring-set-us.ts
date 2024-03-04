import {
  ChannelDraft,
  type TChannelDraft,
} from '@commercetools-test-data/channel';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const usWarehouse = ChannelDraft.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraft>();

const pistonRingSet01 = ProductVariantDraft.presets.sampleDataB2B
  .pistonRingSet01()
  .build<TProductVariantDraft>();

const skuPistonRingSetUs = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${pistonRingSet01.sku}-${usWarehouse.key}`)
    .sku(pistonRingSet01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: usWarehouse.key });

export default skuPistonRingSetUs;
