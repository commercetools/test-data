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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const canelaThreeSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodstore
  .sofas()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const canelaThreeSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('canela-three-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Canela Three-Seater Sofa')
        ['de-DE']('Canela 3-Sitzer-Sofa')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('canela-three-seater-sofa')
        ['de-DE']('canela-3-sitzer-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(canelaThreeSeaterSofaProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.canelaThreeSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default canelaThreeSeaterSofa;
