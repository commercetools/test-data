import * as CartDiscountValueGiftLineItem from '@commercetools-test-data/cart-discount-value-gift-line-item';
import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const summerFlips = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueGiftLineItem.random()
        .type('giftLineItem')
        .product(Reference.random().typeId('product').key('summer_dress'))
    )
    .cartPredicate('lineItemExists(product.key = "summer_dress") = true')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'Summer special - get a free pair of flip flops with the Summer Dress'
        )
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Purchase the Summer Dress and get a free pair of flip flops')
    )
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.888')
    .key('GWPSummerFlips');

export default summerFlips;
