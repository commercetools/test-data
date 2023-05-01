import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const sandals = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Sandals'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-sandals'))
    .productType(KeyReference.presets.productType().key('accessories'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.sandalsVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.sandalsVariant02(),
    ])
    .key('sandals')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default sandals;
