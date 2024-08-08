import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const stoutBeerGlass01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .stoutBeerGlass01()
    .build<TProductVariantDraft>();

const skuSBG09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(stoutBeerGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuSBG09;
