import { fake, Generator } from '../../../../core';
import { Reference } from '../../../commons';
import { TCartDiscountValueGiftLineItemDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluegiftlineitemdraft

const generator = Generator<TCartDiscountValueGiftLineItemDraft>({
  fields: {
    type: 'giftLineItem',
    product: fake(() => Reference.random().typeId('product')),
    variantId: fake((f) => f.number.int()),
    supplyChannel: fake(() => Reference.random().typeId('channel')),
    distributionChannel: fake(() => Reference.random().typeId('channel')),
  },
});

export default generator;
