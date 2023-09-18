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

const modernLandscapePaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const modernLandscapePainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-landscape-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Landscape Painting')
        ['de-DE']('Moderne Landschaftsmalerei')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-landscape-painting')
        ['de-DE']('moderne-landschaftsmalerei')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernLandscapePaintingProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.modernLandscapePainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default modernLandscapePainting;
