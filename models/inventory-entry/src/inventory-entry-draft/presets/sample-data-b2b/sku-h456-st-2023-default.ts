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

const h456St03 = ProductVariantDraft.presets.sampleDataB2B
  .h456St03()
  .build<TProductVariantDraft>();

const skuH456St2023Default = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${h456St03.sku}-${defaultWarehouse.key}`)
    .sku(h456St03.sku!)
    .quantityOnStock(1000)
    .supplyChannel(
      KeyReferenceDraft.presets.channel().key(defaultWarehouse.key)
    );

export default skuH456St2023Default;
