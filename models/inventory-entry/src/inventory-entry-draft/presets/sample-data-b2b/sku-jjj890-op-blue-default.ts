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

const jjj890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op02()
  .build<TProductVariantDraft>();

const skuJjj890OpBlueDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${jjj890Op02.sku}-${defaultWarehouse.key}`)
    .sku(jjj890Op02.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: defaultWarehouse.key });

export default skuJjj890OpBlueDefault;
