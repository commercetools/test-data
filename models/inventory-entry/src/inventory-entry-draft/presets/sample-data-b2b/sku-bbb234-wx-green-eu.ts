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

const euWarehouse = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const bbb234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .bbb234Wx03()
  .build<TProductVariantDraft>();

const skuBbb234WxGreenEu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${bbb234Wx03.sku}-${euWarehouse.key}`)
    .sku(bbb234Wx03.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(euWarehouse.key));

export default skuBbb234WxGreenEu;
