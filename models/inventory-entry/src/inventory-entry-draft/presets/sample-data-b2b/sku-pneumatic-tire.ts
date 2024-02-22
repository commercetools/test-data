import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const pneumaticTire01 = ProductVariantDraft.presets.sampleDataB2B
  .pneumaticTire01()
  .build<TProductVariantDraft>();

const skuPNEUMATICTIRE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(pneumaticTire01.sku!)
    .quantityOnStock(1000);

export default skuPNEUMATICTIRE;
