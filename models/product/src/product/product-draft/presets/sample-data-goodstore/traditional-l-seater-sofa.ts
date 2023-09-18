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

const traditionalLSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodstore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataGoodstore
  .theTraditionalist()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodstore
  .collections()
  .build<TCategoryDraft>();

const traditionalLSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('traditional-l-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Traditional L Seater Sofa')
        ['de-DE']('Traditionelles L-Sitzer-Sofa')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('traditional-l-seater-sofa')
        ['de-DE']('traditionelles-l-sitzer-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(traditionalLSeaterSofaProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.traditionalLSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(theTraditionalistDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
    ]);

export default traditionalLSeaterSofa;
