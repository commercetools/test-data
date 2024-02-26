import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const yy123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr03()
  .build<TProductVariantDraft>();

const skuYY123QRGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(yy123Qr03.sku!).quantityOnStock(1000);

export default skuYY123QRGREEN;
