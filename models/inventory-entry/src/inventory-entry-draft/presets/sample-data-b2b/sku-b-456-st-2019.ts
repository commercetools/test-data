import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const b456St02 = ProductVariantDraft.presets.sampleDataB2B
  .b456St02()
  .build<TProductVariantDraft>();

const skuB456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(b456St02.sku!).quantityOnStock(1000);

export default skuB456ST2019;
