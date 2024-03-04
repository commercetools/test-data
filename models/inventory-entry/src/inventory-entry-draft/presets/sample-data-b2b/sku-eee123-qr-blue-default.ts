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

const defaultWarehouse = ChannelDraft.presets.sampleDataB2B
  .defaultWarehouse()
  .build<TChannelDraft>();

const eee123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr02()
  .build<TProductVariantDraft>();

const skuEee123QrBlueDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${eee123Qr02.sku}-${defaultWarehouse.key}`)
    .sku(eee123Qr02.sku!)
    .quantityOnStock(1000)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(defaultWarehouse.key)
    );

export default skuEee123QrBlueDefault;
