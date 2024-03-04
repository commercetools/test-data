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

const ddd890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op03()
  .build<TProductVariantDraft>();

const skuDdd890OpGreenDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${ddd890Op03.sku}-${defaultWarehouse.key}`)
    .sku(ddd890Op03.sku!)
    .quantityOnStock(1000)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(defaultWarehouse.key)
    );

export default skuDdd890OpGreenDefault;
