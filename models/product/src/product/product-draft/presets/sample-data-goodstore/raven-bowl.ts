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
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const euTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EUTaxCategory()
  .build<TTaxCategoryDraft>();

const ravenBowlProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataGoodstore
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
  .newArrivals()
  .build<TCategoryDraft>();

const ravenBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('raven-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Raven Bowl')
        ['de-DE']('Rabenschüssel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('raven-bowl')
        ['de-DE']('rabenschssel')
    )
    .productType(
      KeyReference.presets.productType().key(ravenBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(euTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.ravenBowl01()
    )
    .categories([
      KeyReference.presets.category().key(bowlsDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default ravenBowl;
