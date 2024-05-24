import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ashenRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .ashenRug01()
  .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataGoodStore
  .inventoryChannel()
  .build<TChannelDraft>();

const skuARG56 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ashenRug01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(100);

export default skuARG56;
