import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sallyArmchair01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .sallyArmchair01()
  .build<TProductVariantDraft>();

const skuSARMO034 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sallyArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuSARMO034;
