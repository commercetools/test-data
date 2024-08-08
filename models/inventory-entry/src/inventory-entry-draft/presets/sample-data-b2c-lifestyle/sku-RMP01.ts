import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const redModernPainting01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .redModernPainting01()
    .build<TProductVariantDraft>();

const skuRMP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(redModernPainting01Preset.sku!)
    .quantityOnStock(0);

export default skuRMP01;
