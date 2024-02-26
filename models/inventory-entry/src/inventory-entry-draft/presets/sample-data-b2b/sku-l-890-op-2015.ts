import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const l890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .l890Op01()
  .build<TProductVariantDraft>();

const skuL890OP2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(l890Op01.sku!).quantityOnStock(1000);

export default skuL890OP2015;
