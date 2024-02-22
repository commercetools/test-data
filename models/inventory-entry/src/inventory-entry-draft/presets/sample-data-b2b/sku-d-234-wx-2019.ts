import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const d234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .d234Wx02()
  .build<TProductVariantDraft>();

const skuD234WX2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(d234Wx02.sku!).quantityOnStock(1000);

export default skuD234WX2019;
