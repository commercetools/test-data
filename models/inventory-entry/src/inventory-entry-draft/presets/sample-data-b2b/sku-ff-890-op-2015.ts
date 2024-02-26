import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ff890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .ff890Op01()
  .build<TProductVariantDraft>();

const skuFF890OP2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ff890Op01.sku!).quantityOnStock(1000);

export default skuFF890OP2015;
