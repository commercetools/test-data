import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import {
  CartDiscountLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .bottomsWomen()
  .build<TCategoryDraft>();

const percentOffWomensWear = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(1500))
    .cartPredicate('1 = 1')
    .target(
      CartDiscountLineItemsTargetDraft.random().predicate(
        `categories.key contains "${categoryDraft.key}" and price.discount.id is not defined`
      )
    )
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']("15% off all regular priced Women's wear")
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']("Take 15% off any full priced item from our Women's category")
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.3445')
    .key('15pctOffWomensRegPrice');

export default percentOffWomensWear;
