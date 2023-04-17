import * as CartDiscountValueFixed from '@commercetools-test-data/cart-discount-value-fixed';
import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const skinnyFixed = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueFixed.CartDiscountValueFixedDraft.random()
        .type('fixed')
        .money(
          CentPrecisionMoney.random()
            .currencyCode('EUR')
            .centAmount(2500)
            .fractionDigits(2)
        )
    )
    .cartPredicate('1 = 1')
    // TODO: create `target` model
    .target(undefined)
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Save on Skinny Jeans - 25 EUR per pair')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Save on Skinny Jeans at 25EUR per pair')
    )
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.6')
    .key('SkinnyFixed25');

export default skinnyFixed;
