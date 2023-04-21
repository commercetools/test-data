import { Generator } from '@commercetools-test-data/core';
import { TCartDiscountShippingCostTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountshippingcosttarget

const generator = Generator<TCartDiscountShippingCostTargetDraft>({
  fields: {
    type: 'shipping',
  },
});

export default generator;
