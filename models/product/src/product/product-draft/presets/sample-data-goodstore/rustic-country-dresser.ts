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

const rusticCountryDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodstore
  .storageTables()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const rusticCountryDresser = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-country-dresser')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rustic Country Dresser')
        ['de-DE']('Rustikale Landhauskommode')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rustic-country-dresser')
        ['de-DE']('rustikale-landhauskommode')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(rusticCountryDresserProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(euTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.rusticCountryDresser01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
    ]);

export default rusticCountryDresser;
