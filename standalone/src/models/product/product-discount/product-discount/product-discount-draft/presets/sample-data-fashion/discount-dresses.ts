import { LocalizedStringDraft, MoneyDraft } from '@/models/commons';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const discountDresses = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueAbsoluteDraft.random().money([
        MoneyDraft.random().currencyCode('EUR').centAmount(500),
      ])
    )
    // TODO: integrate product type keys
    .predicate('productType.key = "dresses"')
    .name(
      LocalizedStringDraft.presets.empty()['en-US']('5 EUR Off All Dresses')
    )
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('5 EUR Off All Dresses')
    )
    .isActive(true)
    .sortOrder('0.7')
    .key('Dresses5EUROff');

export default discountDresses;
