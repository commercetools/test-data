import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ee567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .ee567Yz02()
  .build<TProductVariantDraft>();

const skuEE567YZ2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ee567Yz02.sku!).quantityOnStock(1000);

export default skuEE567YZ2019;
