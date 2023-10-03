import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const goldRimmedChampagneGlasses01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .goldRimmedChampagneGlasses01()
    .build<TProductVariantDraft>();

const skuGRCG01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(goldRimmedChampagneGlasses01Preset.sku!)
    .quantityOnStock(0);

export default skuGRCG01;
