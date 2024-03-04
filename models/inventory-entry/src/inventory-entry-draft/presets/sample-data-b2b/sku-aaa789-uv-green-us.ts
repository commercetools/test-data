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

const aaa789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .aaa789Uv03()
  .build<TProductVariantDraft>();

const skuAaa789UvGreenUs = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${aaa789Uv03.sku}-${usWarehouse.key}`)
    .sku(aaa789Uv03.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(usWarehouse.key));

export default skuAaa789UvGreenUs;
