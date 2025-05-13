import { Generator } from '@/core';
import { TShippingMethodLimitsProjection } from './types';

const generator = Generator<TShippingMethodLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
