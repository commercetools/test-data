import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const clinkChampagneGlass01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .clinkChampagneGlass01()
    .build<TProductVariantDraft>();

const InventoryChannel = ChannelDraft.presets.sampleDataGoodStore
  .inventoryChannel()
  .build<TChannelDraft>();

const skuCCG02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(clinkChampagneGlass01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(InventoryChannel.key!)
    )
    .quantityOnStock(100);

export default skuCCG02;
