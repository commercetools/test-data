import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const qq567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .qq567Yz03()
  .build<TProductVariantDraft>();

const skuQQ567YZ2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(qq567Yz03.sku!).quantityOnStock(1000);

export default skuQQ567YZ2023;
