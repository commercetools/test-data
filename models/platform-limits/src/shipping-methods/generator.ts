import { Generator } from '@commercetools-test-data/core';
import { TShippingMethodLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TShippingMethodLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
