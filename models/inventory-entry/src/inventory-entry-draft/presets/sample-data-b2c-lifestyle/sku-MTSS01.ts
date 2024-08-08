import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernThreeSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernThreeSeaterSofa01()
    .build<TProductVariantDraft>();

const skuMTSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernThreeSeaterSofa01Preset.sku!)
    .quantityOnStock(94);

export default skuMTSS01;
