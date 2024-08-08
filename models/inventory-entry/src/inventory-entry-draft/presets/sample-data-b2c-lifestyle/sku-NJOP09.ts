import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const wilmaChair01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .wilmaChair01()
  .build<TProductVariantDraft>();

const skuNJOP09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(wilmaChair01Preset.sku!)
    .quantityOnStock(1000);

export default skuNJOP09;
