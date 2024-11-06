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
  .inventoryChannel()
  .build<TChannelDraft>();

const variant = ProductVariantDraft.presets.sampleData
  .purpleLandscapePainting01()
  .build<TProductVariantDraft>();

const skuBlp01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(variant.sku!)
    .quantityOnStock(80)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(supplyChannel.key!));
export default skuBlp01;
