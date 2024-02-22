import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const h456St03 = ProductVariantDraft.presets.sampleDataB2B
  .h456St03()
  .build<TProductVariantDraft>();

const skuH456ST2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(h456St03.sku!).quantityOnStock(1000);

export default skuH456ST2023;
