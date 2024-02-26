import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const r123Ts02 = ProductVariantDraft.presets.sampleDataB2B
  .r123Ts02()
  .build<TProductVariantDraft>();

const skuR123TS2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(r123Ts02.sku!).quantityOnStock(1000);

export default skuR123TS2019;
