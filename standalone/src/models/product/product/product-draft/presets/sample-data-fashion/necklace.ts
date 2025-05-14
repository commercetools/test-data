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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const accessoriesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .accessories()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .otherWomen()
  .build<TCategoryDraft>();

const necklace = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Necklace'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('sample-necklace'))
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(accessoriesProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant02(),
    ])
    .key('necklace')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default necklace;
