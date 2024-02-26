import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const l890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .l890Op02()
  .build<TProductVariantDraft>();

const skuL890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(l890Op02.sku!).quantityOnStock(1000);

export default skuL890OP2019;
