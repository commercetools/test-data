import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rusticCountryQueenBed01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .rusticCountryQueenBed01()
    .build<TProductVariantDraft>();

const skuRCQB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rusticCountryQueenBed01Preset.sku!)
    .quantityOnStock(76);

export default skuRCQB01;
