import { LocalizedString } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const discountNewArrivals = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(ProductDiscountValueRelativeDraft.random().permyriad(1500))
    .predicate('categories.key contains "new-arrivals"')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('15% Off All New Arrivals')
        ['en-GB']('15% Off All New Arrivals')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('15% Off All New Arrivals')
        ['en-GB']('15% Off All New Arrivals')
    )
    .isActive(false)
    .sortOrder('0.67')
    .key('NewArrivals15pctOff');

export default discountNewArrivals;
