import { Generator } from '@commercetools-test-data/core';
import { TCartDiscountShippingCostTarget } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountshippingcosttarget

const generator = Generator<TCartDiscountShippingCostTarget>({
  fields: {
    type: 'shipping',
  },
});

export default generator;
