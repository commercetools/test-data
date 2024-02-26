import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const hh456St02 = ProductVariantDraft.presets.sampleDataB2B
  .hh456St02()
  .build<TProductVariantDraft>();

const skuHH456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(hh456St02.sku!).quantityOnStock(1000);

export default skuHH456ST2019;
