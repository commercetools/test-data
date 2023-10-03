import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const chiantiWineGlass01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .chiantiWineGlass01()
  .build<TProductVariantDraft>();

const skuCWG01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(chiantiWineGlass01Preset.sku!)
    .quantityOnStock(99);

export default skuCWG01;
