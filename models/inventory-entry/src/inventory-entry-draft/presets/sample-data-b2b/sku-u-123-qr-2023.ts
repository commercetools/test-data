import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const u123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .u123Qr03()
  .build<TProductVariantDraft>();

const skuU123QR2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(u123Qr03.sku!).quantityOnStock(1000);

export default skuU123QR2023;
