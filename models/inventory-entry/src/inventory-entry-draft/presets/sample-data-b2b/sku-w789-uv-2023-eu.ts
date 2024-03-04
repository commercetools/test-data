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

const w789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .w789Uv03()
  .build<TProductVariantDraft>();

const skuW789Uv2023Eu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${w789Uv03.sku}-${euWarehouse.key}`)
    .sku(w789Uv03.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: euWarehouse.key });

export default skuW789Uv2023Eu;
