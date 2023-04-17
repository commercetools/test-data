import * as CartDiscountValueRelative from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const percentOffWomensWear = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelative.random().type('relative').permyriad(1500))
    .cartPredicate('1 = 1')
    // TODO: create `target` model
    .target(undefined)
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
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.3445')
    .key('15pctOffWomensRegPrice');

export default percentOffWomensWear;
