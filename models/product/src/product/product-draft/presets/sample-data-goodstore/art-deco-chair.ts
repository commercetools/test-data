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

const artDecoChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const artDecoChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('art-deco-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Art Deco Chair')
        ['en-GB']('Art Deco Chair')
        ['de-DE']('Art-Deco-Sessel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('art-deco-chair')
        ['en-GB']('art-deco-chair')
        ['de-DE']('art-deco-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(artDecoChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.artDecoChair01()
    )
    .categories([
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default artDecoChair;
