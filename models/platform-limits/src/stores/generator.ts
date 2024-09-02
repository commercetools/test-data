import { Generator } from '@commercetools-test-data/core';
import type { TStoreLimitsProjection } from './types';

const generator = Generator<TStoreLimitsProjection>({
  fields: {
    total: null,
    inventorySupplyChannels: null,
    productDistributionChannels: null,
  },
});

export default generator;
