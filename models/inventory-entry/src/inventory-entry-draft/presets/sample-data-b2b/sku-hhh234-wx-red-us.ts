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

const usWarehouse = ChannelDraft.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraft>();

const hhh234Wx01 = ProductVariantDraft.presets.sampleDataB2B
  .hhh234Wx01()
  .build<TProductVariantDraft>();

const skuHhh234WxRedUs = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${hhh234Wx01.sku}-${usWarehouse.key}`)
    .sku(hhh234Wx01.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(usWarehouse.key));

export default skuHhh234WxRedUs;