import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .nalaTwoSeaterSofa01()
    .build<TProductVariantDraft>();

const skuNTSS01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(nalaTwoSeaterSofa01Preset.sku!)
    .quantityOnStock(97);

export default skuNTSS01;
