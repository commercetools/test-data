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

const indoorJutePlanterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
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
        ['de-DE']('Indoor Jute Planter')
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
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.indoorJutePlanter01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.indoorJutePlanter01(),
    ])
    .categories([
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default indoorJutePlanter;
