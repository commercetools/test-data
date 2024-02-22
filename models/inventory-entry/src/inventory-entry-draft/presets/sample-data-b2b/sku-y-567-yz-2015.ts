import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const y567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .y567Yz01()
  .build<TProductVariantDraft>();

const skuY567YZ2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(y567Yz01.sku!).quantityOnStock(1000);

export default skuY567YZ2015;
