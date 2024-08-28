import type { TChannelDraft } from '@commercetools-test-data/channel';
import { ChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cocktailStrainer01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .cocktailStrainer01()
    .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .inventoryChannel()
  .build<TChannelDraft>();

const skuSTRA095 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cocktailStrainer01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(100);

export default skuSTRA095;
