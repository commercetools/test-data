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

const kk567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .kk567Yz02()
  .build<TProductVariantDraft>();

const skuKk567Yz2019Default = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${kk567Yz02.sku}-${defaultWarehouse.key}`)
    .sku(kk567Yz02.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: defaultWarehouse.key });

export default skuKk567Yz2019Default;
