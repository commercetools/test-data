import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const steelHipFlask01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .steelHipFlask01()
  .build<TProductVariantDraft>();

const skuFLAS094 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(steelHipFlask01Preset.sku!)
    .quantityOnStock(100);

export default skuFLAS094;
