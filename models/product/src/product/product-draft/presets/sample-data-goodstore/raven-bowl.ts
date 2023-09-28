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

const ravenBowlProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataGoodStore
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const ravenBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('raven-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Raven Bowl')
        ['en-GB']('Raven Bowl')
        ['de-DE']('Suppenschüssel >Raven<')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('raven-bowl')
        ['en-GB']('raven-bowl')
        ['de-DE']('rabenschssel')
    )
    .productType(
      KeyReference.presets.productType().key(ravenBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.ravenBowl01()
    )
    .categories([
      KeyReference.presets.category().key(bowlsDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default ravenBowl;
