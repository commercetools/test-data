import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const kk567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .kk567Yz01()
  .build<TProductVariantDraft>();

const skuKK567YZ2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(kk567Yz01.sku!).quantityOnStock(1000);

export default skuKK567YZ2015;