import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { CartDiscountValueGiftLineItemDraft } from '../../../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const summerFlips = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueGiftLineItemDraft.presets
        .empty()
        // TODO: update with product preset key
        .product(KeyReference.random().typeId('product').key('summer_dress'))
        .variantId(1)
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
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.888')
    .key('GWPSummerFlips');

export default summerFlips;
