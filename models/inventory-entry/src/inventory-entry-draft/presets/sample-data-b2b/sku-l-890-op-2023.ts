import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const l890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .l890Op03()
  .build<TProductVariantDraft>();

const skuL890OP2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(l890Op03.sku!).quantityOnStock(1000);

export default skuL890OP2023;
