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

const cottonSilkBedsheetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const cottonSilkBedsheet = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cotton-silk-bedsheet')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cotton Silk Bedsheet')
        ['de-DE']('Bettwäsche aus Baumwollseide')
        ['en-US']('Cotton Silk Bedsheet')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cotton-silk-bedsheet')
        ['de-DE']('bettwsche-aus-baumwollseide')
        ['en-US']('cotton-silk-bedsheet')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cottonSilkBedsheetProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default cottonSilkBedsheet;
