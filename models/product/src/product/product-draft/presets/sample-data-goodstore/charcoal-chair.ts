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
import { ProductVariantDraft } from '../../../../product-variant/index';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const EU2TaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EU2TaxCategory()
  .build<TTaxCategoryDraft>();

const charcoalChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodstore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const charcoalChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('charcoal-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Charcoal Chair')
        ['de-DE']('Holzkohle-Stuhl')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('charcoal-chair')
        ['de-DE']('holzkohle-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(charcoalChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.charcoalChairVariant01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default charcoalChair;
