import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const doubleWalledEspressoGlass01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .doubleWalledEspressoGlass01()
    .build<TProductVariantDraft>();

const skuDWEG09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(doubleWalledEspressoGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuDWEG09;
