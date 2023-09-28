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

const purpleLandscapePaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const purpleLandscapePainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('purple-landscape-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Purple Landscape Painting')
        ['en-GB']('Purple Landscape Painting')
        ['de-DE']('Lila Landschaftsmalerei')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('purple-landscape-painting')
        ['en-GB']('purple-landscape-painting')
        ['de-DE']('lila-landschaftsmalerei')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(purpleLandscapePaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.purpleLandscapePainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleLandscapePainting;
