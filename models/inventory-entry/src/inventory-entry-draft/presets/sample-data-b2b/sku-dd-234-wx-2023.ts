import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const dd234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .dd234Wx03()
  .build<TProductVariantDraft>();

const skuDD234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(dd234Wx03.sku!).quantityOnStock(1000);

export default skuDD234WX2023;
