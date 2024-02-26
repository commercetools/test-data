import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const oilFilter01 = ProductVariantDraft.presets.sampleDataB2B
  .oilFilter01()
  .build<TProductVariantDraft>();

const skuOILFILTER = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(oilFilter01.sku!)
    .quantityOnStock(1000);

export default skuOILFILTER;
