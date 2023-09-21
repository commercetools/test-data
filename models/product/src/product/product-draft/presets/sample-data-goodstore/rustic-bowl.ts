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

const rusticBowlProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rustic-bowl')
        ['de-DE']('rustikale-schale')
    )
    .productType(
      KeyReference.presets.productType().key(rusticBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.rusticBowl01()
    )
    .categories([]);

export default rusticBowl;
