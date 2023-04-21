import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductDiscountDraft from '../..';
import * as ProductDiscountValueRelative from '../../../../product-discount-value-relative';
import type { TProductDiscountDraftBuilder } from '../../../types';

const discountPants = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueRelative.ProductDiscountValueRelativeDraft.random().permyriad(
        1000
      )
    )
    // TODO: integrate product type keys
    .predicate('productType.key = "pants"')
    .name(LocalizedString.presets.empty()['en-US']('10% Off All Pants'))
    .description(LocalizedString.presets.empty()['en-US']('10% Off All Pants'))
    .isActive(true)
    .sortOrder('0.4')
    .key('10pctOffAllPants');

export default discountPants;
