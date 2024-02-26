import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const e567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .e567Yz01()
  .build<TProductVariantDraft>();

const skuE567YZ2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(e567Yz01.sku!).quantityOnStock(1000);

export default skuE567YZ2015;
