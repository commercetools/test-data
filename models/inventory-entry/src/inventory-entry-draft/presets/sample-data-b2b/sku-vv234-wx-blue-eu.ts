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

const vv234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .vv234Wx02()
  .build<TProductVariantDraft>();

const skuVv234WxBlueEu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${vv234Wx02.sku}-${euWarehouse.key}`)
    .sku(vv234Wx02.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuVv234WxBlueEu;
