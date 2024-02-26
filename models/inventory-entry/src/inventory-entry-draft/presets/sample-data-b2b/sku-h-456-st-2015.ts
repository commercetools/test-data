import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const h456St01 = ProductVariantDraft.presets.sampleDataB2B
  .h456St01()
  .build<TProductVariantDraft>();

const skuH456ST2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(h456St01.sku!).quantityOnStock(1000);

export default skuH456ST2015;
