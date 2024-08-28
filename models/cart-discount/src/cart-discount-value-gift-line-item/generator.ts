import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TCartDiscountValueGiftLineItem } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluegiftlineitem

const generator = Generator<TCartDiscountValueGiftLineItem>({
  fields: {
    type: 'giftLineItem',
    product: fake(() => Reference.random().typeId('product')),
    variantId: fake((f) => f.number.int()),
    supplyChannel: fake(() => Reference.random().typeId('channel')),
    distributionChannel: fake(() => Reference.random().typeId('channel')),
  },
});

export default generator;
