import { CartDiscountValueRelativeDraft } from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const freeShipping = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueRelativeDraft.random().type('relative').permyriad(10000)
    )
    .cartPredicate('1 = 1')
    // TODO: create `target` model
    .target(undefined)
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
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.222')
    .key('FreeShip100');

export default freeShipping;
