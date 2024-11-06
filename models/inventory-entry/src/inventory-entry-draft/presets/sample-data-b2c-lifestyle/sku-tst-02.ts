import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const variant = ProductVariantDraft.presets.sampleData
  .teakServingPlatter01()
  .build<TProductVariantDraft>();

const skuTst02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(variant.sku!).quantityOnStock(100);
export default skuTst02;
