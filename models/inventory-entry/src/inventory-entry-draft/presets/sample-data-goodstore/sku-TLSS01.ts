import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const traditionalLSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .traditionalLSeaterSofa01()
    .build<TProductVariantDraft>();

const skuTLSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(traditionalLSeaterSofa01Preset.sku!)
    .quantityOnStock(98);

export default skuTLSS01;
