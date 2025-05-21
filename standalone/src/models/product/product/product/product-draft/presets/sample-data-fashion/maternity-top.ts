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

const shirtProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .topsWomen()
  .build<TCategoryDraft>();

const maternityTop = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Maternity Top'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('sample-maternity-top'))
    .productType(
      KeyReferenceDraft.presets.productType().key(shirtProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant03(),
    ])
    .key('maternity_top')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default maternityTop;
