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

const defaultWarehouse = ChannelDraft.presets.sampleDataB2B
  .defaultWarehouse()
  .build<TChannelDraft>();

const pp234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .pp234Wx02()
  .build<TProductVariantDraft>();

const skuPp234Wx2019Default = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${pp234Wx02.sku}-${defaultWarehouse.key}`)
    .sku(pp234Wx02.sku!)
    .quantityOnStock(1000)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(defaultWarehouse.key)
    );

export default skuPp234Wx2019Default;
