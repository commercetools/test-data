import { Generator } from '@commercetools-test-data/core';
import { TProductDiscountLimitsProjection } from './types';

const generator = Generator<TProductDiscountLimitsProjection>({
  fields: {
    totalActive: null,
  },
});

export default generator;
