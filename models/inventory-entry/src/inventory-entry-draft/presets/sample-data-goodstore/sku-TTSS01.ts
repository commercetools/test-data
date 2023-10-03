import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const traditionalThreeSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .traditionalThreeSeaterSofa01()
    .build<TProductVariantDraft>();

const skuTTSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(traditionalThreeSeaterSofa01Preset.sku!)
    .quantityOnStock(76);

export default skuTTSS01;
