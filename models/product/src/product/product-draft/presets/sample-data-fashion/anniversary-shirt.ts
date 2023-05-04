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

const shirtProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const anniversaryShirt = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Anniversary Shirt'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-anniversary-shirt'))
    .productType(
      KeyReference.presets.productType().key(shirtProductTypeDraft.key!)
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
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default anniversaryShirt;
