import { CentPrecisionMoneyDraft } from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import {
  CartDiscountLineItemsTargetDraft,
  CartDiscountValueFixedDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

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
    .target(
      // TODO: update with product preset key
      CartDiscountLineItemsTargetDraft.random().predicate(
        `product.key = "skinny_jeans"`
      )
    )
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
