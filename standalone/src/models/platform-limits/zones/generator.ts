import { Generator } from '@/core';
import type { TZoneLimitsProjection } from './types';

const generator = Generator<TZoneLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
