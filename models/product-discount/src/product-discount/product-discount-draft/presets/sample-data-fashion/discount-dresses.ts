import { CentPrecisionMoneyDraft } from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductDiscountDraft from '../..';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';

const discountDresses = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueAbsoluteDraft.random().money(
        CentPrecisionMoneyDraft.random()
          .currencyCode('EUR')
          .centAmount(500)
          .fractionDigits(2)
      )
    )
    // TODO: integrate product type keys
    .predicate('productType.key = "dresses"')
    .name(LocalizedString.presets.empty()['en-US']('5 EUR Off All Dresses'))
    .description(
      LocalizedString.presets.empty()['en-US']('5 EUR Off All Dresses')
    )
    .isActive(true)
    .sortOrder('0.7')
    .key('Dresses5EUROff');

export default discountDresses;
