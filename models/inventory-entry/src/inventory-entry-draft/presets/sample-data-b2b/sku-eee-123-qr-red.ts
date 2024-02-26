import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const eee123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr01()
  .build<TProductVariantDraft>();

const skuEEE123QRRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(eee123Qr01.sku!)
    .quantityOnStock(1000);

export default skuEEE123QRRED;
