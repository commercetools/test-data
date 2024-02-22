import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aa123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .aa123Qr03()
  .build<TProductVariantDraft>();

const skuAA123QR2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(aa123Qr03.sku!).quantityOnStock(1000);

export default skuAA123QR2023;
