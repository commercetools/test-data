import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const eee123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr02()
  .build<TProductVariantDraft>();

const skuEEE123QRBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(eee123Qr02.sku!)
    .quantityOnStock(1000);

export default skuEEE123QRBLUE;
