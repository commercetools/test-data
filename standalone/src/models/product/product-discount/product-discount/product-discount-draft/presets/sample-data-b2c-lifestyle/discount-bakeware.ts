import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { LocalizedStringDraft, MoneyDraft } from '@/models/commons';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const categoryTypeDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bakeware()
  .build<TCategoryDraft>();

const discountBakeware = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueAbsoluteDraft.random().money([
        MoneyDraft.random().currencyCode('EUR').centAmount(500),
      ])
    )
    .predicate(`categories.key contains "${categoryTypeDraft.key}"`)
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('5 EUR Off All Bakeware Items')
        ['en-GB']('5 EUR Off All Bakeware Items')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('5 EUR Off All Bakeware Items')
        ['en-GB']('5 EUR Off All Bakeware Items')
    )
    .isActive(true)
    .sortOrder('0.5')
    .key('Bakeware5EUROff');

export default discountBakeware;
