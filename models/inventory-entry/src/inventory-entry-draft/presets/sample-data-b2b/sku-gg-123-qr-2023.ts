import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const gg123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .gg123Qr03()
  .build<TProductVariantDraft>();

const skuGG123QR2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(gg123Qr03.sku!).quantityOnStock(1000);

export default skuGG123QR2023;