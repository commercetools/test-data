import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ss123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .ss123Qr03()
  .build<TProductVariantDraft>();

const skuSS123QRGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ss123Qr03.sku!).quantityOnStock(1000);

export default skuSS123QRGREEN;
