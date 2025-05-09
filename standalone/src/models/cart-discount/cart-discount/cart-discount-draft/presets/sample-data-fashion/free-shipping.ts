import { LocalizedStringDraft } from '../../../../../commons';
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
    .cartPredicate('totalPrice >= "100 EUR"')
    .target(CartDiscountShippingCostTargetDraft.random())
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Free Shipping when you spend 100EUR')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Free shipping when your order is at least 100 EUR')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.222')
    .key('FreeShip100');

export default freeShipping;
