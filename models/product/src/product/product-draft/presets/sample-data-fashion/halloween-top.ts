import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../../product-catalog-data';
import { TProductDraftBuilder } from '../../../types';

const halloweenTop = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Halloween Top'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-halloween-top'))
    .productType(KeyReference.presets.productType().key('shirts'))
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.halloweenTopVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.halloweenTopVariant02(),
    ])
    .key('Halloween Top')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default halloweenTop;