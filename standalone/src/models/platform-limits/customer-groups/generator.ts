import { Generator } from '@/core';
import { TCustomerGroupLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TCustomerGroupLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
