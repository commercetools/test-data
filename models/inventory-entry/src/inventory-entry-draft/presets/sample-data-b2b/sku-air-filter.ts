import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const airFilter01 = ProductVariantDraft.presets.sampleDataB2B
  .airFilter01()
  .build<TProductVariantDraft>();

const skuAIRFILTER = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(airFilter01.sku!)
    .quantityOnStock(1000);

export default skuAIRFILTER;
