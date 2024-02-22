import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ee567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .ee567Yz03()
  .build<TProductVariantDraft>();

const skuEE567YZ2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ee567Yz03.sku!).quantityOnStock(1000);

export default skuEE567YZ2023;
