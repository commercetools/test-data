import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const a789Bc01 = ProductVariantDraft.presets.sampleDataB2B
  .a789Bc01()
  .build<TProductVariantDraft>();

const skuA789BC2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(a789Bc01.sku!).quantityOnStock(1000);

export default skuA789BC2015;
