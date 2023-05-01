import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const toteBag = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Tote Bag'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-tote-bag'))
    .productType(KeyReference.presets.productType().key('accessories'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.toteBagVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.toteBagVariant02(),
    ])
    .key('tote_bag')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default toteBag;
