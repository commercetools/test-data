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

const v456St01 = ProductVariantDraft.presets.sampleDataB2B
  .v456St01()
  .build<TProductVariantDraft>();

const skuV456St2015Us = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${v456St01.sku}-${usWarehouse.key}`)
    .sku(v456St01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: usWarehouse.key });

export default skuV456St2015Us;
