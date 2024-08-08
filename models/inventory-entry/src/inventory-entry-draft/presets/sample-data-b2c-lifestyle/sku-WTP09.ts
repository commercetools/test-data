import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const willowTeapot01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .willowTeapot01()
  .build<TProductVariantDraft>();

const skuWTP09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(willowTeapot01Preset.sku!)
    .quantityOnStock(100);

export default skuWTP09;
