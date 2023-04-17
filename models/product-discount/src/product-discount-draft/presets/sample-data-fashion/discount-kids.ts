import { LocalizedString } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '@commercetools-test-data/product-discount-value-relative';
import * as ProductDiscountDraft from '../..';
import { TProductDiscountDraftBuilder } from '../../../types';

const discountKids = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueRelativeDraft.random()
        .type('relative')
        .permyriad(2000)
    )
    // TODO: integrate product type keys
    .predicate('categories.key contains "kids"')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Back to School - 20% off all items in our Kids category')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Enjoy 20% off all items in our Kids selection')
    )
    .isActive(true)
    .sortOrder('0.66678')
    .key('Kids20pctOff');

export default discountKids;
