import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const zz456St01 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St01()
  .build<TProductVariantDraft>();

const skuZZ456STRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(zz456St01.sku!).quantityOnStock(1000);

export default skuZZ456STRED;
