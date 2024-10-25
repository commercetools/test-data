import { Generator } from '@commercetools-test-data/core';
import type { TCartDiscountTotalPriceTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscounttotalpricetarget

const generator = Generator<TCartDiscountTotalPriceTargetDraft>({
  fields: {
    type: 'totalPrice',
  },
});

export default generator;
