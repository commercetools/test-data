import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const halloweenTop = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Halloween Top'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-halloween-top'))
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
