import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const accessoriesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .accessories()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .otherKids()
  .build<TCategoryDraft>();

const sandals = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Sandals'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('sample-sandals'))
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(accessoriesProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.sandalsVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.sandalsVariant02(),
    ])
    .key('sandals')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default sandals;
