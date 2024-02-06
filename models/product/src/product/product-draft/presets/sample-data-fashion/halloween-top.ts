import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
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

const shirtProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .topsMen()
  .build<TCategoryDraft>();

const halloweenTop = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Halloween Top'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-halloween-top'))
    .productType(
      KeyReferenceDraft.presets.productType().key(shirtProductTypeDraft.key!)
    )
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.halloweenTopVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.halloweenTopVariant02(),
    ])
    .key('Halloween Top')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default halloweenTop;
