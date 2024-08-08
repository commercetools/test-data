import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const doubleSidedShotGlass01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .doubleSidedShotGlass01()
    .build<TProductVariantDraft>();

const skuSHOT095 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(doubleSidedShotGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuSHOT095;
