import { CategoryDraft, TCategoryDraft } from '../../../../../category';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  CartDiscountLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

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
      LocalizedStringDraft.presets
        .empty()
        ['en-US']("15% off all regular priced Women's wear")
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']("Take 15% off any full priced item from our Women's category")
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.3445')
    .key('15pctOffWomensRegPrice');

export default percentOffWomensWear;
