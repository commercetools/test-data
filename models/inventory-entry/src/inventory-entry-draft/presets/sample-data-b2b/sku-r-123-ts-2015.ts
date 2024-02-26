import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const r123Ts01 = ProductVariantDraft.presets.sampleDataB2B
  .r123Ts01()
  .build<TProductVariantDraft>();

const skuR123TS2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(r123Ts01.sku!).quantityOnStock(1000);

export default skuR123TS2015;
