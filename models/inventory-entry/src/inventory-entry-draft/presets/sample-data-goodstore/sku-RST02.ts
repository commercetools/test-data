import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rectangleServingTray01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .rectangleServingTray01()
    .build<TProductVariantDraft>();

const skuRST02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rectangleServingTray01Preset.sku!)
    .quantityOnStock(100);

export default skuRST02;
