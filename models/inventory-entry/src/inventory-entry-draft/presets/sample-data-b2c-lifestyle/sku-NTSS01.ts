import type { TChannelDraft } from '@commercetools-test-data/channel';
import { ChannelDraft } from '@commercetools-test-data/channel';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .nalaTwoSeaterSofa01()
    .build<TProductVariantDraft>();

const inventoryChannel = ChannelDraft.presets.sampleDataB2CLifestyle
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
