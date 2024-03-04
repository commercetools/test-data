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

const qq567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .qq567Yz03()
  .build<TProductVariantDraft>();

const skuQq567Yz2023Eu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${qq567Yz03.sku}-${euWarehouse.key}`)
    .sku(qq567Yz03.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuQq567Yz2023Eu;
