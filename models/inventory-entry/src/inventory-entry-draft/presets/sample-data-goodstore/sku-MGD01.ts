import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernGlamDresser01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .modernGlamDresser01()
    .build<TProductVariantDraft>();

const skuMGD01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernGlamDresser01Preset.sku!)
    .quantityOnStock(76);

export default skuMGD01;
