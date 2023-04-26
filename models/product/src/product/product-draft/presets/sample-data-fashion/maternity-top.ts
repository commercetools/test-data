import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const maternityTop = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-us']('Sample Maternity Top'))
    .slug(LocalizedString.presets.empty()['en-us']('sample-maternity-top'))
    .productType(KeyReference.presets.productType().key('shirts'))
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.maternityTopVariant03(),
    ])
    .key('maternity_top')
    .taxCategory(KeyReference.presets.taxCategory().key('standard-tax'));

export default maternityTop;
