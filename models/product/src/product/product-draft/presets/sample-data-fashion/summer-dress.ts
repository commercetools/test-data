import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const summerDress = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Summer Dress'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-summer-dress'))
    .productType(KeyReference.presets.productType().key('dress'))
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant02(),
    ])
    .key('summer_dress')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default summerDress;
