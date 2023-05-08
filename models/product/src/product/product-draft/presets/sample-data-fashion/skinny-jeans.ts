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

const pantsProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .pants()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const skinnyJeans = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Skinny Jeans'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-skinny-jeans'))
    .productType(
      KeyReference.presets.productType().key(pantsProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.skinnyJeansVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.skinnyJeansVariant02(),
    ])
    .key('skinny_jeans')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default skinnyJeans;
