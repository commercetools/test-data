import {
  ChannelDraft,
  type TChannelDraft,
} from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const supplyChannel = ChannelDraft.presets.sampleData
  .usWarehouse()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleData
  .oo789Uv03()
  .build<TProductVariantDraft>();

const skuOo789Uv2023UsWarehouse = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key('oo789-uv-2023-us-warehouse')
    .sku(variant.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(supplyChannel.key!));
export default skuOo789Uv2023UsWarehouse;
