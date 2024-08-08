import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const classicBeerMug01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .classicBeerMug01()
    .build<TProductVariantDraft>();

const skuCBM03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(classicBeerMug01Preset.sku!)
    .quantityOnStock(100);

export default skuCBM03;
