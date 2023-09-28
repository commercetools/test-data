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

const canelaThreeSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodStore
  .sofas()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const canelaThreeSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('canela-three-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Canela Three-Seater Sofa')
        ['en-GB']('Canela Three-Seater Sofa')
        ['de-DE']('Canela 3-Sitzer-Sofa')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('canela-three-seater-sofa')
        ['en-GB']('canela-three-seater-sofa')
        ['de-DE']('canela-3-sitzer-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(canelaThreeSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.canelaThreeSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default canelaThreeSeaterSofa;
