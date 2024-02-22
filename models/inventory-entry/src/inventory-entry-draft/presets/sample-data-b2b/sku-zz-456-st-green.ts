import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const zz456St03 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St03()
  .build<TProductVariantDraft>();

const skuZZ456STGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(zz456St03.sku!).quantityOnStock(1000);

export default skuZZ456STGREEN;
