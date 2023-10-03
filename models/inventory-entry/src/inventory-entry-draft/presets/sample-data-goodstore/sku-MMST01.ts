import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const minimalistModernSideTable01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .minimalistModernSideTable01()
    .build<TProductVariantDraft>();

const skuMMST01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(minimalistModernSideTable01Preset.sku!)
    .quantityOnStock(72);

export default skuMMST01;
