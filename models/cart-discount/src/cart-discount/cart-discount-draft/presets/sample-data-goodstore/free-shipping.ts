import { LocalizedString } from '@commercetools-test-data/commons';
import {
  CartDiscountShippingCostTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const freeShipping = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .cartPredicate('totalPrice >= "100 GBP"')
    .target(CartDiscountShippingCostTargetDraft.random())
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Free Shipping when you spend 100 GBP')
        ['en-GB']('Free Shipping when you spend 100 GBP')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Free shipping when your order is at least 100 GBP')
        ['en-GB']('Free shipping when your order is at least 100 GBP')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(false)
    .requiresDiscountCode(false)
    .sortOrder('0.22')
    .key('FreeShip100');

export default freeShipping;
