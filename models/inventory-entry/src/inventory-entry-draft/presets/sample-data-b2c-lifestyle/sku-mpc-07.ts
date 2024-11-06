import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const variant = ProductVariantDraft.presets.sampleData
  .mayaPillowCover02()
  .build<TProductVariantDraft>();

const skuMpc07 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(variant.sku!).quantityOnStock(100);
export default skuMpc07;
