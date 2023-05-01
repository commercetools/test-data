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

const jacketsProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .jackets()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const sportCoat = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Sport Coat'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-sport-coat'))
    .productType(
      KeyReference.presets.productType().key(jacketsProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.sportCoatVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.sportCoatVariant02(),
    ])
    .key('sport_coat')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default sportCoat;
