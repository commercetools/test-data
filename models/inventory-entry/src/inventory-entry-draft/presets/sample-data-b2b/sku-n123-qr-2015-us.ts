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

const n123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .n123Qr01()
  .build<TProductVariantDraft>();

const skuN123Qr2015Us = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${n123Qr01.sku}-${usWarehouse.key}`)
    .sku(n123Qr01.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(usWarehouse.key));

export default skuN123Qr2015Us;
