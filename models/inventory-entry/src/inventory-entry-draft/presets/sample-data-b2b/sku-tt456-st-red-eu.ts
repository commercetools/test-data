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

const tt456St01 = ProductVariantDraft.presets.sampleDataB2B
  .tt456St01()
  .build<TProductVariantDraft>();

const skuTt456StRedEu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${tt456St01.sku}-${euWarehouse.key}`)
    .sku(tt456St01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuTt456StRedEu;
