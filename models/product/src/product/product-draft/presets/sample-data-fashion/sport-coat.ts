import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const sportCoat = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Sport Coat'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-sport-coat'))
    .productType(KeyReference.presets.productType().key('jackets'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.sportCoatVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.sportCoatVariant02(),
    ])
    .key('sport_coat')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default sportCoat;
