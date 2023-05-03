import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TCartDiscountValueGiftLineItemDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluegiftlineitemdraft

const generator = Generator<TCartDiscountValueGiftLineItemDraft>({
  fields: {
    type: 'giftLineItem',
    product: fake(() => Reference.random().typeId('product')),
    variantId: fake((f) => f.datatype.number()),
    supplyChannel: fake(() => Reference.random().typeId('channel')),
    distributionChannel: fake(() => Reference.random().typeId('channel')),
  },
});

export default generator;
