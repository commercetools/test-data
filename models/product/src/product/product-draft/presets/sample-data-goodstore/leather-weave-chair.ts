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

const euTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EUTaxCategory()
  .build<TTaxCategoryDraft>();

const leatherWeaveChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
  .newArrivals()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodstore
  .armchairs()
  .build<TCategoryDraft>();

const leatherWeaveChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('leather-weave-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Leather Weave Chair')
        ['de-DE']('Stuhl aus Ledergeflecht')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('leather-weave-chair')
        ['de-DE']('stuhl-aus-ledergeflecht')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(leatherWeaveChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(euTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.leatherWeaveChair01()
    )
    .categories([
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
    ]);

export default leatherWeaveChair;
