import { Generator } from '@/core';
import { TCustomerLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TCustomerLimitsProjection>({
  fields: {
    maxGroupsPerCustomer: null,
    total: null,
  },
});

export default generator;
