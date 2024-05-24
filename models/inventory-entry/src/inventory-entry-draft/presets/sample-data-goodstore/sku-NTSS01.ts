import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .nalaTwoSeaterSofa01()
    .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataGoodStore
  .inventoryChannel()
  .build<TChannelDraft>();

const skuNTSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(nalaTwoSeaterSofa01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(97);

export default skuNTSS01;
