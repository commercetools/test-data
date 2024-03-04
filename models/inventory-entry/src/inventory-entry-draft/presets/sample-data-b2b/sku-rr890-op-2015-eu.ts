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

const rr890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .rr890Op01()
  .build<TProductVariantDraft>();

const skuRr890Op2015Eu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${rr890Op01.sku}-${euWarehouse.key}`)
    .sku(rr890Op01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuRr890Op2015Eu;
