import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const d234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .d234Wx03()
  .build<TProductVariantDraft>();

const skuD234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(d234Wx03.sku!).quantityOnStock(1000);

export default skuD234WX2023;
