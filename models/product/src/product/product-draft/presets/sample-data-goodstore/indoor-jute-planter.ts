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

const indoorJutePlanterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeAccents()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const indoorJutePlanter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('indoor-jute-planter')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Indoor Jute Planter')
        ['de-DE']('Indoor Blumentopf aus Jute')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('indoor-jute-planter')
        ['de-DE']('indoor-jute-planter')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(indoorJutePlanterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.indoorJutePlanterVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.indoorJutePlanterVariant01(),
    ])
    .categories([
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default indoorJutePlanter;
