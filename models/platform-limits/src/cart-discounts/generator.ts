import { Generator } from '@commercetools-test-data/core';
import { TCartDiscountLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TCartDiscountLimitsProjection>({
  fields: {
    totalActiveWithoutDiscountCodes: null,
  },
});

export default generator;
