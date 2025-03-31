import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/index';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const dressesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .dresses()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .otherWomen()
  .build<TCategoryDraft>();

const promDress = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Prom Dress'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('sample-prom-dress'))
    .productType(
      KeyReferenceDraft.presets.productType().key(dressesProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.promDressVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.promDressVariant02(),
    ])
    .key('prom_dress')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default promDress;
