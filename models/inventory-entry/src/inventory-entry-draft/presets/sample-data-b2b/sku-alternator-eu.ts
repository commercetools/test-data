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

const euWarehouse = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const alternator01 = ProductVariantDraft.presets.sampleDataB2B
  .alternator01()
  .build<TProductVariantDraft>();

const skuAlternatorEu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${alternator01.sku}-${euWarehouse.key}`)
    .sku(alternator01.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(euWarehouse.key));

export default skuAlternatorEu;
