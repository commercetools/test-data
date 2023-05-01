import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../../product-catalog-data';
import { TProductDraftBuilder } from '../../../types';

const flairJeans = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Flair Jeans'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-flair-jeans'))
    .productType(KeyReference.presets.productType().key('pants'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.flairJeansVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.flairJeansVariant02(),
    ])
    .key('flair_jeans')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default flairJeans;
