import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const variant = ProductVariantDraft.presets.sampleData
  .nalaTwoSeaterSofa06()
  .build<TProductVariantDraft>();

const skuNtss06 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(variant.sku!).quantityOnStock(100);
export default skuNtss06;
