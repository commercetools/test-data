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

const z890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .z890Op01()
  .build<TProductVariantDraft>();

const skuZ890Op2015Default = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${z890Op01.sku}-${defaultWarehouse.key}`)
    .sku(z890Op01.sku!)
    .quantityOnStock(1000)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(defaultWarehouse.key)
    );

export default skuZ890Op2015Default;
