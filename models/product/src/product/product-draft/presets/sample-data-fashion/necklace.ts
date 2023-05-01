import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../../product-catalog-data';
import { TProductDraftBuilder } from '../../../types';

const necklace = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Necklace'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-necklace'))
    .productType(KeyReference.presets.productType().key('accessories'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant02(),
    ])
    .key('necklace')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default necklace;
