import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const classicCoffeeCup01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .classicCoffeeCup01()
    .build<TProductVariantDraft>();

const skuCCC09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(classicCoffeeCup01Preset.sku!)
    .quantityOnStock(99);

export default skuCCC09;
