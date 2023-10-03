import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ivoryLoungeChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .ivoryLoungeChair01()
  .build<TProductVariantDraft>();

const skuILC01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ivoryLoungeChair01Preset.sku!)
    .quantityOnStock(100);

export default skuILC01;
