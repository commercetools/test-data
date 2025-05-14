import { Generator } from '@/core';
import type { TCartDiscountShippingCostTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountshippingcosttarget

const generator = Generator<TCartDiscountShippingCostTargetDraft>({
  fields: {
    type: 'shipping',
  },
});

export default generator;
