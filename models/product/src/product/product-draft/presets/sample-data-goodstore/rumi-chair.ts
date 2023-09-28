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

const rumiChairProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
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

const rumiChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rumi-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Rumi Chair')
        ['en-GB']('Rumi Chair')
        ['de-DE']('Stuhl >Rumi<')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('rumi-chair')
        ['en-GB']('rumi-chair')
        ['de-DE']('rumi-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(rumiChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rumiChair01()
    )
    .categories([
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default rumiChair;
