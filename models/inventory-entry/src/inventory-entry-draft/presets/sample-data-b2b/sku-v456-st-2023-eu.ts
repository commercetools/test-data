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

const v456St03 = ProductVariantDraft.presets.sampleDataB2B
  .v456St03()
  .build<TProductVariantDraft>();

const skuV456St2023Eu = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${v456St03.sku}-${euWarehouse.key}`)
    .sku(v456St03.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(euWarehouse.key));

export default skuV456St2023Eu;