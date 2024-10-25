import { Generator } from '@commercetools-test-data/core';
import type { TCartDiscountTotalPriceTarget } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscounttotalpricetarget

const generator = Generator<TCartDiscountTotalPriceTarget>({
  fields: {
    type: 'totalPrice',
  },
});

export default generator;
