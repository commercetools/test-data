import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const promDress = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Prom Dress'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-prom-dress'))
    .productType(KeyReference.presets.productType().key('dresses'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.promDressVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.promDressVariant02(),
    ])
    .key('prom_dress')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default promDress;
