import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TCartDiscountValueGiftLineItem } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluegiftlineitem

const generator = Generator<TCartDiscountValueGiftLineItem>({
  fields: {
    type: 'giftLineItem',
    product: fake(() => Reference.random().typeId('product')),
    variantId: fake((f) => f.number.int()),
    supplyChannelRef: fake(() => Reference.random().typeId('channel')),
    distributionChannelRef: fake(() => Reference.random().typeId('channel')),
  },
});

export default generator;
