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

const rusticCountryDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .storageTables()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const rusticCountryDresser = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-country-dresser')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Rustic Country Dresser')
        ['en-GB']('Rustic Country Dresser')
        ['de-DE']('Rustikale Landhauskommode')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('rustic-country-dresser')
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
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rusticCountryDresser01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
    ]);

export default rusticCountryDresser;
