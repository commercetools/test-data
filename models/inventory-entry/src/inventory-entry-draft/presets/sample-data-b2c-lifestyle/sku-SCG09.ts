import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sparkleChampagneGlass01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .sparkleChampagneGlass01()
    .build<TProductVariantDraft>();

const skuSCG09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sparkleChampagneGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuSCG09;
