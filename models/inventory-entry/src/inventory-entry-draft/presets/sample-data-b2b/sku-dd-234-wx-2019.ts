import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const dd234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .dd234Wx02()
  .build<TProductVariantDraft>();

const skuDD234WX2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(dd234Wx02.sku!).quantityOnStock(1000);

export default skuDD234WX2019;
