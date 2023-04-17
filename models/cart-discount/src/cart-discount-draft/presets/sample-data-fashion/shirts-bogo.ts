import * as CartDiscountValueRelative from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const shirtsBogo = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueRelative.CartDiscountValueRelativeDraft.random()
        .type('relative')
        .permyriad(1000)
    )
    .cartPredicate('1 = 1')
    // TODO: create `target` model
    .target(undefined)
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Buy One Shirt and Get Second Free')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Two for one on all Shirts (discount on the cheapest item)')
    )
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.2')
    .key('ShirtsBOGO');

export default shirtsBogo;
