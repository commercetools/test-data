import { Generator } from '@commercetools-test-data/core';
import type { TTaxCategoryLimitsProjection } from './types';

const generator = Generator<TTaxCategoryLimitsProjection>({
  fields: {
    total: null,
  },
});

export default generator;
