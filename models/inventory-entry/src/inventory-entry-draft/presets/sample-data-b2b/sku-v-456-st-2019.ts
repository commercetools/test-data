import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const v456St02 = ProductVariantDraft.presets.sampleDataB2B
  .v456St02()
  .build<TProductVariantDraft>();

const skuV456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(v456St02.sku!).quantityOnStock(1000);

export default skuV456ST2019;
