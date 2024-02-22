import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const eee123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr03()
  .build<TProductVariantDraft>();

const skuEEE123QRGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(eee123Qr03.sku!)
    .quantityOnStock(1000);

export default skuEEE123QRGREEN;
