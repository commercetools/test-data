import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const traditionalThreeSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .traditionalThreeSeaterSofa01()
    .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataGoodStore
  .inventoryChannel()
  .build<TChannelDraft>();

const skuTTSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(traditionalThreeSeaterSofa01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(76);

export default skuTTSS01;
