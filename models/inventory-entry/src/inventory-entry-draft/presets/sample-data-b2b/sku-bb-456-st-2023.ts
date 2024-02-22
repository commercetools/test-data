import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bb456St03 = ProductVariantDraft.presets.sampleDataB2B
  .bb456St03()
  .build<TProductVariantDraft>();

const skuBB456ST2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(bb456St03.sku!).quantityOnStock(1000);

export default skuBB456ST2023;
