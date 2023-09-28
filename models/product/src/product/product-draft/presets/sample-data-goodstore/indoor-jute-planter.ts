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

const indoorJutePlanterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
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
        ['de-DE']('Indoor Jute Blumentopf ')
        ['en-US']('Indoor Jute Planter')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('indoor-jute-planter')
        ['de-DE']('indoor-jute-planter')
        ['en-US']('indoor-jute-planter')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(indoorJutePlanterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.indoorJutePlanter01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.indoorJutePlanter02(),
    ])
    .categories([
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default indoorJutePlanter;
