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

const qq567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .qq567Yz02()
  .build<TProductVariantDraft>();

const skuQq567Yz2019Eu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${qq567Yz02.sku}-${euWarehouse.key}`)
    .sku(qq567Yz02.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(euWarehouse.key));

export default skuQq567Yz2019Eu;
