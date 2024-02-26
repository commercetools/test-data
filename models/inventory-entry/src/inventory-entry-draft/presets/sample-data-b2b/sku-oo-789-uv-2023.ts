import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const oo789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .oo789Uv03()
  .build<TProductVariantDraft>();

const skuOO789UV2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(oo789Uv03.sku!).quantityOnStock(1000);

export default skuOO789UV2023;
