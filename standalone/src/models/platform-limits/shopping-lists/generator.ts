import { Generator } from '@/core';
import type { TShoppingListLimitsProjection } from './types';

const generator = Generator<TShoppingListLimitsProjection>({
  fields: {
    total: null,
    lineItems: null,
    textLineItems: null,
  },
});

export default generator;
