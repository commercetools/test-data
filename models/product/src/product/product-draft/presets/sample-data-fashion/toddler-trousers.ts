import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../../product-catalog-data';
import { TProductDraftBuilder } from '../../../types';

const ToddlerTrousers = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Toddler Trousers'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-toddler-trousers'))
    .productType(KeyReference.presets.productType().key('pants'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant03(),
    ])
    .key('toddler_trousers')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default ToddlerTrousers;