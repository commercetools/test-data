import { Generator } from '@commercetools-test-data/core';
import { TCartLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TCartLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
