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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const rusticCountryQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodstore
  .beds()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
  .newArrivals()
  .build<TCategoryDraft>();

const rusticCountryQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-country-queen-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rustic Country Queen Bed')
        ['de-DE']('Rustikales Country-Queen-Bett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rustic-country-queen-bed')
        ['de-DE']('rustikales-country-queen-bett')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(rusticCountryQueenBedProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.rusticCountryQueenBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default rusticCountryQueenBed;
