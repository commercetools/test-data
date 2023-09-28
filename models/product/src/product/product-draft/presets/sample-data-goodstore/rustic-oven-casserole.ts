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

const rusticOvenCasseroleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rusticOvenCasserole = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-oven-casserole')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Rustic Oven Casserole')
        ['en-GB']('Rustic Oven Casserole')
        ['de-DE']('Rustikaler Ofentopf')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('rustic-oven-casserole')
        ['en-GB']('rustic-oven-casserole')
        ['de-DE']('rustikaler-ofentopf')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(rusticOvenCasseroleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rusticOvenCasserole01()
    )
    .categories([]);

export default rusticOvenCasserole;
