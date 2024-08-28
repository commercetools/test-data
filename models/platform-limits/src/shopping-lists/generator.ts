import { Generator } from '@commercetools-test-data/core';
import type { TShoppingListLimitsProjection } from './types';
/**
 * total - reference to LimitWithCurrent
 * lineItems - reference to Limit
 * textLineItems - reference to Limit
 */
const generator = Generator<TShoppingListLimitsProjection>({
  fields: {
    total: null,
    lineItems: null,
    textLineItems: null,
  },
});

export default generator;
