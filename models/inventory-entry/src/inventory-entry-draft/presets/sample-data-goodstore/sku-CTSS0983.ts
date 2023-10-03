import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cottonTwoSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .cottonTwoSeaterSofa01()
    .build<TProductVariantDraft>();

const skuCTSS0983 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cottonTwoSeaterSofa01Preset.sku!)
    .quantityOnStock(99);

export default skuCTSS0983;
