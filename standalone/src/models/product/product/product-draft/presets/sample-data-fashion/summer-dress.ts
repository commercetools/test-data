import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
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

const summerDress = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Summer Dress'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('sample-summer-dress'))
    .productType(
      KeyReferenceDraft.presets.productType().key(dressesProductTypeDraft.key!)
    )
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant02(),
    ])
    .key('summer_dress')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default summerDress;
