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

const euWarehouse = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const pinAndBushingKit01 = ProductVariantDraft.presets.sampleDataB2B
  .pinAndBushingKit01()
  .build<TProductVariantDraft>();

const skuPinAndBushingKitEu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${pinAndBushingKit01.sku}-${euWarehouse.key}`)
    .sku(pinAndBushingKit01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuPinAndBushingKitEu;
