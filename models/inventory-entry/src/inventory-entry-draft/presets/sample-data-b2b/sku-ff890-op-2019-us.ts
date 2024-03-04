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

const usWarehouse = ChannelDraft.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraft>();

const ff890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .ff890Op02()
  .build<TProductVariantDraft>();

const skuFf890Op2019Us = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${ff890Op02.sku}-${usWarehouse.key}`)
    .sku(ff890Op02.sku!)
    .quantityOnStock(1000)
    .supplyChannel(KeyReferenceDraft.presets.channel().key(usWarehouse.key));

export default skuFf890Op2019Us;
