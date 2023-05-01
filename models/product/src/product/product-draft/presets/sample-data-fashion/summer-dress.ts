import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductTypeDraft } from '@commercetools-test-data/product-type';
import type { TProductTypeDraft } from '@commercetools-test-data/product-type';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import { TaxCategoryDraft } from '@commercetools-test-data/tax-category';
import type { TTaxCategoryDraft } from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const dressesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .dresses()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const summerDress = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Summer Dress'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-summer-dress'))
    .productType(
      KeyReference.presets.productType().key(dressesProductTypeDraft.key!)
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
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default summerDress;
