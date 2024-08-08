import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ariaRug01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .ariaRug01()
  .build<TProductVariantDraft>();

const skuAAR34 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ariaRug01Preset.sku!)
    .quantityOnStock(100);

export default skuAAR34;
