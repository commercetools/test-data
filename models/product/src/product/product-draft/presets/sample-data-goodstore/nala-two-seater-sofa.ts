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

const nalaTwoSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodStore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theTraditionalist()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const nalaTwoSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('nala-two-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Nala Two-Seater Sofa')
        ['de-DE']('Nala Zweisitzer-Sofa')
        ['en-US']('Nala Two-Seater Sofa')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('nala-two-seater-sofa')
        ['de-DE']('nala-zweisitzer-sofa')
        ['en-US']('nala-two-seater-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(nalaTwoSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa02(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa03(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa04(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa05(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa06(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa07(),
    ])
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(theTraditionalistDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
    ]);

export default nalaTwoSeaterSofa;
