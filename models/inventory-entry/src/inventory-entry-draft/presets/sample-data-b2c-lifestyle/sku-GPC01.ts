import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const geometricPillowCase01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .geometricPillowCase01()
    .build<TProductVariantDraft>();

const skuGPC01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(geometricPillowCase01Preset.sku!)
    .quantityOnStock(81);

export default skuGPC01;
