import { LocalizedString } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const discountKids = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(ProductDiscountValueRelativeDraft.random().permyriad(2000))
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
