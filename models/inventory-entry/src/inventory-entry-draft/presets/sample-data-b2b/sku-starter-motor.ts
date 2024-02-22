import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const starterMotor01 = ProductVariantDraft.presets.sampleDataB2B
  .starterMotor01()
  .build<TProductVariantDraft>();

const skuSTARTERMOTOR = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(starterMotor01.sku!)
    .quantityOnStock(1000);

export default skuSTARTERMOTOR;
