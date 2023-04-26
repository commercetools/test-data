import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const skinnyJeans = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Skinny Jeans'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-skinny-jeans'))
    .productType(KeyReference.presets.productType().key('pants'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.skinnyJeansVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.skinnyJeansVariant02(),
    ])
    .key('skinny_jeans')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default skinnyJeans;
