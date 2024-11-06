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
  .yy123Qr02()
  .build<TProductVariantDraft>();

const skuYy123QrBlueUsWarehouse = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key('yy123-qr-blue-us-warehouse')
    .sku(variant.sku!)
    .quantityOnStock(999)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(supplyChannel.key!));
export default skuYy123QrBlueUsWarehouse;
