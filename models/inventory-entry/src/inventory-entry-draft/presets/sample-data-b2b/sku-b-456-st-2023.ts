import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const b456St03 = ProductVariantDraft.presets.sampleDataB2B
  .b456St03()
  .build<TProductVariantDraft>();

const skuB456ST2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(b456St03.sku!).quantityOnStock(1000);

export default skuB456ST2023;
