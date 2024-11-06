import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const variant = ProductVariantDraft.presets.sampleData
  .classicChampagneGlasses01()
  .build<TProductVariantDraft>();

const skuCcg01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(variant.sku!).quantityOnStock(99);
export default skuCcg01;
