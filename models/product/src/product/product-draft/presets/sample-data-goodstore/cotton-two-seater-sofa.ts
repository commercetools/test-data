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

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const cottonTwoSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodstore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const cottonTwoSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cotton-two-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cotton Two-Seater Sofa')
        ['de-DE']('Zweisitzer-Sofa aus Baumwolle')
        ['en-US']('Cotton Two-Seater Sofa')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cotton-two-seater-sofa')
        ['de-DE']('zweisitzer-sofa-aus-baumwolle')
        ['en-US']('cotton-two-seater-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cottonTwoSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.cottonTwoSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default cottonTwoSeaterSofa;
