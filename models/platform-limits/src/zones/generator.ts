import { Generator } from '@commercetools-test-data/core';
import type { TZoneLimitsProjection } from './types';
/**
 * total - reference to LimitWithCurrent
 */
const generator = Generator<TZoneLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
