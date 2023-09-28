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

const cottonTwoSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodStore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const cottonTwoSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cotton-two-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Cotton Two-Seater Sofa')
        ['en-GB']('Cotton Two-Seater Sofa')
        ['de-DE']('Zweisitzer-Sofa aus Baumwolle')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('cotton-two-seater-sofa')
        ['en-GB']('cotton-two-seater-sofa')
        ['de-DE']('zweisitzer-sofa-aus-baumwolle')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cottonTwoSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cottonTwoSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default cottonTwoSeaterSofa;
