import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
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
  .topsKids()
  .build<TCategoryDraft>();

const anniversaryShirt = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(
      LocalizedStringDraft.presets.empty()['en-US']('Sample Anniversary Shirt')
    )
    .slug(
      LocalizedStringDraft.presets.empty()['en-US']('sample-anniversary-shirt')
    )
    .productType(
      KeyReferenceDraft.presets.productType().key(shirtProductTypeDraft.key!)
    )
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant03(),
    ])
    .key('anniversary_shirt')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default anniversaryShirt;
