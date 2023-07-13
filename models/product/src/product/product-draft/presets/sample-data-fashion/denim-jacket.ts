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

const jacketsProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .jackets()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .topsMen()
  .build<TCategoryDraft>();

const denimJacket = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Denim Jacket'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-denim-jacket'))
    .productType(
      KeyReference.presets.productType().key(jacketsProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.denimJacketVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.denimJacketVariant02(),
    ])
    .key('denim_jacket')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReference.presets.category().key(categoryDraft.key!)]);

export default denimJacket;
