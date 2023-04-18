import { CartDiscountShippingCostTargetDraft } from '@commercetools-test-data/cart-discount-target';
import { CartDiscountValueRelativeDraft } from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const freeShipping = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .cartPredicate('1 = 1')
    .target(CartDiscountShippingCostTargetDraft.random())
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Free Shipping when you spend 100EUR')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Free shipping when your order is at least 100 EUR')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.222')
    .key('FreeShip100');

export default freeShipping;
