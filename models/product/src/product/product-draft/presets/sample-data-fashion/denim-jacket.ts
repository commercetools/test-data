import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../../product-catalog-data';
import { TProductDraftBuilder } from '../../../types';

const denimJacket = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Denim Jacket'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-denim-jacket'))
    .productType(KeyReference.presets.productType().key('jackets'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.denimJacketVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.denimJacketVariant02(),
    ])
    .key('denim_jacket')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default denimJacket;
