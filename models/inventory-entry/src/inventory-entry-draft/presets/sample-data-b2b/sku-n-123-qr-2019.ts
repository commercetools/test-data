import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const n123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .n123Qr02()
  .build<TProductVariantDraft>();

const skuN123QR2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(n123Qr02.sku!).quantityOnStock(1000);

export default skuN123QR2019;
