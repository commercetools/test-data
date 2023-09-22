import { LocalizedString, Money } from '@commercetools-test-data/commons';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const discountBakeware = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueAbsoluteDraft.random().money([
        Money.random().currencyCode('EUR').centAmount(500),
      ])
    )
    // TODO: integrate product type keys
    .predicate('categories.key contains "bakeware"')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('5 EUR Off All Bakeware Items')
        ['en-GB']('5 EUR Off All Bakeware Items')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('5 EUR Off All Bakeware Items')
        ['en-GB']('5 EUR Off All Bakeware Items')
    )
    .isActive(true)
    .sortOrder('0.5')
    .key('Bakeware5EUROff');

export default discountBakeware;
