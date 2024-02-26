import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ss123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .ss123Qr01()
  .build<TProductVariantDraft>();

const skuSS123QRRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ss123Qr01.sku!).quantityOnStock(1000);

export default skuSS123QRRED;
