import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const classicServingTray01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .classicServingTray01()
    .build<TProductVariantDraft>();

const skuCST01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(classicServingTray01Preset.sku!)
    .quantityOnStock(100);

export default skuCST01;
