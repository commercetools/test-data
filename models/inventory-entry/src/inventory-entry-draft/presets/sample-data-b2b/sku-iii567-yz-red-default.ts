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

const iii567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz01()
  .build<TProductVariantDraft>();

const skuIii567YzRedDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${iii567Yz01.sku}-${defaultWarehouse.key}`)
    .sku(iii567Yz01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: defaultWarehouse.key });

export default skuIii567YzRedDefault;
