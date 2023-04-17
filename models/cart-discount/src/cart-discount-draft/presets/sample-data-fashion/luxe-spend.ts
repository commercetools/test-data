import { CartDiscountValueAbsoluteDraft } from '@commercetools-test-data/cart-discount-value-absolute';
import { CentPrecisionMoneyDraft } from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const luxeSpend = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueAbsoluteDraft.random()
        .type('absolute')
        .money(
          CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(3000)
            .fractionDigits(2)
        )
    )
    .cartPredicate(
      'totalPrice = "500.00 EUR" and customer.customerGroup.key = "luxe"'
    )
    // TODO: create `target` model
    .target(undefined)
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Luxe customers! Spend 500EUR and Save 30EUR')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Luxe customers - Get 30 EUR back when you spend 500EUR')
    )
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.876899')
    .key('LuxeSpend500Save30');

export default luxeSpend;
