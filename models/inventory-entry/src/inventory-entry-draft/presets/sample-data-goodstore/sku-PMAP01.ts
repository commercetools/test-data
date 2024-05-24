import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const purpleMinimalistAbstractPainting01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .purpleMinimalistAbstractPainting01()
    .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataGoodStore
  .inventoryChannel()
  .build<TChannelDraft>();

const skuPMAP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(purpleMinimalistAbstractPainting01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(91);

export default skuPMAP01;
