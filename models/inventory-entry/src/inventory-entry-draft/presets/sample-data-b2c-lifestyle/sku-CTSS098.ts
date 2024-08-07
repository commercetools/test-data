import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const canelaThreeSeaterSofa01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .canelaThreeSeaterSofa01()
    .build<TProductVariantDraft>();

const skuCTSS098 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(canelaThreeSeaterSofa01Preset.sku!)
    .quantityOnStock(1000);

export default skuCTSS098;
