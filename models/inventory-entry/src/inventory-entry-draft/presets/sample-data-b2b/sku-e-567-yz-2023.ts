import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const e567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .e567Yz03()
  .build<TProductVariantDraft>();

const skuE567YZ2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(e567Yz03.sku!).quantityOnStock(1000);

export default skuE567YZ2023;
