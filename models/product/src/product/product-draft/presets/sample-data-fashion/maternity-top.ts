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

const shirtProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const maternityTop = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Maternity Top'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-maternity-top'))
    .productType(
      KeyReference.presets.productType().key(shirtProductTypeDraft.key!)
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
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default maternityTop;
