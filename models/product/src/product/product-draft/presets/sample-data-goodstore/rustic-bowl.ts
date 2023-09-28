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

const rusticBowlProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rusticBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rustic Bowl')
        ['de-DE']('Rustikale Schale')
        ['en-US']('Rustic Bowl')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rustic-bowl')
        ['de-DE']('rustikale-schale')
        ['en-US']('rustic-bowl')
    )
    .productType(
      KeyReference.presets.productType().key(rusticBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rusticBowl01()
    )
    .categories([]);

export default rusticBowl;
