import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rusticBowl01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .rusticBowl01()
  .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .inventoryChannel()
  .build<TChannelDraft>();

const skuRB01Channel = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rusticBowl01Preset.sku!)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(inventoryChannel.key!)
    )
    .quantityOnStock(100);

export default skuRB01Channel;
