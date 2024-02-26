import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const hh456St01 = ProductVariantDraft.presets.sampleDataB2B
  .hh456St01()
  .build<TProductVariantDraft>();

const skuHH456ST2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(hh456St01.sku!).quantityOnStock(1000);

export default skuHH456ST2015;
