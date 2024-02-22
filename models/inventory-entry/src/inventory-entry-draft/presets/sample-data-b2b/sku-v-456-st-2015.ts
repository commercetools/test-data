import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const v456St01 = ProductVariantDraft.presets.sampleDataB2B
  .v456St01()
  .build<TProductVariantDraft>();

const skuV456ST2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(v456St01.sku!).quantityOnStock(1000);

export default skuV456ST2015;
