import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const c789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .c789Uv03()
  .build<TProductVariantDraft>();

const skuC789UV2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(c789Uv03.sku!).quantityOnStock(1000);

export default skuC789UV2023;
