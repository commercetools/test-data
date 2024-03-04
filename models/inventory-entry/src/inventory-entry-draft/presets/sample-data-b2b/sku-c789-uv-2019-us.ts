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

const c789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .c789Uv02()
  .build<TProductVariantDraft>();

const skuC789Uv2019Us = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${c789Uv02.sku}-${usWarehouse.key}`)
    .sku(c789Uv02.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: usWarehouse.key });

export default skuC789Uv2019Us;
