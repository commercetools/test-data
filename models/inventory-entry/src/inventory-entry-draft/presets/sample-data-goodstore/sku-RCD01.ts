import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rusticCountryDresser01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .rusticCountryDresser01()
    .build<TProductVariantDraft>();

const skuRCD01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rusticCountryDresser01Preset.sku!)
    .quantityOnStock(98);

export default skuRCD01;
