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
  .euWarehouse()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleData
  .s567Uv02()
  .build<TProductVariantDraft>();

const skuS567Uv2019EuWarehouse = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key('s567-uv-2019-eu-warehouse')
    .sku(variant.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(supplyChannel.key!));
export default skuS567Uv2019EuWarehouse;
