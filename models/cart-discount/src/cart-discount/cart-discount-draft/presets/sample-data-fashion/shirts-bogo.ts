import { CartDiscountValueRelativeDraft } from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import {
  CartDiscountMultiBuyLineItemsTargetDraft,
  selectionMode,
} from '../../../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const shirtsBogo = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .cartPredicate('1 = 1')
    .target(
      CartDiscountMultiBuyLineItemsTargetDraft.random()
        .predicate('productType.key = "shirts"')
        .triggerQuantity(2)
        .discountedQuantity(1)
        .selectionMode(selectionMode.Cheapest)
        .maxOccurrence(undefined)
    )
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Buy One Shirt and Get Second Free')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Two for one on all Shirts (discount on the cheapest item)')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.2')
    .key('ShirtsBOGO');

export default shirtsBogo;
