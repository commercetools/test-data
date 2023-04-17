import { CartDiscountValueFixedDraft } from '@commercetools-test-data/cart-discount-value-fixed';
import { CentPrecisionMoneyDraft } from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const skinnyFixed = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueFixedDraft.random().money(
        CentPrecisionMoneyDraft.random()
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
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.6')
    .key('SkinnyFixed25');

export default skinnyFixed;
