import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const doubleWalledEspressoGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const doubleWalledEspressoGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('double-walled-espresso-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Double-walled Espresso Glass')
        ['en-GB']('Double-walled Espresso Glass')
        ['de-DE']('Doppelwandiges Espressoglas')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('double-walled-espresso-glass')
        ['en-GB']('double-walled-espresso-glass')
        ['de-DE']('doppelwandiges-espressoglas')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(doubleWalledEspressoGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.doubleWalledEspressoGlass01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default doubleWalledEspressoGlass;
