import { Generator } from '../../../core';
import { TCustomerLimitsProjection } from './types';

/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TCustomerLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
