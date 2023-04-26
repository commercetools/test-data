import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const anniversaryShirt = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Anniversary Shirt'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-anniversary-shirt'))
    .productType(KeyReference.presets.productType().key('shirts'))
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.anniversaryShirtVariant03(),
    ])
    .key('anniversary_shirt')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default anniversaryShirt;
