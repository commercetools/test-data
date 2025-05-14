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

const shirtProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .topsKids()
  .build<TCategoryDraft>();

const anniversaryShirt = (): TBuilder<TProductDraft> =>
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
