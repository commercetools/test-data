import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const fawnArmchair01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .fawnArmchair01()
  .build<TProductVariantDraft>();

const skuFARM05 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(fawnArmchair01Preset.sku!)
    .quantityOnStock(1000);

export default skuFARM05;
