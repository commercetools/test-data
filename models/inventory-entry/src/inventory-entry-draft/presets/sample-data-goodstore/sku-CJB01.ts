import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cubeJuteBasket01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .cubeJuteBasket01()
  .build<TProductVariantDraft>();

const skuCJB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cubeJuteBasket01Preset.sku!)
    .quantityOnStock(96);

export default skuCJB01;
