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

const defaultWarehouse = ChannelDraft.presets.sampleDataB2B
  .defaultWarehouse()
  .build<TChannelDraft>();

const ccc567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .ccc567Yz03()
  .build<TProductVariantDraft>();

const skuCcc567YzGreenDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${ccc567Yz03.sku}-${defaultWarehouse.key}`)
    .sku(ccc567Yz03.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: defaultWarehouse.key });

export default skuCcc567YzGreenDefault;
