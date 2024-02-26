import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const h456St02 = ProductVariantDraft.presets.sampleDataB2B
  .h456St02()
  .build<TProductVariantDraft>();

const skuH456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(h456St02.sku!).quantityOnStock(1000);

export default skuH456ST2019;
